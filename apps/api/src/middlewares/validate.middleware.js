module.exports = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });
  
    if (error) {
      return res.status(400).json({
        status: "fail",
        message: error.details.map((d) => d.message),
      });
    }
  
    next();
  };
  