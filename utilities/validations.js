import React, {useState} from "react";

export function ValidateEmail() {
  const [isValid, setIsValid] = useState(true); ;
  const validate = (email) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return { validate, isValid };
};

export function ValidatePassword() {
  const [isValid, setIsValid] = useState(false);
  const validate = (password) => {
    var passwordFormat =
      /^(?=.*[0-9])(?=.*[!£@#$%^&*])[a-zA-Z0-9!£@#$%^&*]{7,15}$/;
    if (password.match(passwordFormat)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return { validate, isValid };
};

export function validatePassword(password) {

    var passwordFormat =
      /^(?=.*[0-9])(?=.*[!£@#$%^&*])[a-zA-Z0-9!£@#$%^&*]{7,15}$/;
    if (password.match(passwordFormat)) {
      return true;
    }
  // // Check length
  // if (password.length < 6) {
  //   return false;
  // }

  // // Check uppercase, lowercase, and digit using regular expressions
  // if (!/[A-Z]/.test(password)) {
  //   return false;
  // }
  // if (!/[a-z]/.test(password)) {
  //   return false;
  // }
  // if (!/\d/.test(password)) {
  //   return false;
  // }

  return false;
};

export function validateEmail(email) {

 
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return true;
    }

  return false;
};