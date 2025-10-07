type FAQCardProps = {
  number: number;
  title: string;
  description: string;
};

export default function FAQCard({ number, title, description }: FAQCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center h-auto">
      {/* Number Circle */}
      <div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl font-bold">
        {number}
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mt-4">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base mt-2 whitespace-normal">
        {description}
      </p>
    </div>
  );
}
