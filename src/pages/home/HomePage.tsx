import Title from '@/components/Common/Title';
import { Button } from '@radix-ui/themes';
import React from 'react';

export default function HomePage() {
  console.log('HomePage');
  return (
    <div>
      <Title content="Home" />
      <Title content="Home" />
      <Button>Click me</Button>
    </div>
  );
}
