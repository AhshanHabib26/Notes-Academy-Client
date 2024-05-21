import { getAllBoksData } from "../../data/booksData";
import { TBook } from "../../types/types.global";
import BooksCard from "../../utils/BooksCard";

const Books = () => {
  const books = getAllBoksData();

  return (
    <div className="mt-20">
      <h1 className="text-3xl hind-siliguri-bold text-center">
        বই <span className="text-[#FC4F4F]">হাব</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-4 max-w-6xl mx-auto">
        {books.slice(0, 6).map((book: TBook) => (
          <BooksCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default Books;
