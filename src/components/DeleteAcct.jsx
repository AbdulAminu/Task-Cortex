import { Trash } from "lucide-react";

export function DeleteAcct() {
  function handleDeleteAcct() {
    alert("Account deleted successfully");
  }

  return (
    <div className="dltt">
      <button className="ddlt" onClick={handleDeleteAcct}>
        <Trash size="1em" />
        Delete Account
      </button>
    </div>
  );
}

export default DeleteAcct;