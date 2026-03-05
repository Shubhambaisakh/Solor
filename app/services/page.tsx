import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: '/images/hero/solar-panel-installation-stockcake.webp',
      title: 'Solar Installation',
      description: 'Professional installation of solar panel systems for residential and commercial properties. Our certified technicians ensure safe, efficient installation with minimal disruption to your daily routine. We handle everything from permits to final inspection.',
    },
    {
      icon: '/images/hero/solar maintance.jpg',
      title: 'Maintenance & Support',
      description: 'Regular maintenance and 24/7 support to ensure your solar system operates at peak efficiency year-round. We provide cleaning, inspection, monitoring, and rapid response to any issues that may arise.',
    },
    {
      icon: '/images/hero/consultation.jpg',
      title: 'Energy Consultation',
      description: 'Expert consultation to help you understand your energy needs and design the perfect solar solution. We analyze your energy usage, roof conditions, and budget to create a customized plan that maximizes your savings.',
    },
    {
      icon: '/images/hero/soalr monitoring.jpg',
      title: 'System Monitoring',
      description: 'Advanced monitoring solutions that track your system performance in real-time. Get detailed insights into energy production, consumption, and savings through our mobile app and web portal.',
    },
    {
      icon: '/images/hero/Battery Storage.jpg',
      title: 'Battery Storage',
      description: 'Energy storage solutions that allow you to store excess solar power for use during nighttime or power outages. Achieve true energy independence with our battery backup systems.',
    },
    {
      icon: '/images/hero/System Upgrades.jpg',
      title: 'System Upgrades',
      description: 'Upgrade your existing solar system with the latest technology. We can expand your capacity, add battery storage, or replace aging components to improve performance.',
    },
  ];

  return (
    <main>
      {/* Hero Section with Image */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/hero/Our Services.jpg"
          alt="Our Solar Services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-500/80" />
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/90">
            Comprehensive solar solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your solar energy needs
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
