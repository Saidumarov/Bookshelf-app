import { useEffect } from "react";
import RouterPage from "./router";
import { useNavigate } from "react-router-dom";

const App = () => {
  const url = window.location.href;
  const router = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router("/signup");
    }
  }, [url]);
  return (
    <>
      <RouterPage />
    </>
  );
};

export default App;

// import React, { useState } from "react";
// import md5 from "md5";

// const EditBook = () => {
//   const [bookId, setBookId] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [title, setTitle] = useState("");
//   const [cover, setCover] = useState("");
//   const [author, setAuthor] = useState("");
//   const [published, setPublished] = useState("");
//   const [pages, setPages] = useState("");
//   const [response, setResponse] = useState("");

//   const handleEdit = async (event) => {
//     event.preventDefault();

//     const book = {
//       isbn: isbn,
//       title: title,
//       cover: cover,
//       author: author,
//       published: published,
//       pages: pages,
//     };

//     const userSecret = "MyUserSecret"; // Foydalanuvchi xizmatkor ma'lumotlari
//     const stringToSign = `PUT/books/${bookId}${JSON.stringify(
//       book
//     )}${userSecret}`;
//     const signature = md5(stringToSign);

//     const requestOptions = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Key: "MyUserKey", // Foydalanuvchi kaliti
//         Sign: signature,
//       },
//       body: JSON.stringify(book),
//     };

//     try {
//       const response = await fetch(
//         `https://no23.lavina.tech/books/${bookId}`,
//         requestOptions
//       );
//       const data = await response.json();
//       setResponse(JSON.stringify(data));
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Book</h2>
//       <form onSubmit={handleEdit}>
//         <label>
//           Book ID:
//           <input
//             type="text"
//             value={bookId}
//             onChange={(e) => setBookId(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           ISBN:
//           <input
//             type="text"
//             value={isbn}
//             onChange={(e) => setIsbn(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Title:
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Cover URL:
//           <input
//             type="text"
//             value={cover}
//             onChange={(e) => setCover(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Author:
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Published Year:
//           <input
//             type="number"
//             value={published}
//             onChange={(e) => setPublished(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Pages:
//           <input
//             type="number"
//             value={pages}
//             onChange={(e) => setPages(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Edit</button>
//       </form>
//       <div>
//         <h3>Response:</h3>
//         <pre>{response}</pre>
//       </div>
//     </div>
//   );
// };

// export default EditBook;
