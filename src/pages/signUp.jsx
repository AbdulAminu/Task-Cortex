import { useState } from "react";
import lg from "../assets/lg.png";
import { Link } from "react-router-dom";
import { api } from "../API/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import  Loader  from "../components/Loader";

export function SignUp() {
    const [Loading, setLoading]= useState(false)
    const [showPassword, setShowPassword]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
      setLoading(true)
    try {
      const response = await api.post("/users/sign-up", formData);
      const data = response.data;

      console.log(data);

      if (response.status === 201) {
        toast.success(data.message);

        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong");
      }

      console.error(err);
    }finally{
        setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
    
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="form-cont w-full max-w-md rounded-2xl shadow-2xl bg-black/80">
        <div className="w-full py-12">

          <div className="w-full px-6">
            <div className="flex justify-center">
              <img
                alt="Your Company"
                src={lg}
                className="h-12 w-auto"
              />
            </div>

            <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-white">
              Create your account
            </h2>
          </div>
          <div className="mt-10 w-full px-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100"
                >
                  Name
                </label>

                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="block w-full rounded-md bg-white/5 px-4 py-3 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100"
                >
                  Email address
                </label>

                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="block w-full rounded-md bg-white/5 px-4 py-3 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-100"
                >
                  Password
                </label>

                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="block w-full rounded-md bg-white/5 px-4 py-3 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1 z-10 right-2 cursor-pointer text-white" >
            {showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
              </div>
              <div>
                {Loading ? <Loader/>:(
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-3 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition"
                >
                  Sign Up
                </button>
                )}
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                to="/Login"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;