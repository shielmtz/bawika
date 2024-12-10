import React from "react";
import Navbar from "../components/navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";

const dongengList = [
  {
    img: "/image/bawang-merah.jpg",
    title: "Bawang Merah dan Bawang Putih",
    slug: "/dongeng/bawang-merah-dan-bawang-putih",
  },
  {
    img: "/image/timun-mas.jpg",
    title: "Timun Mas dan Raksasa",
    slug: "/dongeng/timun-mas-dan-raksasa",
  },
  {
    img: "/image/sangkuriang.jpg",
    title: "Dongeng Sangkuriang",
    slug: "/dongeng/sangkuriang",
  },
];

const Dongeng = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "80px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="container px-10 mx-auto mt-10">
        <h3 className="mb-5 text-4xl font-semibold">Dongeng Anak</h3>
        <div className="mt-16">
          <Slider {...settings}>
            {dongengList.map((item, index) => (
              <div key={index} className="px-3 text-center">
                <Link to={item.slug}>
                  <div className="relative group">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-cover w-full rounded-xl h-72 transition-transform transform group-hover:scale-105"
                    />
                    <FaRegCirclePlay className="absolute inset-0 m-auto text-white size-14 transition-opacity opacity-0 group-hover:opacity-100" />
                  </div>
                  <h4 className="mt-4 text-2xl font-bold">{item.title}</h4>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Dongeng;
