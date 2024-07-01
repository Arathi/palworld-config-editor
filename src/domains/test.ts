type Difficulty = 'None';
type DeathPenalty = 'None' | 'Item' | 'ItemAndEquipment' | 'All';
type Platform = 'Steam' | 'Xbox';
type LogFormatType = 'Text' | 'Json';
type Float = number;
type Integer = number;
interface OptionSettings {
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
type OptionSettingsKey = keyof OptionSettings;
const OptionSettingsKeys: OptionSettingsKey[] = [
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
