import Image from 'next/image';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

export default function ProductCard({ image, name, description, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="relative w-full aspect-[4/3] bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {name}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <p className="text-2xl font-bold text-green-500 mb-4">
          {price}
        </p>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
