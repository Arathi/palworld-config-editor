import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import '@arco-design/web-react/dist/css/arco.css';
import Editor from '@/components/editor';

const Index = () => (
  <>
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
      <title>幻兽帕鲁配置文件编辑器</title>
    </Helmet>
    <Editor />
  </>
);

export default Index;
