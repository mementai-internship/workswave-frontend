type TBadgeColor = 'purple' | 'gray' | 'red' | 'lightPurple' | 'pink' | 'orange' | 'green' | 'blue';
type TBadgeRadius = 'small' | 'large' | 'full' | 'none';
type TBadgeVariant = 'solid' | 'outline';
type TBadgeSize = 1 | 2 | 3;

interface Props {
  color: TBadgeColor;
  size?: TBadgeSize;
  variant?: TBadgeVariant;
  radius?: TBadgeRadius;
  text: string;
}

const badgeTheme: {
  colors: { [key in TBadgeColor]: { [key in TBadgeVariant]: string } };
  radius: { [key in TBadgeRadius]: string };
  size: { [key in TBadgeSize]: string };
} = {
  colors: {
    purple: {
      solid: 'bg-purple-50 text-white',
      outline: 'bg-white border border-purple-50 text-purple-50',
    },
    lightPurple: {
      solid: 'bg-purple-30 text-white',
      outline: 'bg-white border border-purple-30 text-purple-30',
    },
    gray: {
      solid: 'bg-gray-500 text-white',
      outline: 'bg-white border border-gray-50 text-gray-50',
    },
    red: {
      solid: 'bg-red text-white',
      outline: 'bg-white border border-red text-red',
    },
    pink: {
      solid: 'bg-pink-50 text-black',
      outline: 'bg-white border border-pink-50 text-pink-50',
    },
    orange: {
      solid: 'bg-orange-50 text-black',
      outline: 'bg-white border border-orange-50 text-orange-50',
    },
    green: {
      solid: 'bg-green-50 text-black',
      outline: 'bg-white border border-green-50 text-green-50',
    },
    blue: {
      solid: 'bg-sky-blue-50 text-black',
      outline: 'bg-white border border-sky-blue-50 text-sky-blue-50',
    },
  },
  radius: {
    none: 'rounded-none',
    small: 'rounded',
    large: 'rounded-lg',
    full: 'rounded-full',
  },
  size: {
    1: 'py-1 px-2 text-xs',
    2: 'py-2 px-3 text-sm',
    3: 'py-3 px-4 text-md',
  },
};

export default function Badge({
  color,
  radius = 'none',
  size = 2,
  variant = 'solid',
  text,
}: Props) {
  return (
    <span
      className={`inline-block ${badgeTheme.colors[color][variant]} ${badgeTheme.radius[radius]} ${badgeTheme.size[size]}`}
    >
      {text}
    </span>
  );
}
