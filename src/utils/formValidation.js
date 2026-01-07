export const validateEmail = (email) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const regex = /^[0-9]{10,15}$/;
  return regex.test(phone);
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validateMessage = (message) => {
  return message.trim().length >= 10;
};

export const validateForm = (formData, requiredFields = []) => {
  const errors = {};

  requiredFields.forEach(field => {
    if (!formData[field] || !formData[field].toString().trim()) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
  });

  // Specific validations
  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (formData.name && !validateName(formData.name)) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (formData.message && !validateMessage(formData.message)) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};