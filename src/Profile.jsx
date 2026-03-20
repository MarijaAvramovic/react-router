import { Outlet } from "react-router";
import { Link } from "react-router"
import Spinach from "./Spinach";
import { useParams } from "react-router";

const Profile = () => {

      const menuApp = ["spinach", "popeye", "/"]
    return(
        <div>
               <h1>Profile stranica</h1>
       <p>CAoooo</p>
 
        <Link to="spinach">pinach</Link>

 
       <p>de si bio</p>
 
      <p>otkud ti</p>
        </div>
 
    )
}

export default Profile;