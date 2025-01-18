import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router/app-router";
import { Suspense } from "react";
import AppLoader from "./app-loader/app-loader";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<AppLoader />}> */}
      {/* <AppRouter /> */}
      <AppLoader />
      {/* </Suspense> */}
    </BrowserRouter>
  );
};

export default App;
