import { useMemo, useState } from 'react';
import {
  Input,
  InputProps,
  Table,
  TableColumnProps,
  TextAreaProps,
} from '@arco-design/web-react';
import ScriptTextArea, {
  Schema,
  Enum,
  Type,
  Interface,
  Const,
} from './script-text-area';
import Flex from '@/components/flex';

const OptionSettingsPattern =
  /\[\/Script\/Pal\.PalGameWorldSettings\]\nOptionSettings=\((.*)\)/;

const IntegerPattern = /^\d+$/;
const FloatPattern = /^\d+\.\d{6}$/;

type FieldType =
  | 'Error'
  | 'string'
  | 'Integer'
  | 'Float'
  | 'boolean'
  | 'Difficulty'
  | 'DeathPenalty'
  | 'Platform'
  | 'LogFormatType';

interface Field {
  /**
   * 字段名
   */
  name: string;

  /**
   * 类型
   */
  type: FieldType;

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

  // const settingsStatus = useMemo<InputProps['status']>(() => {
  //   const matcher = OptionSettingsPattern.exec(settings);
  //   if (matcher === null) {
  //     return 'error';
  //   }
  //   return undefined;
  // }, [settings]);

  const schemas: Schema[] = [];

  schemas.push({
    name: 'Difficulty',
    type: 'type',
    types: ['"None"'],
  } as Type);

  schemas.push({
    name: 'DeathPenalty',
    type: 'type',
    types: ['"None"', '"Item"', '"ItemAndEquipment"', '"All"'],
  } as Type);

  schemas.push({
    name: 'Platform',
    type: 'type',
    types: ['"Steam"', '"Xbox"'],
  } as Type);

  schemas.push({
    name: 'LogFormatType',
    type: 'type',
    types: ['"Text"', '"Json"'],
  } as Type);

  schemas.push({
    name: 'Float',
    type: 'type',
    types: ['number'],
  } as Type);

  schemas.push({
    name: 'Integer',
    type: 'type',
    types: ['number'],
  } as Type);

  let settingsStatus: TextAreaProps['status'];
  const matcher = OptionSettingsPattern.exec(settings);
  const optionSettingsProperties: Record<string, string> = {};
  const optionSettingsKeys: string[] = [];
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
      if (valueType !== null) {
        optionSettingsProperties[key] = valueType;
        optionSettingsKeys.push(key);
      }
    });
  }

  function parseValueType(key: string, value: string): string {
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
    }

    return 'unknown';
  }

  schemas.push({
    name: 'OptionSettings',
    type: 'interface',
    properties: optionSettingsProperties,
  } as Interface);

  schemas.push({
    name: 'OptionSettingsKey',
    type: 'type',
    types: ['keyof OptionSettings'],
  } as Type);

  schemas.push({
    name: 'OptionSettingsKeys',
    type: 'const',
    valueType: 'OptionSettingsKey[]',
    value: JSON.stringify(optionSettingsKeys),
  } as Const);

  const fields = useMemo<Array<Field>>(() => {
    const data: Array<Field> = [];
    const matcher = OptionSettingsPattern.exec(settings);
    if (matcher !== null) {
      const values = matcher[1];
      const list = values.split(',');
      list.forEach(v => {
        const eqIndex = v.indexOf('=');
        const fieldName = v.substring(0, eqIndex);
        const value = v.substring(eqIndex + 1);

        let type: FieldType = 'Error';
        let convertedValue: string | boolean | number | null = null;
        const description: string | undefined = undefined;

        do {
          switch (fieldName) {
            case 'Difficulty':
            case 'DeathPenalty':
            case 'LogFormatType':
              type = fieldName;
              convertedValue = value;
              break;
            case 'AllowConnectPlatform':
              type = 'Platform';
              convertedValue = value;
              break;
            default:
              // Boolean
              switch (value) {
                case 'False':
                  type = 'boolean';
                  convertedValue = false;
                  break;
                case 'True':
                  type = 'boolean';
                  convertedValue = true;
                  break;
              }

              // Number
              const numValue = parseInt(value);
              if (!isNaN(numValue)) {
                convertedValue = numValue;
              }

              let numberMatcher = IntegerPattern.exec(value);
              if (numberMatcher !== null) {
                // Integer
                type = 'Integer';
                break;
              }

              numberMatcher = FloatPattern.exec(value);
              if (numberMatcher !== null) {
                // Float
                type = 'Float';
                break;
              }

              if (value.startsWith('"') && value.endsWith('"')) {
                type = 'string';
                convertedValue = value.substring(1, value.length - 1);
              }
          }
        } while (false);

        data.push({
          name: fieldName,
          type,
          defaultValue: convertedValue,
          description,
        });
      });
    }
    return data;
  }, [settings]);

  /*
  const script: string = useMemo<string>(() => {
    let lines: string[] = [];
    lines.push('type Float = number;');
    lines.push('type Integer = number;');
    lines.push('type Difficulty = "None";');
    lines.push(
      'type DeathPenalty = "None" | "Item" | "ItemAndEquipment" | "All";',
    );
    lines.push('type Platform = "Steam" | "Xbox";');
    lines.push('type LogFormatType = "Text" | "Json";');
    lines.push('');

    lines.push('export default interface OptionSettings {');

    const optionNames: string[] = [];
    fields.forEach(field => {
      lines.push(`  ${field.name}: ${field.type};`);
      optionNames.push(field.name);
    });
    lines.push('}');
    lines.push('');

    lines.push('export type OptionName = keyof OptionSettings;');
    lines.push(`export const OptionNames: OptionName[] = [`);
    optionNames.forEach(optName => {
      lines.push(`  "${optName}",`);
    });
    lines.push('];');
    lines.push('');

    lines.push('export const defaultOptionSettings: OptionSettings = {');

    lines.push('};');

    return lines.join('\n');
  }, [fields]);
  */

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
        <ScriptTextArea schemas={schemas} />
      </Flex>
    </Flex>
  );
};

export default Page;
