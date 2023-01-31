import React from 'react'
import { useTitle } from './App'

const Premium = () => {

    useTitle("Spotify - Premium")
    return (
        <div className='premium'>
            <div className='container'>
                <div className='row'>
                    <div className='premiumMain'>
                        <h2 className='headPrem'> Get Premium free for 1 month</h2>
                        <p className='paraPrem'>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>

                        <div className='preBtns'>
                            <div>
                                <a role="button" href="/" className='btn btn-light preBtn1'> GET STARTED</a>
                            </div>
                            <div>
                                <a role="button" href="/" className='btn btn-light preBtn2'> SEE OTHER PLANS</a>
                            </div>
                        </div>

                        <p className='termPara'> <span>Terms and conditions apply.</span> 1 month free not available for users who have already tried Premium.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premium