import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import type { ContactProp } from "@/types";
import { useState } from "react";

export function AddDialog() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [pfp, setPfp] = useState<string | null>(null);

  const handlePfpChange = (file: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setPfp(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = () => {
    const data: ContactProp = {
      id: (Math.random() * 100).toString(),
      pfp: pfp,
      name: name,
      phone: phone,
      description: desc,
    };

    localStorage.setItem(`contact${data.id}`, JSON.stringify(data));
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="mt-3">Add Contact</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Contact</DialogTitle>
            <DialogDescription>
              Add a new contact to your list.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={() => handleSubmit()}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name-1" className="text-sm font-semibold">
                  Profile picture
                </label>
                <input
                  id="pfp-1"
                  name="pfp"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className={buttonVariants({ variant: "outline" })}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handlePfpChange(e.target.files[0]);
                    }
                  }}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="name-1" className="text-sm font-semibold">
                  Name <span className="text-red-600">*</span>
                </label>
                <Input
                  id="name-1"
                  name="name"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-semibold">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="description" className="text-sm font-semibold">
                  Description
                </label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Description"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Add contact</Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
