import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>BlogApp</h1>
      <div className="links">
        <Link to={'/'}><i class="fas fa-home"></i></Link>
        <Link to={'/NewBlog'}><i class="fas fa-plus"></i></Link>
      </div>
    </div>
  );
};

export default Header;
