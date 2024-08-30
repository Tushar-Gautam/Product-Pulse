import { redirect } from "next/navigation";

function CatchAll() {
  redirect("/");
}
export default CatchAll;
