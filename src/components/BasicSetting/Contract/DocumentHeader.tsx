import { Button } from '@radix-ui/themes';
import { CiSettings } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { PiPlusBold } from 'react-icons/pi';

import SelectBox from '@/components/Common/Select';

export const DocumentMapData = {
  contract: '계약서',
  document: '문서',
  certificat: '증명서',
};

interface IDocumentHeaderProps {
  title: 'contract' | 'document' | 'certificate';
}

export function DocumentHeader({ title }: IDocumentHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white border-b">
      <div className="flex items-center gap-4">
        <div className="font-medium">{DocumentMapData[title]} 설정</div>
        <SelectBox
          title="지점"
          size="small"
          options={[
            {
              id: 1,
              name: '뮤즈의원(강남점)',
              action: () => {},
            },
            {
              id: 2,
              name: '뮤즈의원(수원인계점)',
              action: () => {},
            },
          ]}
        />
      </div>
      {title === 'contract' ? (
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="1"
            color={'gray'}
            radius="none"
            onClick={() => {}}
            className="cursor-pointer"
          >
            <IoIosPhonePortrait
              size="15"
              className="cursor-pointer hover:text-gray-500 active:text-gray-700"
              tabIndex={0}
              onClick={() => {}}
            />
            {'비대면계약 문자설정'}
          </Button>
          <Button
            variant="outline"
            size="1"
            color={'gray'}
            radius="none"
            onClick={() => {}}
            className="cursor-pointer"
          >
            <CiSettings
              size="15"
              className="cursor-pointer hover:text-gray-500 active:text-gray-700"
              tabIndex={0}
              onClick={() => {}}
            />
            {'세부설정'}
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          size="1"
          color={'gray'}
          radius="none"
          onClick={() => {}}
          className="cursor-pointer"
        >
          <PiPlusBold
            size="10"
            className="cursor-pointer hover:text-gray-500 active:text-gray-700"
            tabIndex={0}
            onClick={() => {}}
          />
          {title === 'document' ? '문서 추가하기' : '증명서 추가하기'}
        </Button>
      )}
    </div>
  );
}
