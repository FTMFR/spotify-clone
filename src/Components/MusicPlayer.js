import React, { useRef, useState, useEffect } from 'react';
import {
    FaBackward,
    FaBackwardStep, FaForward, FaForwardStep, FaHeart,
    FaPause, FaPlay, FaRegHeart, FaShare
} from 'react-icons/fa6';
import { BsDownload } from "react-icons/bs";
import '../Styles/MusicPlayer.css';


const MusicPlayer = ({ song, imgSrc }) => {
    const [isLove, setIsLove] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioPlayer = useRef(); //for audio tag
    const progressBar = useRef(); // for progress bar

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const animationRef = useRef();


    useEffect(() => {
        const seconds = audioPlayer.current.duration;
        setDuration(seconds);
    }, [
        audioPlayer?.current?.loadedmetadata,
        audioPlayer?.current?.readyState
    ]);

    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        // < 10 -> 09 or 11,12

        const returnMin = minutes < 10 ?
            `0${minutes}` :
            `${minutes}`;

        const seconds = Math.floor(sec % 60);
        const returnSec = seconds < 10 ?
            `0${seconds}` :
            `${seconds}`;

        return `${returnMin} : ${returnSec}`;

    };


    const changeCurrentTime = () => {
        progressBar.current.style
            .setProperty('--player-played',
                `${(progressBar.current.value / duration) * 100}%`)

    };

    const whilePlay = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changeCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlay)
    };


    const changePlayPause = () => {
        const preValue = isPlaying;

        if (!preValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlay);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        };

        setIsPlaying(!preValue);
    };

    const changeLoved = () => {
        setIsLove(!isLove);
    };

    const changeProgress = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        progressBar.current.style
            .setProperty('--player-played',
                `${(progressBar.current.value / duration) * 100}%`)


        setCurrentTime(progressBar.current.value);

    };




    return (
        <div className='musicPlayer'>
            <div className='songImage'>
                <img src={imgSrc} alt='' />
            </div>
            <div className='songAttribute'>
                <audio src={song} preload='metadata' ref={audioPlayer} />
                <div className='top'>
                    <div className='left'>
                        <div className='loved' onClick={changeLoved}>
                            {isLove ?
                                (<i><FaRegHeart /></i>) :
                                (<i><FaHeart /></i>)
                            }
                        </div>
                        <div className='download'>
                            <i>
                                <BsDownload />
                            </i>
                        </div>
                    </div>
                    <div className='middle'>
                        <div className='back'>
                            <i><FaBackwardStep /></i>
                            <i><FaBackward /></i>
                        </div>
                        <div className='playPause' onClick={changePlayPause}>
                            {isPlaying ?
                                (<i><FaPause /></i>) :
                                (<i><FaPlay /></i>)
                            }
                        </div>
                        <div className='forward'>
                            <i><FaForward /></i>
                            <i><FaForwardStep /></i>
                        </div>
                    </div>
                    <div className='right'>
                        <i><FaShare /></i>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='currentTime'>{CalculateTime(currentTime)}</div>
                    <input type='range'
                        className='progressBar'
                        ref={progressBar}
                        onChange={changeProgress}
                    />
                    <div className='duration'>
                        {(duration &&
                            !isNaN(duration) &&
                            CalculateTime(duration)) ?
                            CalculateTime(duration) :
                            '00:00'
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};


export default MusicPlayer;

