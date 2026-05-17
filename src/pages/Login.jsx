import lg from "../assets/lg.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { api } from "../API/api";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import Loader from "../components/Loader";

export function Login() {
  const navigate = useNavigate();

  const [Loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
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
localStorage.removeItem("token");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/users/Login", formData);
      const data = response.data;

      console.log(data);

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", data.token);

        toast.success(data.message);

        setFormData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/to-do");
        }, 500);
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong");
      }

      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <ToastContainer />

      <div className="form-cont">
        <div className="w-full py-12">
          <div className="w-full px-6">
            <div className="flex justify-center">
              <img alt="Your Company" src={lg} className="h-10 w-auto" />
            </div>

            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
              Login into your account
            </h2>
          </div>

          <div className="mt-10 w-full px-6">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/10 px-4 py-3 text-white outline outline-1 outline-white/10 placeholder:text-gray-200 focus:outline-2 focus:outline-indigo-500"
                    value={formData.email}
                    onChange={handleChange}
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
                    placeholder="Enter your Password"
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white/10 px-4 py-3 text-white outline outline-1 outline-white/10 placeholder:text-gray-200 focus:outline-2 focus:outline-indigo-500"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-white"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                {Loading ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-3 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Login
                  </button>
                )}
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;