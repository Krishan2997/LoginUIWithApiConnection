export function phoneNumberValidator(phoneNumber) {
    console.log("I am validating you phone number: " + phoneNumber);
    if (phoneNumber.length != 10) return "Invalid number";
    return '';
}