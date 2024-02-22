import { useSearchParams } from "react-router-dom";

function UserProfilePage() {
  const [searchParams] = useSearchParams();

  const uid = searchParams.get("userId");

  return <div>User profile page for user {uid}</div>;
}

export default UserProfilePage;
