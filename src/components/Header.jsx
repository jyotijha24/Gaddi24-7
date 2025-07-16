function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Gaddi24*7</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Buy</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Sell</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
