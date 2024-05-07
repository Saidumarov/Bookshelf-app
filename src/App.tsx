import { useEffect } from "react";
import RouterPage from "./router";
import { useNavigate } from "react-router-dom";

const App = () => {
  const url = window.location.href;
  const router = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router("/signup");
    }
  }, [url]);
  return (
    <>
      <RouterPage />
    </>
  );
};

export default App;
