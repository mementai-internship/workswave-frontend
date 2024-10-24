import * as Progress from '@radix-ui/react-progress';
import React from 'react';

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(5);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 88) {
          clearInterval(timer);
          return 88;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-80% w-screen">
      <Progress.Root
        className="relative h-[25px] w-[300px] overflow-hidden rounded-full bg-purple-30"
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: 'translateZ(0)',
        }}
        value={progress}
      >
        <Progress.Indicator
          className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-white transition-transform duration-[660ms]"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </div>
  );
};

export default ProgressDemo;
