const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");
const router = express.Router();

const validateLogin = [
  check("credential").exists({ checkFalsy: true }).notEmpty().withMessage("Please provide a valid email or username."),
  check("password").exists({ checkFalsy: true }).withMessage("Please provide a password."),
  handleValidationErrors,
];

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get("x-forwarded-proto") !== "https" && process.env.NODE_ENV !== "development") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

//login existing user
router.post(
  "/",
  validateLogin,
  requireHTTPS,
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

//logout
router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

//continue existing session
router.get("/", restoreUser, (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({ user: user.toSafeObject() });
  } else {
    return res.json({});
  }
});

module.exports = router;
