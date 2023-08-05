import { useEffect, useRef } from "react";
import './SquareShow.css';
import { register } from "swiper/element/bundle";
register();

const images = require.context('../../images/square/previews', true);
const imageList = images.keys().map(image => images(image));
console.table(imageList);

const SquareShow = () => {
    const swiperRef = useRef(null);

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