import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

export default function Products() {
  const products = [
    {
      image: '/images/hero/300-Watt-Solar-Panel-Price-in-India.jpg',
      name: '300W Solar Panel',
      description: 'High-efficiency monocrystalline panel with 25-year warranty. Perfect for residential installations with excellent performance in various weather conditions.',
      price: '$299.99',
    },
    {
      image: '/images/hero/400w solar pannel.webp',
      name: '400W Solar Panel',
      description: 'Premium solar panel with advanced technology for maximum energy production. Ideal for larger installations and commercial applications.',
      price: '$399.99',
    },
    {
      image: '/images/hero/solar-inverter.jpg',
      name: 'Solar Inverter 5kW',
      description: 'Smart inverter with monitoring capabilities and grid-tie functionality. Converts DC power to AC with 98% efficiency.',
      price: '$899.99',
    },
    {
      image: '/images/hero/home-hero.webp',
      name: 'Battery Storage 10kWh',
      description: 'Lithium-ion battery storage system for energy independence. Store excess solar power for nighttime use or emergencies.',
      price: '$4,999.99',
    },
    {
      image: '/images/hero/solar-panel-installation-stockcake.webp',
      name: 'Mounting System',
      description: 'Durable aluminum mounting system designed for all roof types. Weather-resistant and engineered for 25+ year lifespan.',
      price: '$199.99',
    },
    {
      image: '/images/hero/consultation.jpg',
      name: 'Energy Monitor',
      description: 'Real-time energy monitoring system with mobile app. Track production, consumption, and savings from anywhere.',
      price: '$149.99',
    },
  ];

  return (
    <main>
      {/* Hero Section with Image */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/hero/Our Products.jpg"
          alt="Our Solar Products"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-500/80" />
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-xl text-white/90">
            High-quality solar equipment for your energy needs
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            All Products Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-semibold text-gray-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $500</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-gray-800 mb-2">Warranty</h3>
              <p className="text-gray-600 text-sm">Up to 25 years coverage</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">24/7 technical assistance</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
