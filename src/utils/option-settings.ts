import OptionSettings, {
  Default,
  OptionSettingsKey,
} from '@/domains/option-settings';

export function parse(ini: string): OptionSettings | null {
  console.info(`正在解析：`, ini);
  return null;
}

export function stringify(optionSettings: OptionSettings): string {
  const kvList: string[] = [];
  for (const key in Default) {
    const osk = key as OptionSettingsKey;
    const value = optionSettings[osk];
    kvList.push(`${key}=${value}`);
  }
  const kvs = kvList.join(',');
  return `[/Script/Pal.PalGameWorldSettings]\nOptionSettings=(${kvs})`;
}
