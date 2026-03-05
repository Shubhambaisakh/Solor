/**
 * Property Tests for Navigation Component
 * These tests validate universal correctness properties across all pages
 */

import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import Navigation from '@/components/Navigation';

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navigation Property Tests', () => {
  /**
   * Property 1: Navigation presence across all pages
   * For any page in the website, the navigation bar component should be present and visible
   * Validates: Requirements 1.3
   */
  test('Property 1: Navigation is present and visible on all pages', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('/', '/about', '/services', '/products', '/contact'),
        (pathname) => {
          // Mock the pathname for each test case
          jest.spyOn(require('next/navigation'), 'usePathname').mockReturnValue(pathname);
          
          const { container } = render(<Navigation />);
          
          // Navigation should be present
          const nav = container.querySelector('nav');
          expect(nav).toBeInTheDocument();
          
          // Navigation should be visible (not hidden)
          expect(nav).toBeVisible();
          
          // Navigation should be at the top (sticky positioning)
          expect(nav).toHaveClass('sticky', 'top-0');
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 2: Navigation links point to correct destinations
   * For any navigation link, the href attribute should point to the correct page
   * Validates: Requirements 1.4
   */
  test('Property 2: Navigation links point to correct destinations', () => {
    const expectedLinks = [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/products', label: 'Products' },
      { href: '/contact', label: 'Contact' },
    ];

    fc.assert(
      fc.property(
        fc.constantFrom(...expectedLinks),
        (linkData) => {
          render(<Navigation />);
          
          // Find all links with the label
          const links = screen.getAllByText(linkData.label);
          
          // At least one link should exist with correct href
          const correctLink = links.find(link => 
            link.closest('a')?.getAttribute('href') === linkData.href
          );
          
          expect(correctLink).toBeDefined();
        }
      ),
      { numRuns: 50 }
    );
  });

  /**
   * Property 22: Icon-only buttons have ARIA labels
   * For any button that contains only an icon, it should have an aria-label
   * Validates: Requirements 14.5
   */
  test('Property 22: Icon-only buttons have ARIA labels', () => {
    render(<Navigation />);
    
    // Find the hamburger menu button (icon-only button)
    const buttons = screen.getAllByRole('button');
    
    buttons.forEach(button => {
      // Check if button has no visible text (icon-only)
      const hasVisibleText = button.textContent && button.textContent.trim().length > 0;
      
      if (!hasVisibleText) {
        // Icon-only buttons must have aria-label
        expect(button).toHaveAttribute('aria-label');
        expect(button.getAttribute('aria-label')).toBeTruthy();
      }
    });
  });
});
