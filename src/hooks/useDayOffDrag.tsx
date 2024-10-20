import { useCallback, useState } from 'react';
import { DragStart, DragUpdate, DropResult } from 'react-beautiful-dnd';

import { IFormValues } from '@/components/BasicSetting/DayOffSetting/DragContainer';

export const useDayOffDrag = (initialItems: IFormValues) => {
  const [dragItems, setDragItems] = useState<IFormValues>(initialItems);
  const [openCategories, setOpenCategories] = useState<string[]>(Object.keys(initialItems));

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) return { items: dragItems, hasChanged: false };

      if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return { items: dragItems, hasChanged: false };
      }

      const newItems = { ...dragItems };

      const sourceCategory = source.droppableId as keyof IFormValues;
      const destCategory = destination.droppableId as keyof IFormValues;

      const sourcePartIds = [...(newItems[sourceCategory]?.part_ids || [])];
      const destPartIds =
        sourceCategory === destCategory
          ? sourcePartIds
          : [...(newItems[destCategory]?.part_ids || [])];

      const [movedItem] = sourcePartIds.splice(source.index, 1);
      if (movedItem) {
        movedItem.isGhosting = false;
        destPartIds.splice(destination.index, 0, movedItem);

        newItems[sourceCategory].part_ids = sourcePartIds;
        if (sourceCategory !== destCategory) {
          newItems[destCategory].part_ids = destPartIds;
        }
      }

      setDragItems(newItems);
      return { items: newItems, hasChanged: true };
    },
    [dragItems]
  );

  const onDragUpdate = useCallback(
    (dragUpdate: DragUpdate) => {
      const { destination, source, draggableId } = dragUpdate;
      if (!destination) return;

      const newItems = { ...dragItems };
      const sourceCategory = source.droppableId as keyof IFormValues;

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
