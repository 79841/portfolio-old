"use client";
import { useEffect, useState } from "react";
import { SimpleBox } from "../ui/SimpleBox";
import { siteMetaData } from "@/data/siteMetaData";
import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";

export const BlogCard = () => {
  const API_KEY = "de6fe833-1a35-4208-8e16-90afe85a5156";
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetch(
      `https://opengraph.io/api/1.1/site/${encodeURIComponent(
        "https://nextjs.org/",
      )}?app_id=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setImageUrl(res.hybridGraph.favicon);
      });
  }, []);
  return (
    <SimpleBox>
      <TbBrandNextjs size="50" color="blue" />
      {/* <Image src={imageUrl} alt="blog thumbnail" width={480} height={400} /> */}
    </SimpleBox>
  );
};
