import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const KuisCard = ({ name, src, to, lock }) => {
  return (
    <div className="relative z-0 w-full p-8 bg-white border-2 border-gray-300 shadow-xl rounded-2xl">
      {lock ? (
        <>
          <div className="absolute inset-0 z-50 -m-1 bg-black/70 rounded-2xl"></div>
          <FaLock className="absolute inset-0 z-50 m-auto text-white/40 size-12" />
        </>
      ) : (
        ""
      )}
      <div className="relative z-0 flex flex-col h-full gap-6 pb-12">
        <div className="h-40">
          <img
            className="object-cover w-full h-full rounded-xl"
            src={src}
            alt={name}
          />
        </div>
        <p className="text-4xl font-semibold">{name}</p>
        <Link
          className="absolute bottom-0 text-2xl font-semibold text-blue-700/70"
          to={to}
        >
          Mulai Kuis
        </Link>
      </div>
    </div>
  );
};

export default KuisCard;
