/* eslint-disable @typescript-eslint/no-unused-vars */

import { HTMLAttributes, useMemo, useState } from 'react';
import Flex from '@/components/flex';

interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export default function Slider({
  initialValue = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}: SliderProps) {
  const [value, setValue] = useState<number>(initialValue);

  const percent = useMemo<number>(() => {
    const delta = max - min;
    if (delta <= 0) {
      return 0;
    }
    return (value * 100) / delta;
  }, [value, min, max]);

  // TODO 监听滚轮上事件
  function increase() {
    let changed = value + step;
    if (changed > max) {
      changed = max;
    }
    setValue(changed);
    if (onChange !== undefined) {
      onChange(changed);
    }
  }

  // TODO 监听滚轮下事件
  function decrease() {
    let changed = value - step;
    if (changed < min) {
      changed = min;
    }
    setValue(changed);
    if (onChange !== undefined) {
      onChange(changed);
    }
  }

  return (
    <Flex
      align="center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: 50,
      }}
    >
      <div style={{ color: '#ffffff', width: 80 }}>{value}</div>
      <div style={{ display: 'flex', flexDirection: 'row', width: 500 }}>
        <div
          style={{
            width: `${percent}%`,
            height: 5,
            backgroundColor: '#EDF1F5',
          }}
        />
        <div
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}
          ></div>
        </div>
        <div
          style={{
            width: `${100 - percent}%`,
            height: 5,
            backgroundColor: '#585E63',
          }}
        />
      </div>
    </Flex>
  );
}
