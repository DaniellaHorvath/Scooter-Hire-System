// require the User and Scooter classes - see where they can be used in ScooterApp.js
const Scooter = require('./Scooter');
const User = require('./User');

class ScooterApp extends Scooter {
  // ScooterApp code here
  constructor(registerUsers){
    super(station)
    this.station = {'Station 1': [], 'Station 2': [], 'Station3': []};
    this.registerUsers = {};
  }

  registerUser(username, password, age){
    if(this.user !== username && age > 18){
      console.log(`User: ${this.username} has been registered`)
    }else if(this.user === username && age < 18){
      throw new console.error('already registered or too young to register');
    }
  }

  loginUser(username, password){
    const user = this.registerUser[username];
    if(!user || password !== this.password){
      throw new Error('Username or password is incorrect');
    }
  }

  createScooter(station){
    const scooter = new Scooter(station);
    if(!this.stations[station]){
      throw new Error('no such station');
    }
    this.stations[station].push(scooter);
    console.log('Create new scooter');
    return scooter;
  }

  dockScooter(scooter, station){
    scooter.dock(station);
    this.stations[station].push(scooter);
    console.log('Scooter is docked');
    if(!this.station){
      throw new Error('Station does not exist!');
    }
    if(scooter.station === station){
      throw new Error('Scooter already at station!');
    }
  }

  rentScooter(scooter, user){}

  print(){
    console.log('Registered Users: ');
  }
  
}

module.exports = ScooterApp
