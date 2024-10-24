import { Controller, useForm } from 'react-hook-form';

import { Txt } from '@/components/Common/Txt';
import SuperManagerSettingCheckboxGroup from '@/components/MemberManagement/SuperManagerSettingModal/SuperManagerSettingCheckboxGroup';
import SuperManagerSettingModalContainer from '@/components/MemberManagement/SuperManagerSettingModal/SuperManagerSettingModalContainer';

const settingOptions = [
  { id: 1, name: 'P.T관리' },
  { id: 2, name: '계약관리(P.T포함)' },
  { id: 3, name: '휴무관리' },
  { id: 4, name: 'O.T관리' },
  { id: 5, name: '인사관리' },
  { id: 6, name: '근로관리' },
  { id: 7, name: '급여정산' },
  { id: 8, name: '문서설정관리' },
  { id: 9, name: '휴직관리' },
  { id: 10, name: '출퇴근기록관리' },
];

// 체크된 아이템의 아이디와 이름을 모두 받아온다는 가정으로 작성한 코드입니다.
interface ISuperManagerSettingPart {
  코디네이터: { name: string; id: number }[];
  시설관리: { name: string; id: number }[];
  세탁실: { name: string; id: number }[];
}

export default function SuperManagerSettingModalPartVer() {
  const { control, handleSubmit } = useForm<ISuperManagerSettingPart>({
    defaultValues: {
      코디네이터: [
        { id: 1, name: 'P.T관리' },
        { id: 2, name: '계약관리(P.T포함)' },
        { id: 3, name: '휴무관리' },
        { id: 4, name: 'O.T관리' },
        { id: 5, name: '인사관리' },
        { id: 6, name: '근로관리' },
        { id: 7, name: '급여정산' },
        { id: 8, name: '문서설정관리' },
        { id: 9, name: '휴직관리' },
        { id: 10, name: '출퇴근기록관리' },
      ],
      시설관리: [
        { id: 4, name: 'O.T관리' },
        { id: 5, name: '인사관리' },
        { id: 6, name: '근로관리' },
        { id: 7, name: '급여정산' },
      ],
      세탁실: [{ id: 1, name: 'P.T관리' }],
    },
  });

  const onSubmit = handleSubmit((data: ISuperManagerSettingPart) => {
    console.log(data);
  });

  const sectionTitleStyle = 'block w-40 px-6 py-1 border border-gary-50 mb-2 ';
  return (
    <SuperManagerSettingModalContainer onSubmit={onSubmit} height="max-h-[calc(100vh-250px)]">
      <ul>
        <li className="mb-6">
          <Txt variant="h6" className={sectionTitleStyle}>
            코디네이터
          </Txt>
          <Controller
            control={control}
            name="코디네이터"
            render={({ field: { value, onChange } }) => (
              <SuperManagerSettingCheckboxGroup
                onChange={onChange}
                value={value}
                options={settingOptions}
              />
            )}
          />
        </li>

        <li className="mb-6">
          <Txt variant="h6" className={sectionTitleStyle}>
            시설관리
          </Txt>
          <Controller
            control={control}
            name="시설관리"
            render={({ field: { value, onChange } }) => (
              <SuperManagerSettingCheckboxGroup
                onChange={onChange}
                value={value}
                options={settingOptions}
              />
            )}
          />
        </li>

        <li className="mb-6">
          <Txt variant="h6" className={sectionTitleStyle}>
            세탁실
          </Txt>
          <Controller
            control={control}
            name="세탁실"
            render={({ field: { value, onChange } }) => (
              <SuperManagerSettingCheckboxGroup
                onChange={onChange}
                value={value}
                options={settingOptions}
              />
            )}
          />
        </li>
      </ul>
    </SuperManagerSettingModalContainer>
  );
}
