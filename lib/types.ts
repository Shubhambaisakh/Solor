/**
 * Type definitions for Solar Business Website
 */

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
}

// Example data exports
export const contactInfo: ContactInfo = {
  phone: '(555) 123-4567',
  email: 'info@solarenergy.com',
  address: '123 Solar Street, Green City, ST 12345',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
};
