/**
 * 自定义基础插件
 */

class BasicPlugin {
  constructor(options) {
    console.log('options :>> ', options);
  }

  apply(compiler) {
    // console.log('BasicPlugin compiler :  >> ', compiler);
    console.log('BasicPlugin >> ');
  }
}

// export default BasicPlugin;
module.exports = BasicPlugin;
