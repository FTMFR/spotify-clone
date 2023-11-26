import React from 'react';
import Artists from '../img/artist.jpg';
import Check from '../img/check.png';
import { FaEllipsis, FaHeadphones, FaCheck } from 'react-icons/fa6';
import '../Styles/MainContainer.css';


const Banner = () => {
    return (
        <div className='banner'>
            <img src={Artists} alt='' className='bannerImg' />
            <div className='content'>
                <div className='breakCrump'>
                    <p>Home <span>/ Popular Artists</span></p>
                    <i>
                        <FaEllipsis />
                    </i>
                </div>
                <div className='artist'>
                    <div className='left'>
                        <div className='name'>
                            <h2>A-Ha</h2>
                            <img src={Check} alt='' />
                        </div>
                        <p>
                            <i>
                                <FaHeadphones />
                            </i>
                            11,184,1811 <span>Monthly Listener</span>
                        </p>
                    </div>
                    <div className='right'>
                        <a href='#'>play</a>
                        <a href='#'>
                            <i>
                                <FaCheck />
                            </i>
                            following
                        </a>
                    </div>
                </div>
            </div>
            <div className='bottom'></div>
        </div>
    );
};


export { Banner };