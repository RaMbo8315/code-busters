module.exports = function (sequelize, DataTypes) {
    var Admin = sequelize.define("Admin", {
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
    return Admin;
};