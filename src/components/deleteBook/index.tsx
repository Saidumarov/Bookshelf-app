import md5 from "md5";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useServiceStore from "../../app/bookSlice";
const DeleteBook = (id: { id: number }) => {
  const { deleteBook } = useServiceStore();
  const handleDelete = async (id: number) => {
    const userSecret = "MyUserSecret";
    const stringToSign = `DELETE/books/${id}${userSecret}`;
    const signature = md5(stringToSign);
    try {
      deleteBook(id, signature);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Button
        onClick={() => handleDelete(id.id)}
        variant="contained"
        color="error"
      >
        <DeleteIcon />
      </Button>
    </>
  );
};

export default DeleteBook;
