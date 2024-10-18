import DragItem from '@/components/BasicSetting/holidaySetting/DragItem';
import StrictModeDroppable from '@/components/BasicSetting/holidaySetting/StrictModeDroppable';
import { useDrag } from '@/hooks/useDrag';
import * as Accordion from '@radix-ui/react-accordion';
import { Button } from '@radix-ui/themes';
import { DragDropContext } from 'react-beautiful-dnd';

export default function DragContainer() {
  const { items, onDragEnd, onDragUpdate, onDragStart } = useDrag();

  // 설명 부분 백엔드에서 데이터 받아와서 설정 - 타입 정의 필요

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate} onDragStart={onDragStart}>
        <div className="overflow-x-auto pb-8">
          <Accordion.Root type="multiple" className="w-full">
            {items.map(
              ({
                categoryId,
                category,
                contents,
              }: {
                categoryId: string;
                category: string;
                contents: { id: string; name: string; isGhosting: boolean }[];
              }) => (
                <Accordion.Item key={categoryId} value={categoryId} className="mb-4 border-b">
                  <Accordion.Header className="border-b">
                    <Accordion.Trigger className="w-full text-left p-4">
                      <p className="text-lg font-semibold">{category}</p>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <div className="p-4">설명</div>
                    <StrictModeDroppable droppableId={categoryId}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={`p-2 rounded-b-lg min-h-[50px] ${
                            snapshot.isDraggingOver ? 'bg-blue-10' : ''
                          }`}
                        >
                          {contents.map(({ id, name, isGhosting }, index) => (
                            <DragItem
                              key={id}
                              id={id}
                              index={index}
                              name={name}
                              isGhosting={isGhosting}
                            />
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </StrictModeDroppable>
                  </Accordion.Content>
                </Accordion.Item>
              )
            )}
          </Accordion.Root>
        </div>
      </DragDropContext>
      <div className="flex justify-center">
        <Button variant="outline" color="purple" size="3" className="w-32 cursor-pointer">
          저장하기
        </Button>
      </div>
    </>
  );
}
