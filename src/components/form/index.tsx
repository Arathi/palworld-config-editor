/* eslint-disable react/no-unused-prop-types */

import { useState } from 'react';
import Flex from '@/components/flex';
import Slider from './slider';
import Select from './select';
import Switch from './switch';

export type FormItemAttrs =
  | NumberItemAttrs
  | StringItemAttrs
  | SliderItemAttrs
  | SelectItemAttrs
  | SwitchItemAttrs;

interface BasicItemAttrs {
  key: string;
  label: React.ReactNode;
  description?: React.ReactNode;
}

interface NumberItemAttrs extends BasicItemAttrs {
  type: 'number';
}

interface StringItemAttrs extends BasicItemAttrs {
  type: 'string';
}

interface SliderItemAttrs extends BasicItemAttrs {
  type: 'slider';
  min?: number;
  max?: number;
  step?: number;
}

interface SelectItemAttrs extends BasicItemAttrs {
  type: 'select';
  options: {
    value: string | number;
    label: React.ReactNode;
  }[];
}

interface SwitchItemAttrs extends BasicItemAttrs {
  type: 'switch';
  labels: [string, string];
}

export interface FormProps<FormData> {
  initialData: FormData;
  items: FormItemAttrs[];
  labelWidth?: number;
  onChange?: (patch: Partial<FormData>) => void;
}

export default function Form<FormData>({
  initialData,
  items,
  labelWidth = 100,
  onChange,
}: FormProps<FormData>) {
  const [data, setData] = useState<FormData>(initialData);

  type FormDataPatch = Partial<FormData>;
  // type FormDataKey = keyof FormDataPatch;

  function update(patch: FormDataPatch) {
    setData({
      ...data,
      ...patch,
    });
    if (onChange !== undefined) {
      onChange(patch);
    }
  }

  const children: React.ReactNode[] = [];

  function generateSelectItem({
    key,
    label,
    options,
  }: SelectItemAttrs): React.ReactNode {
    return (
      <Flex key={key} direction="row" align="center">
        <label
          style={{
            width: labelWidth,
          }}
        >
          {label}
        </label>
        <Select
          options={options}
          onChange={index => {
            const option = options[index];
            const { value } = option;
            const patch: FormDataPatch = {};
            // TODO 通过key的类型约束解决
            // @ts-expect-error
            patch[key] = value;
            update(patch);
          }}
        />
      </Flex>
    );
  }

  function generateSliderItem({
    key,
    label,
    min,
    max,
    step,
  }: SliderItemAttrs): React.ReactNode {
    return (
      <Flex key={key} direction="row" align="center">
        <label
          style={{
            width: labelWidth,
          }}
        >
          {label}
        </label>
        <Slider min={min} max={max} step={step} />
      </Flex>
    );
  }

  function generateSwitchItem({
    key,
    label,
    labels,
  }: SwitchItemAttrs): React.ReactNode {
    return (
      <Flex key={key} direction="row" align="center">
        <label
          style={{
            width: labelWidth,
          }}
        >
          {label}
        </label>
        <Switch labels={labels} />
      </Flex>
    );
  }

  items.forEach(item => {
    let child: React.ReactNode = null;
    switch (item.type) {
      case 'select':
        child = generateSelectItem(item);
        break;
      case 'slider':
        child = generateSliderItem(item);
        break;
      case 'switch':
        child = generateSwitchItem(item);
        break;
      default:
        console.warn(`未知的表单组件类型：${item.type}`);
        break;
    }
    if (child !== null) {
      children.push(child);
    }
  });

  return <form>{children}</form>;
}
