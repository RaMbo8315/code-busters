module.exports = function (sequelize, DataTypes) {
    var Agents = sequelize.define("Agents", {
        name: {
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
    return Agents;
};