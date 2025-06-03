import jwt from 'jsonwebtoken';

export async function userAuth(req, res, next) {
  console.log('userauth middleware running', req.headers.token);
  try {
    // Option 1: If token is sent as "Bearer <token>" in Authorization header
    // const authHeader = req.headers.authorization;
    // const token = authHeader && authHeader.split(' ')[1]; // Get token after "Bearer "
    
    // Option 2: If token is sent directly in headers (as you have it)
    const token = req.headers.token;

    if (!token) {
      return res.status(401).json({
        message: "Authorization failed: No token provided",
        status: false,
      });
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);

    if (!decodedToken.id) {
      return res.status(401).json({
        message: "Authorization failed: Invalid token",
        status: false,
      });
    }

    // Attach user ID to request object (better to use req.user for consistency)
    req.user = { id: decodedToken.id };
    // req.body.userId = decodedToken.id; // Your original approach
    console.log('kkk')
    next();

  } catch (error) {
    console.error('Auth error:', error);

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        message: "Authorization failed: Token expired",
        status: false,
      });
    }

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        message: "Authorization failed: Invalid token",
        status: false,
      });
    }

    return res.status(500).json({
      message: "Internal server error during authentication",
      error: error.message,
      status: false,
    });
  }
}

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2U5MDQ4YzMyOTJiMDExYWFlYjAyMiIsImlhdCI6MTc0ODkzMDYzMn0.ytx4qveQkh64VHJRLdZ2rCENfjHt83kAOOyir_7WGYU"