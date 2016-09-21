export default {
  saveConfigs({ Meteor, swal }, configs) {
    return (disptch) => {
      Meteor.call('wechat.saveConfigs', configs, (err) => {
        if (err) {
          swal({
            title: "配置保存失败",
            text: err.message,
            type: "error"
          });
        } else {
          swal({
            title: "配置保存成功",
            type: "success"
          });
        }
      });
    };
  }
};
