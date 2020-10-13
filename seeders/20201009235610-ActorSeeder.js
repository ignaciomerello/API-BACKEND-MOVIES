'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Actors', [
      {
        name: "Steve Urkel",
        gender:"Engendro",
        profile_path:"https://www.imdb.com/name/nm0924918/",
        popularity:9.9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pilar Lopez de Ayala",
        gender:"Lady",
        profile_path:"https://www.imdb.com/name/nm0529813/",
        popularity:4.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alf",
        gender:"Alien",
        profile_path:"https://www.imdb.com/name/nm0299319/?ref_=tt_cl_t1",
        popularity:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mario Bros",
        gender:"Male",
        profile_path:"https://www.imdb.com/name/nm0924918/",
        popularity:8.8,
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
