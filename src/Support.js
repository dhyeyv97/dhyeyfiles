import React from 'react'
import { useTitle } from './App'

const Support = () => {
    useTitle("Spotify - Support")
    return (
        <div className='support'>
            <div className='container'>
                <div className='row'>
                    <div className='supportMain'>
                        <h2 className='supportSub'>SPOTIFY SUPPORT</h2>
                        <p className='supportTitle'> How can we help you?</p>
                        <p className='supportLog'><span> Log in</span> for faster help</p>
                        <div className="input-group mb-3">
                            <div className='searIcon'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className='card-grid'>

                            <div className='card'>
                                <div className='cardsS' id='cs1'>
                                    <div className='para-card'>Payment Help</div>
                                    <div className='img-card'>
                                        <img src='https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=64&fit=max&auto=format' alt='img' className='imcard' />
                                    </div>
                                </div>
                            </div>

                            <div className='card'>
                                <div className='cardsS' id='cs2'>
                                    <div className='para-card'>Plan Help</div>
                                    <div className='img-card'>
                                        <img src='https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=64&fit=max&auto=format' alt='img' className='imcard' />
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='cardsS' id='cs3'>
                                    <div className='para-card'>App Help</div>
                                    <div className='img-card'>
                                        <img src='https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=64&fit=max&auto=format' alt='img' className='imcard' />
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='cardsS' id='cs4'>
                                    <div className='para-card'>Device Help</div>
                                    <div className='img-card'>
                                        <img src='https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=64&fit=max&auto=format' alt='img' className='imcard' />
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='cardsS' id='cs5'>
                                    <div className='para-card'><span>Safety & Privacy</span></div>
                                    <div className='img-card'>
                                        <img src='https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format' alt='img' className='imcard' />
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='cardsS' id='cs6'>
                                    <div className='para-card'>Account Help</div>
                                    <div className='img-card'>
                                        <img src='https://cdn.sanity.io/images/tsbk0zvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=64&fit=max&auto=format' alt='img' className='imcard' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support