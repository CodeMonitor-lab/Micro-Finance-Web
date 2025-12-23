exports.protect = async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
  
      if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({
          status: "fail",
          message: "Unauthorized",
        });
      }
  
      const token = authHeader.split(" ")[1];
  
      // JWT verification will be added here
      req.user = { id: "mock-user-id", role: "user" };
  
      next();
    } catch (error) {
      next(error);
    }
  };
  
  exports.restrictTo = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          status: "fail",
          message: "Forbidden",
        });
      }
      next();
    };
  };
  