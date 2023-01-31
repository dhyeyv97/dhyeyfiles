import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row foots'>
                    <div className='footMain col-lg-8'>
                        <div className='spotFoot '>
                            <div><i className="fa-brands fa-spotify"></i></div>
                            <p className='spotPara'>Spotify</p>
                        </div>

                        <div className='footCon '>
                            <ul>
                                <li className='ftHead '>COMPANY</li>
                                <li>About</li>
                                <li>Jobs</li>
                                <li>For the Record</li>
                            </ul>
                        </div>

                        <div className='footCon'>
                            <ul>
                                <li className='ftHead '>COMMUNITIES</li>
                                <li>For Artists</li>
                                <li>Developers</li>
                                <li>Advertising</li>
                                <li>Investors</li>
                                <li>Vendors</li>
                            </ul>
                        </div>

                        <div className='footCon'>
                            <ul>
                                <li className='ftHead'>USEFUL LINKS</li>
                                <li>Support</li>
                                <li>Web Player</li>
                                <li>Free Mobile App</li>
                            </ul>
                        </div>

                    </div>
                    <div className='socialCon col-lg-4'>
                        <div><i className="fa-brands fa-instagram"></i></div>
                        <div><i className="fa-brands fa-twitter"></i></div>
                        <div><i className="fa-brands fa-facebook-f"></i></div>
                    </div>
                </div>





                <div className='credits'>
                    <div className='credit'>
                        <div className='row'>
                            <div className='credMain'>
                                <div className='cred1'>
                                    <div className='cpara'>Legal</div>
                                    <div className='cpara'>PrivacyCenter</div>
                                    <div className='cpara'>PrivacyPolicy</div>
                                    <div className='cpara'>Cookies</div>
                                    <div className='cpara'>About Ads</div>
                                </div>

                                <div className='cred2'>
                                    <div className='cpara'>India(English)</div>
                                    <div className='cpara'>2023 Spotify AB</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Footer