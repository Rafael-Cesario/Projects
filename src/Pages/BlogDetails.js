import { blogs } from "./NewBlog";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogDetails = (props) => {
  const key = useParams();
  let array = blogs.map((el, i) => el.id === key.id);
  array = array.indexOf(true);
  const navigate = useNavigate();

  const handleCLick = () => {
    blogs.splice(array, 1);
    console.log(blogs);
    localStorage.setItem("Blogs", JSON.stringify(blogs));
    navigate('/')
  };

  return (
    <div className="blog">
      <div className="blog-details">
        <h1>{blogs[array].titulo}</h1>
        <p>{blogs[array].blog}</p>
        <label>Data: {blogs[array].data} </label>
        <button onClick={handleCLick}>Deletar</button>
      </div>
    </div>
  );
};

export default BlogDetails;
