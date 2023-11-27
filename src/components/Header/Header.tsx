import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <img className='logo' width={80} src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjN2cjFxcXRuMDc2Z3U4ZDhrOTM4NXVhcGE4cW9kaXlpZWlzbHc1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dUIZlh9FGTUa8EN7K2/giphy.gif" alt="" />
      {/* <img className='logo' width={120} src='https://logowik.com/content/uploads/images/candy-crush-game4868.logowik.com.webp'/> */}
    </div>
  );
}
