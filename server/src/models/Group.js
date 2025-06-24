module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    logoUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdById: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'groups',
    timestamps: true
  });

  Group.associate = (models) => {
    // Group belongs to a creator (user)
    Group.belongsTo(models.User, {
      foreignKey: 'createdById',
      as: 'creator'
    });

    // Group can have many members through GroupMembers
    Group.belongsToMany(models.User, {
      through: 'GroupMembers',
      foreignKey: 'groupId',
      as: 'members'
    });

    // Group can have many rehearsals
    Group.hasMany(models.Rehearsal, {
      foreignKey: 'groupId',
      as: 'rehearsals'
    });

    // Group can have many songs
    Group.hasMany(models.Song, {
      foreignKey: 'groupId',
      as: 'songs'
    });
  };

  return Group;
};