import { Link } from "react-router-dom";

const HomePageCard = ({ name, description, src, to }) => {
  return (
    <div className="p-16 bg-white shadow-xl rounded-2xl">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-8  pr-16 basis-[40%]">
          <h4 className="text-4xl font-semibold">{name}</h4>
          <p className="flex-grow text-2xl font-semibold text-neutral-500">
            {description}
          </p>
          <Link className="text-2xl font-semibold text-blue-700/70" to={to}>
            Lihat Selengkapnya
          </Link>
        </div>
        <div className="basis-1/2">
          <img className="w-full rounded-lg mr-10" src={src} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
