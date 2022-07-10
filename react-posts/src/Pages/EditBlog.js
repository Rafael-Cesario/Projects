import { useParams } from "react-router-dom";
import { blogs } from "./NewBlog";
import NewBlog from "./NewBlog";

const EditBlog = () => {
  const key = useParams();
  let array = blogs.map((el, i) => el.id === key.id);
  array = array.indexOf(true);

  return (
    <div className="teste">
      <NewBlog titulo={blogs[array].titulo} blog={blogs[array].blog} />
    </div>
  );
};

export default EditBlog;
