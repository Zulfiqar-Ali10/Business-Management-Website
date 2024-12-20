import { Routes, Route } from "react-router-dom";
import Homedash from "../Dashboard/Homedash";
import Home from "../Components/Home"


export default function Routers() {
  return (
   <>
   <Routes>
    <Route path="/dashboard" element={<Homedash/> } />
    <Route path="/" element={<Home/> } />
   </Routes>
   </>
  )
}
