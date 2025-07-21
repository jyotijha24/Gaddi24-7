import RideSearchForm from "../components/RideSearchForm";
import taxidriver from '../assets/taxidriver.png'; // 🟡 path to your taxi driver image
import Tripdetails from "../components/tripdetails";
import  Card from "../components/Card";
import firstimage from '../assets/firstimage.png'; // 🟡 path to your first image
import secondimage from '../assets/secondimage.png';
import thirdimage from '../assets/thirdimage.png'; // 🟡 path to your third image
import fourthimage from '../assets/fourthimage.png'; // 🟡 path to your fourth image
import Pricetable from "../components/Pricetable";
function Index() {
  const handleSearch = (formData) => {
    console.log("User selected:", formData);
    // Next step: redirect to results page or show cab options
  };
  const cardData = [
  {
    image: firstimage,
    title: "Address Pickup",
    description: "We always pick up our clients on time, 24/7 availability.",
  },
  {
    image: secondimage,
    title: "Airport Transfer",
    description: "Get reliable airport transfer service with comfort.",
  },
  {
    image: thirdimage,
    title: "Long Distance",
    description: "Book inter-city cabs at the best prices and safety.",
  },
  {
    image: fourthimage,
    title: "Taxi Tours",
    description: "Enjoy custom tours with local experienced drivers.",
  },
];

  return (
    <div>
        <div className="">
        <div className='w-[850px]  text-center  absolute  left-1/2 top-[45%] transform -translate-1/2   text-white'>
      <h1 className='text-yellow-400 text-6xl font-semibold'>Gaddi 24*7 </h1>
      <h1 className='text-white text-7xl font-semibold'>Taxi Service Online</h1>
      <h1 className='text-white text-xl mt-4'>BOOK A CAB TODAY! RELIABLE. SAFE. TRANSPARENT.</h1>
    </div>
    </div>
      {/* Hero Banner */}
      <div className="relative">
        <div className="w-[1050px] h-[600px]   mx-auto -mt-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="flex justify-center -mt-20 z-10 relative">
           <img
            src={taxidriver}
          alt="Taxi Driver"
          className="w-[500px] h-auto -mt-20 object-contain rounded-2xl"
          />
        </div> 

            <div className=" w-[500px]  mx-auto flex justify-between items-center">
               <div className="relative ">
                 <Tripdetails />
                <h1 className="absolute top-20 left-10 text-white text-sm">ONE-WAY </h1>
               <h1 className="absolute top-25 left-7 text-white text-sm">SINGLE ROUTE </h1>
               </div>
                <div className="relative ">
                 <Tripdetails />
                <h1 className="absolute top-20 left-10 text-white text-sm">OUTSTATION </h1>
               <h1 className="absolute top-25 left-10 text-white text-sm">ROUND TRIP </h1>
               </div>
                <div className="relative ">
                 <Tripdetails />
                <h1 className="absolute top-20 left-12 text-white text-sm">AIRPORT </h1>
               <h1 className="absolute top-25 left-12 text-white text-sm">TRANSIT </h1>
               </div>
                </div>    
        </div>
        </div>
        <div className="w-[900px] mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-blue-900 text-center text-4xl font-bold">WELCOME TO US</h1>
          <p className="text-gray-500 text-xl mt-5">Looking for the best taxi service? Allow us to introduce ourselves. We the team of JSR ON WHEELS are available 24 * 7 whenever you need us. We only did not meet your expectations, we surpassed them. We Cater to the needs of residents in Jharkhand, Bihar and West Bengal and adjoining area. JSR on wheels is committed to being the best in customer service.</p>
        </div>

        <div className="w-[1100px] flex gap-3 mx-auto mt-10 p-6  bg-white rounded-lg shadow-lg">
           {cardData.map((card, index) =>
            (<Card key={index} 
              image={card.image} 
              title={card.title} description={card.description} /> ))}
        </div>

        <div className="w-full bg-gray-200 mt-10 py-20">
          <h1 className="text-blue-900 text-center text-6xl font-bold ">ONLY QUALITY FOR CLIENTS</h1>
          <Pricetable />

        </div>
      {/* <section className="h-[400px]  bg-cover bg-center flex items-center justify-center">
        <div className="bg-black bg-opacity-50 text-white p-6 rounded">
          <h2 className="text-4xl font-bold mb-2">Book Cabs Instantly in Jamshedpur</h2>
          <p>Choose your ride from Jamshedpur to Ranchi or anywhere</p>
        </div>
      </section> 

      {/* Search Form */}
      {/* <RideSearchForm onSearch={handleSearch} /> */} 
     
    </div>
  );
}

export default Index;
