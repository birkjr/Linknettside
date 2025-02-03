type FAQCardProps = {
    number: number;
    title: string;
    description: string;
  }
  
  export default function FAQCard({ number, title, description }: FAQCardProps) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
        {/* Number Circle */}
        <div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl font-bold">
          {number}
        </div>
  
        {/* Title */}
        <h2 className="text-xl font-semibold mt-4">{title}</h2>
  
        {/* Description */}
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  }
  