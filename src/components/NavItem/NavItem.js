import './NavItem.css'




export default function NavItem(props) {
  return (

<li className="nav-item">{props.children}</li>




  )
}

const NavItemDropdown = (props) => {
  return ( 
    <li className="nav-item dropdown">
      {props.children}
    </li>
   ) }
   export { NavItemDropdown };