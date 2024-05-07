// import { useState } from "react";
// import CryptoJS from "crypto-js";

// const SignUpForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [key, setKey] = useState("");
//   const [secret, setSecret] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const user = {
//       name: name,
//       email: email,
//       key: key,
//       secret: secret,
//     };

//     // Step 1: Create a string to sign
//     const stringToSign = `POST/signup${JSON.stringify(user)}${secret}`;

//     // Step 2: Generate the signature
//     const signature = CryptoJS.MD5(stringToSign).toString();

//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Key: key,
//         Sign: signature,
//       },
//       body: JSON.stringify(user),
//     };

//     try {
//       const response = await fetch(
//         "https://no23.lavina.tech/signup",
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
//       <h2>User Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Key:
//           <input
//             type="text"
//             value={key}
//             onChange={(e) => setKey(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Secret:
//           <input
//             type="text"
//             value={secret}
//             onChange={(e) => setSecret(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//       <div>
//         <h3>Response:</h3>
//         <pre>{response}</pre>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;
