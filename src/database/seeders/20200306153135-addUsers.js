
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      id: 'c42a7cc6-28d3-452e-9f01-172611e4d376',
      name: 'Matheus Paice',
      email: 'paice@gmail.com',
      password: '$2b$10$nsIwGy6KcC.igJgaw8ZQL.7RmuKrXnOhj2paF9AaJqtr/khA71NG.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '82f83b2d-001a-4e17-b808-d31a28dc3e9e',
      name: 'Lucas Ferreira',
      email: 'lucas@gmail.com',
      password: '$2b$10$nsIwGy6KcC.igJgaw8ZQL.7RmuKrXnOhj2paF9AaJqtr/khA71NG.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5290a38b-5cbf-42b1-bfb2-a78015336ed9',
      name: 'João Oliveira',
      email: 'joao@gmail.com',
      password: '$2b$10$nsIwGy6KcC.igJgaw8ZQL.7RmuKrXnOhj2paF9AaJqtr/khA71NG.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
