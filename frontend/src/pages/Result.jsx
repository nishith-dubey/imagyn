import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Result() {
  const [image, setImage] = useState("img2.jpg");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const { backendUrl, token, setCredits, credits } = useContext(AppContext);
  const navigate = useNavigate()
  // let timerId
  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await generateImage(e.target.prompt.value);
    // setIsLoading(false)
  };

  const generateImage = async (prompt) => {
    try {
      console.log(prompt);
      const res = await axios.post(
        `${backendUrl}/api/image/generate-image`,
        { prompt },
        { headers: { token } }
      );
      const { data } = res;
      if (data.status) {
        console.log(data);
        setPrompt("");
        setIsLoading(false);
        setImage(data.image);
        setIsImageLoaded(true);
        setCredits(data.credits);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.data.message)
      toast.error(error.response.data.message);
      if(error.response.data.message === "Out of credits!"){
        navigate('/pricing')
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="relative flex flex-col max-w-[340px] justify-center items-center">
        <img src={image} alt="" className=" rounded" />
        <span
          className={`absolute bottom-0 left-0 h-1 bg-green-500 
        ${
          isLoading ? "w-full transition-all duration-[10s] ease-in-out" : "w-0"
        }`}
        ></span>
        <span
          className={`${
            isLoading ? "absolute" : "hidden"
          } top-[100%] text-gray-600 left-0 h-1 w-full`}
        >
          Loading ........
        </span>
      </div>
      {isImageLoaded ? (
        <div className="flex mt-14 mx-auto gap-6">
          <button
            onClick={() => setIsImageLoaded(false)}
            className="sm:py-4 sm:px-6 py-2 px-4 bg-white border-black border rounded-full transition-all duration-300 ease-in-out"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="sm:py-4 sm:px-6 py-2 px-4 bg-black text-white rounded-full transition-all duration-300 ease-in-out"
          >
            Download
          </a>
        </div>
      ) : (
        <div className="mt-16 mx-auto sm:w-[80%] w-[90%] max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-100"
          >
            <textarea
              name="prompt"
              onChange={handleChange}
              value={prompt}
              required
              placeholder="Describe what you want to generate..."
              className="w-full py-4 px-6 pr-20 rounded-xl outline-none text-gray-800 placeholder-gray-400 resize-none min-h-[60px]"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  // Handle submit/generate action here
                  console.log("Generate triggered!");
                }
              }}
            />
            <button
              type="submit"
              className={`absolute right-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-in-out ${
                isLoading && "cursor-not-allowed disabled"
              }`}
              disabled={isLoading}
            >
              Generate
            </button>
          </form>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Example: "A futuristic cityscape at sunset, cyberpunk style"
          </p>
        </div>
      )}
    </div>
  );
}

export default Result;
