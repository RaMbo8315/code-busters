module.exports = function (sequelize, DataTypes) {
  var Tickets = sequelize.define("Tickets", {
    assigned_to: DataTypes.STRING,
    service: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: DataTypes.TEXT,
    inStatus: DataTypes.BOOLEAN,
    complete: DataTypes.BOOLEAN
  });

  Tickets.associate = function (models) {
    Tickets.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Tickets;
};