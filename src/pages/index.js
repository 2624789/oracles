import React from "react"
import { Link } from "gatsby"

import PaymentButton from "../components/payment_button"

export default function Home() {
  return(
    <div>
      <h1 style={{ color: `purple` }}>Hello stranger</h1>
      <h3 style={{ color: `#f7931a` }}>send a coin</h3>
      <PaymentButton />
       <Link to="/about/">about</Link>
    </div>
  );
}
