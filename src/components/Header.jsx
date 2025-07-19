import logo from '../assets/logo.jpg'; // 🟡 path to your logo image
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn  } from 'react-icons/fa';
function Header() {
  return (
     <div className="bg-blue-900 h-[600px] relative pt-4 ">

      <div className="w-[1024px] mx-auto flex p-2  justify-between items-center ">
        <img src={logo}  alt="Gaddi24*7 Logo" className="w-20 h-20  object-contain rounded-full" />
        <nav className='text-white flex gap-2 font-semibold text-lg items-center'>
          <a href="#" className="hover:text-yellow-300 font-medium">Drive with us</a>
           <span className="text-white text-2xl">|</span>
        <a href="#" className="hover:text-yellow-300 font-medium">Login</a>
         <span className="text-white text-2xl">|</span>
        <a href="#" className="hover:text-yellow-300 font-medium">Register</a>
         <span className=' text-2xl'>|</span>
          <a href="#" className="hover:text-yellow-300 font-medium bg-yellow-500 text-white px-5 py-1 rounded-xl border-white border-3">Book a Ride</a>
        </nav>
      </div>

      {/* navbar */}
     <div className="bg-purple-300/40  mt-1 w-full flex  justify-center items-center gap-20">


  <div className="  flex  gap-10 py-3 text-white text-lg font-medium">
    <a href="#" className="hover:text-yellow-300 hover:font-semibold hover:underline underline-offset-[15px] decoration-[3px]
 transition">HOME</a>
    <a href="#" className="hover:text-yellow-300 hover:font-semibold hover:underline underline-offset-[15px] decoration-[3px]
 transition">ABOUT US</a>
    <a href="#" className="hover:text-yellow-300 hover:font-semibold hover:underline underline-offset-[15px] decoration-[3px]
 transition">SERVICES</a>
    <a href="#" className="hover:text-yellow-300 hover:font-semibold hover:underline underline-offset-[15px] decoration-[3px]
 transition">ONE WAY CABS</a>
    <a href="#" className="hover:text-yellow-300 hover:font-semibold hover:underline underline-offset-[15px] decoration-[3px]
 transition">OUR CARS</a>
    <a href="#" className="hover:text-yellow-300 hover:font-semibold hover:underline underline-offset-[15px] decoration-[3px]
 transition">CONTACT US</a>
  </div>
      <div className=''>
         <div className="flex gap-4 text-2xl ">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" bg-black rounded-full p-2 text-blue-500 hover:text-yellow-400 transition">
        <FaTwitter />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="  bg-black rounded-full p-2  text-blue-500 hover:text-yellow-400 transition">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="  bg-black rounded-full p-2  text-red-500 hover:text-yellow-400 transition">
        <FaInstagram />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="  bg-black rounded-full p-2  text-blue-500 hover:text-yellow-400 transition">
        <FaLinkedinIn />
      </a>
      
    </div>
      </div>
</div>

    {/* <div className='w-[800px] mx-auto text-center mt-30'>
      <h1 className='text-yellow-400 text-8xl font-semibold'>ABOUT <span className='text-white'>US</span></h1>
      <h1 className='text-white text-xl'>All India Round trip is available, Sedan at 10 Per KM and SUV at 13 Per KM.</h1>
    </div> */}

    </div>
  );
}

export default Header;
