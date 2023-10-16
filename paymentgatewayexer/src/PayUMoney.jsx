import React from "react";

export default function PayUMoney() {
  function redirectToPayU(pd) {
    console.log("bolt");
    window.bolt.launch(pd, {
      responseHandler: function (response) {
        fetch("http://localhost:8000/payment/payumoney/response", {
          method: "POST",

          headers: {
            Accept: "application/json",

            "Content-Type": "application/json",
          },

          body: JSON.stringify(response.response),
        })
          .then((a) => {
            return a.json();
          })

          .then((json) => {
            console.log(json);
          });
      },

      catchException: function (response) {},
    });
  }
  function payumoney() {
    var pd = {
      key: "BK1duTpE",

      txnid: "Pd1",

      amount: 2000,

      firstname: "Thaslima",

      email: "thaslibanujas7@gmail.com",

      phone: 888888888,

      productinfo: "product1",

      surl: "http://localhost:3000/success",

      furl: "http://localhost:3000/failure",

      hash: "",
    };

    let data = {
      txnid: pd.txnid,

      email: pd.email,

      amount: pd.amount,

      productinfo: pd.productinfo,

      firstname: pd.firstname,
    };

    fetch("http://localhost:8000/payment/payumoney", {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((a) => {
        return a.json();
      })

      .then((json) => {
        pd.hash = json["hash"];
        console.log(pd.hash, "hashhh");
        redirectToPayU(pd);
      });
  }
  return (
    <div>
      PayUmoney
      <button onClick={payumoney}>payumoney</button>
    </div>
  );
}
