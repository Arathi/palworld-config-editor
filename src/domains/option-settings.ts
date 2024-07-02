/* eslint-disable @typescript-eslint/naming-convention */

export type Difficulty = 'None';
export type DeathPenalty = 'None' | 'Item' | 'ItemAndEquipment' | 'All';
export type Platform = 'Steam' | 'Xbox';
export type LogFormatType = 'Text' | 'Json';
type Float = number;
type Integer = number;

export default interface OptionSettings {
  Difficulty: Difficulty;
  DayTimeSpeedRate: Float;
  NightTimeSpeedRate: Float;
  ExpRate: Float;
  PalCaptureRate: Float;
  PalSpawnNumRate: Float;
  PalDamageRateAttack: Float;
  PalDamageRateDefense: Float;
  PlayerDamageRateAttack: Float;
  PlayerDamageRateDefense: Float;
  PlayerStomachDecreaceRate: Float;
  PlayerStaminaDecreaceRate: Float;
  PlayerAutoHPRegeneRate: Float;
  PlayerAutoHpRegeneRateInSleep: Float;
  PalStomachDecreaceRate: Float;
  PalStaminaDecreaceRate: Float;
  PalAutoHPRegeneRate: Float;
  PalAutoHpRegeneRateInSleep: Float;
  BuildObjectDamageRate: Float;
  BuildObjectDeteriorationDamageRate: Float;
  CollectionDropRate: Float;
  CollectionObjectHpRate: Float;
  CollectionObjectRespawnSpeedRate: Float;
  EnemyDropItemRate: Float;
  DeathPenalty: DeathPenalty;
  bEnablePlayerToPlayerDamage: boolean;
  bEnableFriendlyFire: boolean;
  bEnableInvaderEnemy: boolean;
  bActiveUNKO: boolean;
  bEnableAimAssistPad: boolean;
  bEnableAimAssistKeyboard: boolean;
  DropItemMaxNum: Integer;
  DropItemMaxNum_UNKO: Integer;
  BaseCampMaxNum: Integer;
  BaseCampWorkerMaxNum: Integer;
  DropItemAliveMaxHours: Float;
  bAutoResetGuildNoOnlinePlayers: boolean;
  AutoResetGuildTimeNoOnlinePlayers: Float;
  GuildPlayerMaxNum: Integer;
  BaseCampMaxNumInGuild: Integer;
  PalEggDefaultHatchingTime: Float;
  WorkSpeedRate: Float;
  AutoSaveSpan: Float;
  bIsMultiplay: boolean;
  bIsPvP: boolean;
  bCanPickupOtherGuildDeathPenaltyDrop: boolean;
  bEnableNonLoginPenalty: boolean;
  bEnableFastTravel: boolean;
  bIsStartLocationSelectByMap: boolean;
  bExistPlayerAfterLogout: boolean;
  bEnableDefenseOtherGuildPlayer: boolean;
  bInvisibleOtherGuildBaseCampAreaFX: boolean;
  CoopPlayerMaxNum: Integer;
  ServerPlayerMaxNum: Integer;
  ServerName: string;
  ServerDescription: string;
  AdminPassword: string;
  ServerPassword: string;
  PublicPort: Integer;
  PublicIP: string;
  RCONEnabled: boolean;
  RCONPort: Integer;
  Region: string;
  bUseAuth: boolean;
  BanListURL: string;
  RESTAPIEnabled: boolean;
  RESTAPIPort: Integer;
  bShowPlayerList: boolean;
  AllowConnectPlatform: Platform;
  bIsUseBackupSaveData: boolean;
  LogFormatType: LogFormatType;
}

export type OptionSettingsKey = keyof OptionSettings;
export const OptionSettingsKeys: OptionSettingsKey[] = [
  'Difficulty',
  'DayTimeSpeedRate',
  'NightTimeSpeedRate',
  'ExpRate',
  'PalCaptureRate',
  'PalSpawnNumRate',
  'PalDamageRateAttack',
  'PalDamageRateDefense',
  'PlayerDamageRateAttack',
  'PlayerDamageRateDefense',
  'PlayerStomachDecreaceRate',
  'PlayerStaminaDecreaceRate',
  'PlayerAutoHPRegeneRate',
  'PlayerAutoHpRegeneRateInSleep',
  'PalStomachDecreaceRate',
  'PalStaminaDecreaceRate',
  'PalAutoHPRegeneRate',
  'PalAutoHpRegeneRateInSleep',
  'BuildObjectDamageRate',
  'BuildObjectDeteriorationDamageRate',
  'CollectionDropRate',
  'CollectionObjectHpRate',
  'CollectionObjectRespawnSpeedRate',
  'EnemyDropItemRate',
  'DeathPenalty',
  'bEnablePlayerToPlayerDamage',
  'bEnableFriendlyFire',
  'bEnableInvaderEnemy',
  'bActiveUNKO',
  'bEnableAimAssistPad',
  'bEnableAimAssistKeyboard',
  'DropItemMaxNum',
  'DropItemMaxNum_UNKO',
  'BaseCampMaxNum',
  'BaseCampWorkerMaxNum',
  'DropItemAliveMaxHours',
  'bAutoResetGuildNoOnlinePlayers',
  'AutoResetGuildTimeNoOnlinePlayers',
  'GuildPlayerMaxNum',
  'BaseCampMaxNumInGuild',
  'PalEggDefaultHatchingTime',
  'WorkSpeedRate',
  'AutoSaveSpan',
  'bIsMultiplay',
  'bIsPvP',
  'bCanPickupOtherGuildDeathPenaltyDrop',
  'bEnableNonLoginPenalty',
  'bEnableFastTravel',
  'bIsStartLocationSelectByMap',
  'bExistPlayerAfterLogout',
  'bEnableDefenseOtherGuildPlayer',
  'bInvisibleOtherGuildBaseCampAreaFX',
  'CoopPlayerMaxNum',
  'ServerPlayerMaxNum',
  'ServerName',
  'ServerDescription',
  'AdminPassword',
  'ServerPassword',
  'PublicPort',
  'PublicIP',
  'RCONEnabled',
  'RCONPort',
  'Region',
  'bUseAuth',
  'BanListURL',
  'RESTAPIEnabled',
  'RESTAPIPort',
  'bShowPlayerList',
  'AllowConnectPlatform',
  'bIsUseBackupSaveData',
  'LogFormatType',
];

export const Default: OptionSettings = {
  Difficulty: 'None',
  DayTimeSpeedRate: 1,
  NightTimeSpeedRate: 1,
  ExpRate: 1,
  PalCaptureRate: 1,
  PalSpawnNumRate: 1,
  PalDamageRateAttack: 1,
  PalDamageRateDefense: 1,
  PlayerDamageRateAttack: 1,
  PlayerDamageRateDefense: 1,
  PlayerStomachDecreaceRate: 1,
  PlayerStaminaDecreaceRate: 1,
  PlayerAutoHPRegeneRate: 1,
  PlayerAutoHpRegeneRateInSleep: 1,
  PalStomachDecreaceRate: 1,
  PalStaminaDecreaceRate: 1,
  PalAutoHPRegeneRate: 1,
  PalAutoHpRegeneRateInSleep: 1,
  BuildObjectDamageRate: 1,
  BuildObjectDeteriorationDamageRate: 1,
  CollectionDropRate: 1,
  CollectionObjectHpRate: 1,
  CollectionObjectRespawnSpeedRate: 1,
  EnemyDropItemRate: 1,
  DeathPenalty: 'All',
  bEnablePlayerToPlayerDamage: false,
  bEnableFriendlyFire: false,
  bEnableInvaderEnemy: true,
  bActiveUNKO: false,
  bEnableAimAssistPad: true,
  bEnableAimAssistKeyboard: false,
  DropItemMaxNum: 3000,
  DropItemMaxNum_UNKO: 100,
  BaseCampMaxNum: 128,
  BaseCampWorkerMaxNum: 15,
  DropItemAliveMaxHours: 1,
  bAutoResetGuildNoOnlinePlayers: false,
  AutoResetGuildTimeNoOnlinePlayers: 72,
  GuildPlayerMaxNum: 20,
  BaseCampMaxNumInGuild: 4,
  PalEggDefaultHatchingTime: 72,
  WorkSpeedRate: 1,
  AutoSaveSpan: 30,
  bIsMultiplay: false,
  bIsPvP: false,
  bCanPickupOtherGuildDeathPenaltyDrop: false,
  bEnableNonLoginPenalty: true,
  bEnableFastTravel: true,
  bIsStartLocationSelectByMap: true,
  bExistPlayerAfterLogout: false,
  bEnableDefenseOtherGuildPlayer: false,
  bInvisibleOtherGuildBaseCampAreaFX: false,
  CoopPlayerMaxNum: 4,
  ServerPlayerMaxNum: 32,
  ServerName: 'Default Palworld Server',
  ServerDescription: '',
  AdminPassword: '',
  ServerPassword: '',
  PublicPort: 8211,
  PublicIP: '',
  RCONEnabled: false,
  RCONPort: 25575,
  Region: '',
  bUseAuth: true,
  BanListURL: 'https://api.palworldgame.com/api/banlist.txt',
  RESTAPIEnabled: false,
  RESTAPIPort: 8212,
  bShowPlayerList: false,
  AllowConnectPlatform: 'Steam',
  bIsUseBackupSaveData: true,
  LogFormatType: 'Text',
};
