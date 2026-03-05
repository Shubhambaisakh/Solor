export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * Validates contact form data
 * @param data - The form data to validate
 * @returns Object containing validation errors for each field
 */
export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  
  if (!data.name.trim()) {
    errors.name = 'Please enter your name';
  }
  
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.message.trim()) {
    errors.message = 'Please enter a message';
  }
  
  return errors;
}

/**
 * Validates email format using regex pattern
 * @param email - The email string to validate
 * @returns true if email format is valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
