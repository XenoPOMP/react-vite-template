import { useState } from 'react';

type UseBooleanType = [
  value: boolean,
  toggleValue: () => void,
  changeValue: (newValue: boolean) => void,
];

const useBoolean = (initialValue?: boolean): UseBooleanType => {
  // prettier-ignore
  const [localValue, setLocalValue] = useState<boolean>(initialValue ? initialValue : false);

  return [
    localValue,
    () => setLocalValue(prevValue => !prevValue),
    newValue => setLocalValue(newValue),
  ];
};

export default useBoolean;
