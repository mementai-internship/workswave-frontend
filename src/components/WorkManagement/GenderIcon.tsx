import React from 'react';
import { PiGenderFemaleBold, PiGenderMaleBold } from 'react-icons/pi';

export default function GenderIcon({ gender }: { gender: string }) {
  return gender === 'woman' ? (
    <PiGenderFemaleBold className="text-pink-600" />
  ) : (
    <PiGenderMaleBold className="text-blue-500" />
  );
}
