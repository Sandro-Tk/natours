/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";
import { loadStripe } from "@stripe/stripe-js";

export const bookTour = async (tourId) => {
    try {
        const stripe = await loadStripe(
            "pk_test_51RmZZrRviHTQNnXBSZjWMTFwgA84k5krlLxMkejbcpJr0yFf0XADRnSHEQnOqZCUA9IpiUIuvHuc8NUPqKKrFf3800eGMHLrfL"
        );

        // 1) Get checkout session from the API
        const session = await axios(
            `/api/v1/bookings/checkout-session/${tourId}`
        );
        // console.log(session);

        // 2) Redirect to Stripe checkout
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id,
        });
    } catch (err) {
        console.log(err);
        showAlert("error", err);
    }
};
