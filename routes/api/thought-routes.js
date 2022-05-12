const router = require('express').Router();

const { getThoughts,addThought, getThoughtById} = require('../../controllers/thought-controllers');

router.route("/").get(getThoughts).post(addThought)
 router.route("/:id").get(getThoughtById)

module.exports = router;