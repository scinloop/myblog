const { Sequelize } = require('sequelize');

// 引入服务器数据库数据
// const { localDbInfo, aliDbInfo: { dbName, userName, password, host } } = require('../../encrypt/dbEncrypt')

// 引入本地数据库数据
const { localDbInfo:{ dbName, userName, password, host }, aliDbInfo } = require('../../encrypt/dbEncrypt')

const sequelize = new Sequelize( dbName, userName, password, host ); // 定义数据库对象

module.exports = sequelize