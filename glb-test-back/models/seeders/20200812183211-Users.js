module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        displayName: 'Joao',
        email: 'joao@gmail.com',
        password: 'joao1000',
      },
      {
        id: 2,
        displayName: 'Michael',
        email: 'michael10@gmail.com',
        password: '12345678',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
