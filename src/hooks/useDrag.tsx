import { useCallback, useState } from 'react';
import { DragStart, DragUpdate, DropResult } from 'react-beautiful-dnd';

export const useDrag = () => {
  // TODO: 추후 모델 타입으로 변경
  const [items, setItems] = useState<
    {
      categoryId: string;
      category: '회계기준 부여' | '입사일 기준' | '조건별 부여 (공통 적용)' | '수동부여';
      contents: { id: string; name: string; isGhosting: boolean }[];
    }[]
  >([
    {
      categoryId: '1123',
      category: '회계기준 부여',
      contents: [
        { id: '1', name: '의사', isGhosting: false },
        { id: '2', name: '간호', isGhosting: false },
      ],
    },
    {
      categoryId: '2123',
      category: '입사일 기준',
      contents: [
        { id: '3', name: '코디', isGhosting: false },
        { id: '4', name: '영업', isGhosting: false },
      ],
    },
    {
      categoryId: '3123',
      category: '조건별 부여 (공통 적용)',
      contents: [
        { id: '5', name: '파트', isGhosting: false },
        { id: '6', name: '조무', isGhosting: false },
      ],
    },
    {
      categoryId: '4123',
      category: '수동부여',
      contents: [],
    },
  ]);
  const [openCategories, setOpenCategories] = useState<string[]>(
    items.map((item) => item.categoryId)
  );

  const onChangeItems = (data) => {
    setItems(data);
  };

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) return;

      const newItems = [...items];

      // 같은 카테고리 내에서의 이동
      if (source.droppableId === destination.droppableId) {
        const categoryIndex = newItems.findIndex((item) => item.categoryId === source.droppableId);
        const [reorderedItem] = newItems[categoryIndex].contents.splice(source.index, 1);
        reorderedItem.isGhosting = false; // isGhosting 상태 업데이트
        newItems[categoryIndex].contents.splice(destination.index, 0, reorderedItem);
      }
      // 다른 카테고리로의 이동
      else {
        const sourceCategoryIndex = newItems.findIndex(
          (item) => item.categoryId === source.droppableId
        );
        const destCategoryIndex = newItems.findIndex(
          (item) => item.categoryId === destination.droppableId
        );

        const [movedItem] = newItems[sourceCategoryIndex].contents.splice(source.index, 1);
        movedItem.isGhosting = false; // isGhosting 상태 업데이트
        newItems[destCategoryIndex].contents.splice(destination.index, 0, movedItem);
      }

      setItems(newItems);
    },
    [items]
  );

  const onDragUpdate = useCallback(
    (dragUpdate: DragUpdate) => {
      const { destination, source, draggableId } = dragUpdate;
      if (!destination) return;

      const newItems = [...items];
      const sourceCategoryIndex = newItems.findIndex(
        (item) => item.categoryId === source.droppableId
      );
      const draggedItem = newItems[sourceCategoryIndex].contents.find(
        (item) => item.id === draggableId
      );

      if (draggedItem) {
        draggedItem.isGhosting = true;
      }

      setItems(newItems);
    },
    [items]
  );

  const onDragStart = useCallback((start: DragStart) => {
    // 드래그 시작 시 필요한 로직 추가
    const allCategoryIds = items.map((item) => item.categoryId);
    // 모든 카테고리를 열린 상태로 설정합니다
    setOpenCategories(allCategoryIds);
    return start;
  }, []);

  return {
    items,
    openCategories,
    onChangeItems,
    onDragEnd,
    onDragUpdate,
    onDragStart,
    setOpenCategories,
  };
};
