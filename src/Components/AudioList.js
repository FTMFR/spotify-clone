import React, { useEffect, useState } from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa6'
import Songs from './Songs';
import '../Styles/MainContainer.css';
import MusicPlayer from './MusicPlayer';


const AudioList = () => {
    const [songs, setSongs] = useState(Songs);

    const [song, setSong] = useState(Songs[0].song);
    const [img, setImg] = useState(Songs[0].imgSrc);

    useEffect(() => {
        const songs = document.querySelectorAll('.songs');

        function changeMenuActive() {
            songs.forEach((n) => n.classList.remove('active'));
            this.classList.add('active');
        };

        songs.forEach((n) => n
            .addEventListener('click', changeMenuActive));
    }, []);


    const changeFavorite = (id) => {
        Songs.forEach(song => {
            if (song.id === id) {
                song.favourite = !song.favourite
            };
        });
    
        setSongs([...Songs]);
    };


    const setMainSongs = (songSrc, imgSrc) => {
        setSong(songSrc);
        setImg(imgSrc);
    }



    return (
        <div className='audioList'>
            <h2 className='title'>
                The List <span>{`${Songs.length} songs`}</span>
            </h2>
            <div className='songsContainer'>
                {
                    songs && songs.map((song, index) => (
                        <div className='songs' key={song?.id}
                            onClick={() => setMainSongs(song?.song, song?.imgSrc)}
                        >
                            <div className='count'>{`#${index + 1}`}</div>
                            <div className='song'>
                                <div className='imgBox'>
                                    <img src={song?.imgSrc} alt='' />
                                </div>
                                <div className='section'>
                                    <p className='songName'>
                                        {song.songName}
                                        <span className='songSpan'>
                                            {song.artist}
                                        </span>
                                    </p>
                                    <div className='hits'>
                                        <p className='hit'>
                                            <i>
                                                <FaHeadphones />
                                            </i>
                                            95,598,145
                                        </p>
                                        <p className='duration'>
                                            <i>
                                                <FaRegClock />
                                            </i>
                                            03.04
                                        </p>
                                        <div className='favorite'
                                            onClick={() => changeFavorite(song?.id)}
                                        >
                                            {song?.favourite ? (
                                                <i>
                                                    <FaHeart />
                                                </i>
                                            ) : (
                                                <i>
                                                    <FaRegHeart />
                                                </i>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <MusicPlayer song={song} imgSrc={img} />
        </div>
    );
};

export { AudioList }