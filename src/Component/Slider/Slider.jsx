import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiper } from 'swiper/react';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from './Card';



const Slider = (props) => {
//     const width = window.innerWidth;
//     console.log( width)
//     const [screen, setScreen] = useState(width);
// const active = () => {
//     if(width <= 768){
//         setScreen = 1;
//     }else{
//         setScreen = 3;
    //}
//}
  return (
    <div>
        
         <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          cssMode={true}
          spaceBetween={10}
          slidesPerView={2}
          keyboard={true}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          mousewheel={true}
        >
          <SwiperSlide>
           <Card 
        img = "https://i.postimg.cc/1zCTnwTN/vr.jpg"
        title = "Heading1" 
        para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        date = "19-March-2022"
       /> </SwiperSlide>

          <SwiperSlide>
           <Card 
        img = "https://i.postimg.cc/j5BFvKRx/ppr.jpg"
        title = "Heading2" 
        para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        date = "18-March-2022"
       />
          </SwiperSlide>
          <SwiperSlide>
           <Card 
        img = "https://i.postimg.cc/xqD3N1nm/meat.jpg"
        title = "Heading3" 
        para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        date = "17-March-2022"
       />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
        img = " https://i.postimg.cc/ydGPBTGv/meat2.jpg"
        title = "Heading4" 
        para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        date = "13-March-2022"
       />
          </SwiperSlide>
          
          <SwiperSlide>
            <Card 
        img = "https://i.postimg.cc/wxSCQ5BX/girl.png"
        title = "Heading5" 
        para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        date = "13-March-2022"
       />
          </SwiperSlide>

          <SwiperSlide>
            <Card 
        img = "https://i.postimg.cc/ZRnc1QwW/boy.png"
        title = "Heading6" 
        para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        date = "13-March-2022"
       />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
        img = "https://i.postimg.cc/j5BFvKRx/ppr.jpg"
        title = "Heading7" 
        para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        date = "13-March-2022"
       />
          </SwiperSlide>

          ...


        </Swiper> 

      </div>
  )
}

export default Slider
