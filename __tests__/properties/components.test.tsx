/**
 * Property Tests for Component Structure
 * These tests validate that components contain required elements
 */

import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import ServiceCard from '@/components/ServiceCard';
import ProductCard from '@/components/ProductCard';

describe('Component Structure Property Tests', () => {
  /**
   * Property 6: Service cards contain required elements
   * For any service card, it should contain icon, title, and description
   * Validates: Requirements 7.5
   */
  test('Property 6: Service cards contain required elements', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
        fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
        fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
        (icon, title, description) => {
          const { container } = render(
            <ServiceCard
              icon={`/images/services/${icon}.svg`}
              title={title}
              description={description}
            />
          );
          
          // Should contain an icon (SVG or image element)
          const svg = container.querySelector('svg');
          expect(svg).toBeInTheDocument();
          
          // Should contain a title (h3)
          const heading = container.querySelector('h3');
          expect(heading).toBeInTheDocument();
          expect(heading?.textContent).toBe(title);
          
          // Should contain description (p)
          const para = container.querySelector('p');
          expect(para).toBeInTheDocument();
          expect(para?.textContent).toBe(description);
        }
      ),
      { numRuns: 50 }
    );
  });

  /**
   * Property 7: Product cards contain all required information
   * For any product card, it should contain image area, name, description, price, and button
   * Validates: Requirements 8.2, 8.3, 8.4, 8.5, 8.6
   */
  test('Property 7: Product cards contain all required information', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
        fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
        fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
        fc.double({ min: 1, max: 10000 }),
        (imageName, name, description, priceNum) => {
          const price = `$${priceNum.toFixed(2)}`;
          
          const { container } = render(
            <ProductCard
              image={`/images/products/${imageName}.jpg`}
              name={name}
              description={description}
              price={price}
            />
          );
          
          // Should contain an image area (div with aspect ratio)
          const imageArea = container.querySelector('.aspect-\\[4\\/3\\]');
          expect(imageArea).toBeInTheDocument();
          
          // Should contain product name (h3)
          const heading = container.querySelector('h3');
          expect(heading).toBeInTheDocument();
          expect(heading?.textContent).toBe(name);
          
          // Should contain description
          const paras = container.querySelectorAll('p');
          const descPara = Array.from(paras).find(p => p.textContent === description);
          expect(descPara).toBeDefined();
          
          // Should contain price
          const pricePara = Array.from(paras).find(p => p.textContent === price);
          expect(pricePara).toBeDefined();
          
          // Should contain action button
          const button = container.querySelector('button');
          expect(button).toBeInTheDocument();
        }
      ),
      { numRuns: 50 }
    );
  });
});
