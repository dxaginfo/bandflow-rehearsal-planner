module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    tableName: 'users',
    timestamps: true
  });

  User.associate = (models) => {
    // User can belong to many groups through GroupMembers
    User.belongsToMany(models.Group, {
      through: 'GroupMembers',
      foreignKey: 'userId',
      as: 'groups'
    });

    // User can have many availability entries
    User.hasMany(models.UserAvailability, {
      foreignKey: 'userId',
      as: 'availabilities'
    });

    // User can have many rehearsal responses
    User.hasMany(models.RehearsalMember, {
      foreignKey: 'userId',
      as: 'rehearsalResponses'
    });

    // User can have many attendance records
    User.hasMany(models.Attendance, {
      foreignKey: 'userId',
      as: 'attendanceRecords'
    });
  };

  return User;
};