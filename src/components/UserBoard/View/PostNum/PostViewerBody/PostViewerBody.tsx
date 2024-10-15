import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IPostViewerBodyProps {
  content: string;
}

export default function PostViewerBody({ content }: IPostViewerBodyProps) {
  return (
    <div className=" bg-white">
      <ReactQuill value={content} readOnly={true} theme="snow" modules={{ toolbar: false }} />
    </div>
  );
}
