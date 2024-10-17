import React from 'react';

interface IProps {
  label: string;
  children: React.ReactNode;
  extraChildren?: React.ReactNode;
}

export default function WageFieldset({ label, children, extraChildren }: IProps) {
  return (
    <fieldset className="flex flex-col">
      <div className="flex w-full items-center mb-1">
        <label className="text-sm font-bold w-2/6 shrink-0">{label}</label>
        <div className="w-full"> {children}</div>
      </div>

      {extraChildren && <div className="flex flex-col gap-1 pl-[33.3%]">{extraChildren}</div>}
    </fieldset>
  );
}
