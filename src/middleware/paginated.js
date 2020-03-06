module.exports = (model) => async (req, res, next) => {
  const { include } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const order = req.query.order || 'ASC'; // ASC || DESC

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const totalResource = await model.count();

  const results = {};

  const total = totalResource / limit;

  if (endIndex < totalResource) {
    results.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0 && page <= Math.ceil(total)) {
    results.previous = {
      page: page - 1,
      limit,
    };
  }

  try {
    results.data = await model.findAll({
      limit,
      offset: startIndex,
      order: [
        ['createdAt', order],
      ],
      include,
    });

    res.paginatedResults = results;
    next();
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
