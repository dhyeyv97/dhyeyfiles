import React from 'react'

const FAQ = () => {

    return (

        <div className='faq'>
            <div className='container'>
                <div className='row'>
                    <div className='faq-main'>
                        <div className='ques'>Got questions?</div>

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button id='accId' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        How do I create a playlist?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
                                    <div className="accordion-body">
                                        <p>Playlists are a great way to save collections of music, either for your own listening or to share.</p>
                                        <p>To create one:</p>
                                        <ol>
                                            <li>Tap Your Library.</li>
                                            <li> Tap <span>CREATE.</span></li>
                                            <li>Give your playlist a name.</li>
                                            <li>Start adding songs (and we'll help you along).</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I activate Data Saver mode?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                                    <div className="accordion-body">
                                        <ol>
                                            <li> Tap <span>Home.</span></li>
                                            <li> Tap <span>Settings.</span></li>
                                            <li> Tap <span>Data Saver.</span></li>
                                            <li>Switch on Data Saver.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Is it only possible to shuffle play music?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                    <div className="accordion-body">
                                        <p>Any playlist with the shuffle icon will play on shuffle.</p>
                                        <p>Some playlists won't have the shuffle icon, so you can tap any song to play it.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Where can I find Podcasts?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" >
                                    <div className="accordion-body">
                                        <p>Tap <span>Search</span>. Under <span>Browse All</span>, tap Podcasts.</p>
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

export default FAQ