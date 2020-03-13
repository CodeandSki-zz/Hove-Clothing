import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = (({price}) => {
    const priceForStripe = price * 100;
    const publishAbleKey = 'pk_test_zZ9KOY513HOtrQaClTSjL23100YYsZ4JRW';
    

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            image='https://svgshare.com/i.CUz.svg'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishAbleKey}
        ></StripeCheckout>
    )
});

export default StripeCheckoutButton