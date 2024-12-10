import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgotpassword";
import SignUp from "../pages/signup";
import Dashboard from "../dashboard/dashboard";
import MateriDashboard from "../dashboard/MateriPembelajaranAdmin";
import TembangJawaDashboard from "../dashboard/tembangjawa";
import Dongeng from "../pages/dongeng";
import SingleDongeng from "../pages/singleDongeng";
import MateriPembelajaran1 from "../pages/materipembelajaran1";
import DetailKesenian from "../pages/detailkesenian";
import DetailJawaNgoko from "../pages/detailjawangoko";
import DetailJawaKrama from "../pages/detailjawakrama";
import DetailAksaraJawa from "../pages/detailaksarajawa";
import PaymentForm from "../pages/payment";
import TembangJawa from "../pages/tembangjawa";
import TembangPlayer from "../pages/detailtembang1";
import TembangPlayer2 from "../pages/detailtembang2";
import TembangPlayer3 from "../pages/detailtembang3";
import TembangPlayer4 from "../pages/detailtembang4";
import DaftarEvent from "../pages/daftarEvent";
import PaymentProcess from "../pages/paymentprocess";
import KuisNavbar from "../pages/kuisnavbar";
import PembelajaranNavbar from "../pages/pembelajaran";
import Profile from "../pages/profile";
import DetailPembelajaran from "../pages/detailpembelajaran";
import DetailTembang from "../pages/detailtembang";
import MateriPembelajaran from "../dashboard/MateriPembelajaranAdmin";
import DongengDashboard from "../dashboard/DongengDashboard";
import ListEvent from "../pages/ListEvent";
import DetailEvent from "../pages/DetailEvent";
import EventDashboard from "../dashboard/EventDashboard";
import EditProfile from "../pages/EditProfile";
import Quiz4 from "../pages/kuisbahasa";
import Quiz3 from "../pages/kuismacapat";
import Quiz2 from "../pages/kuistarian";
import Quiz1 from "../pages/kuisaksara";
import PesertaDashboard from "../dashboard/pesertaDashboard";



const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit/profile" element={<EditProfile />} />
        <Route path="/login/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dongengdashboard" element={<DongengDashboard />} />
        <Route path="/pesertadashboard/:id" element={<PesertaDashboard />} />
        <Route path="/materidashboard" element={<MateriDashboard />} />
        <Route path="/tembangjawadashboard" element={<TembangJawaDashboard />} />
        <Route path="/eventdashboard" element={<EventDashboard />} />
        <Route path="/dongeng" element={<Dongeng />} />
        <Route path="/dongeng/:id" element={<SingleDongeng />} />
        <Route path="/materipembelajaran" element={<MateriPembelajaran />} />
        <Route path="/pembelajaran/category/:id" element={<MateriPembelajaran1 />} />
        <Route path="/pembelajaran/:id" element={<DetailPembelajaran />} />
        <Route path="/kesenian" element={<DetailKesenian />} />
        <Route path="/jawangoko" element={<DetailJawaNgoko />} />
        <Route path="/jawakrama" element={<DetailJawaKrama />} />
        <Route path="/aksarajawa" element={<DetailAksaraJawa />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/success" element={<PaymentProcess />} />
        <Route path="/tembangjawa" element={<TembangJawa />} />
        <Route path="/tembangjawa/:id" element={<DetailTembang />} />
        <Route path="/tembang/1" element={<TembangPlayer />} />
        <Route path="/tembang/2" element={<TembangPlayer2 />} />
        <Route path="/tembang/3" element={<TembangPlayer3 />} />
        <Route path="/tembang/4" element={<TembangPlayer4 />} />
        <Route path="/event" element={<ListEvent />} />
        <Route path="/event/:id" element={<DetailEvent />} />
        <Route path="/event/daftar/:id" element={<DaftarEvent />} />
        <Route path="/kuis1" element={<Quiz1 />} />
        <Route path="/kuis2" element={<Quiz2 />} />
        <Route path="/kuis3" element={<Quiz3 />} />
        <Route path="/kuis4" element={<Quiz4 />} />
        <Route path="/kuis" element={<KuisNavbar />} />
        <Route path="/pembelajaran" element={<PembelajaranNavbar />} />
      </Routes>
    </>
  );
};

export default Router;
