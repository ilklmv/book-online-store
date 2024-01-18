import { useState, useEffect } from "react";
import styles from "@/components/booklist.module.css";

interface Book {
  id: string;
  title: string;
  // Добавьте другие поля, если необходимо
}

const BookList: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([
    "Architecture",
    "Art & Fashion",
    "Biography",
    "Business",
    "Crafts & Hobbies",
    "Drama",
    "Fiction",
    "Food & Drink",
    "Health & Wellbeing",
    "History & Politics",
    "Humor",
    "Poetry",
    "Psychology",
    "Science",
    "Technology",
    "Travel & Maps",
  ]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Загрузка книг при монтировании компонента
    if (activeCategory !== null) {
      loadBooks(activeCategory, startIndex);
    }
  }, [activeCategory, startIndex]);

  const loadBooks = async (category: string, index: number) => {
    try {
      setLoading(true);

      // Ваш код загрузки книг, подобный предыдущему JavaScript-коду
      // Используйте fetch, axios или другие методы для загрузки данных

      // Пример с fetch:
      const apiKey = "AIzaSyCH4sChyw7m5slJRApx0EyonVpOpBs8Qfk";
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=${apiKey}&printType=books&startIndex=${index}&maxResults=6&langRestrict=en`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (index === 0) {
        setBooks([]);
      }

      setBooks((prevBooks) => [
        ...prevBooks,
        ...data.items.map((item: any) => item.volumeInfo),
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setStartIndex(0); // Сброс индекса при выборе новой категории
  };

  const handleLoadMoreClick = () => {
    setStartIndex(startIndex + 6);
  };

  return (
    <div className={styles.book_container}>
      <div className={styles.categories}>
        <ul className={styles.category_list}>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={category === activeCategory ? "active" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.books}>
        <div className={styles.book_list}>
          {/* Вывод книг в формате JSX */}
          {books.map((book) => (
            <div key={book.id} className={styles.book_card}>
              {/* Ваш код для отображения информации о книге */}
              <h3>{book.title}</h3>
            </div>
          ))}
        </div>
        <button
          className={styles.load_more}
          onClick={handleLoadMoreClick}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load more"}
        </button>
      </div>
    </div>
  );
};

export default BookList;