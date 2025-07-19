import { useState } from 'react';

function RideSearchForm({ onSearch }) {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('5-seater');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickup && drop && date) {
      onSearch({ pickup, drop, date, category });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg max-w-xl mx-auto -mt-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Drop Location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="5-seater">5-Seater</option>
          <option value="7-seater">7-Seater</option>
          <option value="suv">SUV</option>
        </select>
      </div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
        Search Ride
      </button>
    </form>
  );
}

export default RideSearchForm;
