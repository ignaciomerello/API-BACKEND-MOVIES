'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ActorMovies', [
      {
        actorId:1,
        movieId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        actorId:2,
        movieId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        actorId:3,
        movieId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        actorId:4,
        movieId:4,
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
