type BusinessOfferProps = {
  image: string;
  title: string;
  description: string;
};

export default function BusinessOffer({
  image,
  title,
  description,
}: BusinessOfferProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 max-w-xs">
      {/* Uniform Image Size */}
      <div className="w-32 h-32 flex justify-center items-center mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}
