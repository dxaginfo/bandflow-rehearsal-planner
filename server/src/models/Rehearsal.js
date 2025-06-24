module.exports = (sequelize, DataTypes) => {
  const Rehearsal = sequelize.define('Rehearsal', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isRecurring: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    recurrencePattern: {
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
    tableName: 'rehearsals',
    timestamps: true
  });

  Rehearsal.associate = (models) => {
    // Rehearsal belongs to a group
    Rehearsal.belongsTo(models.Group, {
      foreignKey: 'groupId',
      as: 'group'
    });

    // Rehearsal belongs to a creator (user)
    Rehearsal.belongsTo(models.User, {
      foreignKey: 'createdById',
      as: 'creator'
    });

    // Rehearsal can have many members through RehearsalMembers
    Rehearsal.belongsToMany(models.User, {
      through: 'RehearsalMembers',
      foreignKey: 'rehearsalId',
      as: 'members'
    });

    // Rehearsal can have many attendance records
    Rehearsal.hasMany(models.Attendance, {
      foreignKey: 'rehearsalId',
      as: 'attendanceRecords'
    });

    // Rehearsal can have a setlist
    Rehearsal.hasOne(models.Setlist, {
      foreignKey: 'rehearsalId',
      as: 'setlist'
    });
  };

  return Rehearsal;
};