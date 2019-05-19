/**
 * 管理项目文件路径
 */

const path = require("path");
const fs = require("fs");
const url = require("url");

const appDirectory = fs.realpathSync(process.cwd());
console.log("appDirectory :", appDirectory);

module.exports = {
  htmlTemplate: appDirectory
};
