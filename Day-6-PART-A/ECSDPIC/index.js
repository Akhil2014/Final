function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  Product.prototype.updateQuantity = function(amount) {
    this.quantity += amount;
    console.log(`Updated quantity for ${this.name}: ${this.quantity}`);
  };
  
  function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);
    this.brand = brand;
    this.model = model;
  }
  
  Electronics.prototype = Object.create(Product.prototype);
  Electronics.prototype.constructor = Electronics;
  
  Electronics.prototype.powerOn = function() {
    console.log(`${this.name} is now powered on.`);
  };
  
  Electronics.prototype.powerOff = function() {
    console.log(`${this.name} is now powered off.`);
  };
  
  function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);
    this.size = size;
    this.material = material;
  }
  
  Clothing.prototype = Object.create(Product.prototype);
  Clothing.prototype.constructor = Clothing;
  
  Clothing.prototype.sizeInfo = function() {
    console.log(`${this.name} is available in size ${this.size}.`);
  };
  
  function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
  }
  
  Books.prototype = Object.create(Product.prototype);
  Books.prototype.constructor = Books;
  
  Books.prototype.authorInfo = function() {
    console.log(`${this.name} is authored by ${this.author}.`);
  };
  
  const laptop = new Electronics('Laptop', 1200, 10, 'Dell', 'XPS 13');
  const shirt = new Clothing('Shirt', 30, 50, 'M', 'Cotton');
  const book = new Books('Book', 20, 100, 'J.K. Rowling', 'Fantasy');
  
  laptop.powerOn();
  laptop.updateQuantity(-1);
  laptop.powerOff();
  
  shirt.sizeInfo();
  shirt.updateQuantity(10);
  
  book.authorInfo();
  book.updateQuantity(-5);
  