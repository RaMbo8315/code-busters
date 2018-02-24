module.exports = function (sequelize, DataTypes) {
    var Techs = sequelize.define("Techs", {
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
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: DataTypes.STRING
    });
    return Techs;
};