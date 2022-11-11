const express = require("express");
const router = express.Router();
const { getTimeTables, getTimeTableByID, createTimeTables, UpdateTimeTables, RemoveTimeTables} = require("../controllers/TimeTablesController");

router.post("/createTimeTables",createTimeTables);
router.get("/getAllTimeTables",getTimeTables);
router.get("/getTimeTables/:id",getTimeTableByID);
router.patch("/updateTimeTable/:id",UpdateTimeTables);
router.delete("/RemoveTimeTable/:id",RemoveTimeTables);
module.exports = router;