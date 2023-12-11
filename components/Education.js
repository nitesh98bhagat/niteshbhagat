export default function EducationTile({ props }) {
  const { degree, year, institute, subtitle, location } = props;
  return (
    <div class="flex relative py-8 sm:items-center ">
      {/* Line */}
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-[2px] bg-slate-500 pointer-events-none"></div>
      </div>
      {/* Dot */}
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-emerald-500 text-white relative z-10 title-font font-medium text-sm"></div>
      {/* left content */}
      <div class="flex-grow  flex sm:items-center items-start flex-col sm:flex-row px-3">
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-400 mb-1 text-xl">
            {degree ?? "Degree"}
          </h2>
          <p class="leading-relaxed">{institute ?? "Year"}</p>
          <div className="flex-row flex items-center space-x-5">
            <p class="leading-relaxed">{year ?? "Year"}</p>
            <p class="leading-relaxed">{subtitle ?? "Year"}</p>
            <p class="leading-relaxed">{location ?? "Year"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
