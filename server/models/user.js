module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            type: DataTypes.STRING(45),
            allowNull: false,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    });

    user.checkOverlapId = (id) => user.findOne({
        where: {
            id: id
        }
    });

    user.register = (data) => user.create({
        id: data.id,
        password: data.password,
        name: data.name,
        email: data.email
    });

    user.getUsers = () => user.findAll();

    return user;
};