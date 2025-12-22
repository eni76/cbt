import { Outlet } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const baseUrl = `https://cbt-backend-ljo7.onrender.com`
function App() {


  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar
        pauseOnHover
        theme="colored" // optional, adds nice look
      />
      <Outlet />

    </>
  )
}

export default App
