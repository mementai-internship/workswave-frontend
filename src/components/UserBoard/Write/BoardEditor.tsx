import * as Form from '@radix-ui/react-form';
import { Button, TextField } from '@radix-ui/themes';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface FormData {
  title: string;
  content: string;
}

function BoardEditor() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = (data: FormData) => {
    // 여기에 게시글 제출 로직을 구현합니다
    console.log('제목:', data.title);
    console.log('내용:', data.content);
  };

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Form.Field name="title">
        <Form.Label>제목</Form.Label>
        <Form.Control asChild>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField.Root size="3" type="text" {...field} placeholder="제목을 입력하세요" />
            )}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="content" className="mb-4">
        <Form.Label>내용</Form.Label>
        <Form.Control asChild>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <div className="h-[400px] mb-12">
                <ReactQuill
                  {...field}
                  placeholder="내용을 입력하세요"
                  className="h-full "
                  modules={{
                    toolbar: [
                      [{ header: '1' }, { header: '2' }, { font: [] }],
                      [{ size: [] }],
                      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['link', 'image', 'video'],
                      ['clean'],
                    ],
                  }}
                />
              </div>
            )}
          />
        </Form.Control>
      </Form.Field>
      <Button type="submit" className="cursor-pointer bg-purple-50">
        게시하기
      </Button>
    </Form.Root>
  );
}

export default BoardEditor;
