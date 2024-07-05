import { useState } from 'react';
import Flex from '@/components/flex';

const ColorGray = '#757C81';
const ColorActivatedBackground = '#0A6490';
const ColorActivatedUnderline = '#03B1E7';
const ColorActivatedText = '#FFFFFF';

interface SwitchProps {
  initialValue?: boolean;
  labels?: [React.ReactNode, React.ReactNode];
}

function Switch({ initialValue = false, labels = ['OFF', 'ON'] }: SwitchProps) {
  const [value, setValue] = useState<boolean>(initialValue);

  return (
    <Flex gap={2}>
      <SwitchButton
        value={false}
        label={labels[0]}
        activated={!value}
        onClick={() => setValue(false)}
      />
      <SwitchButton
        value={true}
        label={labels[1]}
        activated={value}
        onClick={() => setValue(true)}
      />
    </Flex>
  );
}

interface SwitchButtonProps {
  value: boolean;
  label?: React.ReactNode;
  activated?: boolean;
  onClick?: () => void;
}

function SwitchButton({
  value,
  label = value ? 'ON' : 'OFF',
  activated = false,
  onClick,
}: SwitchButtonProps) {
  let backgroundColor: string | undefined;
  let underlineColor: string = ColorGray;
  let color: string = ColorGray;
  if (activated) {
    backgroundColor = ColorActivatedBackground;
    underlineColor = ColorActivatedUnderline;
    color = ColorActivatedText;
  }

  return (
    <Flex
      direction="column"
      flex={1}
      style={{ height: 40 }}
      onClick={() => {
        console.info(`点击【${label}】按钮`);
        if (onClick !== undefined) {
          onClick();
        }
      }}
    >
      <Flex
        flex={1}
        justify="center"
        align="center"
        style={{ backgroundColor, color }}
      >
        {label}
      </Flex>
      <div
        style={{
          height: 4,
          backgroundColor: underlineColor,
        }}
      />
    </Flex>
  );
}

export default Switch;
