const { describe, expect, it} = require('@jest/globals')
const User = require('../src/User')

// const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  // test('username should be a string', () => {
  //   expect(typeof user.username).toBe('string')
  // })
  it('Logs the user in if the password is correct', () => {
    const user = new User('Tony Tester', 'opensesame', 70);
    user.login('opensesame');
    expect(user.loggedIn).toBe(true);
  })

  it('Throws and error if the password is incorrect', () => {
    const user = new User('Harry Hacker', 'password', 90);
    expect(() =>{
      user.login('letmein')
    }).toThrow('incorrect password');

  })
})

// test login

// test logout
