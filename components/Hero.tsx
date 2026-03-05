import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero/home-hero.webp"
        alt="Solar panels on roof"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Power Your Future with Clean Solar Energy
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Professional installation and maintenance for homes and businesses
        </p>
        <Link
          href="/contact"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
