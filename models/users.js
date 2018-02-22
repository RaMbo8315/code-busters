module.exports = function (sequelize, DataTypes) {
    var Clients = sequelize.define("Clients", {
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
        },
        user_name: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: DataTypes.STRING
    });

    Clients.associate = function (models) {
        Clients.hasMany(models.Tickets)
    };

    return Clients;
}