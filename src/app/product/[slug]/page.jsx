
"use client"
import { getCategoryProduct } from "@/api/api";
import CategoryProductList from "@/components/CategoryProductList";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NoProduct from "./NoProduct";
import CategorySlider from "@/components/CategorySlider";
// import { useRouter } from "next/router";


export default function CategoryPage({ predefinedSlug }) {
    const pathName = usePathname();

    const dsfaultSlug = pathName.split('/').pop();


    // 페이지 URL에서 slug를 받거나, props로 전달된 predefinedSlug를 사용합니다.
    const slug = predefinedSlug || dsfaultSlug;

    const [products, setProducts] = useState([]);
    const [randomImages, setRandomImages] = useState([]);
    
    useEffect(() => {
        getCategoryProduct(slug).then((product)=>{
            setProducts(product);
        }).catch((error)=>{
            console.error(error)
        })  
    },[slug])
   

    //랜덤 이미지 

    useEffect(()=>{
        if(products.length > 0){
            const randomImg = [...products].sort(()=> 0.5-Math.random())
            console.log(randomImg)
            const selectImg = randomImg.slice(0,4).map((el)=>el.image)
            setRandomImages(selectImg)
            console.log(randomImages)
        }
    },[products])

    return(
        <Container>
            <h2>{slug}페이지</h2>
            <CategorySlider imgs={randomImages}/>
            {/* <CategoryProductList slug={slug} products={products}/> */}
            {products.length > 0 ? (
                <CategoryProductList slug={slug} products={products}/>
            ) : (
                <NoProduct/>
            )}
        </Container>
    )
}
const Container = styled.div`
    
`