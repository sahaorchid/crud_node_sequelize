'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * 
     */
    return queryInterface.createTable('Todos', { 
      id: { 
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     },
     task: { 
       type: Sequelize.STRING,
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
