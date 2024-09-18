class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    getInfo() {
      return `${this.title} by ${this.author}, published in ${this.year}, Genre: ${this.genre}`;
    }
  }
  
  function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    filterBooksByYear(year) {
      return this.books.filter(book => book.year > year);
    }
  
    getAllBookTitles() {
      return this.books.map(book => book.title);
    }
  
    getTotalNumberOfBooks() {
      return this.books.reduce((total, book) => total + 1, 0);
    }
  
    getAveragePublicationYear() {
      const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
      return totalYears / this.books.length;
    }
  }
  
  const myLibrary = new Library();
  
  const book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");
  const book2 = createBook("1984", "George Orwell", 1949, "Dystopian");
  const book3 = createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
  const book4 = createBook("Sapiens", "Yuval Noah Harari", 2014, "Non-fiction");
  
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);
  myLibrary.addBook(book3);
  myLibrary.addBook(book4);
  
  console.log(book1.getInfo());
  
  console.log(myLibrary.filterBooksByYear(1950));
  
  console.log(myLibrary.getAllBookTitles());
  
  console.log(myLibrary.getTotalNumberOfBooks());
  
  console.log(myLibrary.getAveragePublicationYear());
  