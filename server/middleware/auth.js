import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  try {
    // Authorization header: "Bearer <token>"
    const authHeader = req.headers.authorization;
    const bearerToken =
      authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    // Cookie token (if you have cookie parsing middleware installed)
    // This assumes you use something like cookie-parser and req.cookies is available.
    const cookieToken = req.cookies?.token;

    const token = bearerToken || cookieToken;

    if (!token) {
      return res.status(401).json({ error: "Token missing" });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}