import { DownloadIcon, Eye, Wand } from "lucide-react";
import React from "react";

function HowItWorks() {
  return (
    <section className="min-h-[80vh] flex flex-col py-10 md:py-20">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">How It Works</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="grid grid-cols-1 mt-10 mx-auto gap-4">
        <div className="flex border md:px-10 md:py-4 px-4 py-2 bg-white items-center gap-6">
          <Eye className="p-2 bg-blue-200 border border-blue-300 rounded-full" size={50}/>
          <div>
            <h1>Describe your visiion</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex border md:px-10 md:py-4 px-4 py-2 bg-white items-center gap-6">
          <Wand className="p-2 bg-blue-200 border border-blue-300 rounded-full" size={50}/>
          <div>
            <h1>Describe your visiion</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex border md:px-10 md:py-4 px-4 py-2 bg-white items-center gap-6">
          <DownloadIcon className="p-2 bg-blue-200 border border-blue-300 rounded-full" size={50}/>
          <div>
            <h1>Describe your visiion</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
