const Scooter = require('./Scooter');

class User {
  // User code here
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password){
    if(this.password === password){
      this.loggedIn = true;
      return `${this.username} is logged in`;
    }else{
      throw new Error('Incorrect password');
    }
  }

  logout(){
    this.loggedIn = false;
    return `${this.username} is logged out`
  }
}

module.exports = User
