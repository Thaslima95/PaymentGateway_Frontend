import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PayuMoney3() {
  const [hash, setHash] = useState("");
  const [txnIds, setTxnId] = useState("");
  const [amount, setAmount] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const merchantKey = "FXEfow";
  const salt = "2OrOtieOBGZhA2bb0KypvqLtKIhjvmDw";

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
  }, [params]);

  return (
    <>
      {/* <button onClick={paymoney}>Pay Now</button> */}
      <form action="https://test.payu.in/_payment" method="post">
        <input type="hidden" name="key" value="FXEfow" />
        <input type="hidden" name="txnid" value={txnIds} />
        <input
          type="text"
          name="productinfo"
          value={productInfo}
          onChange={(e) => setProductInfo(e.target.value)}
          placeholder="Product info"
        />
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="firstname"
        />
        {/* <input type="hidden" name="lastname" value="Kumar" /> */}
        {/* <input type="hidden" name="pg" value="CC" />
        <input type="hidden" name="bankcode" value="MAST" />
        <input type="hidden" name="ccnum" value="5123456789012346" />
        <input type="hidden" name="ccname" value="Ashish Kumar" />
        <input type="hidden" name="ccvv" value="123" />
        <input type="hidden" name="ccexpmon" value="12" />
        <input type="hidden" name="ccexpyr" value="2021" /> */}
        <input type="hidden" name="pg" value="UPI" />
        <input type="hidden" name="bankcode" value="UPI" />
        <input type="hidden" name="vpa" value="9999999999@payu.in" />
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
