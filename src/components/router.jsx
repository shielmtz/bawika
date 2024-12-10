import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgotpassword";
import Profile from "../pages/profile";
import SignUp from "../pages/signup";
import Dashboard from "../dashboard/dashboard";
import MateriDashboard from "../dashboard/materipembelajaran";
import TembangJawaDashboard from "../dashboard/tembangjawa";
import Dongeng from "../pages/dongeng";
import SingleDongeng from "../pages/singleDongeng";
import MateriPembelajaran1 from "../pages/materipembelajaran1"; 
import MateriPembelajaran2 from "../pages/materipembelajaran2"; 
import MateriPembelajaran3 from "../pages/materipembelajaran3"; 
import MateriPembelajaran4 from "../pages/materipembelajaran4"; 
import MateriPembelajaran5 from "../pages/materipembelajaran5"; 
import DetailUpacaraMantenan from "../pages/detailupacaramantenan";
import DetailSelametan from "../pages/detailslametan"; 
import DetailSekaten from "../pages/detailsekaten"; 
import DetailRuwetan from "../pages/detailruwatan";
import DetailPakaianPria from "../pages/detailpakaianpria";
import DetailPakaianWanitaa from "../pages/detailpakaianwanita";
import DetailTarianTradisional from "../pages/detailtariantrdisional";
import DetailKesenian from "../pages/detailkesenian";
import DetailJawaNgoko from "../pages/detailjawangoko";
import DetailJawaKrama from "../pages/detailjawakrama";
import DetailAksaraJawa from "../pages/detailaksarajawa";
import PremiumPlan from "../pages/premiumpllan";
import PaymentForm from "../pages/payment";
import TembangJawa from "../pages/tembangjawa";
import TembangPlayer from "../pages/detailtembang1";
import TembangPlayer2 from "../pages/detailtembang2";
import TembangPlayer3 from "../pages/detailtembang3";
import TembangPlayer4 from "../pages/detailtembang4";
import Event from "../pages/event";
import DaftarEvent from "../pages/daftarEvent";
import Quiz from "../pages/detailkuis";
import PaymentProcess from "../pages/paymentprocess";
import KuisNavbar from "../pages/kuisnavbar";
import PembelajaranNavbar from "../pages/pembelajaran";



const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/materidashboard" element={<MateriDashboard />} />
        <Route path="/tembangjawadashboard" element={<TembangJawaDashboard />} />
        <Route path="/dongeng" element={<Dongeng />} />
        <Route path="/dongeng/:slug" element={<SingleDongeng />} />
        <Route path="/materipembelajaran" element={<MateriPembelajaran1 />} />
        <Route path="/materipembelajaran1" element={<MateriPembelajaran1 />} />
        <Route path="/materipembelajaran1/premium" element={<PremiumPlan />} />
        <Route path="/materipembelajaran2" element={<MateriPembelajaran2 />} />
        <Route path="/materipembelajaran3" element={<MateriPembelajaran3 />} />
        <Route path="/materipembelajaran4" element={<MateriPembelajaran4 />} />
        <Route path="/materipembelajaran5" element={<MateriPembelajaran5 />} />
        <Route path="/upacaramantenan" element={<DetailUpacaraMantenan />} />
        <Route path="/slametan" element={<DetailSelametan />} />
        <Route path="/sekaten" element={<DetailSekaten />} />
        <Route path="/ruwetan" element={<DetailRuwetan />} />
        <Route path="/pakaianpria" element={<DetailPakaianPria />} />
        <Route path="/pakaianwanita" element={<DetailPakaianWanitaa />} />
        <Route
          path="/tariantradisional"
          element={<DetailTarianTradisional />}
        />
        <Route path="/kesenian" element={<DetailKesenian />} />
        <Route path="/jawangoko" element={<DetailJawaNgoko />} />
        <Route path="/jawakrama" element={<DetailJawaKrama />} />
        <Route path="/aksarajawa" element={<DetailAksaraJawa />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/success" element={<PaymentProcess />} />
        <Route path="/tembangjawa" element={<TembangJawa />} />
        <Route path="/tembang/1" element={<TembangPlayer />} />
        <Route path="/tembang/2" element={<TembangPlayer2 />} />
        <Route path="/tembang/3" element={<TembangPlayer3 />} />
        <Route path="/tembang/4" element={<TembangPlayer4 />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/daftar" element={<DaftarEvent />} />
        <Route path="/kuis1" element={<Quiz />} />
        <Route path="/kuis" element={<KuisNavbar />} />
        <Route path="/pembelajaran" element={<PembelajaranNavbar />} />
      </Routes>
    </>
  );
};

export default Router;
