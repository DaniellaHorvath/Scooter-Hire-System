const { describe, expect, it} = require('@jest/globals')
const Scooter = require('../src/Scooter')
const User = require('../src/User')

// typeof scooter === object
// describe('scooter object', () => {
//   test('Scooter class should create Scooter instance', () => {
//     const scooter = new Scooter()
//     expect(scooter).toBeInstanceOf(Scooter)
//   })
// })

// // Method tests
// describe('scooter methods', () => {
//   // tests here!

//   // rent method

//   // dock method

//   // requestRepair method

//   // charge method

// })

describe('The rent() method', () => {
  it('assigns a scooter to a user if it is charged and not broken', () => {
    const user = new User('hsmith', 'iashjdhi', 25);
    const scooter = new Scooter('Norwich');

    scooter.rent(user)

    expect(scooter.station).toBeNull(); // .toBeNull() = .toBe(null)
    expect(scooter.user).toBe(user);

  })

  it('Throws an error if it is not charged', () => {
    const user = new User('atasheva', 'ijanfbhas', 25);
    const scooter = new Scooter('Norwich');
    scooter.charge = 15;
    
    expect(() => {
      scooter.rent(user)
    }).toThrow('scooter needs to charge or scooter need to repair');


  })
})
