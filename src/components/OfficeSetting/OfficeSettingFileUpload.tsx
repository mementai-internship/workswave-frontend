import { IBranchesRequest } from '@/models/branches.model';
import { Button } from '@radix-ui/themes';
import React, { useRef, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

interface IProps {
  title: string;
  setValue: UseFormSetValue<IBranchesRequest>;
  name: keyof IBranchesRequest;
}

export default function OfficeSettingFileUpload({ title, setValue, name }: IProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setValue(name, URL.createObjectURL(files[0]));
      setIsUpload(true);
    }
  };

  return (
    <div className="flex flex-1">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden" // 기본 파일 입력 숨김
        onChange={handleChange}
        required={title === '직인등록'}
      />
      <Button
        type="button"
        variant={isUpload ? 'solid' : 'outline'}
        color={isUpload ? 'blue' : 'gray'}
        className="flex-1"
        onClick={handleFileUpload}
      >
        <label>{isUpload ? '등록완료' : title}</label>
      </Button>
    </div>
  );
}
