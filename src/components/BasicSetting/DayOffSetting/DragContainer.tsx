import * as Accordion from '@radix-ui/react-accordion';
import { Button } from '@radix-ui/themes';
import { DragDropContext } from 'react-beautiful-dnd';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { PiArrowDownBold, PiArrowUpBold } from 'react-icons/pi';

import DragItem from '@/components/BasicSetting/DayOffSetting/DragItem';
import PolicyDetails from '@/components/BasicSetting/DayOffSetting/PolicyDetails';
import StrictModeDroppable from '@/components/BasicSetting/DayOffSetting/StrictModeDroppable';
import { usePatchLeavePolicies } from '@/hooks/apis/useLeavePolicies';
import { useDayOffDrag } from '@/hooks/useDayOffDrag';
import { ILeavePolicy } from '@/models/leave-policies.model';
import { adaptLeavePolicy } from '@/utils/adaptLeaveRequest';

interface IPropsType {
  watch: UseFormWatch<ILeavePolicy>;
  reset: UseFormReset<ILeavePolicy>;
  register: UseFormRegister<ILeavePolicy>;
  setValue: UseFormSetValue<ILeavePolicy>;
  handleSubmit: UseFormHandleSubmit<ILeavePolicy>;
  branchId: number;
}

export default function DragContainer({
  watch,
  // reset,
  register,
  setValue,
  handleSubmit,
  branchId,
}: IPropsType) {
  const { openCategories, onDragEnd, onDragUpdate, onDragStart, setOpenCategories } = useDayOffDrag(
    watch(),
    setValue
  );

  const { mutate: patchLeavePolicies } = usePatchLeavePolicies(branchId);

  const onSubmit = (data: ILeavePolicy) => {
    const adaptedData = adaptLeavePolicy(data);
    patchLeavePolicies(adaptedData);
  };

  const handleToggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const policyData = watch();

  return (
    <>
      {policyData && (
        <DragDropContext
          onDragEnd={onDragEnd}
          onDragUpdate={onDragUpdate}
          onDragStart={onDragStart}
        >
          <div className="pb-8">
            <Accordion.Root type="multiple" className="w-full" value={openCategories}>
              {Object.entries(policyData).map(([categoryId, policyDetails]) => {
                return (
                  policyDetails.category && (
                    <Accordion.Item key={categoryId} value={categoryId} className="border-b">
                      <Accordion.Header className="border-b">
                        <Accordion.Trigger
                          className="w-full flex justify-between items-center text-left p-4"
                          onClick={() => handleToggleCategory(categoryId)}
                        >
                          <p className="text-lg font-semibold">{policyDetails.category}</p>
                          <div className="rounded-full bg-purple-50 p-2">
                            {openCategories.includes(categoryId) ? (
                              <PiArrowDownBold color="white" />
                            ) : (
                              <PiArrowUpBold color="white" />
                            )}
                          </div>
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content>
                        <div className="px-4 py-2">
                          <PolicyDetails
                            categoryId={categoryId as keyof ILeavePolicy}
                            register={register}
                            setValue={setValue}
                            watch={watch}
                          />
                        </div>
                        <StrictModeDroppable droppableId={categoryId}>
                          {(provided, snapshot) => (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              className={`p-2 rounded-b-lg min-h-[50px] ${
                                snapshot.isDraggingOver ? 'bg-blue-10' : ''
                              }`}
                            >
                              {policyDetails.part_ids?.map(({ id, name, isGhosting }, index) => (
                                <DragItem
                                  key={id}
                                  id={id.toString()}
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
                );
              })}
            </Accordion.Root>
          </div>
          <div className="flex justify-center mb-10">
            <Button
              variant="outline"
              color="purple"
              size="3"
              className="w-32 cursor-pointer"
              onClick={handleSubmit(onSubmit)}
            >
              저장하기
            </Button>
          </div>
        </DragDropContext>
      )}
    </>
  );
}
