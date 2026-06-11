import z from "zod";

export const validateBody = (schema) => (req, res, next) => {
  try {
    const parsed = schema.parse(req.body);
    req.validatedBody = parsed;
    next();
  } catch (err) {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors || err.message,
    });
  }
};