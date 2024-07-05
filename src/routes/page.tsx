import { Helmet } from '@modern-js/runtime/head';
import { useEffect } from 'react';
import Editor from '@/components/editor';
import useWindowSize from '@/hooks/window-size';

import '@arco-design/web-react/dist/css/arco.css';
import './index.css';
import Flex from '@/components/flex';
import { Divider, Form, Input, Slider } from '@arco-design/web-react';

import OptionSettings from '@/domains/option-settings';
import items from '@/components/editor/items';
import { FormItemAttrs } from '@/components/form';
import Switch from '@/components/form/switch';
import Select from '@/components/form/select';

const Index = () => {
  const windowSize = useWindowSize();

  useEffect(() => {
    const { width, height } = windowSize;
    console.info(`窗口大小发生变化：${width} x ${height}`);
  }, [windowSize]);

  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
        <title>幻兽帕鲁配置文件编辑器</title>
      </Helmet>
      <Flex
        className="palworld-config-editor"
        direction="row"
        style={{
          width: windowSize.width,
          height: windowSize.height,
        }}
      >
        <Flex direction="column" flex={3} style={{ overflowY: 'auto' }}>
          <h1>WORLD SETTING</h1>
          <Divider />
          <Form
            className="config-editor-form"
            labelCol={{ span: 10, offset: 2 }}
            wrapperCol={{ span: 10 }}
            labelAlign="left"
          >
            {items.map(item => (
              <EditorFormItem item={item} />
            ))}
          </Form>
        </Flex>
        <Flex direction="column" flex={1}>
          <Input.TextArea disabled style={{ height: '100%' }} />
        </Flex>
      </Flex>
    </>
  );
};

function EditorFormItem({ item }: { item: FormItemAttrs }) {
  let children: React.ReactNode = null;
  switch (item.type) {
    case 'slider':
      children = (
        <Slider key={item.key} min={item.min} max={item.max} step={item.step} />
      );
      break;
    case 'select':
      children = <Select key={item.key} options={item.options} />;
      break;
    case 'switch':
      children = <Switch key={item.key} labels={item.labels} />;
  }
  return (
    <Form.Item
      label={<span style={{ color: '#ffffff' }}>{item.label}</span>}
      field={item.key}
    >
      {children}
    </Form.Item>
  );
}

export default Index;
