
export default function Book({title,author,coverImageUrl,synopsis,publisher,id,pageCount}) {
    return (
        <li className="text-white flex-grow ">
        <div className="flex w-full p-8 border-b border-gray-300">

            <div className="flex-shrink-0 w-24 h-24 bg-gray-400 rounded-full" >
                <img className="object-fill w-24 " src={coverImageUrl} />
            </div>

            <div className="flex flex-col flex-grow ml-4">

                <div className="grid ">
                    <ul className="list-style-none">
                        <li className="font-semibold">Title: <span className="text-green-500">{title}</span></li>
                        <li className="font-semibold">Author: <span className="text-green-500">{author}</span> </li>
                    </ul>
                </div>

                <p className="mt-3 " >
                    {synopsis}
                </p>

                <div className=" flex">
                    <ul className="list-style-none">
                        <li className="mt-4 text-sm font-semibold">Publisher: <span className="text-green-500">{publisher}</span></li>
                        <li className="mt-2 text-sm font-semibold">ISBN: <span className="text-green-500">GST_09098</span></li>
                        <li className="mt-2 text-sm font-semibold">book_id:  <span className="text-green-500">{id}</span></li>
                        <li className="mt-2 text-sm font-semibold">PageCount: <font className="text-green-500">{pageCount}</font></li>
                    </ul>
                </div>
            </div>

        </div>

    </li>
    )
}