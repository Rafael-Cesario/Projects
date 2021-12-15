import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={'/'}>BlogApp</Link>
      <div className="links">
        <Link to={'/'}>{/* <i class="fas fa-home"></i> */}Inicio</Link>
        <Link to={'/NewBlog'}>{/* <i class="fas fa-plus"></i> */}Novo Post</Link>
      </div>
    </div>
  );
};

export default Header;
