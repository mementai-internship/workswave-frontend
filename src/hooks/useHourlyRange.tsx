import { IHourlyRangeItem, IHourlyRangeItemSplitTime } from '@/models/hourlyRange.model';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

export const useHourlyRange = () => {
  const { register, handleSubmit, setValue, getValues, control } =
    useForm<IHourlyRangeItemSplitTime>({
      defaultValues: {
        templateName: '',
        positionId: DUMMY_DATA_POSITION[0].id,
        positionName: DUMMY_DATA_POSITION[0].name,
        startTimeHour: '09',
        startTimeMinute: '00',
        endTimeHour: '00',
        endTimeMinute: '00',
        hourlyWage: 0,
        remoteHourlyWage: 12000,
      },
    });

  const [searchParams, setSearchParams] = useSearchParams();
  const isEditMode = searchParams.get('editMode') === 'true';
  const itemId = searchParams.get('id');

  const data: IHourlyRangeItemSplitTime[] = DUMMY_DATA.reduce((acc, item) => {
    const [startHour, startMinute] = item.startTime.split(':');
    const [endHour, endMinute] = item.endTime.split(':');

    const position = DUMMY_DATA_POSITION.find((pos) => pos.id === item.positionId);

    const newItem = {
      templateId: item.templateId,
      templateName: item.templateName,
      startTimeHour: startHour,
      startTimeMinute: startMinute,
      endTimeHour: endHour,
      endTimeMinute: endMinute,
      hourlyWage: item.hourlyWage,
      positionId: position ? position.id : DUMMY_DATA_POSITION[0].id,
      positionName: position ? position.name : DUMMY_DATA_POSITION[0].name,
    };
    acc.push(newItem);
    return acc;
  }, []);

  const handleCloseEditMode = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('id');
    setSearchParams({ ...searchParams, editMode: 'false' });
  };

  const handleEditMode = (id: number) => {
    setSearchParams({ ...searchParams, editMode: 'true', id: id.toString() });
  };

  useEffect(() => {
    const editItem = data.find((item) => item.templateId === Number(itemId));

    setValue('templateName', editItem?.templateName || '');
    setValue('positionId', editItem?.positionId || DUMMY_DATA_POSITION[0].id);
    setValue('positionName', editItem?.positionName || DUMMY_DATA_POSITION[0].name);
    setValue('startTimeHour', editItem?.startTimeHour || '00');
    setValue('startTimeMinute', editItem?.startTimeMinute || '00');
    setValue('endTimeHour', editItem?.endTimeHour || '00');
    setValue('endTimeMinute', editItem?.endTimeMinute || '00');
    setValue('hourlyWage', editItem?.hourlyWage || 0);
    setValue('remoteHourlyWage', editItem?.remoteHourlyWage || 0);
  }, [itemId, data, setValue]);

  const onSubmit = handleSubmit((data: IHourlyRangeItemSplitTime) => {
    const positionName = DUMMY_DATA_POSITION.find((pos) => pos.id === data.positionId)?.name;
    console.log({ ...data, positionName });
  });

  const defaultValuePosition = getValues('positionId');
  return {
    data,
    isEditMode,
    handleCloseEditMode,
    handleEditMode,
    itemId,
    register,
    onSubmit,
    DUMMY_DATA_POSITION,
    defaultValuePosition,
    control,
  };
};

const DUMMY_DATA_POSITION = [
  { name: '공통', id: 'ROLE_000' },
  {
    name: '의사',
    id: 'ROLE_001',
  },
  {
    name: '상담실장',
    id: 'ROLE_002',
  },
  {
    name: '간호조무사',
    id: 'ROLE_003',
  },
  {
    name: '코디네이터',
    id: 'ROLE_004',
  },
  {
    name: '피부관리사',
    id: 'ROLE_005',
  },
];

const DUMMY_DATA: IHourlyRangeItem[] = [
  {
    templateId: 1,
    templateName: '연봉1000',
    startTime: '10:00:00',
    endTime: '20:00:00',
    hourlyWage: 9890,
    remoteHourlyWage: 0,
    positionId: 'ROLE_001',
  },
  {
    templateId: 2,
    templateName: '연봉2000',
    startTime: '08:00:00',
    endTime: '23:00:00',
    hourlyWage: 14000,
    remoteHourlyWage: 0,
    positionId: 'ROLE_002',
  },
];
