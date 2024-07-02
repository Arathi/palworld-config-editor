import Flex from '@/components/flex';
import Select from '@/components/form/select';
import Slider from '@/components/form/slider';
import Switch from '@/components/form/switch';

const Page = () => {
  return (
    <Flex
      direction="column"
      gap={8}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
    >
      <Slider />
      <Switch texts={['关闭', '打开']} />
      <Select
        options={[
          {
            value: 'None',
            text: '不掉落任何东西',
          },
          {
            value: 'Item',
            text: '掉落装备以外的道具',
          },
          {
            value: 'ItemAndEquipment',
            text: '掉落所有道具',
          },
          {
            value: 'All',
            text: '掉落所有道具及队伍内帕鲁',
          },
        ]}
      />
    </Flex>
  );
};

export default Page;
