import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { router } from "./Routers/Router";

function App() {
  return (
    <div className="App">
      <PhotoProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </PhotoProvider>
    </div>
  );
}

export default App;
