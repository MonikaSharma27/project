import { FaFacebook, FaInstagram, FaSearch, FaUser } from "react-icons/fa"
import './App.css';
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
      <div className="App m-0 p-0 box-border bg-red-700">
        <div className="container w-full flex justify-between items-center text-white p-2 ">
          <div className="social ml-7 flex">
            <a className=" border-2 border-red-500 p-1 rounded-full"><FaFacebook size={15} /></a>
            <a className="  border-2 border-red-500 p-1 rounded-full ml-2"><FaInstagram size={15} /></a>
          </div>
          <div className="annocement" >
            <p>Free Shipping Anywhere in India for orders above Rs 499</p>
          </div>
          <div className="location mr-7">
            <a>location</a>
          </div>
        </div>
      </div>


      <div className="logo border-b-2 border-b-slate-200 flex ">
        <div className="left flex items-center  w-1/2">
          <h1 className="text-5xl font-bold ml-14 p-5 text-red-700">Kushal's</h1>
          <p className="p-5 pl-10">90+ Stores nearby</p> | <span className="p-5"> Shipping to Meerut</span>
        </div>
        <div className="right flex items-center justify-end w-1/2 mr-14">
          <div className="nav-search border-2 border-slate-200 flex p-2 rounded-md mr-10">
            <input placeholder="Search Items " className="w-96  focus:outline-none" />
            <FaSearch size={20} className="text-gray-500 ml-2" />
          </div>
          <FaUser size={30} className="text-red-700 border-2 border-red-700 rounded-full p-1" />
        </div>
      </div>

      <Navbar/>

    </>

  );
}

export default App;
