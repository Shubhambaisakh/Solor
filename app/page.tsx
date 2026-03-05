import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: '/images/hero/solar-panel-installation-stockcake.webp',
      title: 'Solar Installation',
      description: 'Professional installation of solar panel systems for residential and commercial properties with expert technicians.',
    },
    {
      icon: '/images/hero/solar maintance.jpg',
      title: 'Maintenance & Support',
      description: 'Regular maintenance and 24/7 support to ensure your solar system operates at peak efficiency year-round.',
    },
    {
      icon: '/images/hero/consultation.jpg',
      title: 'Energy Consultation',
      description: 'Expert consultation to help you understand your energy needs and design the perfect solar solution.',
    },
  ];

  const products = [
    {
      image: '/images/hero/300-Watt-Solar-Panel-Price-in-India.jpg',
      name: '300W Solar Panel',
      description: 'High-efficiency monocrystalline panel with 25-year warranty and excellent performance.',
      price: '$299.99',
    },
    {
      image: '/images/hero/400w solar pannel.webp',
      name: '400W Solar Panel',
      description: 'Premium solar panel with advanced technology for maximum energy production.',
      price: '$399.99',
    },
    {
      image: '/images/hero/solar-inverter.jpg',
      name: 'Solar Inverter',
      description: 'Smart inverter with monitoring capabilities and grid-tie functionality.',
      price: '$899.99',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Welcome to Solar Energy Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a leading provider of solar energy solutions, dedicated to helping homes and businesses 
            transition to clean, renewable energy. With over 10 years of experience, our team of certified 
            professionals delivers top-quality solar installations and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solar solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              High-quality solar equipment for your energy needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Solar Energy?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Save Money</h3>
              <p className="text-gray-600">Reduce your electricity bills by up to 70% with solar power</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Reduce your carbon footprint and help protect the environment</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Energy Independence</h3>
              <p className="text-gray-600">Generate your own clean energy and reduce grid dependence</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How Solar Installation Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple, straightforward process from consultation to installation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Consultation</h3>
              <p className="text-gray-600 text-sm">We assess your energy needs and site conditions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Design</h3>
              <p className="text-gray-600 text-sm">Our experts design the perfect solar system for you</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Installation</h3>
              <p className="text-gray-600 text-sm">Certified technicians install your system safely</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Start Saving</h3>
              <p className="text-gray-600 text-sm">Begin generating clean energy and saving money</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">10+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">500+</div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">1000+</div>
              <p className="text-gray-300">Installations</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from satisfied solar energy users
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "The installation was smooth and professional. Our electricity bills have dropped by 65%! Highly recommend."
              </p>
              <p className="font-semibold text-gray-800">- Sarah Johnson</p>
              <p className="text-sm text-gray-500">Homeowner</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "Excellent service from start to finish. The team was knowledgeable and the system works perfectly."
              </p>
              <p className="font-semibold text-gray-800">- Michael Chen</p>
              <p className="text-sm text-gray-500">Business Owner</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "Best investment we've made! Clean energy, lower bills, and great customer support throughout."
              </p>
              <p className="font-semibold text-gray-800">- Emily Rodriguez</p>
              <p className="text-sm text-gray-500">Homeowner</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How much can I save with solar panels?
              </h3>
              <p className="text-gray-600">
                Most homeowners save 50-70% on their electricity bills. The exact savings depend on your location, 
                energy usage, and system size. We provide a detailed savings estimate during your free consultation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How long does installation take?
              </h3>
              <p className="text-gray-600">
                Most residential installations are completed in 1-3 days. The timeline includes site preparation, 
                panel installation, electrical work, and system activation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                What warranty do you offer?
              </h3>
              <p className="text-gray-600">
                Our solar panels come with a 25-year performance warranty, and inverters have a 10-15 year warranty. 
                We also provide a 10-year workmanship warranty on all installations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Do solar panels work on cloudy days?
              </h3>
              <p className="text-gray-600">
                Yes! Solar panels still generate electricity on cloudy days, though at reduced efficiency (typically 10-25% 
                of full capacity). Modern panels are designed to capture diffuse sunlight effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/solar-panel-sunset-4.webp"
            alt="Solar panels at sunset"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-500/90" />
        </div>
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
