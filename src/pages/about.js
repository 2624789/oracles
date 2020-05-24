import React from "react"
import { Link } from "gatsby"

import PaymentButton from "../components/payment_button"

export default function About() {
  return (
    <div>
      <h1 style={{ color: `purple` }}>Oracles</h1>
      <p><span style={{ color: `#f7931a` }}>Send coins</span>, receive answers.</p>
      <PaymentButton />
      <Link to="/">oracles</Link>
    </div>
  )
}