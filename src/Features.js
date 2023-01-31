import React from 'react'

const Features = () => {
    return (
        <div className='features'>
            <div className='container'>
                <div className='row'>
                    <div className='fts'>

                        <p className='f-title text-center'>Why Spotify?</p>

                        <ul className='featuresMain'>

                            <li className='ft-1'>
                                <div className='outIcon1'><div className='icons-1'><i className="fa-solid fa-play"></i></div></div>
                                <div className='ft-con'>
                                    <p className='ft-title'>Play your favorites.</p>
                                    <p className='ft-para'>Listen to the songs you love,
                                        and discover new music and podcasts.</p>
                                </div>
                            </li>

                            <li className='ft-1'>
                                <div className='outIcon3'>
                                    <div className='icons-2'>
                                        <i className="fa-solid fa-grip-lines-vertical"></i>
                                        <i className="fa-solid fa-slash"></i>
                                    </div>
                                </div>
                                <div className='ft-con'>
                                    <p className='ft-title'>Playlists made easy.</p>
                                    <p className='ft-para '>We'll help you make playlists.
                                        Or enjoy playlists made by music experts.</p>
                                </div>
                            </li>

                            <li className='ft-1 ics'>
                                <div className='outIcon3'><div className='icons-3'><i className="fa-solid fa-heart"></i></div> </div>
                                <div className='ft-con'>
                                    <p className='ft-title'>Make it yours.</p>
                                    <p className='ft-para '>Tell us what you like,
                                        and we'll recommend music for you.</p>
                                </div>
                            </li>

                            <li className='ft-1 ics'>
                                <div className='icons-4'><i className="fa-solid fa-bolt"></i></div>
                                <div className='ft-con'>
                                    <p className='ft-title'>Save mobile data</p>
                                    <p className='ft-para'>To use less data when you play music,
                                        turn on Data Saver in Settings.</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features