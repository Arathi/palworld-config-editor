import { HTMLAttributes, useState } from 'react';
import { Input } from '@arco-design/web-react';
import items from './items';
import Flex from '@/components/flex';
import Form from '@/components/form';
import OptionSettings, {
  Default as DefaultOptionSettings,
} from '@/domains/option-settings';

interface EditorProps extends HTMLAttributes<HTMLDivElement> {}

const Editor: React.FC<EditorProps> = ({ style }) => {
  const [optionSettings, setOptionSettings] = useState<OptionSettings>(
    DefaultOptionSettings,
  );

  return (
    <Flex
      direction="row"
      gap={8}
      style={{ margin: 8, height: '100%', ...style }}
    >
      <Flex direction="column" flex={3} style={{ overflowY: 'hidden' }}>
        <Form
          initialData={optionSettings}
          items={items}
          onChange={patch => {
            setOptionSettings({
              ...optionSettings,
              ...patch,
            });
          }}
        />
      </Flex>
      <Input.TextArea autoSize={true} style={{ flex: 1, height: '100%' }} />
    </Flex>
  );
};

export default Editor;
