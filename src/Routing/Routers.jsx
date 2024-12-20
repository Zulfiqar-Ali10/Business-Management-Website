import { Routes, Route } from "react-router-dom";
import Homedash from "../Dashboard/Homedash";


export default function Routers() {
  return (
   <>
   <Routes>
    <Route path="/dashboard" element={<Homedash/> } />
   </Routes>
   </>
  )
}
