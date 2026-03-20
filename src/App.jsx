import Profile from "./Profile"
import { Link } from "react-router"
import { Lola } from "./Lola"

 export const App = () => {
   
    return (
    <div>
        <h1>Main menu</h1>
        <p>odavde imas link na druge stranice</p>
<nav><Link to="profile"> Idi na profil </Link>
<Link to="lola"> idi na lola </Link>
</nav>
      <ul>
       
      </ul>
    </div>
    )
 }