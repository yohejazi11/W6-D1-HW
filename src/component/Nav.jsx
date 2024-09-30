import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <button><Link to='/sea'>sea</Link></button>
      <button><Link to='/dessert'>dessert</Link></button>
      <button><Link to='/coral'>coral</Link></button>
      <button><Link to='/mountains'>mountains</Link></button>
      <button><Link to='/oasis'>oasis</Link></button>

    </div>
  )
}

export default Nav
