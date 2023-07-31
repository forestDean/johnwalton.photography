import { useEffect, useRef } from "react";
import './SquareShow.css';
import { register } from "swiper/element/bundle";
register();

const SquareShow = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
          slidesPerView: 1,
          spaceBetween: 10,
          effect: 'fade',
          crossfade: true,
          loop: true,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
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
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
        </swiper-container>
      );
    };



export default SquareShow;