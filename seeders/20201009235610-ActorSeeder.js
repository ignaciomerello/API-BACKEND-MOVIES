'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Actors', [
      {
        name: "Pepico",
        gender:"Muchacho",
        profile_path:"Imdb",
        popularity:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
