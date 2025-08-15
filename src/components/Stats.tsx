import { useEffect, useState } from "react";
import { AddDialog } from "./AddDialog";

// To do: make the data dynamic
const Stats = () => {
  const [contactCount, setContactCount] = useState(0)
  
  useEffect(() => {
    let count = 0

    for (let i=0; i < localStorage.length; i++){
      const key = localStorage.key(i)

      if(key && key.startsWith("contact")) {
        count ++
      }
    }

    setContactCount(count)
  }, [localStorage.length])

  return (
    <div className="md:h-[89vh] w-full px-8 py-5 md:border-l border-sidebar-border">
      <div className="bg-primary/2 text-orange-950 px-5 py-8 border border-primary/20 rounded-2xl">
        <h3 className="text-xl font-semibold">Number of Contacts</h3>
        <h1 className="text-4xl font-bold my-3">{contactCount}</h1>

        <AddDialog />
      </div>
    </div>
  );
};

export default Stats;
