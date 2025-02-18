export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePassword = (password) => {
    return password.length >= 8;
  };
  
  export const validateSignupForm = (formData) => {
    const errors = {};
  
    if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!validatePassword(formData.password)) {
      errors.password = 'Password must be at least 8 characters';
    }
  
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };