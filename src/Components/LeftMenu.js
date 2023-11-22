import React from 'react';
import '../Styles/LeftMenu.css';
import { FaSpotify, FaEllipsis } from "react-icons/fa6";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import MenuPlayList from './MenuPlayList';


const LeftMenu = () => {
  return (
    <div className='leftMenu'>
      <div className='logoContainer'>
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsis />
        </i>
      </div>
      <div className='searchBox'>
        <input type='text' placeholder='Search...' />
        <i className='searchIcon'>
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={'Menu'} menuObject={MenuList} />
      <MenuPlayList />
    </div>
  );
};

export { LeftMenu };