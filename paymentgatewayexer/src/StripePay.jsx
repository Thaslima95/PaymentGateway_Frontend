import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
export default function StripePay() {
  const [product, setProduct] = useState({
    name: "Academia Course",
    price: 2000 * 100,
    seller: "Pyra",
  });
  const makePayment = async () => {
    console.log("makepayment");
    const stripe = await loadStripe(
      "pk_test_51O0fjrSDBBzF7ZzCZGmrpOYLtFjHB9CTWDl300oKPi9VmrduP2lwqiEtjp7JQpncJabB6PIbTdgjbQLV4lR9U4lB00cKAcFOEC"
    );

    const body = {
      name: "Academia Course",
      price: 2000 * 100,
      seller: "Pyra",
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios({
      url: "http://localhost:8077/create-checkout-session",

      method: "POST",
      headers: headers,
      data: {
        name: "Academia Course",
        price: 2000 * 100,
        seller: "Pyra",
        id: "pr_200000",
      },
    });

    const session = await response.data;
    console.log(session);

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  const payMethod = async (token) => {
    await axios({
      url: "http://localhost:8077/payment",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        token: token,
        product: product,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // const response = await axios.post("");
  };
  return (
    <div>
      {/* <StripeCheckout
  //       stripeKey="pk_test_51O0fjrSDBBzF7ZzCZGmrpOYLtFjHB9CTWDl300oKPi9VmrduP2lwqiEtjp7JQpncJabB6PIbTdgjbQLV4lR9U4lB00cKAcFOEC"
  //       name={product.name}
  //       amount={product.price}
  //       currency="INR"
  //       token={payMethod}
  //     >
  //       <button>Buy</button>
  //     </StripeCheckout> */}
      <button onClick={makePayment}>Buy</button>
    </div>
  );
}
