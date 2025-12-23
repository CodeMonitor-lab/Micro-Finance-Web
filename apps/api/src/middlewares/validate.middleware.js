module.exports = (schema) => (req, res, next) => {
  const validationTargets = ["body", "params", "query"];
  const errors = [];

  validationTargets.forEach((key) => {
    if (schema[key]) {
      const { error, value } = schema[key].validate(req[key], {
        abortEarly: false,
        allowUnknown: false,
        convert: true,
      });

      if (error) {
        errors.push(...error.details.map((d) => d.message));
      }

      // overwrite req with validated & sanitized data
      req[key] = value;
    }
  });

  if (errors.length) {
    return res.status(400).json({
      status: "fail",
      errors,
    });
  }

  next();
};
