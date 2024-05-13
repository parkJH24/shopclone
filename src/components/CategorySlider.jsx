import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

export default function CategorySlider({ imgs }) {

    const sliderStyle = {
        width: '500px',
        height: '500px'
    }
    return (
        <>
            <Swiper
                style={sliderStyle}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000 }}
                speed={3000}
                modules={[Autoplay, EffectFade]}
                effect="fade"
            >
                {imgs.map((img, index) => (
                <SwiperSlide key={index}>
                    <img src={img} alt={`Slide ${index}`} />
                </SwiperSlide>
            ))}

            </Swiper>
        </>
    )
}