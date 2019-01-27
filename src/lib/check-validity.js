import validator from "validator";

export const myCheckValidity = (value, rules) => {
  let isValid = true;
  let errorArray = [];
  if (!rules) {
    return true;
  }

  //from validator package

  if (rules.isEmpty || rules.required) {
    isValid = !validator.isEmpty(value) && isValid;
    if (!isValid) {
      errorArray.push("It is Empty. ");
    }
  }

  if (rules.isEmail) {
    // const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    // isValid = pattern.test( value ) && isValid;
    isValid = validator.isEmail(value);
    if (!isValid) {
      errorArray.push("Email should be formatted like xxx@xxx.xxx ");
    }
  }

  //from my custom

  // if ( rules.required ) {
  //     isValid = value.trim() !== '' && isValid;
  // }

  // if ( rules.isEmail ) {
  //     const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //     isValid = pattern.test( value ) && isValid;
  // }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    if (!isValid) {
      errorArray.push("Minimum Length is " + rules.minLength + ". ");
    }
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
    if (!isValid) {
      errorArray.push("Maximum Length is " + rules.maxLength + ". ");
    }
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
    if (!isValid) {
      errorArray.push("This field should have numeric value. ");
    }
  }

  return { isValid, errorArray };
};
