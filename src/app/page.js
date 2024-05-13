"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Product from "@/components/Product";
import ProductPage from "./product/page";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "@/utils/categoryContext";
import MainCategoryList from "@/components/mainCategoryList";

export default function Home() {
  const {categoryList }= useContext(CategoryContext)

  return (
    <main className={styles.main}>
      {categoryList.map((category, index) => (
        <MainCategoryList key={index} category={category} />
      ))}
      <ProductPage/>
    </main>
  );
}
