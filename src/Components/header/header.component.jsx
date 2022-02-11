import React from 'react';

import './header.styles.scss'


import logo from '../../Assets/logo.png'; 
import UserPhoto from '../../Assets/user-4.jpg';
import {ReactComponent as GlassIcon} from '../../Assets/SVG/magnifying-glass.svg';
import {ReactComponent as BookmarkIcon} from '../../Assets/SVG/bookmark.svg';
import {ReactComponent as ChatIcon} from '../../Assets/SVG/chat.svg';

export const Header = ({placeholder , handleChange}) => (

    <header className='header'>
           <img src={logo} alt="trillo logo" className="logo"/>
           <form action='#' className='search'>
             <input 
                type="text" 
                className='search__input' 
                placeholder={placeholder}
                onChange={handleChange}
             />
             <button className='search__button'>
               <GlassIcon className='search__icon' />
             </button>
           </form>
           <nav className='user-nav'>
             <div className='user-nav__icon-box'>
               <BookmarkIcon className='user-nav__icon' />
               <span className='user-nav__notification'>7</span>
             </div>
             <div className='user-nav__icon-box'>
               <ChatIcon className='user-nav__icon' />
               <span className='user-nav__notification'>13</span>
             </div>
             <div className='user-nav__user'>
               <img src={UserPhoto} className='user-nav__user-photo'/>
               <span className='user-nav__user-name'>Yassine</span>
             </div>
           </nav>
         </header>
)