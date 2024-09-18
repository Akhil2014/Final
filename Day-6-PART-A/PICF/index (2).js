function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  
  function Customer(name, rentedCars = []) {
    this.name = name;
    this.rentedCars = rentedCars;
  }
  
  Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
      console.log(`The ${car.make} ${car.model} is already rented.`);
    }
  };
  
  Customer.prototype.returnCar = function(car) {
    const index = this.rentedCars.indexOf(car);
    if (index > -1) {
      this.rentedCars.splice(index, 1);
      car.isAvailable = true;
      setTimeout(() => {
        console.log(`${this.name} returned the ${car.make} ${car.model}.`);
      }, 2000);
    } else {
      console.log(`${this.name} does not have a ${car.make} ${car.model} to return.`);
    }
  };
  
  function PremiumCustomer(name, rentedCars = [], discountRate = 0.10) {
    Customer.call(this, name, rentedCars);
    this.discountRate = discountRate;
  }
  
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  function calculateRentalPrice(carType, days, isPremium) {
    const basePrice = 50;
    const rates = {
      SUV: 1.2,
      Sedan: 1.0,
      Truck: 1.5
    };
    let price = basePrice * (rates[carType] || 1) * days;
    if (isPremium) {
      price -= price * 0.10;
    }
    return price;
  }
  
  function Maintenance(car, delay) {
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`Maintenance completed for ${car.make} ${car.model}.`);
    }, delay);
  }
  
  const car1 = new Car('Toyota', 'Corolla', 2020);
  const car2 = new Car('Honda', 'Civic', 2021);
  const car3 = new Car('Ford', 'F-150', 2019);
  
  const customer1 = new Customer('John Doe');
  const premiumCustomer1 = new PremiumCustomer('Jane Smith');
  
  customer1.rentCar(car1);
  premiumCustomer1.rentCar(car2);
  
  console.log(`Rental price for 5 days (SUV, regular): $${calculateRentalPrice('SUV', 5, false)}`);
  console.log(`Rental price for 5 days (Sedan, premium): $${calculateRentalPrice('Sedan', 5, true)}`);
  
  customer1.returnCar(car1);
  premiumCustomer1.returnCar(car2);
  
  Maintenance(car3, 3000);

  