const express = require("express");
const { protect, restrictTo } = require("../controllers/authController");
const {
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour,
    aliasTopTours,
    getTourStats,
    getMonthlyPlan,
    getToursWithin,
    getDistances,
    uploadTourImages,
    resizeTourImages,
} = require("../controllers/tourController");
const reviewRouter = require("./reviewRoutes");

const router = express.Router();

// router.param("id", checkID);

// POST /tour/234321234/reviews
// GET /tour/234321234/reviews

router.use("/:tourId/reviews", reviewRouter);

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);

router.route("/tour-stats").get(getTourStats);
router
    .route("/monthly-plan/:year")
    .get(protect, restrictTo("admin", "lead-guide", "guide"), getMonthlyPlan);

router
    .route("/tours-within/:distance/center/:latlng/unit/:unit")
    .get(getToursWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/-40,45/unit/mi

router.route("/distances/:latlng/unit/:unit").get(getDistances);

router
    .route("/")
    .get(getAllTours)
    .post(protect, restrictTo("admin", "lead-guide"), createTour);
router
    .route("/:id")
    .get(getTour)
    .patch(
        protect,
        restrictTo("admin", "lead-guide"),
        uploadTourImages,
        resizeTourImages,
        updateTour
    )
    .delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

module.exports = router;
