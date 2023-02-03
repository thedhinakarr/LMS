// import { useState } from "react";
// import axios from "axios";
// export default function AddBook() {

//     const [userData, setUserData] = useState({
//         title: "",
//         author: "",
//         coverImageUrl: "",
//         publisher: "",
//         synopsis: "",
//         pageCount: ""
//     })

//     let { fullname, username, email, password, password2, role } = userData;

//     function OnChangeHandler(e) {
//         setUserData({
//             ...userData,
//             [e.target.name]: e.target.value
//         })
//     }

//     async function OnSubmitHandler(e) {
//         try {
//             e.preventDefault();
//             let { data } = await axios.post("/api/admin/books/add", userData);
//             console.log(data)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <center>
//             <div className="wrapper text-white">
// {/* 
//             "title": "Product it",
//     "author": "Meraj Faheem",
//     "coverImageUrl": "https://code.in",
//     "publisher": "EdVenture Park",
//     "synopsis": "This is a Very Great Book",
//     "pageCount": 225,
//     "isbn": "1234-HNI-87" */}

//                 <h2>Add Books</h2>

//                 <form action="#">

//                     <div>
//                         <input type="email" name="email" id="email" class="  rounded-lg  sm:text-sm block w-full p-2.5" placeholder="Title" />
//                     </div>

//                     <div>
//                         <input type="password" name="password" id="password" placeholder="Author" class=" rounded-lg sm:text-sm block w-full p-2.5" />
//                     </div>

//                     <div>
//                         <input type="email" name="email" id="email" class="  rounded-lg  sm:text-sm block w-full p-2.5" placeholder="coverImageUrl" />
//                     </div>

//                     <div>
//                         <input type="password" name="password" id="password" placeholder="PageCount" class=" rounded-lg sm:text-sm block w-full p-2.5" />
//                     </div>

//                     <div>
//                         <input type="email" name="email" id="email" class="  rounded-lg  sm:text-sm block w-full p-2.5" placeholder="synopsis" />
//                     </div>

//                     <div>
//                         <input type="password" name="password" id="password" placeholder="isbn" class=" rounded-lg sm:text-sm block w-full p-2.5" />
//                     </div>
//                     <button className="text-white border w-24 h-24" onClick={OnSubmitHandler} />
//                 </form>
//             </div>
//         </center>
//     );

// }

