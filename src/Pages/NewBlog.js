import uniqid from "uniqid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const blogs = JSON.parse(localStorage.getItem("Blogs")) || [];

const NewBlog = () => {
  const d = new Date();
  const defaultData = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  const defaultvalue = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const [titulo, setTitulo] = useState("");
  const [blog, setBlog] = useState("");
  const [data, setData] = useState(defaultData);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    blogs.push({ titulo, blog, data, id });
    localStorage.setItem("Blogs", JSON.stringify(blogs));
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Titulo</h2>
      <input
        type="text"
        name="titulo"
        required
        placeholder="Titulo"
        onChange={(e) => setTitulo(e.target.value)}
      />
      <h2>Blog</h2>
      <textarea required onChange={(e) => setBlog(e.target.value)} />
      <h2>Data</h2>
      <input type="date" value={defaultvalue} onChange={(e) => setData(e.target.value)} />
      <button>Adicionar</button>
    </form>
  );
};

export default NewBlog;
