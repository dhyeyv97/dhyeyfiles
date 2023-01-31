import React from 'react'

const Home = () => {
    return (
        <section className='home-main'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-sm-4 col-6 home-p1'>
                        <div className='smartphone d-flex align-items-end justify-content-end border-bottom-0'>
                            <img src='https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b' alt="Mobile Play" className='img-fluid home-img'/>
                        </div>
                    </div>

                    <div className='col-sm-7 col-6 home-p2'>
                        <div>
                            <div> <p className='para-home'>Play millions of songs and podcasts, for free.</p> </div>

                            <div>
                                <a role="button" href="/" className='btn btn-light btn-home'> GET SPOTIFY FREE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home