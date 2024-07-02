import { useState } from 'react';
import {
  Input,
  Table,
  TableColumnProps,
  TextAreaProps,
} from '@arco-design/web-react';
import ScriptTextArea, { Schema } from '@/components/script-text-area';
import Flex from '@/components/flex';
import items from '@/components/editor/items';

const OptionSettingsPattern =
  /\[\/Script\/Pal\.PalGameWorldSettings\]\nOptionSettings=\((.*)\)/;

const IntegerPattern = /^\d+$/;
const FloatPattern = /^\d+\.\d{6}$/;

type ValueType =
  | 'unknown'
  | 'string'
  | 'boolean'
  | 'Integer'
  | 'Float'
  | string;

interface Field {
  /**
   * 字段名
   */
  name: string;

  /**
   * 类型
   */
  type: string;

  /**
   * 默认值
   */
  defaultValue: string | boolean | number | null;

  /**
   * 描述
   */
  description?: string;
}

const Page = () => {
  const [settings, setSettings] = useState('');

  const schemas: Schema[] = [];

  schemas.push({
    name: 'Difficulty',
    export: true,
    type: 'type',
    types: ['"None"'],
  });

  schemas.push({
    name: 'DeathPenalty',
    export: true,
    type: 'type',
    types: ['"None"', '"Item"', '"ItemAndEquipment"', '"All"'],
  });

  schemas.push({
    name: 'Platform',
    export: true,
    type: 'type',
    types: ['"Steam"', '"Xbox"'],
  });

  schemas.push({
    name: 'LogFormatType',
    export: true,
    type: 'type',
    types: ['"Text"', '"Json"'],
  });

  schemas.push({
    name: 'Float',
    type: 'type',
    types: ['number'],
  });

  schemas.push({
    name: 'Integer',
    type: 'type',
    types: ['number'],
  });

  let settingsStatus: TextAreaProps['status'];
  const matcher = OptionSettingsPattern.exec(settings);
  const optionSettingsProperties: Record<string, string> = {};
  const optionSettingsKeys: string[] = [];
  const defaultValue: Record<string, any> = {};

  if (matcher === null) {
    console.warn(`无效的`);
    settingsStatus = 'error';
  } else {
    const pairs = matcher[1].split(',');
    pairs.forEach(pair => {
      const eqIndex = pair.indexOf('=');
      const key = pair.substring(0, eqIndex);
      const value = pair.substring(eqIndex + 1);
      const valueType = parseValueType(key, value);
      let jsv: string | number | boolean | null = null;
      switch (valueType) {
        case 'string':
          jsv = value.substring(1, value.length - 1);
          break;
        case 'boolean':
          jsv = value === 'True';
          break;
        case 'Integer':
        case 'Float':
          jsv = Number(value);
          break;
        default:
          jsv = value;
          break;
      }
      if (valueType !== null) {
        optionSettingsProperties[key] = valueType;
        optionSettingsKeys.push(key);
        defaultValue[key] = jsv;
      }
    });
  }

  function parseValueType(key: string, value: string): ValueType {
    if (value.startsWith('"') && value.startsWith('"')) {
      return 'string';
    }

    if (value === 'True' || value === 'False') {
      return 'boolean';
    }

    if (IntegerPattern.exec(value) !== null) {
      return 'Integer';
    }

    if (FloatPattern.exec(value) !== null) {
      return 'Float';
    }

    switch (key) {
      case 'Difficulty':
      case 'DeathPenalty':
      case 'LogFormatType':
        return key;
      case 'AllowConnectPlatform':
        return 'Platform';
      default:
        return 'unknown';
    }
  }

  schemas.push({
    name: 'OptionSettings',
    export: true,
    type: 'interface',
    properties: optionSettingsProperties,
  });

  schemas.push({
    name: 'OptionSettingsKey',
    export: true,
    type: 'type',
    types: ['keyof OptionSettings'],
  });

  schemas.push({
    name: 'OptionSettingsKeys',
    export: true,
    type: 'const',
    valueType: 'OptionSettingsKey[]',
    value: JSON.stringify(optionSettingsKeys, null, '  '),
  });

  schemas.push({
    name: 'Default',
    export: true,
    type: 'const',
    valueType: 'OptionSettings',
    value: JSON.stringify(defaultValue, null, '  '),
  });

  const fields: Field[] = [];
  for (const key in optionSettingsProperties) {
    const fieldDefaultValue = defaultValue[key];
    const item = items.find(item => item.key === key);
    const description = `${item?.label}`;
    const field = {
      name: key,
      type: optionSettingsProperties[key],
      defaultValue: fieldDefaultValue,
      description,
    };
    fields.push(field);
  }

  const columns: TableColumnProps<Field>[] = [
    {
      title: '字段',
      dataIndex: 'name',
      width: 305,
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: 140,
    },
    {
      title: '默认值',
      dataIndex: 'defaultValue',
      width: 330,
      render: value => {
        return `${value}`;
      },
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
  ];

  return (
    <Flex direction="column" gap={8} style={{ margin: 8 }}>
      <Input.TextArea
        placeholder="设置文件内容"
        value={settings}
        status={settingsStatus}
        onChange={value => setSettings(value)}
        autoSize={{
          minRows: 3,
          maxRows: 3,
        }}
      />
      <Flex flex={1} gap={8}>
        <Table
          columns={columns}
          data={fields}
          style={{ flex: 3 }}
          pagination={false}
          border
          borderCell
        />
        <ScriptTextArea schemas={schemas} style={{ flex: 1 }} />
      </Flex>
    </Flex>
  );
};

export default Page;
