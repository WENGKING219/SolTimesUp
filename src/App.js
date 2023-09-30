import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import PhantomWallet from "./pages/PhantomWallet";
import Messages from "./pages/Messages";
import Friends from "./pages/Friends";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import FocusRoom6 from "./pages/FocusRoom6";
import FocusRoom5 from "./pages/FocusRoom5";
import FocusRoom4 from "./pages/FocusRoom4";
import FocusRoom2 from "./pages/FocusRoom2";
import FocusRoom3 from "./pages/FocusRoom3";
import FocusRoom1 from "./pages/FocusRoom1";
import Themes from "./pages/Themes";
import Payment7 from "./pages/Payment7";
import Payment6 from "./pages/Payment6";
import Payment5 from "./pages/Payment5";
import Payment2 from "./pages/Payment2";
import Payment4 from "./pages/Payment4";
import Payment3 from "./pages/Payment3";
import Payment1 from "./pages/Payment1";
import JoinRoom10 from "./pages/JoinRoom10";
import JoinRoom9 from "./pages/JoinRoom9";
import JoinRoom8 from "./pages/JoinRoom8";
import JoinRoom4 from "./pages/JoinRoom4";
import JoinRoom3 from "./pages/JoinRoom3";
import JoinRoom7 from "./pages/JoinRoom7";
import JoinRoom6 from "./pages/JoinRoom6";
import JoinRoom5 from "./pages/JoinRoom5";
import JoinRoom2 from "./pages/JoinRoom2";
import JoinRoom1 from "./pages/JoinRoom1";
import CreateProfile3 from "./pages/CreateProfile3";
import CreateProfile2 from "./pages/CreateProfile2";
import CreateProfile1 from "./pages/CreateProfile1";
import HomePage1 from "./pages/HomePage1";
import ConnectPhantom3 from "./pages/ConnectPhantom3";
import ConnectPhantom5 from "./pages/ConnectPhantom5";
import ConnectPhantom4 from "./pages/ConnectPhantom4";
import ConnectPhantom6 from "./pages/ConnectPhantom6";
import ConnectPhantom7 from "./pages/ConnectPhantom7";
import ConnectPhantom8 from "./pages/ConnectPhantom8";
import ConnectPhantom9 from "./pages/ConnectPhantom9";
import ConnectPhantom10 from "./pages/ConnectPhantom10";
import ConnectPhantom11 from "./pages/ConnectPhantom11";
import ConnectWallet2 from "./pages/ConnectWallet2";
import ConnectWallet3 from "./pages/ConnectWallet3";
import ConnectWallet4 from "./pages/ConnectWallet4";
import ConnectWallet5 from "./pages/ConnectWallet5";
import ConnectWallet1 from "./pages/ConnectWallet1";
import ConnectPhantom1 from "./pages/ConnectPhantom1";
import ConnectPhantom2 from "./pages/ConnectPhantom2";
import CreateWallet7 from "./pages/CreateWallet7";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/schedule":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/phantom-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/messages":
        title = "";
        metaDescription = "";
        break;
      case "/friends":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/focus-room-6":
        title = "";
        metaDescription = "";
        break;
      case "/focus-room-5":
        title = "";
        metaDescription = "";
        break;
      case "/focus-room-4":
        title = "";
        metaDescription = "";
        break;
      case "/focus-room-2":
        title = "";
        metaDescription = "";
        break;
      case "/focus-room-3":
        title = "";
        metaDescription = "";
        break;
      case "/focus-room-1":
        title = "";
        metaDescription = "";
        break;
      case "/themes":
        title = "";
        metaDescription = "";
        break;
      case "/payment-7":
        title = "";
        metaDescription = "";
        break;
      case "/payment-6":
        title = "";
        metaDescription = "";
        break;
      case "/payment-5":
        title = "";
        metaDescription = "";
        break;
      case "/payment-2":
        title = "";
        metaDescription = "";
        break;
      case "/payment-4":
        title = "";
        metaDescription = "";
        break;
      case "/payment-3":
        title = "";
        metaDescription = "";
        break;
      case "/payment-1":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-10":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-9":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-8":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-4":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-3":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-7":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-6":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-5":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-2":
        title = "";
        metaDescription = "";
        break;
      case "/join-room-1":
        title = "";
        metaDescription = "";
        break;
      case "/create-profile-3":
        title = "";
        metaDescription = "";
        break;
      case "/create-profile-2":
        title = "";
        metaDescription = "";
        break;
      case "/create-profile-1":
        title = "";
        metaDescription = "";
        break;
      case "/home-page1":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-3":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-5":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-4":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-6":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-7":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-8":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-9":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-10":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-11":
        title = "";
        metaDescription = "";
        break;
      case "/connect-wallet-2":
        title = "";
        metaDescription = "";
        break;
      case "/connect-wallet-3":
        title = "";
        metaDescription = "";
        break;
      case "/connect-wallet-4":
        title = "";
        metaDescription = "";
        break;
      case "/connect-wallet-5":
        title = "";
        metaDescription = "";
        break;
      case "/connect-wallet-1":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-1":
        title = "";
        metaDescription = "";
        break;
      case "/connect-phantom-2":
        title = "";
        metaDescription = "";
        break;
      case "/create-wallet-7":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/phantom-wallet" element={<PhantomWallet />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/focus-room-6" element={<FocusRoom6 />} />
      <Route path="/focus-room-5" element={<FocusRoom5 />} />
      <Route path="/focus-room-4" element={<FocusRoom4 />} />
      <Route path="/focus-room-2" element={<FocusRoom2 />} />
      <Route path="/focus-room-3" element={<FocusRoom3 />} />
      <Route path="/focus-room-1" element={<FocusRoom1 />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/payment-7" element={<Payment7 />} />
      <Route path="/payment-6" element={<Payment6 />} />
      <Route path="/payment-5" element={<Payment5 />} />
      <Route path="/payment-2" element={<Payment2 />} />
      <Route path="/payment-4" element={<Payment4 />} />
      <Route path="/payment-3" element={<Payment3 />} />
      <Route path="/payment-1" element={<Payment1 />} />
      <Route path="/join-room-10" element={<JoinRoom10 />} />
      <Route path="/join-room-9" element={<JoinRoom9 />} />
      <Route path="/join-room-8" element={<JoinRoom8 />} />
      <Route path="/join-room-4" element={<JoinRoom4 />} />
      <Route path="/join-room-3" element={<JoinRoom3 />} />
      <Route path="/join-room-7" element={<JoinRoom7 />} />
      <Route path="/join-room-6" element={<JoinRoom6 />} />
      <Route path="/join-room-5" element={<JoinRoom5 />} />
      <Route path="/join-room-2" element={<JoinRoom2 />} />
      <Route path="/join-room-1" element={<JoinRoom1 />} />
      <Route path="/create-profile-3" element={<CreateProfile3 />} />
      <Route path="/create-profile-2" element={<CreateProfile2 />} />
      <Route path="/create-profile-1" element={<CreateProfile1 />} />
      <Route path="/home-page1" element={<HomePage1 />} />
      <Route path="/connect-phantom-3" element={<ConnectPhantom3 />} />
      <Route path="/connect-phantom-5" element={<ConnectPhantom5 />} />
      <Route path="/connect-phantom-4" element={<ConnectPhantom4 />} />
      <Route path="/connect-phantom-6" element={<ConnectPhantom6 />} />
      <Route path="/connect-phantom-7" element={<ConnectPhantom7 />} />
      <Route path="/connect-phantom-8" element={<ConnectPhantom8 />} />
      <Route path="/connect-phantom-9" element={<ConnectPhantom9 />} />
      <Route path="/connect-phantom-10" element={<ConnectPhantom10 />} />
      <Route path="/connect-phantom-11" element={<ConnectPhantom11 />} />
      <Route path="/connect-wallet-2" element={<ConnectWallet2 />} />
      <Route path="/connect-wallet-3" element={<ConnectWallet3 />} />
      <Route path="/connect-wallet-4" element={<ConnectWallet4 />} />
      <Route path="/connect-wallet-5" element={<ConnectWallet5 />} />
      <Route path="/connect-wallet-1" element={<ConnectWallet1 />} />
      <Route path="/connect-phantom-1" element={<ConnectPhantom1 />} />
      <Route path="/connect-phantom-2" element={<ConnectPhantom2 />} />
      <Route path="/create-wallet-7" element={<CreateWallet7 />} />
    </Routes>
  );
}
export default App;
