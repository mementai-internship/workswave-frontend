import * as Accordion from '@radix-ui/react-accordion';
import { Button } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';
import { PiArrowDownBold, PiArrowUpBold } from 'react-icons/pi';

import DragItem from '@/components/BasicSetting/DayOffSetting/DragItem';
import PolicyDetails from '@/components/BasicSetting/DayOffSetting/PolicyDetails';
import StrictModeDroppable from '@/components/BasicSetting/DayOffSetting/StrictModeDroppable';
import { useDayOffDrag } from '@/hooks/useDayOffDrag';

interface IPartId {
  id: number;
  name: string;
  isGhosting: boolean;
}
interface IBaseCategory {
  category: string;
  part_ids: IPartId[];
}

interface IAccountingStandard extends IBaseCategory {
  categoryId: 'accountingStandard';
  reset: boolean;
  lessThanOneYearService: boolean;
  decimalProcessing: '올림' | '내림' | '반올림' | '0.5';
}

interface IHireDate extends IBaseCategory {
  categoryId: 'hireDate';
  reset: boolean;
}

interface IConditionalGrant extends IBaseCategory {
  categoryId: 'conditionalGrant';
  monthCount: number;
  count: number;
  monthlyBasis: boolean;
}

interface IManualGrant extends IBaseCategory {
  categoryId: 'manualGrant';
}

export type TPolicyDetailsType = IAccountingStandard | IHireDate | IConditionalGrant | IManualGrant;

export interface IFormValues {
  accountingStandard: IAccountingStandard;
  hireDate: IHireDate;
  conditionalGrant: IConditionalGrant;
  manualGrant: IManualGrant;
}
export default function DragContainer() {
  const { reset, watch, handleSubmit, register, setValue } = useForm<IFormValues>({
    defaultValues: {
      accountingStandard: {
        categoryId: 'accountingStandard',
        category: '회계기준',
        reset: false,
        lessThanOneYearService: false,
        decimalProcessing: '올림',
        part_ids: [
          { id: 1, name: '의사', isGhosting: false },
          { id: 2, name: '간호', isGhosting: false },
        ],
      },
      hireDate: {
        categoryId: 'hireDate',
        category: '입사일기준',
        reset: false,
        part_ids: [
          { id: 3, name: '코디', isGhosting: false },
          { id: 4, name: '영업', isGhosting: false },
        ],
      },
      conditionalGrant: {
        categoryId: 'conditionalGrant',
        category: '조건별 부여 (공통 적용)',
        monthCount: 12,
        count: 1,
        monthlyBasis: true,
        part_ids: [
          { id: 5, name: '파트', isGhosting: false },
          { id: 6, name: '조무', isGhosting: false },
        ],
      },
      manualGrant: {
        categoryId: 'manualGrant',
        category: '수동부여',
        part_ids: [],
      },
    },
  });

  const [formValues, setFormValues] = useState<IFormValues>(watch());
  const { openCategories, onDragEnd, onDragUpdate, onDragStart, setOpenCategories } =
    useDayOffDrag(formValues);

  useEffect(() => {
    const subscription = watch((value) => {
      setFormValues(value as IFormValues);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: IFormValues) => {
    console.log(data);
  };

  const handleDragEnd = (result) => {
    const { items: newValues, hasChanged } = onDragEnd(result);
    if (hasChanged) {
      // 새로운 값이 있을 때만 상태 업데이트
      setFormValues(newValues);
      reset(newValues); // react-hook-form의 값도 업데이트
    }
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

  return (
    <>
      <DragDropContext
        onDragEnd={handleDragEnd}
        onDragUpdate={onDragUpdate}
        onDragStart={onDragStart}
      >
        <div className="pb-8">
          <Accordion.Root type="multiple" className="w-full" value={openCategories}>
            {Object.entries(formValues).map(([categoryId, policyDetails]) => {
              return (
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
                        categoryId={categoryId as keyof IFormValues}
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
    </>
  );
}
