const phoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance();

// Edit invalid phone with format +61xxxxxxxxx
const validPhone = "+61412345678"
const invalidPhone = ""

// Code from core > utils > helper.js > validatePhone(x,y)
const trimmedValidPhone = validPhone.trim();
const trimmedInvalidPhone = invalidPhone.trim();

const validNumber = phoneUtil.parseAndKeepRawInput(trimmedValidPhone);
const invalidNumber = phoneUtil.parseAndKeepRawInput(trimmedInvalidPhone);

console.log(`${trimmedValidPhone}: ${phoneUtil.isValidNumber(validNumber)}`)
console.log(`${trimmedInvalidPhone}: ${phoneUtil.isValidNumber(invalidNumber)}`)