class Car {
    constructor(name, accelerationPower, brakingPower, maxFuel) {
      this.name = name;
      this.accelerationPower = accelerationPower;
      this.brakingPower = brakingPower;
      this.speed = 0;
      this.fuel = maxFuel;
      this.maxFuel = maxFuel;
    }
  
    accelerate() {
      if (this.fuel > 0) {
        this.speed += this.accelerationPower;
        this.fuel -= 1;
        console.log(`Accelerating. Current speed: ${this.speed} m/s`);
      } else {
        console.log("Out of fuel, can't accelerate.");
      }
    }
  
    brake() {
      this.speed = Math.max(0, this.speed - this.brakingPower);
      console.log(`Brakes applied. Current speed: ${this.speed} m/s`);
    }
  
    checkSpeed() {
      console.log(`Current speed: ${this.speed} m/s`);
      return this.speed;
    }
  
    refuel() {
      this.fuel = this.maxFuel;
      console.log(`Refueled to maximum capacity: ${this.maxFuel} liters`);
    }
  
    drive(duration) {
      let interval = 0;
      const driveInterval = setInterval(() => {
        if (this.fuel > 0 && interval < duration) {
          this.accelerate();
          if (interval % 3 === 0) {
            this.brake();
          }
          console.log(`Fuel level: ${this.fuel}`);
          interval++;
        } else {
          clearInterval(driveInterval);
          console.log("Driving session ended.");
        }
      }, 1000);
    }
  }
  
  const myCar = new Car("Toyota", 5, 3, 10);
  
  myCar.drive(10);
  
  setTimeout(() => myCar.refuel(), 12000);
  