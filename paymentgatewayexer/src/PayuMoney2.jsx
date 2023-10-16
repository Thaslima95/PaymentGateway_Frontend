import React from "react";
import CryptoJS from "crypto-js";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PayuMoney2() {
  const [hash, setHash] = useState("");
  const [txnIds, setTxnId] = useState("");

  const merchantKey = "FXEfow";
  const salt = "2OrOtieOBGZhA2bb0KypvqLtKIhjvmDw";

  const amount = "100.00";
  const productInfo = "TestProduct";
  const firstName = "John";
  const email = "john@example.com";
  const phone = "9999999999";
  const txnId = "TXN" + Date.now();
  const surl = "http://localhost:3000/success";
  const furl = "http://localhost:3000/failure";

  const params = {
    key: merchantKey,
    txnid: txnId,
    amount: amount,
    productinfo: productInfo,
    firstname: firstName,
    email: email,
    phone: phone,
    surl: surl,
    furl: furl,
  };
  useEffect(() => {
    axios
      .post("http://localhost:8000/hash", params)
      .then((res) => {
        console.log(res);
        setHash(res.data.hash);
        setTxnId(res.data.txnId);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* <button onClick={paymoney}>Pay Now</button> */}
      <form action="https://test.payu.in/_payment" method="post">
        <input type="hidden" name="key" value="FXEfow" />
        <input type="hidden" name="txnid" value={txnIds} />
        <input type="hidden" name="productinfo" value="TestProduct" />
        <input type="hidden" name="amount" value="100.00" />
        <input type="hidden" name="email" value="john@example.com" />
        <input type="hidden" name="firstname" value="John" />
        {/* <input type="hidden" name="lastname" value="Kumar" /> */}
        <input
          type="hidden"
          name="surl"
          value="http://localhost:3000/success"
        />
        <input
          type="hidden"
          name="furl"
          value="http://localhost:3000/failure"
        />
        <input type="hidden" name="phone" value="9988776655" />
        <input type="hidden" name="hash" value={hash} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
