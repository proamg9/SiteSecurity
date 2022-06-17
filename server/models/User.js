"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
        required: true,
      },
      last_name: {
        type: DataTypes.STRING,
        required: true,
      },
      user_name: {
        type: DataTypes.STRING,
        required: true,
      },
      user_pass: {
        type: DataTypes.STRING,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
      },
      date: {
        type: DataTypes.DATE,
        default: Date.now(),
      },
    },
    { timestamps: false }
  );
  User.associate = function (models) {
    //
  };
  return User;
};
