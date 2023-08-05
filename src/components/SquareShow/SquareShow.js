import { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import './SquareShow.css';
import { register } from "swiper/element/bundle";
register();



const SquareShow = () => {
    const swiperRef = useRef(null);

    const location = useLocation();
    // Define a mapping of URLs to image sources
    const imageMap = {
      '/': require.context('../../images/square/previews', true), // Home page
      '/about': require.context('../../images/about/previews', true), // About page
      // Add more routes and corresponding image sources as needed
    };
    // Get the image source based on the current location
    const imageSource = imageMap[location.pathname] || '../../images/overlays/squareOverlay.jpg';

    const imageList = imageSource.keys().map(image => imageSource(image));
    console.table(imageList);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
          slidesPerView: 1,
          // spaceBetween: 10,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          // effect: 'cube',
          // cubeEffect: {
          //   shadow: false,
          // },
          speed: 2000,
          loop: true,
          grabCursor: true,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
          // hashNavigation: {
          //   watchState: true,
          // }, // causing RangeError: Maximum call stack size exceeded.
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        };
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
      }, []);

  return (
        <swiper-container 
            ref={swiperRef} 
            init="false">
            
            {imageList.map((image, index) => (
              <swiper-slide key={index} data-hash={`slide-${index}`}><img src={image} alt={`slide-${index}`} /></swiper-slide>
            ))}

        </swiper-container>
      );
    };



export default SquareShow;