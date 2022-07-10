import { blogs } from "./NewBlog";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Blogs />
    </div>
  );
};

export default Home;

const Blogs = () => {
  let history = useNavigate();

  const handleClick = (id) => {
    history("/BlogDetails/" + id);
  };

  return blogs.map((blogs) => (
    <div className="blogs" key={blogs.id} onClick={() => handleClick(blogs.id)}>
      <h2>{blogs.titulo}</h2>
      <p className="body">
        {blogs.blog}
        <span className="data">{blogs.data}</span>
      </p>
    </div>
  ));
};
