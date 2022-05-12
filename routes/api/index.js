const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes')


// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);



// router.use((req, res) => {
//   res.status(404).send('<h1>😝 404 Error!</h1>');
// });

module.exports = router;