enum DeathPenalty {
  /**
   * No drops
   *
   * 关闭掉落
   */
  None = 'None',

  /**
   * Drop all items except equipment
   *
   * 掉落除了装备外的物品
   */
  Item = 'Item',

  /**
   * Drop all items
   *
   * 掉落所有物品（包括装备）
   */
  ItemAndEquipment = 'ItemAndEquipment',

  /**
   * Drop all items and all Pals on team
   *
   * 全部掉落（物品、装备以及队内的所有帕鲁）
   */
  All = 'All',
}

enum Platform {
  Steam = 'Steam',
  Xbox = 'Xbox',
}

enum LogFormatType {
  Text = 'Text',
  Json = 'Json',
}

export interface StringifyOptions {
  removeDefaultValues?: boolean;
}

const None = 'None';
const False = false;
const True = true;
const { All } = DeathPenalty;
const { Steam } = Platform;
const { Text } = LogFormatType;

export default class PalWorldSettings {
  Difficulty = None;

  /**
   * Day time speed
   *
   * 白天时间流逝速度
   */
  DayTimeSpeedRate = 1.0;

  /**
   * Night time speed
   *
   * 夜间时间流逝速度
   */
  NightTimeSpeedRate = 1.0;

  /**
   * EXP rate
   *
   * 经验倍率
   */
  ExpRate = 1.0;

  /**
   *
   */
  PalCaptureRate = 1.0;

  /**
   *
   */
  PalSpawnNumRate = 1.0;

  /**
   *
   */
  PalDamageRateAttack = 1.0;

  /**
   *
   */
  PalDamageRateDefense = 1.0;

  /**
   *
   */
  PlayerDamageRateAttack = 1.0;

  /**
   *
   */
  PlayerDamageRateDefense = 1.0;

  /**
   *
   */
  PlayerStomachDecreaceRate = 1.0;

  /**
   *
   */
  PlayerStaminaDecreaceRate = 1.0;

  /**
   *
   */
  PlayerAutoHPRegeneRate = 1.0;

  /**
   *
   */
  PlayerAutoHpRegeneRateInSleep = 1.0;

  /**
   *
   */
  PalStomachDecreaceRate = 1.0;

  /**
   *
   */
  PalStaminaDecreaceRate = 1.0;

  /**
   * Pal Auto Health Regeneration Rate
   *
   * 帕鲁血量自动回复倍率
   */
  PalAutoHPRegeneRate = 1.0;

  /**
   * Pal Sleep Health Regeneration Rate (Health Regeneration Rate in Palbox)
   *
   * 帕鲁睡眠时血量自动回复倍率
   */
  PalAutoHpRegeneRateInSleep = 1.0;

  /**
   * Damage to Structure Multiplier
   *
   * 建筑伤害倍率
   */
  BuildObjectDamageRate = 1.0;

  /**
   * Structure Deterioration Rate
   *
   * 结构恶化倍率
   */
  BuildObjectDeteriorationDamageRate = 1.0;

  /**
   * Gatherable Items Multiplier
   *
   * 采集物掉落倍率
   */
  CollectionDropRate = 1.0;

  /**
   * Gatherable Objects Health Multiplier
   *
   * 采集物血量倍率
   */
  CollectionObjectHpRate = 1.0;

  /**
   * Gatherable Objects Respawn Interval
   *
   * 采集物刷新速度倍率
   */
  CollectionObjectRespawnSpeedRate = 1.0;

  /**
   * Dropped Items Multiplier
   *
   * 敌人物品掉落倍率
   */
  EnemyDropItemRate = 1.0;

  /**
   * Death Penalty
   *
   * None: No drops,
   * Item : Drop all items except equipment,
   * ItemAndEquipment : Drop all items,
   * All : Drop all items and all Pals on team
   *
   * 死亡惩罚
   *
   * None：关闭掉落，
   * Item：掉落装备以外的物品，
   * ItemAndEquipment：掉落所有物品，
   * All：掉落所有物品以及帕鲁
   */
  DeathPenalty = All;

  /**
   *
   */
  bEnablePlayerToPlayerDamage = False;

  /**
   *
   */
  bEnableFriendlyFire = False;

  /**
   * Enable Invader
   *
   * 允许入侵
   */
  bEnableInvaderEnemy = True;

  /**
   *
   */
  bActiveUNKO = False;

  /**
   *
   */
  bEnableAimAssistPad = True;

  /**
   *
   */
  bEnableAimAssistKeyboard = False;

  /**
   *
   */
  DropItemMaxNum = 3000;

  /**
   *
   */
  DropItemMaxNum_UNKO = 100;

  /**
   *
   */
  BaseCampMaxNum = 128;

  /**
   * Max pals per basecamp（MAX 50）
   *
   * **Larger value will increase system load**
   *
   * 基础营地帕鲁数量限制（最大50）
   *
   * **数值过大会加大服务器负载**
   */
  BaseCampWorkerMaxNum = 15;

  /**
   *
   */
  DropItemAliveMaxHours = 1.0;

  /**
   *
   */
  bAutoResetGuildNoOnlinePlayers = False;

  /**
   *
   */
  AutoResetGuildTimeNoOnlinePlayers = 72.0;

  /**
   *
   */
  GuildPlayerMaxNum = 20;

  /**
   * Max BaseCamp count per guild. Default is 3. (MAX 10)
   *
   * **Larger value will increase system load**
   *
   * 公会基础营地数量，默认值3（原文如此，实际上是4），最大10个
   *
   * **数值过大会加大服务器负载**
   */
  BaseCampMaxNumInGuild = 4;

  /**
   *
   */
  PalEggDefaultHatchingTime = 72.0;

  /**
   *
   */
  WorkSpeedRate = 1.0;

  /**
   *
   */
  AutoSaveSpan = 30.0;

  /**
   *
   */
  bIsMultiplay = False;

  /**
   *
   */
  bIsPvP = False;

  /**
   *
   */
  bCanPickupOtherGuildDeathPenaltyDrop = False;

  /**
   *
   */
  bEnableNonLoginPenalty = True;

  /**
   *
   */
  bEnableFastTravel = True;

  /**
   *
   */
  bIsStartLocationSelectByMap = True;

  /**
   *
   */
  bExistPlayerAfterLogout = False;

  /**
   *
   */
  bEnableDefenseOtherGuildPlayer = False;

  /**
   *
   */
  bInvisibleOtherGuildBaseCampAreaFX = False;

  /**
   *
   */
  CoopPlayerMaxNum = 4;

  /**
   *
   */
  ServerPlayerMaxNum = 32;

  /**
   *
   */
  ServerName = 'Default Palworld Server';

  /**
   *
   */
  ServerDescription = '';

  /**
   * Password used to obtain administrative privileges on the server.
   *
   * 管理员密码
   */
  AdminPassword = '';

  /**
   *
   */
  ServerPassword = '';

  /**
   *
   */
  PublicPort = 8211;

  /**
   *
   */
  PublicIP = '';

  /**
   *
   */
  RCONEnabled = False;

  /**
   *
   */
  RCONPort = 25575;

  /**
   *
   */
  Region = '';

  /**
   *
   */
  bUseAuth = True;

  /**
   *
   */
  BanListURL = 'https://api.palworldgame.com/api/banlist.txt';

  /**
   *
   */
  RESTAPIEnabled = False;

  /**
   *
   */
  RESTAPIPort = 8212;

  /**
   * Enable player list when the press ESC key
   *
   * 按ESC键显示玩家列表
   */
  bShowPlayerList = False;

  /**
   * Specify which platforms are allowed to connect.
   *
   * Steam or Xbox (Default value is Steam)
   *
   * 平台，Steam / Xbox
   */
  AllowConnectPlatform = Steam;

  /**
   * Enable world backup
   *
   * **Disk load will be increase when enabled**
   *
   * 启用世界备份
   *
   * **将会加大磁盘负载**
   */
  bIsUseBackupSaveData = True;

  /**
   * Log format Text or Json
   */
  LogFormatType = Text;

  static stringify(
    settings: PalWorldSettings,
    options: StringifyOptions,
  ): string {
    const { removeDefaultValues = false } = options;
    const kvList: string[] = [];
    FieldNames.forEach(fieldName => {
      const value = settings[fieldName];
      const defaultValue = DefaultSettings[fieldName];
      if (!removeDefaultValues || value !== defaultValue) {
        const valueType = typeof value;
        let formattedValue: string | null = null;
        switch (valueType) {
          case 'string':
            formattedValue = ``;
            break;
          case 'boolean':
            formattedValue = value ? 'True' : 'False';
            break;
          case 'number':
            formattedValue = (value as number).toFixed(6);
            break;
          default:
            console.warn(`无效的类型`);
        }
        if (formattedValue !== null) {
          const kv = `${fieldName}=${formattedValue}`;
          kvList.push(kv);
        }
      }
    });
    const kvs = kvList.join(',');
    return `[/Script/Pal.PalGameWorldSettings]\nOptionSettings=(${kvs}`;
  }
}

const DefaultSettings = new PalWorldSettings();
type FieldName = keyof PalWorldSettings;
interface PalWorldSettingType {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
}
type PalWorldSettingTypes = Record<FieldName, PalWorldSettingType>;

const FieldNames: FieldName[] = [
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
