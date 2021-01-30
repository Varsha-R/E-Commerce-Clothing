import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // in cents
    const publishableKey = 'pk_test_51IFFStGofj8hOFn74TBMlCBaiedeO6QDIHX4GOd6yVEDmdeVKPRO3P7sMvp417T8JHsZjH3mjnYWnJXo6DMKraSa00DZsG3NrW';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='E-Commerce Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;