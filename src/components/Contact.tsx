import type { ContactProp } from "@/types";
import { Button } from "./ui/button";
import { X } from "lucide-react";

// To do: Dinamic content
const Contact = ({ id, pfp, name, phone, description }: ContactProp) => {
  const handleDelete = () => {
    localStorage.removeItem(`contact${id}`);
    window.location.reload();
  };

  return (
    <div className="relative bg-primary/2 border border-primary/15 rounded-2xl p-5 shadow-sm">
      <div className=" flex justify-center items-start pb-3 border-b border-sidebar-border">
        <img
          src={pfp ? pfp : "/pfp.jpg"}
          alt="pfp"
          className="w-15 h-15 rounded-full object-center object-cover shadow-sm"
        />
      </div>

      <Button
        variant={"link"}
        className="absolute top-1 right-1 text-black hover:text-red-500"
        onClick={() => handleDelete()}
      >
        <X />
      </Button>

      <div className="flex flex-col items-center pt-3">
        <h2 className="text-xl text-orange-950 font-bold">{name}</h2>
        <p className="px-5 opacity-40 text-xs text-orange-950">{phone}</p>
        <p className="px-5 opacity-50">{description ? description : <br />}</p>
      </div>
    </div>
  );
};

export default Contact;
