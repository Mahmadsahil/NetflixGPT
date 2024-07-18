
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import NetflixShimmer from "./Shimmer/NetflixShimmer";
const Body = lazy(() => import('./Components/Body'));
const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Suspense fallback={<NetflixShimmer />}>
          <Body />
        </Suspense>
        <ToastContainer />
      </Provider>
    </ >
  );
}

export default App;
