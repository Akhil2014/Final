
function animal(noOfLegs, vegetarian) {
    return {
      noOfLegs: noOfLegs,
      vegetarian: vegetarian,
      eat: function() {
        return "eating...";
      },
      greet: function() {
        return `Hi, I have ${noOfLegs} legs.`;
      }
    };
  }
  
  let a1 = animal(4, true);
  console.log(a1.eat());
  console.log(a1.greet());
  

  function AnimalCF(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  
    this.eat = function() {
      return "eating...";
    };
  
    this.greet = function() {
      return `Hi, I have ${noOfLegs} legs.`;
    };
  }
  
  let animalCF = new AnimalCF(4, true);
  console.log(animalCF.eat());
  console.log(animalCF.greet());
  
  class AnimalES6 {
    constructor(noOfLegs, vegetarian) {
      this.noOfLegs = noOfLegs;
      this.vegetarian = vegetarian;
    }
  
    eat() {
      return "eating...";
    }
  
    greet() {
      return `Hi, I have ${this.noOfLegs} legs.`;
    }
  }
  
  let animalES6 = new AnimalES6(4, true);
  console.log(animalES6.eat());
  console.log(animalES6.greet());
  