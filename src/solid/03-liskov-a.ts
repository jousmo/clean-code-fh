import { Vehicle, Tesla, Audi, Toyota, Honda  } from './03-liskov-b';

(() => {
  const printCarSeats = ( cars: Vehicle[] ) => {
    cars.forEach(car => {
      console.log(car.constructor.name, car.getNumberSeats())
    })
  }

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
  ];


  printCarSeats( cars );
})();
