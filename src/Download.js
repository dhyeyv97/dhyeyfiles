import React from 'react'
import { useTitle } from './App'

const Download = () => {
    useTitle("Spotify - Download")
    return (
        <div className='download'>
            <div className='container'>
                <div className='row'>
                    <div className='downloadMain'>

                        <div className='linux-main'>
                            <h1 className='down-title'>Spotify for Linux</h1>
                            <p className='linux-p'>
                                Here you can find different ways of installing Spotify for Linux.
                                Spotify for Linux is a labor of love from our engineers that wanted to
                                listen to Spotify on their Linux development machines.
                                They work on it in their spare time and it is
                                currently not a platform that we actively support. The experience may differ from our
                                other Spotify Desktop clients, such as Windows and Mac.
                                You can tell us what you think and ask other users for help at
                                the <span>Desktop (Linux) board</span> in The Spotify Community forum.
                            </p>
                        </div>

                        <div className='ubuntu-main'>
                            <h2 className='ubuntu-title'>Install on Ubuntu</h2>
                            <p className='linux-p'> Go to <span>Spotify in Ubuntu Software </span>and click install. If the link doesn't work,
                                open Ubuntu Software and search for Spotify.</p>
                        </div>

                        <div className='command'>
                            <h2 className='ubuntu-title'>Install via command line</h2>
                            <h3>Snap</h3>
                            <p className='linux-p'>
                            If you don't have access or don't want to use Ubuntu Software, 
                            it is possible to install Spotify from the command line with snap. 
                            Run the following command in your terminal:
                            </p>

                            <div className='installs'>snap install spotify</div>
                        </div>
            


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download