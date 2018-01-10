/*const sequelize = require("../config/config.json");
const seq = require("sequelize");*/

module.exports = function(sequelize, DataTypes) {
var todo = sequelize.define("todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
});
return todo;
};
