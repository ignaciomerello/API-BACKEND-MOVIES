'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        title: "Family Matters",
        img_path: "https://www.imdb.com/title/tt0096579/?ref_=fn_al_tt_1",
        description: "The Winslow family deal with various misadventures, many of them caused by their pesky next-door neighbor, ultra-nerd Steve Urkel.",
        genre: "Comedy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Bailame el agua",
        img_path: "https://www.imdb.com/title/tt0096579/?ref_=fn_al_tt_1",
        description: "A film about a couple of yonkies trying to achieve their goals, a movie to cry.. cry lods of seas.. just as much as building and deploying your first BackEnd",
        genre: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "ALF",
        img_path: "https://www.imdb.com/title/tt0090390/?ref_=nv_sr_srsg_0",
        description: "A furry alien wiseguy comes to live with the Tanner family after crashing into their garage.",
        genre: "Sci-fi",
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
