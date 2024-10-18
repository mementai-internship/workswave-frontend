export type TValidateOnBlurForInputNumberType = '원' | '시' | '분' | '일' | '월' | '시간';

export const validateOnBlurForInputNumber = (
  value: string | number,
  type: TValidateOnBlurForInputNumberType,
  limitToTwoDigits = false
) => {
  const numberValue = Number(value);
  let finalValue = numberValue;
  if (isNaN(numberValue)) return '0';

  if (finalValue < 0) {
    finalValue = 0;
  } else if (type === '시' || (type === '시간' && numberValue > 23)) {
    finalValue = 23;
  } else if (type === '분' && numberValue > 59) {
    finalValue = 59;
  } else if (type === '일' && numberValue > 31) {
    finalValue = 31;
  } else if (type === '월' && numberValue > 12) {
    finalValue = 12;
  }

  if (limitToTwoDigits) return finalValue.toString().padStart(2, '0').slice(0, 2);

  return finalValue.toString();
};
