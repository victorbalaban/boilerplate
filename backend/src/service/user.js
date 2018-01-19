"use strict";

const userRepo = require('../models').user;

exports.findAll = (req, res) => {
  userRepo.findAll().then(dbresponse => {
    res.status(200).jsonp(dbresponse);
  }).catch((error) => res.status(400).jsonp(error));
};

exports.create = (req, res) => {
  userRepo.create(req.body)
    .catch((error) => res.status(400).jsonp(error));
  res.jsonp({ data: "user created" });
};

exports.update = (req, res) => {
  userRepo.update(req.body, { where: { id: req.body.id }, returning: true })
  .catch((error) => res.status(400).jsonp(error));
  res.status(200).jsonp({ data: "user updated" });
};

exports.findById = (req, res) => {
  let id = req.params.id;
  userRepo.findById(id).then(user => {
    if (!user) {
      return res.status(400).jsonp({
        message: 'User Not Found',
      });
    }
    res.jsonp(user);
  });
};

exports.delete = (req, res) => {
  let id = req.params.id;
  userRepo.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return user
        .destroy()
        .then(() => res.status(204).jsonp())
        .catch(error => res.status(400).jsonp(error));
    })
    .catch(error => res.status(400).jsonp(error));
};