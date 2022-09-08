const User = ( Sequelize, DataTypes ) => {
    const model = Sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true,
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
        },
        {
            tableName: "user",
            freezeTableName: true,
            timestamps: false
        }
    );
    return model;
}

module.exports = User;