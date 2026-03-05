import Image from 'next/image';

export default function About() {
  return (
    <main>
      {/* Hero Section with Image */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/hero/home-hero.webp"
          alt="About Solar Energy Solutions"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-500/80" />
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Leading the renewable energy revolution for over a decade
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Solar Energy Solutions has been at the forefront of the renewable energy revolution for over a decade. 
            We specialize in providing comprehensive solar energy systems for residential and commercial clients, 
            helping them reduce their carbon footprint while saving on energy costs.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team of certified professionals brings expertise, dedication, and a commitment to excellence in 
            every project. From initial consultation to installation and ongoing maintenance, we're with you every 
            step of the way on your journey to clean energy.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To make clean, renewable solar energy accessible and affordable for everyone. We strive to 
                deliver exceptional service, innovative solutions, and sustainable energy systems that empower 
                our clients to take control of their energy future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading solar energy provider in the region, recognized for our commitment to quality, 
                innovation, and customer satisfaction. We envision a future where clean energy is the standard, 
                not the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Certified Experts</h3>
              <p className="text-gray-600">
                Our team consists of certified solar professionals with years of experience and ongoing training.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                We use only premium equipment and provide comprehensive warranties on all installations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We provide ongoing support and maintenance for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
              <p className="text-gray-600">Installations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">10+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
