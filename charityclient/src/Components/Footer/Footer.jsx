import React from 'react'
import './Footer.css';
import logoimg from '../../Asserts/footer logo.png'


export default function Footer() {
  return (
    <footer>
      <div className='footerbox'>
        <img src={logoimg} alt="logo" />

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Charity</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        
        

        <div className="socialicons">
          <ul>
            <li><a href="#"><span><i class="bi bi-facebook"></i></span></a></li>
            <li><a href="#"><span><i class="bi bi-instagram"></i></span></a></li>
            <li><a href="#"><span><i class="bi bi-twitter"></i></span></a></li>
            <li><a href="#"><span><i class="bi bi-youtube"></i></span></a></li>
            <li><a href="#"><span><i class="bi bi-pinterest"></i></span></a></li>
          </ul>
        </div>
        <p>© 2026 Gowthaman Foundation. All Rights Reserved. Design by Gowthaman</p>

      </div>
    </footer>
  )
};
