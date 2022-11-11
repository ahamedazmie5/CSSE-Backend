const express = require("express");
const router = express.Router();
const { getUserAccount, getUserAccountByID, createUserAccount, UpdateUserAccount, RemoveUserAccount} = require("../controllers/UserAccountController");

router.post("/createUserAccount",createUserAccount);
router.get("/getAllUserAccount",getUserAccount);
router.get("/getUserAccount/:id",getUserAccountByID);
router.patch("/updateUserAccount/:id",UpdateUserAccount);
router.delete("/RemoveUserAccount/:id",RemoveUserAccount);
module.exports = router;


