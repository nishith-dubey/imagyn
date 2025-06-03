import { Cross, Lock, Mail, UserCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState("Login");
  const { showLoginDialog, setShowLoginDialog, backendUrl, setToken, setUser, credits, setCredits } =
    useContext(AppContext);
  // whenever login page is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showLoginDialog]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(backendUrl);
    try {
      if (state === "Login") {
        const res = await axios.post(`${backendUrl}/api/user/login`, {
          email: formData.email,
          password: formData.password,
        });

        console.log(res);

        if (res.data.status) {
          const { user, token } = res.data;
          localStorage.setItem("token", token);
          setToken(token);
          setUser(user);
          setShowLoginDialog(false);

          toast(`${res.data.message}`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          
          setCredits(credits)
        } else {
          toast.error("user is not able to log in!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
      }

      else {
        const res = await axios.post(`${backendUrl}/api/user/register`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        console.log(res);

        if (res.data.status) {
          const { user, token } = res.data;
          localStorage.setItem("token", token);
          setToken(token);
          setUser(user);
          setShowLoginDialog(false);

          toast(`${res.data.message}`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        } else {
          toast.error("user is not able to log in!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
      }
    } catch (error) {
      console.log("some error", error.message);
      return;
    }
  };

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/80 flex justify-center items-center">
      <div className="w-96 p-6 bg-white rounded-2xl shadow-lg">
        {/* Close Button (optional) */}
        <div className="text-right mb-4">
          <button
            onClick={() => setShowLoginDialog(false)}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            <Cross className="rotate-45 hover:fill-red-400 duration-200 transition-all ease-in-out" />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800">
          {state}
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          {state === "Login"
            ? "Welcome back! Please sign in to continue"
            : "Create a new account"}
        </p>

        <form onSubmit={handleSubmit}>
          {state === "Register" && (
            <div className="mb-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <span className="text-gray-400 mr-2">
                  <UserCircle />
                </span>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  required
                  name="name"
                  type="name"
                  placeholder="Enter your name here"
                  className="bg-transparent outline-none w-full text-gray-700"
                />
              </div>
            </div>
          )}

          <div className="mb-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <span className="text-gray-400 mr-2">
                <Mail />
              </span>
              <input
                onChange={handleChange}
                value={formData.email}
                required
                name="email"
                type="email"
                placeholder="Email id"
                className="bg-transparent outline-none w-full text-gray-700"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <span className="text-gray-400 mr-2">
                <Lock />
              </span>
              <input
                onChange={handleChange}
                value={formData.password}
                required
                name="password"
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full text-gray-700"
              />
            </div>
          </div>

          <div className="text-right text-sm mb-4">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium transition-colors cursor-pointer"
          >
            {state === "Login" ? "Login" : "Register"}
          </button>
        </form>
        {state === "Login" ? (
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() =>
                setState((state) => {
                  console.log("first");
                  return "Register";
                })
              }
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <span
              onClick={() =>
                setState((state) => {
                  console.log("1");
                  return "Login";
                })
              }
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
