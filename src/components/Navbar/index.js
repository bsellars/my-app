import React from 'react'
import './App.css';

function App() {
  return (
    <div>
      <div className="nav">
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul class="menu__box">
            <li>
              <a class="menu__item" href="/">
                Home
              </a>
            </li>
            <li>
              <a class="menu__item" href="about">
                About
              </a>
            </li>
            <li>
              <a class="menu__item" href="stream">
                stream
              </a>
            </li>
            <li>
              <a class="menu__item" href="links">
                Links
              </a>
            </li>
            <li>
              <a class="menu__item" href="contactUs">
                Contact
              </a>
            </li>
            <li>
              <a class="menu__item" href='Funders'>
                Funders
              </a>
            </li>
          </ul>
          <div className="nav__header">
          <img
               src="https://www.tsilhqotin.ca/wp-content/uploads/2022/03/tsilhqotin_radio-removebg-preview-1.png"
               alt="TNG Radio"
               className='logo'
             />
            Tŝilhqot’in Radio
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
