import { Input, TextAreaProps } from '@arco-design/web-react';

interface Props extends TextAreaProps {
  schemas: Array<Schema>;
}

export type SchemaType = 'enum' | 'type' | 'interface' | 'const';

export interface Schema {
  name: string;
  type: SchemaType;
}

export interface Enum extends Schema {
  type: 'enum';
  values: Record<string, number | string>;
}

export interface Type extends Schema {
  type: 'type';
  types: Array<string>;
  properties: Record<string, string>;
}

export interface Interface extends Schema {
  type: 'interface';
  properties: Record<string, string>;
}

export interface Const extends Schema {
  type: 'const';
  valueType?: string;
  value: string | number | boolean;
}

export default function ScriptTextArea({ schemas, style }: Props) {
  const lines: string[] = [];
  schemas.forEach(schema => {
    switch (schema.type) {
      case 'enum':
        lines.push(...generateEnum(schema as Enum));
        break;
      case 'type':
        lines.push(...generateType(schema as Type));
        break;
      case 'interface':
        lines.push(...generateInterface(schema as Interface));
        break;
      case 'const':
        lines.push(...generateConst(schema as Const));
        break;
    }
  });

  function generateEnum(schema: Enum) {
    const lines: string[] = [];
    lines.push(`${schema.type} ${schema.name} {`);
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
    const lines: string[] = [];
    lines.push(`${schema.type} ${schema.name} = `);
    schema.types.forEach(type => {
      lines.push(`  | ${type}`);
    });
    lines.push(';');
    return lines;
  }

  function generateInterface(schema: Interface) {
    const lines: string[] = [];
    lines.push(`${schema.type} ${schema.name} {`);
    for (const key in schema.properties) {
      const type = schema.properties[key];
      lines.push(`  ${key}: ${type};`);
    }
    lines.push('}');
    return lines;
  }

  function generateConst(schema: Const) {
    const lines: string[] = [];
    let type = '';
    if (schema.valueType !== undefined) {
      type = `: ${schema.valueType}`;
    }
    const line = `const ${schema.name}${type} = ${schema.value};`;
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
