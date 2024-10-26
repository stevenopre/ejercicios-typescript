type Book = {
    title: string;
    author: string;
    year: number;
  };
  
  // Array para almacenar los libros
  let library: Book[] = [];
  
  // Función para agregar un libro

  function addBook(title: string, author: string, year: number): void {
    const newBook: Book = { title, author, year };
    library.push(newBook);
    console.log(`Libro '${title}' agregado a la biblioteca.`);
  }
  
  // Función para buscar un libro por título
  function searchBookByTitle(title: string): Book | undefined {
    const book = library.find((b) => b.title.toLowerCase() === title.toLowerCase());
    if (book) {
      console.log(`Libro encontrado: ${book.title} de ${book.author} (${book.year})`);
    } else {
      console.log(`No se encontró ningún libro con el título '${title}'.`);
    }
    return book;
  }
  
  // Función para mostrar todos los libros
  function showAllBooks(): void {
    if (library.length === 0) {
      console.log("La biblioteca está vacía.");
    } else {
      console.log("Libros disponibles en la biblioteca:");
      library.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} de ${book.author} (${book.year})`);
      });
    }
  }