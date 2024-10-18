import { Button, Flex, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

interface ISearch {
  name: string;
  phoneNumber: string;
}
export default function ContactSearchInput() {
  const { register, handleSubmit } = useForm<ISearch>();

  const navigate = useNavigate();

  const onSubmit = (data: ISearch) => {
    const searchParams = new URLSearchParams();
    if (data.name && data.name.trim() !== '') {
      searchParams.set('search_name', data.name.trim());
    }
    if (data.phoneNumber && data.phoneNumber.trim() !== '') {
      searchParams.set('search_phone', data.phoneNumber.trim());
    }
    const searchUrl = `?${searchParams.toString()}`;
    navigate(searchUrl);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="row" gap="2">
        <TextField.Root radius="none" placeholder="이름" size="2" {...register('name')} />
        <TextField.Root
          radius="none"
          placeholder="전화번호"
          size="2"
          {...register('phoneNumber')}
        />
        <Button type="submit" color="gray" variant="solid" size="2">
          <PiMagnifyingGlass />
        </Button>
      </Flex>
    </form>
  );
}
