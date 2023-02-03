import Book from "./Book.js";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Library() {
    let libs = [];

    const [books, setBooks] = useState([]);

    useEffect(() => {
        let getBooks = async () => {
            try {
                let { data } = await axios.get("/api/user/viewLib");
                setBooks(data);
            } catch (error) {
                console.error(error.response.data);
            }
        }
        getBooks();
    }, []);

    books.forEach((ele) => {
        libs.push(
            <Book title={ele.title} coverImageUrl={ele.coverImageUrl}
                author={ele.author} publisher={ele.publisher}
                synopsis={ele.synopsis} key={ele.id} id={ele.id} pageCount={ele.pageCount}
            />
        )
    })

    return (

        <div className="flex justify-center  px-4 text-gray-700">

            <div className="flex w-full max-w-screen-lg">

                <div className="flex flex-col flex-grow border-l border-r border-gray-300">

                    <ul>
                        <li className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">

                            <h1 className=" text-white text-xl font-semibold">Library</h1>

                        </li>

                        {libs}

                    </ul>
                </div>
            </div>
        </div>





    );
}