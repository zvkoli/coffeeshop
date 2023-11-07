import { useEffect, lazy, Suspense } from "react";
import useSWR from "swr";
import { Route, Routes } from "react-router-dom";
import Header from "./components/module/Header";
import Spinner from "./components/module/Spinner";
import { useDispatch } from "react-redux";
import { setApiData } from "./redux_toolkit/features/apiDataSlice";

const Home = lazy(() => import("./page/Home"));
const Menu = lazy(() => import("./page/Menu"));
const Cart = lazy(() => import("./page/Cart"));
const NotFound = lazy(() => import("./page/404"));

const App = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://mocki.io/v1/4151c38e-b11d-4383-923d-ce34a665992e",
    fetcher
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setApiData(data.menu));
    }
  }, [data, dispatch]);

  if (error)
    return (
      <div className="w-full h-screen bg-black/80 flex flex-col justify-center items-center gap-5 font-Urbanist uppercase">
        <p className="text-orange-400 font-black text-6xl">error message</p>
        <p className="text-C3C3C3 text-xl">{error}</p>
      </div>
    );

  if (isLoading) return <Spinner />;

  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
