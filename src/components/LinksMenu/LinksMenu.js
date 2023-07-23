import React from 'react';
import { Link } from 'react-router-dom';

const LinksMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/prints">Prints</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
              {/* <li id=""><a href="assets/images/epping-forest/gallery.html">epping forest</a></li> */}
              {/* <li id=""><a href="assets/images/lea-valley/gallery.html">lea valley</a></li> */}
              {/* <li id=""><a href="#">forest of dean</a></li> */}
              {/* <li id=""><a href="assets/images/elsewhere/gallery.html">elsewhere</a></li> */}
              {/* <li id=""><a href="#">commercial</a></li> */}
              {/* <li id="">social</li> */}
      </ul>
    </nav>
  );
};

export default LinksMenu;
