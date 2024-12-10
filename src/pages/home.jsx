import Navbar from "../components/navbar";
import chara from "../assets/chara.png";
import chara2 from "../assets/chara2.png";
import dongeng from "../assets/dongeng.png";
import pembelajaran from "../assets/pembelajaran.png";
import tembang_macapat from "../assets/tempbang_macapat.png";
import aksara from "../assets/aksara.png";
import tembang_macapat2 from "../assets/tembang_macapat2.png";
import tarian from "../assets/tarian.png";
import ayoSinau from "../assets/ayo_sinau.png";
import HomePageCard from "../components/homePageCard";
import KuisCard from "../components/kuisCard";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        className="w-full h-[calc(100vh-12rem)] flex flex-col md:flex-row items-center justify-between px-10  md:px-10 lg:px-20 mt-20 mb-20 " // Added mt-5 and mb-5
        id="hero"
      >
        <div className="flex flex-col items-start justify-center gap-4 md:gap-6 sm:flex md:w-1/2">
          <div className="px-4 py-2 text-xl font-semibold rounded-lg bg-[#fee799] w-fit">
            <h3>🖐 Halo Semuanya</h3>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            <p>Aku Bawika</p>
            <p>Belajar Bahasa Jawa,</p>
            <p>Menghidupkan Budaya</p>
          </h1>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            className="w-full h-auto object-contain "
            src={chara}
            alt="Character"
          />
        </div>
      </section>

      {/* Section: Lihat Keseruan */}
      <section className="bg-[#fee799] py-16 px-4 md:px-10 lg:px-20">
        <h3 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Lihat keseruannya di bawah!
        </h3>
        <div className="flex flex-col gap-16">
          <HomePageCard
            name={"Dongeng Anak"}
            description={
              "Dongeng anak dengan berbagai kisah yang menarik, penuh pelajaran budaya Jawa yang asyik dan seru!"
            }
            src={dongeng}
            to={"/dongeng"}
          />
          <HomePageCard
            name={"Materi Pembelajaran"}
            description={
              "Belajar budaya dan bahasa Jawa, seru, penuh makna, dan melestarikan warisan leluhur."
            }
            src={pembelajaran}
            to={"/materipembelajaran"}
          />
          <HomePageCard
            name={"Tembang Jawa"}
            description={
              "Belajar budaya dan bahasa Jawa, seru, penuh makna, dan melestarikan warisan leluhur."
            }
            src={tembang_macapat}
            to={"/tembangjawa"}
          />
        </div>
      </section>

      {/* Section: Event Terbaru */}
      <section className="container mx-auto py-16 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-4xl md:text-5xl font-semibold mb-6">
              Event Terbaru
            </h3>
            <p className="text-lg md:text-xl text-neutral-600 mb-6">
              Join berbagai event seru dan lomba budaya serta bahasa Jawa!
              Jangan lewatkan kesempatan untuk mendalami kearifan lokal melalui
              rangkaian acara menarik, dari pentas seni, lomba aksara, hingga
              kompetisi cerita rakyat. Yuk, ajak keluarga dan teman-teman untuk
              ikut serta dan bangkitkan jiwa Jawa dalam setiap langkah kita!
            </p>
            <Link
              className="px-6 py-3 text-lg font-semibold border-2 border-gray-600 rounded-lg text-neutral-600 hover:bg-gray-100"
              to={"/event"}
            >
              Lihat Selengkapnya
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              className="w-full h-auto object-contain"
              src={chara2}
              alt="Character 2"
            />
          </div>
        </div>
      </section>

      {/* Section: Kuis Menarik */}
      <section className="bg-[#fee799] py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Berbagai Kuis Menarik
          </h3>
          <p className="text-lg md:text-xl text-neutral-600">
            Untuk meningkatkan pengetahuanmu terhadap budaya serta bahasa Jawa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <KuisCard
            name={"Kuis Aksara Jawa"}
            src={aksara}
            to={"/kuis1"}
           
          />
          <KuisCard
            name={"Kuis Tarian Daerah"}
            src={tarian}
            to={"/kuis2"}
           
          />
          <KuisCard
            name={"Kuis Tembang Macapat"}
            src={tembang_macapat2}
            to={"/kuis3"}
         
          />
          <KuisCard
            name={"Kuis Bahasa Jawa"}
            src={ayoSinau}
            to={"/kuis4"}
       
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
