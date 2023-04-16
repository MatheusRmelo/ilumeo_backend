'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        code: 'QUOkXwK',
        name: 'John Dea'
      },
      {
        code: 'GM7K0QO',
        name: 'Matheus Melo'
      },
      {
        code: '4SXXFMf',
        name: 'Ilumeo Test'
      },
    ], {});
    await queryInterface.bulkInsert('registers', [
      {
        "register_at": "2023-04-15 08:00:29.265 -0300",
        "status": "entry",
        "usercode": "GM7K0QO"
      },
      {
        "register_at": "2023-04-15 12:00:29.265 -0300",
        "status": "leave",
        "usercode": "GM7K0QO"
      },
      {
        "register_at": "2023-04-15 13:12:29.265 -0300",
        "status": "entry",
        "usercode": "GM7K0QO"
      },
      {
        "register_at": "2023-04-15 18:00:29.265 -0300",
        "status": "leave",
        "usercode": "GM7K0QO"
      },
      {
        "register_at": "2023-04-14 07:00:29.265 -0300",
        "status": "entry",
        "usercode": "GM7K0QO"
      },
      {
        "register_at": "2023-04-14 12:00:29.265 -0300",
        "status": "leave",
        "usercode": "GM7K0QO"
      },
      {
        "register_at": "2023-04-14 13:12:29.265 -0300",
        "status": "entry",
        "usercode": "GM7K0QO"
      },
      {
        "register_at": "2023-04-14 20:00:29.265 -0300",
        "status": "leave",
        "usercode": "GM7K0QO"
      },
      {
        "register_at": "2023-04-14 07:00:29.265 -0300",
        "status": "entry",
        "usercode": "4SXXFMf"
      },
      {
        "register_at": "2023-04-14 12:00:29.265 -0300",
        "status": "leave",
        "usercode": "4SXXFMf"
      },
      {
        "register_at": "2023-04-14 13:12:29.265 -0300",
        "status": "entry",
        "usercode": "4SXXFMf"
      },
      {
        "register_at": "2023-04-14 17:00:29.265 -0300",
        "status": "leave",
        "usercode": "4SXXFMf"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
