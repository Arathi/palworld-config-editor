import { OptionSettingsKey } from './option-settings';

type ValueType = 'Integer' | 'Float' | 'boolean' | 'string';
type FormItemType = 'Input' | 'NumberInput' | 'Slider';

export interface OptionSettingsFormItem {
  name: OptionSettingsKey;
  valueType: ValueType;
  itemType: FormItemType;
}
