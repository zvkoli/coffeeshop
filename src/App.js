import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Cart from "./page/Cart";
import Header from "./components/module/Header";
import Spinner from "./components/module/Spinner"
import NotFound from "./page/404";
import { useRecoilState } from "recoil";
import DataAtom from "./atoms/dataAtom";

const App = () => {

  const dataAtomRecoil = useRecoilState(DataAtom);
  const setData = dataAtomRecoil[1]; 
  const [loading , setLoading] = useState(true);
  const [err , setErr] = useState("");

  useEffect(() => {
    let url = "https://mocki.io/v1/4151c38e-b11d-4383-923d-ce34a665992e";
    // const url = process.env.BASE_API_URL;

    const callApi = async () => {
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        console.log(apiData);
        setData(apiData.menu);
        setLoading(false);
      } catch (err) {
        setErr(err.message);
        setLoading(false);
      }
    };

    callApi();
  }, [setData]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : err ? (
        <div className="w-full h-screen bg-black/80 flex flex-col justify-center items-center gap-5 font-Urbanist uppercase">
          <p className="text-orange-400 font-black text-6xl">error message</p>
          <p className="text-C3C3C3 text-xl">{err}</p>
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;