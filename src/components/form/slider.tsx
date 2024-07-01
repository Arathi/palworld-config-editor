import { HTMLAttributes, useState } from 'react';

interface SliderProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

export default function Slider({ initialValue = 0, onChange }: SliderProps) {
  const [value, setValue] = useState<number>(initialValue);

  return (
    <div>
      <input
        value={value}
        type="range"
        onChange={e => {
          const value = parseInt(e.currentTarget.value);
          setValue(value);
          if (onChange !== undefined) {
            onChange(value);
          }
        }}
      />
    </div>
  );
}
