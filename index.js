const currentPhoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance();
const updatedPhoneUtil = require("google-libphonenumber-latest").PhoneNumberUtil.getInstance();

// Edit invalid phone with format +61xxxxxxxxx
const validPhone = "+61412345678"
const invalidPhone = ""

// Code from core > utils > helper.js > validatePhone(x,y)
const trimmedValidPhone = validPhone.trim();
const trimmedInvalidPhone = invalidPhone.trim();

const validNumber = currentPhoneUtil.parseAndKeepRawInput(trimmedValidPhone);
const invalidNumber = currentPhoneUtil.parseAndKeepRawInput(trimmedInvalidPhone);

console.log("Using current phone util")
console.log(`${trimmedValidPhone}: ${currentPhoneUtil.isValidNumber(validNumber)}`)
console.log(`${trimmedInvalidPhone}: ${currentPhoneUtil.isValidNumber(invalidNumber)}`)
console.log("\nUsing updated phone util")
console.log(`${trimmedValidPhone}: ${updatedPhoneUtil.isValidNumber(validNumber)}`)
console.log(`${trimmedInvalidPhone}: ${updatedPhoneUtil.isValidNumber(invalidNumber)}`)