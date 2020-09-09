'use strict';
module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    status: DataTypes.ARRAY(DataTypes.STRING),
    repositoryName: DataTypes.STRING,
    findings: DataTypes.JSONB,
    queuedAt: DataTypes.DATE,
    scannedAt: DataTypes.DATE,
    finishedAt: DataTypes.DATE
  }, {timestamps:false});
  Result.associate = function(models) {
    // associations can be defined here
  };
  return Result;
};
