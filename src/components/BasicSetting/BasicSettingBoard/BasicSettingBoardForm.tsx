import Title from '@/components/Common/Title';
import { AUTHORITIES_WITH_OPTION } from '@/constants/authorities';
import { IBoardPostRequest } from '@/models/basicSetting.model';
import { Button, Select, TextArea, TextField, Tooltip } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';
import { PiInfo } from 'react-icons/pi';

export default function BasicSettingBoardForm() {
  const { control, handleSubmit } = useForm<IBoardPostRequest>({
    defaultValues: {
      categoryName: '',
      categoryDesc: '',
      readAuthority: '사원',
      writeAuthority: '사원',
      notifyAuthority: 'MSO 최고권한',
      isPartDivision: false,
      isCommentDivision: true,
    },
  });

  const handleSubmitForm = (e) => {
    console.log('called');
    console.log(e);
  };

  return (
    <section className="min-w-[500px] bg-white border flex-[2]">
      <div className="flex items-center gap-x-4 px-10 py-5">
        <Title content="게시판 카테고리 추가하기" />
      </div>
      <div className="border-t p-10 flex flex-col gap-y-3">
        <div className="flex items-center">
          <label htmlFor="category-name" className="w-40 text-gray-500 whitespace-nowrap">
            카테고리 이름
          </label>
          <Controller
            control={control}
            name="categoryName"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField.Root
                id="category-name"
                placeholder="카테고리를 입력해주세요."
                size="3"
                radius="none"
                className="w-full"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              >
                <TextField.Slot px="1"></TextField.Slot>
              </TextField.Root>
            )}
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="category-description" className="w-40 text-gray-500 whitespace-nowrap">
            카테고리 설명
          </label>
          <Controller
            control={control}
            name="categoryDesc"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextArea
                id="category-description"
                placeholder="설명을 입력해주세요"
                className="w-full"
                radius="none"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </div>
        <div className="flex items-center">
          <label className="w-40 text-gray-500 whitespace-nowrap">열람권한</label>
          <div className="w-full">
            <Controller
              control={control}
              name="readAuthority"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Select.Root defaultValue={value} onValueChange={onChange} size="3">
                  <Select.Trigger variant="surface" radius="none" className="w-full" />
                  <Select.Content>
                    <Select.Group>
                      {AUTHORITIES_WITH_OPTION.map(({ auth, option }) => (
                        <Select.Item key={auth} value={auth}>
                          {option}
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              )}
            />
          </div>
        </div>
        <div className="flex items-center">
          <label className="w-40 text-gray-500 whitespace-nowrap">글쓰기권한</label>
          <div className="w-full">
            <Controller
              control={control}
              name="writeAuthority"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Select.Root defaultValue={value} onValueChange={onChange} size="3">
                  <Select.Trigger variant="surface" radius="none" className="w-full" />
                  <Select.Content>
                    <Select.Group>
                      {AUTHORITIES_WITH_OPTION.map(({ auth, option }) => (
                        <Select.Item key={auth} value={auth}>
                          {option}
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              )}
            />
          </div>
        </div>
        <div className="flex items-center">
          <label className="w-40 text-gray-500 whitespace-nowrap">공지권한</label>
          <div className="w-full">
            <Controller
              control={control}
              name="notifyAuthority"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Select.Root defaultValue={value} onValueChange={onChange} size="3">
                  <Select.Trigger variant="surface" radius="none" className="w-full" />
                  <Select.Content>
                    <Select.Group>
                      {AUTHORITIES_WITH_OPTION.map(({ auth, option }) => (
                        <Select.Item key={auth} value={auth}>
                          {option}
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              )}
            />
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-40 text-gray-500 whitespace-nowrap flex items-center gap-x-1">
            파트구분
            <Tooltip
              content={`선택 된 파트에게만 게시물이 공개됩니다. (게시물 작성시 선택)`}
              className="bg-purple-50"
            >
              <div className="cursor-pointer">
                <PiInfo size="20" />
              </div>
            </Tooltip>
          </label>
          <div className="w-full flex gap-x-2">
            <Controller
              control={control}
              name="isPartDivision"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <div className="w-full flex gap-x-2">
                  <Button
                    variant="outline"
                    size="3"
                    color={value ? 'purple' : 'gray'}
                    radius="none"
                    onClick={() => onChange(true)}
                    className="flex-1 h-12 cursor-pointer"
                  >
                    사용
                  </Button>
                  <Button
                    variant="outline"
                    size="3"
                    color={!value ? 'purple' : 'gray'}
                    radius="none"
                    onClick={() => onChange(false)}
                    className="flex-1 h-12 cursor-pointer"
                  >
                    미사용
                  </Button>
                </div>
              )}
            />
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-40 text-gray-500 whitespace-nowrap flex items-center gap-x-1">
            댓글사용여부
            <Tooltip content="댓글 사용 시 게시물 작성할 때 댓글 사용 여부가 한번 더 뜹니다.">
              <div className="cursor-pointer">
                <PiInfo size="20" />
              </div>
            </Tooltip>
          </label>
          <div className="w-full flex gap-x-2">
            <Controller
              control={control}
              name="isCommentDivision"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <div className="w-full flex gap-x-2">
                  <Button
                    variant="outline"
                    size="3"
                    color={value ? 'purple' : 'gray'}
                    radius="none"
                    onClick={() => onChange(true)}
                    className="flex-1 h-12 cursor-pointer"
                  >
                    사용
                  </Button>
                  <Button
                    variant="outline"
                    size="3"
                    color={!value ? 'purple' : 'gray'}
                    radius="none"
                    onClick={() => onChange(false)}
                    className="flex-1 h-12 cursor-pointer"
                  >
                    미사용
                  </Button>
                </div>
              )}
            />
          </div>
        </div>
        <Button
          onClick={handleSubmit(handleSubmitForm)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(handleSubmitForm)}
          variant="solid"
          size="3"
          radius="small"
          className="w-40 h-10 mx-auto my-10 bg-indigo-950 cursor-pointer hover:bg-opacity-90"
        >
          저장하기
        </Button>
      </div>
    </section>
  );
}
