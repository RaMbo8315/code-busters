module.exports = function (sequelize, DataTypes) {
  var Tickets = sequelize.define("Tickets", {
    assigned_to: DataTypes.STRING,
    service: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: DataTypes.TEXT,
    open: DataTypes.BOOLEAN,
    closed: DataTypes.BOOLEAN
  });

  Tickets.associate = function (models) {
    Tickets.belongsTo(models.Clients, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Tickets;
};