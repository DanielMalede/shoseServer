const router = require("express").Router();
const {
  getAdidas,
  createAdidas,
  getAdidasById,
  deleteAdidas,
  UpdateAdidas,
} = require("../controllers/adidas-ctrl");

router.get("/", getAdidas);
router.get("/getById:id", getAdidasById);
router.post("/savaData", createAdidas);
router.delete("/delete/:id", deleteAdidas);
router.put("/update/:id", UpdateAdidas);

module.exports = router;