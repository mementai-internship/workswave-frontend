import { useCallback, useState } from 'react';
import { DragStart, DragUpdate, DropResult } from 'react-beautiful-dnd';
import { UseFormSetValue } from 'react-hook-form';

import { ILeavePolicy } from '@/models/leave-policies.model';

export const useDayOffDrag = (
  initialItems: Omit<ILeavePolicy, 'auto_approval_policies'>,
  setValue: UseFormSetValue<ILeavePolicy>
) => {
  const [openCategories, setOpenCategories] = useState<string[]>(Object.keys(initialItems));

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) return { items: initialItems, hasChanged: false };

      if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return { items: initialItems, hasChanged: false };
      }

      const newItems = { ...initialItems };

      const sourceCategory = source.droppableId as keyof ILeavePolicy;
      const destCategory = destination.droppableId as keyof ILeavePolicy;

      if (sourceCategory === destCategory) {
        // 같은 카테고리 내에서의 이동
        const partIds = [...newItems[sourceCategory].part_ids];
        const [movedItem] = partIds.splice(source.index, 1);
        movedItem.isGhosting = false;
        partIds.splice(destination.index, 0, movedItem);
        newItems[sourceCategory] = {
          ...newItems[sourceCategory],
          part_ids: partIds,
        };
        setValue(sourceCategory, newItems[sourceCategory]);
      } else {
        // 다른 카테고리 간의 이동
        const sourcePartIds = [...newItems[sourceCategory].part_ids];
        const destPartIds = [...newItems[destCategory].part_ids];

        const [movedItem] = sourcePartIds.splice(source.index, 1);
        destPartIds.splice(destination.index, 0, movedItem);
        movedItem.isGhosting = false;
        newItems[sourceCategory] = {
          ...newItems[sourceCategory],
          part_ids: sourcePartIds,
        };
        newItems[destCategory] = {
          ...newItems[destCategory],
          part_ids: destPartIds,
        };
        Object.keys(newItems).forEach((category) => {
          setValue(category as keyof ILeavePolicy, newItems[category as keyof ILeavePolicy]);
        });
      }
    },
    [initialItems, setValue]
  );

  const onDragUpdate = useCallback(
    (dragUpdate: DragUpdate) => {
      const { destination, source, draggableId } = dragUpdate;
      if (!destination) return;

      const newItems = { ...initialItems };
      const sourceCategory = source.droppableId as keyof ILeavePolicy;

      const draggedItem = newItems[sourceCategory].part_ids.find(
        (item) => item.id.toString() === draggableId
      );

      if (draggedItem) {
        draggedItem.isGhosting = true;
      }
      setValue(sourceCategory, newItems[sourceCategory]);
    },
    [initialItems, setValue]
  );

  const onDragStart = useCallback(
    (start: DragStart) => {
      const allCategoryIds = Object.keys(initialItems);
      setOpenCategories(allCategoryIds);
      return start;
    },
    [initialItems]
  );

  return {
    openCategories,
    onDragEnd,
    onDragUpdate,
    onDragStart,
    setOpenCategories,
  };
};
