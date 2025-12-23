const Joi = require("joi");

const objectId = Joi.string().hex().length(24);

exports.getUserById = {
  params: Joi.object({
    id: objectId.required(),
  }),
};

exports.getAllUsers = {
  query: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
  }),
};

exports.createUser = {
  body: Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};
