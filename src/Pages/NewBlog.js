import uniqid from "uniqid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export const blogs = JSON.parse(localStorage.getItem("Blogs")) || [];

const NewBlog = (props) => {
  const d = new Date();
  const defaultData = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  const defaultvalue = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const [titulo, setTitulo] = useState(props.titulo || "");
  const [blog, setBlog] = useState(props.blog || "");
  const [data, setData] = useState(defaultData);
  const navigate = useNavigate();
  const key = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    let array = blogs.map((el, i) => el.id === key.id);
    array = array.indexOf(true);
    if (array > -1){
      blogs.splice(array, 1);
    }
    const id = uniqid();
    blogs.push({ titulo, blog, data, id });
    localStorage.setItem("Blogs", JSON.stringify(blogs));
    navigate("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="new-blog">
      <form onSubmit={handleSubmit}>
        <h2>Titulo</h2>
        <input
          type="text"
          name="titulo"
          required
          placeholder="Titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <h2>Blog</h2>
        <textarea required value={blog} onChange={(e) => setBlog(e.target.value)} />
        <h2>Data</h2>
        <input
          type="date"
          value={defaultvalue}
          onChange={(e) => setData(e.target.value)}
        />
      </form>
      <div className="botoes">
        <button onClick={handleSubmit}>Salvar</button>
        <button onClick={(e) => handleCancel(e)}>Cancelar</button>
      </div>
    </div>
  );
};

export default NewBlog;
