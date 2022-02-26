import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Payment extends Component {
     
    handleToken = (token) =>{
        console.log({token});
    }
    
  render() {
    return (
      <div>
        <StripeCheckout 
            stripeKey="pk_test_51KXNW9B8Cwjy3SIYNxwXhcVf60AirfJjq90gbG0czMkui6du4MWpLpuFGYbhP8y6nOPXw1X8mLymZyh0Pjg7agHM00Px2dTizj"
            token={this.handleToken}
            billingAddress
            amount={this.props.salary}
            name={this.props.name}
        />
      </div>
    )
  }
}
