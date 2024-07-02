import { OptionSettingsKey } from '@/domains/option-settings';

type FormItemOption =
  | BasicOption
  | StringOption
  | NumberOption
  | SliderOption
  | SelectOption
  | SwitchOption;

type FormItemType =
  | 'none'
  | 'string'
  | 'number'
  | 'slider'
  | 'select'
  | 'switch';

interface BasicOption {
  title: string;
  description?: string;
  type: FormItemType;
}

interface StringOption extends BasicOption {
  type: 'string';
}

interface NumberOption extends BasicOption {
  type: 'number';
  min: number;
  max: number;
}

interface SliderOption extends BasicOption {
  type: 'slider';
  min: number;
  max: number;
  step: number;
}

interface SelectOption extends BasicOption {
  type: 'select';
  options: {
    title: string;
    value: number | string;
  }[];
}

interface SwitchOption extends BasicOption {
  type: 'switch';
  options: [string, string];
}

export const formItemOptions: Partial<
  Record<OptionSettingsKey, FormItemOption>
> = {
  DayTimeSpeedRate: {
    title: '白天流逝速度',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  NightTimeSpeedRate: {
    title: '夜晚流逝速度',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  AutoSaveSpan: {
    title: '自动保存间隔',
    type: 'select',
    options: [
      {
        title: '30秒',
        value: 30,
      },
      {
        title: '30分钟',
        value: 30 * 60,
      },
    ],
  },
  ExpRate: {
    title: '经验值倍率',
    type: 'slider',
    min: 0.1,
    max: 20,
    step: 0.1,
  },
  PalCaptureRate: {
    title: '捕获概率倍率',
    type: 'slider',
    min: 0.5,
    max: 2,
    step: 0.1,
  },
  PalSpawnNumRate: {
    title: '帕鲁出现数量倍率',
    description: '※提高帕鲁出现数量将导致游戏效能下降',
    type: 'slider',
    min: 0.5,
    max: 3,
    step: 0.1,
  },
  PalDamageRateAttack: {
    title: '帕鲁攻击伤害倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PalDamageRateDefense: {
    title: '帕鲁承受伤害倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PalStomachDecreaceRate: {
    title: '帕鲁饱食度降低倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PalStaminaDecreaceRate: {
    title: '帕鲁耐力降低倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PalAutoHPRegeneRate: {
    title: '帕鲁生命值自然回复倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PalAutoHpRegeneRateInSleep: {
    title: '帕鲁睡眠时生命值回复倍率',
    description: '（帕鲁终端中的生命值回复倍率）',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PlayerDamageRateAttack: {
    title: '玩家攻击伤害倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PlayerDamageRateDefense: {
    title: '玩家承受伤害倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PlayerStomachDecreaceRate: {
    title: '玩家饱食度降低倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PlayerStaminaDecreaceRate: {
    title: '玩家耐力降低倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PlayerAutoHPRegeneRate: {
    title: '玩家生命值自然回复倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  PlayerAutoHpRegeneRateInSleep: {
    title: '玩家睡眠时生命值回复倍率',
    type: 'slider',
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  BuildObjectDamageRate: {
    title: '对建筑伤害倍率',
    type: 'slider',
    min: 0.5,
    max: 3,
    step: 0.1,
  },
  BuildObjectDeteriorationDamageRate: {
    title: '建筑的劣化速度倍率',
    type: 'slider',
    min: 0,
    max: 10,
    step: 0.1,
  },
  DropItemMaxNum: {
    title: '世界内的掉落物上限',
    type: 'slider',
    min: 0,
    max: 5000,
    step: 0.1,
  },
  CollectionDropRate: {
    title: '道具采集量倍率',
    type: 'slider',
    min: 0.5,
    max: 3,
    step: 0.1,
  },
  CollectionObjectHpRate: {
    title: '可采集物品生命值倍率',
    type: 'slider',
    min: 0.5,
    max: 3,
    step: 0.1,
  },
  CollectionObjectRespawnSpeedRate: {
    title: '可采集物品刷新间隔',
    type: 'slider',
    min: 0.5,
    max: 3,
    step: 0.1,
  },
  EnemyDropItemRate: {
    title: '道具掉落量倍率',
    type: 'slider',
    min: 0.5,
    max: 3,
    step: 0.1,
  },
  PalEggDefaultHatchingTime: {
    title: '巨大蛋孵化所需时间（小时）',
    description: '※其他蛋也会相应改变孵化时间。',
    type: 'slider',
    min: 0,
    max: 240,
    step: 0.1,
  },
  bEnableInvaderEnemy: {
    title: '是否会发生袭击事件？',
    type: 'switch',
    options: ['OFF', 'ON'],
  },
  DeathPenalty: {
    title: '死亡惩罚',
    type: 'select',
    options: [
      {
        title: '不掉落任何东西',
        value: 'None',
      },
      {
        title: '掉落装备以外的道具',
        value: 'Item',
      },
      {
        title: '掉落所有道具',
        value: 'ItemAndEquipment',
      },
      {
        title: '掉落所有道具及队伍内帕鲁',
        value: 'All',
      },
    ],
  },
  GuildPlayerMaxNum: {
    title: '公会人数上限',
    type: 'slider',
    min: 1,
    max: 100,
    step: 1,
  },
  BaseCampMaxNumInGuild: {
    title: '各公会的最大据点数',
    description: '※增加上限将会影响处理性能',
    type: 'slider',
    min: 3,
    max: 10,
    step: 1,
  },
  BaseCampWorkerMaxNum: {
    title: '据点工作帕鲁最大数',
    description: '※增加上限将会影响处理性能',
    type: 'slider',
    min: 1,
    max: 50,
    step: 1,
  },
};
