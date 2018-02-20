module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.BIGINT(10),
            allowNull: false
        }
    });

    Users.associate = function (models) {
        Users.hasMany(models.Tickets)
    };

    return Users;
}