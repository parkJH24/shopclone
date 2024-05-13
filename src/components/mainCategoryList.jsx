// "use client";

// import { useEffect, useState } from "react";
// import { getCategoryProduct } from "@/api/api";
// import CategoryProductList from "./CategoryProductList";

// export default function MainCategoryList({ category }) {
//     const [items, setItems] = useState([]); // Initialize as empty array
//     const [loading, setLoading] = useState(false); // State to track loading status

//     useEffect(() => {
//         setLoading(true); // Begin loading
//         getCategoryProduct(category)
//             .then(products => {
//                 setItems(products);
//                 setLoading(false); // End loading
//             })
//             .catch(error => {
//                 console.error(error);
//                 setLoading(false); // Ensure loading is false on error
//             });
//     }, [category]);

//     return (
//         <div>
//             {loading ? (
//                 <p>Loading...</p> // Display loading message while data is fetching
//             ) : (
//                 items.length > 0 && <CategoryProductList slug={category} products={items} />
//             )}
//         </div>
//     );
// }
"use client";

import { useEffect, useState } from "react";
import { getCategoryProduct } from "@/api/api";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import CategoryProductList from "./CategoryProductList";

export default function MainCategoryList({ category }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getCategoryProduct(category)
            .then(products => {
                setItems(products.slice(0, 10)); // 최대 10개 제한
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [category]);

    const swiperStyle = {
        width : `100%`,
        maxWidth : '100vw',
    }

    return (
        <div>
            {loading ? (
                <p>로딩 중...</p>
            ) : (
                <Swiper
                style={swiperStyle}
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            {/* 각 상품을 표시하는 방식을 구성해야 합니다. */}
                            <img src={item.image} alt={item.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
