import { LogOut } from "lucide-react";
import { api } from "../API/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function LogOutBtn() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const response = await api.get("/users/logout");

      toast.success(response.data.message);
setTimeout(()=>{
  navigate("/login");
}, 800)
      
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  }

  return (
    <div className="lg">
        <ToastContainer/>
      <button className="lgout" onClick={handleLogout}>
        Logout <LogOut size="1em" />
      </button>
    </div>
  );
}
export default LogOutBtn;