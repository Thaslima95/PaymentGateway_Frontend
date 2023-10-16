import React from "react";
import axios from "axios";

export default function RazorPayEx() {
  const paymentHandler = async (e) => {
    // const API_URL = "http://localhost:8000/";
    // const orderUrl = `${API_URL}order`;
    const newData = { amount: 2000 * 100 };
    const response = await axios.post("http://localhost:8000/order", newData);
    const { data } = response;
    e.preventDefault();
    const options = {
      key: "rzp_test_AfpBuMUpaRxS0f",
      // key_secret: "XoY3fdzEgedpp4eMCsvPhPl9",
      // amount: 2000 * 100,
      // currency: "INR",
      name: "Academia Course",
      description: "Some Description",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `http://localhost:8000/capture/${paymentId}`;
          const captureResponse = await axios.post(url, newData);
          console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <>
      <button onClick={paymentHandler}>Pay Now</button>
    </>
  );
}
