import Router from "./components/router";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <>
      <div className="flex flex-col bg-[#fffdf1] min-h-screen text-neutral-700">
        <AuthProvider>
          <Router />
        </AuthProvider>
      </div>
    </>
  );
};

export default App;
