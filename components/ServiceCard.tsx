import Image from 'next/image';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
      <div className="flex justify-center mb-4">
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}
