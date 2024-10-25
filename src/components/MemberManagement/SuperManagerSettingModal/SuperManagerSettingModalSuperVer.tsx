import { Controller, useForm } from 'react-hook-form';

import SuperManagerSettingCheckboxGroup from '@/components/MemberManagement/SuperManagerSettingModal/SuperManagerSettingCheckboxGroup';
import SuperManagerSettingModalContainer from '@/components/MemberManagement/SuperManagerSettingModal/SuperManagerSettingModalContainer';

const settingOptions = [
  { id: 1, name: '계약관리(P.T포함)' },
  { id: 2, name: '휴무관리' },
  { id: 3, name: 'O.T관리' },
  { id: 4, name: '인사관리' },
  { id: 5, name: '근로관리' },
  { id: 6, name: '급여정산' },
  { id: 7, name: '문서설정관리' },
  { id: 8, name: '휴직관리' },
  { id: 9, name: '출퇴근기록관리' },
];

export interface ISuperManagerSettingSuper {
  통합관리자: { name: string; id: number }[];
}

export default function SuperManagerSettingModalSuperVer() {
  const { control, handleSubmit } = useForm<ISuperManagerSettingSuper>({
    defaultValues: {
      통합관리자: [
        { id: 1, name: '계약관리(P.T포함)' },
        { id: 2, name: '휴무관리' },
        { id: 3, name: 'O.T관리' },
        { id: 4, name: '인사관리' },
        { id: 5, name: '근로관리' },
        { id: 6, name: '급여정산' },
        { id: 7, name: '문서설정관리' },
        { id: 8, name: '휴직관리' },
        { id: 9, name: '출퇴근기록관리' },
      ],
    },
  });

  const onSubmit = handleSubmit((data: ISuperManagerSettingSuper) => {
    console.log(data);
  });

  return (
    <SuperManagerSettingModalContainer onSubmit={onSubmit}>
      <Controller
        control={control}
        name="통합관리자"
        render={({ field: { value, onChange } }) => (
          <SuperManagerSettingCheckboxGroup
            onChange={onChange}
            value={value}
            options={settingOptions}
          />
        )}
      />
    </SuperManagerSettingModalContainer>
  );
}
