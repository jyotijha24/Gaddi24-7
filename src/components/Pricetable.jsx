import React from 'react'

function Pricetable() {
  return (
    <>
      <div className="w-[1100px] overflow-x-auto p-4 mx-auto mt-10">
      <table className="bg-white table-auto border-collapse border border-gray-300 text-sm w-full">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="border border-gray-300 px-4 py-2">Jamshedpur To</th>
            <th className="border border-gray-300 px-4 py-2">Bokaro To</th>
            <th className="border border-gray-300 px-4 py-2">Dhanbad To</th>
            <th className="border border-gray-300 px-4 py-2">Ranchi To</th>
            <th className="border border-gray-300 px-4 py-2">Kolkata To</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Ranchi <br/> Sedan - ₹1599* + Toll <br/> SUV - ₹2500* + Toll", "TATA <br/> Sedan - ₹2199* + Toll <br/> SUV - ₹3000* + Toll", "Ranchi <br/> Sedan - ₹2499* + Toll <br/> SUV - ₹3500* + Toll", "Jamshedpur <br/> Sedan - ₹1599* + Toll <br/> SUV - ₹2500* + Toll", "TATA <br/> Sedan - ₹4499* + Toll <br/> SUV - ₹6000* + Toll"],
            ["Bokaro <br/> Sedan - ₹2199* + Toll <br/> SUV - ₹3000* + Toll", "Ranchi <br/> Sedan - ₹1599* + Toll <br/> SUV - ₹2500* + Toll", "Kolkata <br/> Sedan - ₹4499* + Toll <br/> SUV - ₹6000* + Toll", "Bokaro <br/> Sedan - ₹1599* + Toll <br/> SUV - ₹2600* + Toll", "Ranchi <br/> Sedan - ₹5999* + Toll <br/> SUV - ₹7500* + Toll"],
            ["Dhanbad <br/> Sedan - ₹2499* + Toll <br/> SUV - ₹3500* + Toll", "Kolkata <br/> Sedan - ₹4999* + Toll <br/> SUV - ₹6500* + Toll", "Jamshedpur <br/> Sedan - ₹2499* + Toll <br/> SUV - ₹3500* + Toll", "Dhanbad <br/> Sedan - ₹2499* + Toll <br/> SUV - ₹3500* + Toll", "Dhanbad <br/> Sedan - ₹4499* + Toll <br/> SUV - ₹6000* + Toll"],
            ["Kolkata <br/> Sedan - ₹4499* + Toll <br/> SUV - ₹6000* + Toll", "Dhanbad <br/> Sedan - ₹1200* + Toll <br/> SUV - ₹1800* + Toll", "Bokaro <br/> Sedan - ₹1200* + Toll <br/> SUV - ₹1800* + Toll", "Kolkata <br/> Sedan - ₹5999* + Toll <br/> SUV - ₹7500* + Toll", "Durgapur <br/> Sedan - ₹2999* + Toll <br/> SUV - ₹4500* + Toll"],
            ["Patna <br/> Sedan - ₹6999* + Toll <br/> SUV - ₹8999* + Toll", "Patna <br/> Sedan - ₹4999* + Toll <br/> SUV - ₹6500* + Toll", "Patna <br/> Sedan - ₹4999* + Toll <br/> SUV - ₹6500* + Toll", "Patna <br/> Sedan - ₹5999* + Toll <br/> SUV - ₹7999* + Toll", "Asansol <br/> Sedan - ₹2999* + Toll <br/> SUV - ₹4500* + Toll"],
            ["", "", "", "", "KGP <br/> Sedan - ₹2999* + Toll <br/> SUV - ₹4500* + Toll"],
            
          ].map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-gray-300 px-4 py-2 hover:bg-gray-100 hover:shadow-xl"
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
         <tr>
         <td colSpan="5" className="text-center font-medium py-2 text-gray-700 hover:bg-gray-100">
         *Terms & conditions may apply
            </td>
        </tr>

        </tbody>
      </table>
    </div>
    </>
  )
}

export default Pricetable
