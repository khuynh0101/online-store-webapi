import React from 'react';
import './Nav.css';

export const Nav = () => {
  return (
    <nav class='nav-container'>
      <ul class='nav-containter-items'>
        <li class='nav-containter-item'>
          <a class='link' href='index.html'>
            Home
          </a>
        </li>
        <li class='nav-containter-item subitems' href='plants.html'>
          <a class='link link-arrow' href='index.html'>
            Plants
            <span>
              <svg
                class='svg-arrow'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='#3b9288'
                width='18px'
                height='18px'
              >
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
              </svg>
            </span>
          </a>
          <ul class='nav-containter-subitems'>
            <li class='nav-containter-subitem'>
              <a class='link' href='#'>
                Bonsai
              </a>
            </li>
            <li class='nav-containter-subitem'>
              <a class='link' href='#'>
                Hanging Basket
              </a>
            </li>
            <li class='nav-containter-subitem'>
              <a class='link' href='#'>
                Palm
              </a>
            </li>
            <li class='nav-containter-subitem'>
              <a class='link' href='#'>
                Succulent
              </a>
            </li>
          </ul>
        </li>
        <li class='nav-containter-item'>
          <a class='link' href='index.html'>
            WishList
          </a>
        </li>
        <li class='nav-containter-item'>
          <a class='link' href='index.html'>
            Contact
          </a>
        </li>
      </ul>
      <div class='nav-action'>
        <div class='nav-action-search'>
          <input class='input-search' type='text' placeholder='Search' />
          <svg
            class='nav-action-search-img svg-img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path
              class='svg-action'
              d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
            />
          </svg>
        </div>
        <a class='link cart'>
          <span class='cart-flex'>
            <svg
              class='svg-img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path
                class='svg-action'
                d='M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z'
              />
            </svg>
            <span class='counter'>1</span>
          </span>
        </a>
      </div>
    </nav>
  );
};
