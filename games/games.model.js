const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        gameType: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0, comment: '0: OriginalGame, 1: Slots, 2: Casinos' },
        gameUrl: { type: DataTypes.STRING, allowNull: true },
        description: { type: DataTypes.STRING, allowNull: true },
        icon: { type: DataTypes.TEXT('long'), allowNull: true },
        image: { type: DataTypes.TEXT('long') , allowNull: true },
        supportedPlayType: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0, comment: '0: DemoPlay, 1: Mobile' },
        favorite: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        fairness: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        playType: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0, comment: '0: Freeplay, 1: RealPlay' },
        droppable: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
        parent: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Game', attributes, options);
}