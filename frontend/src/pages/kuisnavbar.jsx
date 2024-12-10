import Navbar from "../components/navbar";
import KuisCard from "../components/kuisCard";
import ayoSinau from "../assets/ayo_sinau.png";
import aksara from "../assets/aksara.png";
import tembang_macapat2 from "../assets/tembang_macapat2.png";
import tarian from "../assets/tarian.png";

const KuisNavbar = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="container px-10 mx-auto my-16">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="text-5xl font-semibold">Daftar Kuis Menarik</h3>
            <p className="text-2xl font-semibold text-neutral-600">
              Untuk meningkatkan pengetahuanmu terhadap budaya serta bahasa jawa
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-8">
            <KuisCard
              name={"Kuis Aksara Jawa"}
              src={aksara}
              to={"/kuis1"}
              lock={false}
            />
            <KuisCard
              name={"Kuis Tarian Daerah"}
              src={tarian}
              lock={false}
              to={"/kuis2"}
            />
            <KuisCard
              name={"Kuis Tembang Macapat"}
              src={tembang_macapat2}
              to={"/kuis3"}
              lock={false}
            />
            <KuisCard
              name={"Kuis Bahasa Jawa"}
              src={ayoSinau}
              to={"/kuis4"}
              lock={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default KuisNavbar;
