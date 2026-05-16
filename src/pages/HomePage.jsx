import NavBar from "../components/NavBar.jsx";
import { Smile, Diamond } from "lucide-react";
import { Link } from "react-router-dom";

<Smile color="black" />
export function HomePage()  {
  return (
    <>
      <NavBar />
     <div className="video-container">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="src/assets/278750_medium.mp4" type="video/mp4" />
      </video>

      <div className="content">
        <h1 className="hed">Hey,<Smile color="black" className="smile"/></h1>
        <p className="hh">Welcome to TaskCortex</p>
        <p className="sub">Plan your day, stay organized, and get things done.</p>
        <p className="subm">Your simple and powerful to-do list app......</p>
      </div>   
    </div>
    <div className="btn-container">
  <Link to="/sign-up" className="buttonA">
    Sign Up <i className="fa-solid fa-arrow-right fa-beat fa-xl"></i>
  </Link>

  <Link to="/Login" className="buttonb">
    Login <i className="fa-solid fa-arrow-right fa-beat fa-xl"></i>
  </Link>
</div>
    </>
  );
}