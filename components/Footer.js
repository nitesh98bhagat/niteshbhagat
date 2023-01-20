import { BiLink } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="flex-col flex  justify-center items-center text-zinc-500 bg-zinc-800/20 p-3">
      <div className="flex-col md:flex-row flex justify-around w-full py-10 space-y-3">
        <div className="flex-col text-zinc-50 ">
          <h1 className="text-4xl font-bold ">Nitesh Kumar Bhagat</h1>
          <div className="flex-row flex items-center ">
            <ImLocation2 />
            <span>Kolkata, India</span>
          </div>
          <div className="flex-row flex items-center ">
            <MdAlternateEmail />
            <span>nikubh1998@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col">
          {[
            "https://www.facebook.com/nitesh.bhagat.775",
            "https://twitter.com/myself_nitesh",
            "https://www.linkedin.com/in/nitesh-bhagat-a8b996137/",
            "https://www.instagram.com/_nitesh_bhagat_/",
            "https://www.youtube.com/@Nitesh_bhagat",
          ].map((e) => (
            <a key={e} href={e} target="_blank" rel="noreferrer">
              <div className="flex flex-row  text-sm text-slate-400 items-start my-1 justify-start space-x-2 hover:underline ">
                <BiLink size={20} />
                <span>
                  {e.replace("https://www.", "").replace("https://", "")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      &copy; Nitesh Kumar Bhagat
    </footer>
  );
}

export default Footer;
