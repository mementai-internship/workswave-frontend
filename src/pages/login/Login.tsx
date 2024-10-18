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
  const { handleSubmit, register } = useForm<TFormValues>();
  const [, setToken] = useAtom(userTokenAtom);
  const navigate = useNavigate();

  // 로그인 함수
  const handleLoginButtonClick = async (data: TFormValues) => {
    try {
      const { access_token } = await postLogin(data);
      // 로그인 성공시 토큰값 저장
      setToken(access_token);
      navigate('/member-management');
    } catch (error) {
      // 로그인 실패
      console.error(error, '로그인에 실패했습니다.');
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="flex flex-col w-full max-w-md gap-8 translate-y-[-18%]">
        <div className="flex flex-col">
          <Txt className="flex items-center justify-center" variant="h1">
            WorksWave
          </Txt>
          <Txt className="flex items-center justify-center" variant="subtitle1">
            웍스웨이브웍스웨이브웍스웨이브
          </Txt>
        </div>
        <form onSubmit={handleSubmit(handleLoginButtonClick)} className="flex flex-col gap-3">
          <TextField.Root
            className="flex-row-reverse items-center justify-center h-11 text-xs rounded-lg"
            placeholder="이메일 주소"
            {...register('email', {
              required: true,
            })}
          >
            <div className="pl-4 pr-2">
              <AiOutlineMail size={16} />
            </div>
          </TextField.Root>
          <TextField.Root
            type="password"
            className="flex-row-reverse items-center justify-center h-11 text-xs rounded-lg"
            placeholder="비밀번호"
            {...register('password', {
              required: true,
            })}
          >
            <div className="pl-4 pr-2">
              <PiKey size={16} />
            </div>
          </TextField.Root>
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
