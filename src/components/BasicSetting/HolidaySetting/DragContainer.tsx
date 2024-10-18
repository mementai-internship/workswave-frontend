import * as Accordion from '@radix-ui/react-accordion';
import { DragDropContext } from 'react-beautiful-dnd';
import { PiArrowDownBold, PiArrowUpBold } from 'react-icons/pi';

import DragItem from '@/components/BasicSetting/HolidaySetting/DragItem';
import StrictModeDroppable from '@/components/BasicSetting/HolidaySetting/StrictModeDroppable';
import { useDrag } from '@/hooks/useDrag';

export default function DragContainer() {
  const { items, openCategories, onDragEnd, onDragUpdate, onDragStart, setOpenCategories } =
    useDrag();

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate} onDragStart={onDragStart}>
        <div className="pb-8">
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
                <Accordion.Item key={categoryId} value={categoryId} className="border-b">
                  <Accordion.Header className="border-b">
                    <Accordion.Trigger
                      className="w-full flex justify-between items-center text-left p-4"
                      onClick={() => toggleCategory(categoryId)}
                    >
                      <p className="text-lg font-semibold">{category}</p>
                      <div className="rounded-full bg-purple-50 p-2">
                        {!openCategories.includes(categoryId) ? (
                          <PiArrowDownBold color="white" />
                        ) : (
                          <PiArrowUpBold color="white" />
                        )}
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <div className="px-4 py-2">설명</div>
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
    </>
  );
}
