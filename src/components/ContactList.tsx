import type { ContactProp } from "@/types";
import { ArrowUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import Contact from "./Contact";
import { Button } from "./ui/button";

const ContactList = () => {
  const [contactList, setContactList] = useState<ContactProp[]>([]);

  useEffect(() => {
    let list: ContactProp[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key?.startsWith("contact")) {
        const stored = localStorage.getItem(key);
        if (stored) {
          const contact: ContactProp = JSON.parse(stored);
          list.push(contact);
        }
      }
    }

    setContactList(list);
  }, []);

  return (
    <div className="w-full md:w-[70vw] md:px-4 space-y-8">
      <h4 className="mt-3 text-4xl font-bold text-orange-950">
        Your Contact List
      </h4>

      <div className="flex justify-end py-0 px-3">
        <Button
          variant={"secondary"}
          onClick={() =>
            setContactList(
              [...contactList].sort((a, b) => a.name.localeCompare(b.name))
            )
          }
        >
          <ArrowUpDown /> Sort
        </Button>
      </div>

      <div className="h-[74vh] md:pr-3 grid grid-cols-1 gap-3 md:grid-cols-3 md:overflow-auto">
        {contactList.length > 0 ? (
          contactList.map((contact) => (
            <div key={contact.id}>
              <Contact
                id={contact.id}
                pfp={contact.pfp}
                name={contact.name}
                phone={contact.phone}
                description={contact.description}
              />
            </div>
          ))
        ) : (
          // <div>conatct</div>
          <div className="md:col-span-3">No Contact yet....</div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
