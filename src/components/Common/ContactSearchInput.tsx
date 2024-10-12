import { Button, Flex, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { PiMagnifyingGlass } from 'react-icons/pi';

export default function ContactSearchInput() {
  const { handleSubmit, register } = useForm();

  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="row" gap="2">
        <TextField.Root radius="none" placeholder="이름" size="1" {...register('name')} />
        <TextField.Root
          radius="none"
          placeholder="전화번호"
          size="1"
          {...register('phoneNumber')}
        />
        <Button type="submit" color="gray" variant="solid" size="1">
          <PiMagnifyingGlass />
        </Button>
      </Flex>
    </form>
  );
}
