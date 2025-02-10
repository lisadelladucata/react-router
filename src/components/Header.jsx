import { NavLink } from "react-router-dom";
import Button from "./Button";
export default function Header({ links = {}, fetchPosts }) {
  return (
    <>
      <header>
        <img
          src="https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo-1996-present.png"
          alt="logo"
        />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">Chi siamo</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contattaci</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
