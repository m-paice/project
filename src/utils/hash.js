const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

module.exports = {
  generateHash: (text) => bcrypt.hashSync(text, salt),
  compareHash: async (text, hash) => bcrypt.compareSync(text, hash),
};
