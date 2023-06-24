const express = require("express");

const { schemas } = require("../../models/user");

const { validateBody, authenticate } = require("../../middlewares");

const ctrl = require("../../controllers/users");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);

module.exports = router;
