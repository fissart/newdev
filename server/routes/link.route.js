const { Router } = require("express");
const router = Router();

const {
  getLands,
  createLand,
  updateLand,
  deleteLand,
  getForos,
  createForo,
  updateForo,
  deleteForo,
  getNews,
  createNew,
  updateNew,
  deleteNew,
  getLinks,
  createLink,
  updateLink,
  deleteLink
} = require("../controllers/link.controller")

router.route("/lands").post(createLand).get(getLands)
router.route("/lands/:id").delete(deleteLand).put(updateLand)

router.route("/foros").get(getForos).post(createForo)
router.route("/foros/:id").delete(deleteForo).put(updateForo)

router.route("/news/:id").delete(deleteNew).put(updateNew)
router.route("/news").post(createNew).get(getNews)

router.route("/").post(createLink)
router.route("/editor/:type").get(getLinks)
router.route("/:id").delete(deleteLink).put(updateLink);

module.exports = router;
