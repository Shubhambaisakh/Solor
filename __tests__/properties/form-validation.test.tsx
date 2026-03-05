/**
 * Property Tests for Form Validation
 * These tests validate form validation behavior
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as fc from 'fast-check';
import ContactForm from '@/components/ContactForm';
import { validateContactForm } from '@/lib/validation';

describe('Form Validation Property Tests', () => {
  /**
   * Property 8: Form validation for empty required fields
   * For any required field, submitting with empty value should display error
   * Validates: Requirements 9.5
   */
  test('Property 8: Form validation for empty required fields', async () => {
    const { container } = render(<ContactForm />);
    
    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    // Submit form without filling any fields
    fireEvent.click(submitButton);
    
    // Wait for validation errors to appear
    await waitFor(() => {
      const errorMessages = container.querySelectorAll('.text-red-500');
      // Should have at least 3 errors (name, email, message)
      expect(errorMessages.length).toBeGreaterThanOrEqual(3);
    }, { timeout: 2000 });
  });

  /**
   * Property 9: Email validation for invalid formats
   * For any invalid email string, validation should return an error
   * Validates: Requirements 9.6
   */
  test('Property 9: Email validation for invalid formats', () => {
    const invalidEmails = [
      'notanemail',
      '@nodomain.com',
      'no@domain',
      'spaces in@email.com',
      'double@@domain.com',
      'missing.domain@',
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...invalidEmails),
        (invalidEmail) => {
          const errors = validateContactForm({
            name: 'John Doe',
            email: invalidEmail,
            message: 'Test message',
          });
          
          // Should have an email error
          expect(errors.email).toBeDefined();
          expect(errors.email).toContain('email');
        }
      ),
      { numRuns: 30 }
    );
  });
});
