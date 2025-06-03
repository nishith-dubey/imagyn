import { DownloadIcon, Eye, Wand } from "lucide-react";
import React from "react";

function CreateAiImages() {
  return (
    <section className="min-h-[80vh] flex flex-col py-10 md:py-20">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Create AI Images</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex md:flex-row flex-col mt-10 mx-auto gap-5 justify-center items-center sm:max-w-full max-w-[80%]">
        <img src="img1.jpg" alt="" className="w-[40%] trasnsition-all duration-300 rounded-3xl" />
        <div className="flex flex-col gap-5 items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Create AI Images</h1>
          <p className="text-gray-600 tracking-tighter lg:tracking-normal">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam consequuntur atque quas porro sint animi, dolore accusamus ratione maiores repellendus ea praesentium blanditiis est laboriosam eligendi illo laudantium odit?</p>
          <p className="text-gray-600 tracking-tighter lg:tracking-normal">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam consequuntur atque quas porro sint animi, dolore accusamus ratione maiores repellendus ea praesentium blanditiis est laboriosam eligendi illo laudantium odit?</p>
        </div>
      </div>
    </section>
  );
}

export default CreateAiImages;
