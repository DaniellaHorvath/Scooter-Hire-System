class Scooter {
  // scooter code here

  static nextSerial = 1;

  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user){
    if(this.charge > 20 && !this.isBroken){
      this.station = null; // removing from the station
      this.user = user; // rented out to the user
      // return `Scooter ${this.Scooter} is rented out to ${this.user}`;
      }else{
        throw new Error('scooter needs to charge or scooter needs repair');
      }
  }

  dock(station){
    this.station = station;
    this.user = this.user;
    return `Scooter ${this.serial} docked at ${station}`;
  }
}

module.exports = Scooter
