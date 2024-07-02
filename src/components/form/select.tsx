import { HTMLAttributes, useMemo, useState } from 'react';
import { IconLeft, IconRight } from '@arco-design/web-react/icon';
import Flex from '../flex';

const ColorGray = '#757C81';
const ColorActivatedUnderline = '#03B1E7';

interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: { value: number | string; label: React.ReactNode }[];
  onChange?: (index: number) => void;
}

function Select({ options, onChange, style }: SelectProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const text = useMemo(() => {
    const option = options[selectedIndex];
    return option.label;
  }, [selectedIndex, options]);

  function previous() {
    const index = selectedIndex - 1;
    if (index >= 0) {
      setSelectedIndex(index);
      if (onChange !== undefined) {
        onChange(index);
      }
    }
  }

  function next() {
    const index = selectedIndex + 1;
    if (index < options.length) {
      setSelectedIndex(index);
      if (onChange !== undefined) {
        onChange(index);
      }
    }
  }

  const lines: React.ReactNode[] = [];
  options.forEach((option, index) => {
    const backgroundColor =
      index === selectedIndex ? ColorActivatedUnderline : ColorGray;
    const line = (
      <div
        key={`option-${option.value}`}
        style={{
          flex: 1,
          height: 3,
          backgroundColor,
        }}
      />
    );
    lines.push(line);
  });

  return (
    <Flex flex={1} direction="row" align="center" style={style}>
      <IconLeft onClick={() => previous()} style={{ color: '#F9FCFE' }} />
      <Flex direction="column" align="center" flex={1}>
        <div style={{ flex: 1, color: '#f0f0f0' }}>{text}</div>
        <Flex direction="row" gap={2} style={{ height: 3 }}>
          {lines}
        </Flex>
      </Flex>
      <IconRight onClick={() => next()} style={{ color: '#F9FCFE' }} />
    </Flex>
  );
}

export default Select;
