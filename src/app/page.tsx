import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to /city as the main page
  redirect("/city");
}
