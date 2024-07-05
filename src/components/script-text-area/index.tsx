import { Input, TextAreaProps } from '@arco-design/web-react';

interface ScriptTextAreaProps extends TextAreaProps {
  schemas: Array<Schema>;
}

export interface BasicSchema {
  name: string;
  export?: boolean;
}

export interface Enum extends BasicSchema {
  type: 'enum';
  values: Record<string, number | string>;
}

export interface Type extends BasicSchema {
  type: 'type';
  types: Array<string>;
  properties?: Record<string, string>;
}

export interface Interface extends BasicSchema {
  type: 'interface';
  properties: Record<string, string>;
}

export interface Const extends BasicSchema {
  type: 'const';
  valueType?: string;
  value: string | number | boolean;
}

export type Schema = Enum | Type | Interface | Const;

export default function ScriptTextArea({
  schemas,
  style,
}: ScriptTextAreaProps) {
  const lines: string[] = [];
  schemas.forEach(schema => {
    switch (schema.type) {
      case 'enum':
        lines.push(...generateEnum(schema));
        break;
      case 'type':
        lines.push(...generateType(schema));
        break;
      case 'interface':
        lines.push(...generateInterface(schema));
        break;
      case 'const':
        lines.push(...generateConst(schema));
        break;
      default:
        console.warn(`无效的类型：`, schema);
        break;
    }
  });

  function generateEnum(schema: Enum) {
    const exportPrefix = schema.export ? 'export ' : '';
    const lines: string[] = [];
    lines.push(`${exportPrefix}${schema.type} ${schema.name} {`);
    for (const key in schema.values) {
      const value = schema.values[key];
      const type = typeof value;
      let enumValue = '';
      if (type === 'number') {
        enumValue = `${value}`;
      } else {
        enumValue = `'${value}'`;
      }
      lines.push(`  ${key} = ${enumValue},`);
    }
    lines.push('}');
    return lines;
  }

  function generateType(schema: Type) {
    const exportPrefix = schema.export ? 'export ' : '';
    const lines: string[] = [];
    lines.push(`${exportPrefix}${schema.type} ${schema.name} = `);
    schema.types.forEach(type => {
      lines.push(`  | ${type}`);
    });
    lines.push(';');
    return lines;
  }

  function generateInterface(schema: Interface) {
    const exportPrefix = schema.export ? 'export ' : '';
    const lines: string[] = [];
    lines.push(`${exportPrefix}${schema.type} ${schema.name} {`);
    for (const key in schema.properties) {
      const type = schema.properties[key];
      lines.push(`  ${key}: ${type};`);
    }
    lines.push('}');
    return lines;
  }

  function generateConst(schema: Const) {
    const exportPrefix = schema.export ? 'export ' : '';
    const lines: string[] = [];
    let type = '';
    if (schema.valueType !== undefined) {
      type = `: ${schema.valueType}`;
    }
    const line = `${exportPrefix}const ${schema.name}${type} = ${schema.value};`;
    lines.push(line);
    return lines;
  }

  return (
    <Input.TextArea
      value={lines.join('\n')}
      disabled
      style={style}
      autoSize={true}
    />
  );
}
