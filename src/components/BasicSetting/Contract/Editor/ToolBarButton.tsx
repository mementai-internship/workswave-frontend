import React, { ComponentProps } from 'react';
import { IconType } from 'react-icons';

type TToolBarButtonProps = {
  icon: IconType;
  size?: number;
} & ComponentProps<'button'>;

export const ToolBarButton: React.FC<TToolBarButtonProps> = ({
  icon: Icon,
  size = 20,
  ...props
}: TToolBarButtonProps) => {
  return (
    <button
      onClick={props.onClick ? props.onClick : undefined}
      className={`duration-200 hover:scale-110 ${props.className}`}
      disabled={props.disabled}
    >
      <Icon size={size} />
    </button>
  );
};
