import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DongengList = [
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

const Rekomendasi = () => {
  return (
    <>
      <div className="mt-16">
        <h3 className="text-3xl font-semibold">Rekomendasi</h3>
        <div className="grid grid-cols-3 mt-8">
          {DongengList.map((item, index) => (
            <Link to={item.slug} key={index} className="px-3 text-center">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-56 rounded-xl"
                />
                <FaRegCirclePlay className="absolute inset-0 m-auto text-white size-14" />
              </div>
              <h4 className="mt-4 text-2xl font-bold">{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rekomendasi;
