import OptionSettings, { OptionName } from './option-settings';

type ValueType = 'Integer' | 'Float' | 'boolean' | 'string';
type FormItemType = 'Input' | 'NumberInput' | 'Slider';

interface OptionSettingsFormItem {
  name: OptionName;
  valueType: ValueType;
  itemType: FormItemType;
}
