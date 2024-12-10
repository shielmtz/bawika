import Navbar from "../components/navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import dongengService from "../service/dongengService";
import { useEffect, useState } from "react";

const Dongeng = () => {
  const [dongengData, setDongengData] = useState([]);

  // Ambil data dari API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await dongengService.getDongengs();
        setDongengData(response);
        console.log(dongengData) // Mengatur data yang diambil ke dalam state
      } catch (err) {
        console.error(err);
      }
    };

    fetchVideos();
  }, []);

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
  // Fungsi untuk mendapatkan URL thumbnail dari link pendek YouTube
  const getThumbnailUrl = (url) => {
    if (!url) return null;

    // Jika URL adalah format youtube short link
    const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/0.jpg`;
    }

    // Jika URL sudah dalam embed format, langsung kembalikan sebagai valid
    const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
    if (embedMatch && embedMatch[1]) {
      return `https://img.youtube.com/vi/${embedMatch[1]}/0.jpg`;
    }

    return null;
  };



  return (
    <>
      <Navbar />
      <div className="container px-10 mx-auto mt-10">
        <h3 className="mb-5 text-4xl font-bold font-poppins text-center">Dongeng Anak</h3>
        <div className="mt-16">
          <Slider {...settings}>
            {dongengData.length > 0 ? (
              dongengData.map((item, index) => (
                <div key={index} className="px-3 text-center">
                  <Link to={`/dongeng/${item.id}`}>
                    <div className="relative group">
                      <img
                        src={getThumbnailUrl(item.thumbnailLink)}
                        alt={item.title}
                        className="object-cover w-full rounded-xl h-72 transition-transform transform group-hover:scale-105"
                      />
                      <FaRegCirclePlay className="absolute inset-0 m-auto text-white size-14 transition-opacity opacity-0 group-hover:opacity-100" />
                    </div>
                    <h4 className="mt-4 text-2xl font-bold">{item.title}</h4>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center">Loading...</div>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Dongeng;
