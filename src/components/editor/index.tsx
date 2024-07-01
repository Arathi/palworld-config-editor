import { HTMLAttributes, useState } from 'react';
import { Grid, Input, Slider } from '@arco-design/web-react';
import Flex from '../flex';
import OptionSettings from '@/domains/option-settings'; // defaultOptionSettings as DefaultOptionSettings,
import ScriptTextArea, {
  Interface,
  Schema,
} from '@/routes/generator/script-text-area';

type Props = HTMLAttributes<HTMLDivElement>;

const Editor: React.FC<Props> = ({}) => {
  const [optionSettings, setOptionSettings] = useState<OptionSettings>();

  return (
    <Flex direction="row" style={{ margin: 8 }} gap={8}>
      <Flex direction="column" flex={1}>
        <Input />
      </Flex>
    </Flex>
  );
};

export default Editor;
