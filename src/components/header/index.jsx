import { FaVirusCovid } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Form from "./form";
import { TbVaccine } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex bg-zinc-900 text-white p-5 md:p-20 justify-between items-center">
      <Link className="flex items-center gap-2" to="/">
        <FaVirusCovid className="text-green-500 text-xl" />
        <h1>Covid Takip</h1>
      </Link>

      <Form />

      <div className="flex items-center gap-3 max-md:hidden">
        <p className="flex flex-col text-sm">
          <span>Bugün Aşı Olanlar</span>
          <span>()47,805</span>
        </p>
        <TbVaccine className="text-xl text-green-500" />
      </div>
    </header>
  );
};

export default Header;
