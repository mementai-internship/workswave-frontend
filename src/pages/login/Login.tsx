import { Button, TextField } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { PiKey } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import { postLogin } from '@/apis/login.api';
import { Txt } from '@/components/Common/Txt';
import { userTokenAtom } from '@/store/authAtoms';

type TFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<TFormValues>();
  const [, setToken] = useAtom(userTokenAtom);
  const navigate = useNavigate();

  // 로그인 함수
  const handleLoginButtonClick = async (data: TFormValues) => {
    try {
      const { access_token } = await postLogin(data);
      setToken(access_token);
      navigate('/member-management');
    } catch (error) {
      console.error(error, '로그인에 실패했습니다.');
    }
  };

  return (
    <div className="flex-grow h-80% flex items-center justify-center">
      <div className="flex flex-col w-full max-w-md gap-10 translate-y-[-18%]">
        <div className="flex flex-col">
          <Txt className="flex items-center justify-center" variant="h1">
            WorksWave
          </Txt>
          <Txt className="flex items-center justify-center" variant="subtitle1">
            웍스웨이브웍스웨이브웍스웨이브
          </Txt>
        </div>
        <form onSubmit={handleSubmit(handleLoginButtonClick)} className="flex flex-col">
          <div className="h-20">
            <TextField.Root
              className="flex-row-reverse items-center justify-center h-11 text-xs rounded-lg"
              placeholder="이메일 주소"
              {...register('email', {
                required: '이메일을 입력해주세요',
                validate: (value) => {
                  if (value.trim() === '') {
                    setValue('email', '');
                    return '공백만 입력할 수 없습니다';
                  }
                  return true;
                },
              })}
            >
              <div className="pl-4 pr-2">
                <AiOutlineMail size={16} />
              </div>
            </TextField.Root>
            {errors.email && (
              <p className="text-red-500 text-xs mt-2 mx-2">{errors.email.message}</p>
            )}
          </div>

          <div className="h-20">
            <TextField.Root
              type="password"
              className="flex-row-reverse items-center justify-center h-11 text-xs rounded-lg"
              placeholder="비밀번호"
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                validate: (value) => {
                  if (value.trim() === '') {
                    setValue('password', '');
                    return '공백만 입력할 수 없습니다';
                  }
                  return true;
                },
              })}
            >
              <div className="pl-4 pr-2">
                <PiKey size={16} />
              </div>
            </TextField.Root>
            {errors.password && (
              <p className="text-red-500 text-xs mt-2 mx-2">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="solid"
            className="bg-purple-50 text-white w-full h-11 text-base rounded-lg"
          >
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
}
