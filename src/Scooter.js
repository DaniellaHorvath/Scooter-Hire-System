class Scooter {
  // scooter code here

  static nextSerial = 1;

  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user){
    if(this.Scooter === 20 && !this.isBroken){
      this.station = null;
      this.user = user;
      return `Scooter ${this.Scooter} is rented out to ${this.user}`;
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
