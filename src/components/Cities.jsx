export default function Cities() {
  const citiesInChhattisgarh = [
    "Raipur",
    "Bhilai",
    "Bilaspur",
    "Korba",
    "Durg",
    "Rajnandgaon",
    "Raigarh",
    "Jagdalpur",
    "Ambikapur",
    "Dhamtari",
    "Mahasamund",
    "Chirmiri",
    "Champa",
    "Janjgir",
  ];

  return (
    <div className="bg-gray-100 py-36 px-5 sm:px-24 ">
      <h1 className="text-3xl font-bold text-center ">
        Cities We Are Already In
      </h1>

      <div className="grid grid-cols-2 sm:flex flex-wrap mt-8 gap-5 justify-center">
        {citiesInChhattisgarh.map((item, index) => {
          return (
            <span
              key={index}
              className="bg-white hover:bg-green-500  hover:text-white px-6 py-3 text-lg shadow rounded font-semibold tracking-wider"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
