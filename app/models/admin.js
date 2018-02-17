module.exports = function(sequelize, DataTypes) {
    var Tickets = sequelize.define("Tickets", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Tickets;
  };
  