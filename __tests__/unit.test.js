// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//PHone number
test('Phone Number with 10 digits should pass', () =>{
  expect(isPhoneNumber('123-456-7890')).toBe(true);
})

test('Phone Number not valid should not pass', () =>{
  expect(isPhoneNumber('3904578452389')).toBe(false);
})

test('Valid phone number', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('Phone Number not valid should not pass', () => {
  expect(isPhoneNumber('(1233)-456234578905324')).toBe(false);
});

//Email
test('Valid email should pass', () => {
expect(isEmail('ak@gmail.com')).toBe(true)

})


test('Valid email should pass', () => {
  expect(isEmail('l@gmail.com')).toBe(true)

})


test('inValid email should not pass', () => {
  expect(isEmail('l@l@l.com')).toBe(false)

})


test('inValid email should not pass', () => {
  expect(isEmail('pqoweiruoqiwrup')).toBe(false)

})

//Strong password

test('Valid strong password, should pass', () => {
  expect(isStrongPassword('wqruiop')).toBe(true)

})


test('Valid strong password, should pass', () => {
  expect(isStrongPassword('pqiouw4e')).toBe(true)

})


test('invalid strong password, should not pass', () => {
  expect(isStrongPassword('4weopiur')).toBe(false)

})


test('invalid strong password, should not pass', () => {
  expect(isStrongPassword('qwerpoiu^')).toBe(false)

})

//Date

test('Valid Date, should pass', () => {
  expect(isDate('1/2/2025')).toBe(true)

})


test('Valid Date, should pass', () => {
  expect(isDate('1/1/2004')).toBe(true)

})


test('inValid Date, should not pass', () => {

  expect(isDate('143/654/65')).toBe(false)
})


test('invalid Date, should not pass', () => {
  expect(isDate('1/1/1')).toBe(false)

})

//Hex Color

test('valid Hex color, should pass', () => {
  expect(isHexColor('#42f5e0')).toBe(true)

})

test('valid Hex color, should pass', () => {
  expect(isHexColor('#4287f5')).toBe(true)

})


test('invalid Hex color, should not pass', () => {
  expect(isHexColor('#qpriotu')).toBe(false)

})


test('invalid Hex color, should not pass', () => {
  expect(isHexColor('')).toBe(false)

})





// TODO - Part 2
