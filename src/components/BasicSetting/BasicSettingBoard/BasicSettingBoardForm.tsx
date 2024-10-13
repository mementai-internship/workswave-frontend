import Title from '@/components/Common/Title';
import { AUTHORITIES_WITH_OPTION } from '@/constants/authorities';
import { IBoardPostRequest } from '@/models/basicSetting.model';
import { Button, Select, TextArea, TextField, Tooltip } from '@radix-ui/themes';
import { Control, Controller, UseFormSetValue } from 'react-hook-form';
import { PiInfo } from 'react-icons/pi';

interface IPropsType {
  control: Control<IBoardPostRequest>;
  setValue: UseFormSetValue<IBoardPostRequest>;
}

/**
 * TODO: 수정 시 받을 props추가
 */
export default function BasicSettingBoardForm({ control, setValue }: IPropsType) {
  return (
    <>
      <div className="flex items-center gap-x-4 px-10 py-5">
        <Title content="게시판 카테고리 추가하기" />
      </div>
      <div className="border-t p-10 flex flex-col gap-y-3">
        <div className="flex items-center">
          <label
            htmlFor="category-name"
            aria-label="카테고리 이름"
            className="w-40 text-gray-500 whitespace-nowrap"
          >
            카테고리 이름
          </label>
          <Controller
            control={control}
            name="categoryName"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField.Root
                id="category-name"
                placeholder="카테고리를 입력해주세요."
                size="3"
                radius="none"
                className="w-full"
                value={value}
                onChange={onChange}
                required
              >
                <TextField.Slot px="1"></TextField.Slot>
              </TextField.Root>
            )}
          />
        </div>

        <div className="flex items-center">
          <label
            htmlFor="category-description"
            aria-label="카테고리 설명"
            className="w-40 text-gray-500 whitespace-nowrap"
          >
            카테고리 설명
          </label>
          <Controller
            control={control}
            name="categoryDesc"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextArea
                id="category-description"
                placeholder="설명을 입력해주세요."
                className="w-full"
                size="3"
                radius="none"
                value={value}
                onChange={onChange}
                required
              />
            )}
          />
        </div>
        <div className="flex items-center">
          <label aria-label="열람 권한" className="w-40 text-gray-500 whitespace-nowrap">
            열람권한
          </label>
          <div className="w-full">
            <Controller
              control={control}
              name="readAuthority"
              render={({ field: { onChange, value } }) => (
                <Select.Root value={value} onValueChange={onChange} size="3">
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
          <label aria-label="글쓰기 권한" className="w-40 text-gray-500 whitespace-nowrap">
            글쓰기권한
          </label>
          <div className="w-full">
            <Controller
              control={control}
              name="writeAuthority"
              render={({ field: { onChange, value } }) => (
                <Select.Root value={value} onValueChange={onChange} size="3">
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
          <label aria-label="공지 권한" className="w-40 text-gray-500 whitespace-nowrap">
            공지권한
          </label>
          <div className="w-full">
            <Controller
              control={control}
              name="notifyAuthority"
              render={({ field: { onChange, value } }) => (
                <Select.Root value={value} onValueChange={onChange} size="3">
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
              content="선택 된 파트에게만 게시물이 공개됩니다. (게시물 작성시 선택)"
              className="bg-purple-50"
            >
              <button type="button" aria-label="파트 구분 정보">
                <PiInfo size="20" aria-hidden="true" />
              </button>
            </Tooltip>
          </label>
          <div className="w-full flex gap-x-2">
            <Controller
              control={control}
              name="partDivision"
              render={({ field: { value } }) => (
                <div className="w-full flex gap-x-2">
                  <Button
                    variant="outline"
                    size="3"
                    color={value === 'use' ? 'purple' : 'gray'}
                    radius="none"
                    onClick={() => setValue('partDivision', 'use')}
                    className="flex-1 h-12 cursor-pointer"
                  >
                    사용
                  </Button>
                  <Button
                    variant="outline"
                    size="3"
                    color={value === 'no-use' ? 'purple' : 'gray'}
                    radius="none"
                    onClick={() => setValue('partDivision', 'no-use')}
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
              <button type="button" aria-label="댓글 사용 여부 정보">
                <PiInfo size="20" />
              </button>
            </Tooltip>
          </label>
          <div className="w-full flex gap-x-2">
            <Controller
              control={control}
              name="commentDivision"
              render={({ field: { value } }) => (
                <div className="w-full flex gap-x-2">
                  <Button
                    variant="outline"
                    size="3"
                    color={value === 'use' ? 'purple' : 'gray'}
                    radius="none"
                    onClick={() => setValue('commentDivision', 'use')}
                    className="flex-1 h-12 cursor-pointer"
                  >
                    사용
                  </Button>
                  <Button
                    variant="outline"
                    size="3"
                    color={value === 'no-use' ? 'purple' : 'gray'}
                    radius="none"
                    onClick={() => setValue('commentDivision', 'no-use')}
                    className="flex-1 h-12 cursor-pointer"
                  >
                    미사용
                  </Button>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}
