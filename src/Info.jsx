import Profile from "./Profile"
import { Link } from "react-router"
import Spinach from "./Spinach"
import { useParams } from "react-router";
import Popeye from "./Popeye";
import DefaultProfile from "./DefaultProfile";
 
 export const Info = () => {
     const { name } = useParams();
    return (
    <div>
        <h1>Main INFO</h1>
        <p>odavde imas INFO ZA DINAMIK stranice</p>
      
<nav><Link to="profile"> Idi na profil </Link>
<Link to="lola"> idi na lola </Link>
</nav>

      <ul>
        {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
      </ul>
    </div>
    )
 }