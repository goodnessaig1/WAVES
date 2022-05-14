import React, { Component } from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'


 class Paypal extends Component {


  render() {

    const onSuccess = (payment) =>{
       console.log(JSON.stringify(payment))
       this.props.onSuccess(payment)
    }

    const onCancel = (data) =>{
        console.log(JSON.stringify(data))
    };

    const onError = (err) => {
        console.log(JSON.stringify(err))
    };

    let env = 'sandbox';
    let currency = 'USD';
    let total = this.props.toPay;

    const client = {
        sandbox:'Ab1sHqbcGWQ1-0j4xWxHMY02yu90lf9XtxTMrcK4BWoql02ih53iFbEByPRVk1y-0o3GCUYj1h4Ga0No',
        production: ''
    }

    // {"paid":true,"cancelled":false,"payerID":"JKE2V295T4N5U","paymentID":"PAYID-MJYSXQI10T45426BE1209844","paymentToken":"EC-2HD95346R7335915A","returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-MJYSXQI10T45426BE1209844&token=EC-2HD95346R7335915A&PayerID=JKE2V295T4N5U","address":{"recipient_name":"John Doe","line1":"1 Main St","city":"San Jose","state":"CA","postal_code":"95131","country_code":"US"},"email":"sb-hmur916145826@personal.example.com"}

    return (
      <div>
          <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                style={{
                    size: 'large',
                    color: 'blue',
                    shape: 'rect',
                    label: 'checkout'
                }}
          />
      </div>
    )
  }
}

export default Paypal