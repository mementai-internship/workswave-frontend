import { CheckboxGroup } from '@radix-ui/themes';
import React from 'react';

interface IProps {
  options: { name: string; id: number }[];
  value: { name: string; id: number }[];
  onChange: (e) => void;
}

export default function SuperManagerSettingCheckboxGroup({ options, value, onChange }: IProps) {
  return (
    <CheckboxGroup.Root
      defaultValue={value.map((v) => `${v.id}`)}
      onValueChange={(newData) => onChange(newData)}
      name="example"
      className="flex-row flex-wrap"
    >
      {options.map((option) => (
        <CheckboxGroup.Item key={option.id} className="w-[127px] mb-2" value={option.id.toString()}>
          {option.name}
        </CheckboxGroup.Item>
      ))}
    </CheckboxGroup.Root>
  );
}
