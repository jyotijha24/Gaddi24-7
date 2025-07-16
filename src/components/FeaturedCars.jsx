const cars = [
  {
    id: 1,
    name: "Maruti Swift Dzire",
    price: "₹4.5 Lakh",
    image: "https://source.unsplash.com/300x200/?swift,car",
  },
  {
    id: 2,
    name: "Hyundai i20",
    price: "₹5.8 Lakh",
    image: "https://source.unsplash.com/300x200/?i20,car",
  },
  {
    id: 3,
    name: "Honda City",
    price: "₹6.2 Lakh",
    image: "https://source.unsplash.com/300x200/?honda,car",
  },
];

function FeaturedCars() {
  return (
    <section className="py-10 px-4">
      <h3 className="text-2xl font-bold mb-6 text-center">Featured Vehicles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{car.name}</h4>
              <p className="text-blue-600 font-bold">{car.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCars;
