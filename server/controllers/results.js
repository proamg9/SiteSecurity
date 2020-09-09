const Result = require('../models').Result;

module.exports = {
  create(req, res) {
    return Result
      .create({
        status: [req.body.status],
        repositoryName: req.body.repositoryName,
        queuedAt: req.body.queuedAt
      })
      .then(result => res.status(201).send(result))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Result
      .findAll()
      .then(result => res.status(200).send(result))
      .catch((error) => res.status(400).send(error));
  }

};
