const Sequelize = require("sequelize");
const Visitor = require("./Visitor");
const config = require("../config/config.json")["development"];

//-----------------------------------------------------
// initialize
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//-----------------------------------------------------
// visitor

db.Visitor = require("./Visitor")(sequelize, Sequelize);
//-----------------------------------------------------
// user

db.User = require("./User")(sequelize, Sequelize);
//-----------------------------------------------------


module.exports = db;

