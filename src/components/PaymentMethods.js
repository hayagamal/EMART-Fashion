import React from 'react'

function PaymentMethods({source, title}) {
  return (
    <div className='payment'>
        <img src={source} alt={title}/>
    </div>
  )
}

export default PaymentMethods