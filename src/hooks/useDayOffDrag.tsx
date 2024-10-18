import { useCallback, useState } from 'react';
import { DragStart, DragUpdate, DropResult } from 'react-beautiful-dnd';

import { FormValues } from '@/components/BasicSetting/DayOffSetting/DragContainer';

export const useDayOffDrag = (initialItems: FormValues) => {
  const [dragItems, setDragItems] = useState<FormValues>(initialItems);
  const [openCategories, setOpenCategories] = useState<string[]>(Object.keys(initialItems));

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) return dragItems; // 변경: 원본 상태 반환

      const newItems = { ...dragItems };

      const sourceCategory = source.droppableId as keyof FormValues;
      const destCategory = destination.droppableId as keyof FormValues;

      const sourcePartIds = [...(newItems[sourceCategory]?.part_ids || [])];
      const destPartIds = [...(newItems[destCategory]?.part_ids || [])];

      const [movedItem] = sourcePartIds.splice(source.index, 1);
      if (movedItem) {
        movedItem.isGhosting = false;
        destPartIds.splice(destination.index, 0, movedItem);

        newItems[sourceCategory].part_ids = sourcePartIds;
        newItems[destCategory].part_ids = destPartIds;
      }

      setDragItems(newItems);
      return newItems; // 변경: 새로운 상태 반환
    },
    [dragItems]
  );

  const onDragUpdate = useCallback(
    (dragUpdate: DragUpdate) => {
      const { destination, source, draggableId } = dragUpdate;
      if (!destination) return;

      const newItems = { ...dragItems };
      const sourceCategory = source.droppableId as keyof FormValues;

      const draggedItem = newItems[sourceCategory].part_ids.find(
        (item) => item.id.toString() === draggableId
      );

      if (draggedItem) {
        draggedItem.isGhosting = true;
      }

      setDragItems(newItems);
    },
    [dragItems]
  );

  const onDragStart = useCallback(
    (start: DragStart) => {
      const allCategoryIds = Object.keys(dragItems);
      setOpenCategories(allCategoryIds);
      return start;
    },
    [dragItems]
  );

  return {
    items: dragItems,
    openCategories,
    onDragEnd,
    onDragUpdate,
    onDragStart,
    setOpenCategories,
  };
};
