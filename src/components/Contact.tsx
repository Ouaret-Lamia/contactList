// To do: Dinamic content
const Contact = () => {
  return (
    <div className="bg-primary/2 border border-primary/15 rounded-2xl p-5 shadow-sm">
      <div className="flex justify-center pb-3 border-b border-sidebar-border">
        <img src="/pfp1.jpg" alt="pfp" className="w-[25%] rounded-full object-center shadow-sm" />
      </div>

      <div className="flex flex-col items-center pt-3">
        <h2 className="text-xl text-orange-950 font-bold">Ouaret Lamia</h2>
        <p className="px-5 opacity-40 text-xs text-orange-950">0560505005</p>
        <p className="px-5 opacity-50">Here is a little description to remember</p>
      </div>
    </div>
  );
};

export default Contact;
