import React from 'react';
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs';
import { FaDesktop } from 'react-icons/fa6';
import Track from '../img/track.png';



const TrackList = () => {
    return (
        <div className='trackList'>
            <div className='trackInner'>
                <div className='top'>
                    <img src={Track} alt='' />
                    <p
                        className='trackName'
                    >Sample Name <span
                        className='trackSpan'
                    >Artists</span></p>
                </div>
                <div className='bottom'>
                    <i>
                        <BsFillVolumeUpFill />
                    </i>
                    <input type='range' />
                    <i>
                        <BsMusicNoteList />
                    </i>
                    <i>
                        <FaDesktop />
                    </i>
                </div>
            </div>
        </div>
    );
};


export { TrackList };