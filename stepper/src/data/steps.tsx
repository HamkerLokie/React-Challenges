import React from 'react'

export interface Step {
  name: string
  Component: React.FC
}

export const STEPS: Step[] = [
  {
    name: 'Customer Info',
    Component: () => <div>Provide your contact details</div>
  },
  {
    name: 'Shipping Info',
    Component: () => <div>Enter your shipping Details</div>
  },
  {
    name: 'Payment',
    Component: () => <div>Complete payment for your order</div>
  },
  {
    name: 'Delivered',
    Component: () => <div>Your order has been delivered</div>
  }
]
