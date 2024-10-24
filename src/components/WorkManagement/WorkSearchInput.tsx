import { Button, Flex, TextField } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiMagnifyingGlass } from 'react-icons/pi';

import { searchNameAtom, searchPhoneNumberAtom } from '@/store/atoms';

export interface ISearch {
  name: string;
  phoneNumber: string;
}

interface IIsSearchValid {
  name: boolean;
  phoneNumber: boolean;
}

function WorkSearchInput() {
  const { register, handleSubmit } = useForm<ISearch>();
  const [isSearchValid, setIsSearchValid] = useState<IIsSearchValid>({
    name: false,
    phoneNumber: false,
  });
  const [, setName] = useAtom(searchNameAtom);
  const [, setPhoneNumber] = useAtom(searchPhoneNumberAtom);

  const isValidName = (name: string): boolean => {
    // 한글 및 영어만 허용하는 정규 표현식
    const nameRegex = /^[a-zA-Z가-힣]+$/;
    return nameRegex.test(name);
  };

  const isValidPhoneNumber = (phoneNumber: string): boolean => {
    // 숫자만 허용하는 정규 표현식
    const phoneNumberRegex = /^[0-9]+$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  // onSubmit를 해서 query값을 받아서 해당 값을 전역에 저장 후테이블에 값으로 넘겨주면 되지않나?
  const onSubmit = (data: ISearch) => {
    let isNameValid = true;
    let isPhoneValid = true;

    if (!isValidName(data.name)) {
      isNameValid = false;
    }

    if (!isValidPhoneNumber(data.phoneNumber)) {
      isPhoneValid = false;
    }

    setIsSearchValid({
      name: isNameValid,
      phoneNumber: isPhoneValid,
    });

    if (isNameValid && isPhoneValid) {
      console.log(data);
      // TODO: API call when ready
      if (data.name.length > 0) setName(data.name);
      if (data.phoneNumber.length > 0) setPhoneNumber(data.phoneNumber);
    }
  };
  console.log(isSearchValid);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="row" gap="2">
        <div>
          <TextField.Root radius="none" placeholder="이름" size="2" {...register('name')} />
          <div
            className={`mt-1 text-xs text-red-500 ${isSearchValid.name ? 'invisible' : 'visible'}`}
          >
            * 한글(영어)만 입력 가능합니다.
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <TextField.Root
            radius="none"
            placeholder="전화번호"
            size="2"
            {...register('phoneNumber')}
          />

          <div
            className={`mt-1 text-xs text-red-500 ${isSearchValid.phoneNumber ? 'invisible' : 'visible'}`}
          >
            * 숫자만 입력 가능합니다.
          </div>
        </div>
        <Button type="submit" color="gray" variant="solid" size="2">
          <PiMagnifyingGlass />
        </Button>
      </Flex>
    </form>
  );
}

export default WorkSearchInput;
