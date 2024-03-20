const express = require("express");
const woodCtrl = require("../controllers/wood.js");
const auth = require("../middleware/auth.js")
const router = express();

router.get("/", auth, woodCtrl.readAll);
router.get("/hardness/:hardness", auth, woodCtrl.readByHardness);

module.exports = router;