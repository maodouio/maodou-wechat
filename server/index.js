import configs from 'lib/configs/wechat'
import publications from './publications';
import privateConfigs from 'server/configs/wechat';
import methods from './methods';

// Uncomment middleware if you need to process messages and events
// import middleware from './middleware';

export default {
  configs,
  publications,
  privateConfigs,
  // middleware,
  methods
};
