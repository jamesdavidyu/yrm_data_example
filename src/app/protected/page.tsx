import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Access denied</p>;
  }

  return <p>{session.user?.name}</p>;
}
