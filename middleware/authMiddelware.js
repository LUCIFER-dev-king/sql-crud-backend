const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accestoken = req.header("accesstoken");

  if (!accestoken) return res.json({ error: "user not logged in" });

  try {
    const validtoken = verify(accestoken, "secret");
    req.user = validateToken;
    if (validtoken) return next();
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
