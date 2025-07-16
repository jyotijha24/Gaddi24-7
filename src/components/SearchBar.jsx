function SearchBar() {
  return (
    <section className="bg-white p-6 shadow-md -mt-12 mx-4 rounded-lg relative z-10">
      <h3 className="text-xl font-semibold mb-4">Search Your Car</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input type="text" placeholder="Brand (e.g. Maruti)" className="border p-2 rounded" />
        <input type="text" placeholder="Model" className="border p-2 rounded" />
        <input type="number" placeholder="Budget (Max ₹)" className="border p-2 rounded" />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Search</button>
      </div>
    </section>
  );
}

export default SearchBar;
