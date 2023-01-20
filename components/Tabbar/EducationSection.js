import React, { useState } from "react";
import { educationList } from "../../Data";
import EducationTile from "../Education";

function EducationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      {/* Education */}
      <div className="flex-col flex ">
        <p className="text-slate-400  text-lg mt-2 mb-5 px-3 sm:p-0 ">
          List of my Academic
          <span className="text-emerald-500 font-semibold italic">
            {" Qualifcations  "}
          </span>
        </p>
        <div className="flex-row flex">
          <div className="container w-full md:w-1/2">
            {educationList.map((e, i) => (
              <button
                key={i}
                className={`text-left pl-3 rounded-xl pr-14 ${
                  currentIndex == i && "bg-zinc-800"
                }`}
                onClick={() => setCurrentIndex(i)}
              >
                <EducationTile props={e} />
              </button>
            ))}
          </div>
          <div className="flex-1 hidden md:block border-l-2 border-zinc-800 px-5 text-zinc-400 space-y-2">
            <h1 className="text-3xl font-bold text-zinc-50">
              {educationList[currentIndex].degree}
            </h1>
            <h1 className="text-lg font-[400]">
              {educationList[currentIndex].institute}
            </h1>

            <p class="leading-relaxed">
              {educationList[currentIndex].year ?? "20XX-20XX"}
            </p>
            <p class="leading-relaxed">
              {educationList[currentIndex].location ?? "Kolkata, India"}
            </p>
            <p class="leading-relaxed">
              {educationList[currentIndex].subtitle ?? "Subtitle"}
            </p>

            <p className="border-t border-zinc-600 py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis ex reiciendis consequuntur, id animi nostrum distinctio
              ipsum optio temporibus veritatis soluta enim nobis tenetur at nam
              sunt qui! Deleniti quis, tempore qui eligendi veritatis nisi?
              Nostrum, aspernatur atque quasi et tenetur porro consequatur!
              Sequi nemo alias delectus numquam doloremque maiores ea veritatis
              dicta animi consequuntur saepe expedita nesciunt in consequatur,
              minima quam magnam non! At, hic veritatis error veniam a
              praesentium assumenda quia? Itaque quis eius excepturi nostrum
              soluta! Saepe libero aliquid reiciendis odio, illum facere facilis
              vero officiis ex. Excepturi, iusto, fuga expedita ex itaque porro
              pariatur debitis explicabo saepe perspiciatis quidem dolorem
              deserunt iste cum quaerat, rerum autem eveniet corporis inventore!
              Assumenda maiores sequi voluptatibus porro nesciunt beatae nisi,
              earum itaque dolores hic ipsum. Tempore sunt fugit natus
              reiciendis illum optio itaque omnis facilis quidem, animi, rerum
              nihil odit qui recusandae labore eligendi nobis ea laudantium
              voluptate veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
