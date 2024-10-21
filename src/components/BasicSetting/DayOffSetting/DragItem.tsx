import { Draggable } from 'react-beautiful-dnd';
import { PiArrowsOutCardinalBold } from 'react-icons/pi';

interface IPropsType {
  id: string;
  index: number;
  name: string;
  isGhosting?: boolean;
}

export default function DragItem({ id, index, name, isGhosting }: IPropsType) {
  return (
    <Draggable draggableId={id} key={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`${
            isGhosting ? 'opacity-50' : 'opacity-100'
          } relative flex items-center gap-x-4 p-3 mb-2 bg-blue-10 border border-gray-300
          ${snapshot.isDragging ? 'bg-blue-20' : ''}
          hover `}
        >
          <span {...provided.dragHandleProps}>
            <PiArrowsOutCardinalBold className="text-gray-500" />
          </span>
          <p className="text-gray-800">{name}</p>
        </div>
      )}
    </Draggable>
  );
}
