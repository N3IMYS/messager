module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      message: {
        type: Sequelize.STRING
      }
    });
  
    return Message;
  };