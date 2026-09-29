"use client";
import PostList from "../components/post-list";
import AddPost from "@/components/add-post";

export default function Home() {
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchUserData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10");

  //     const data = await response.json();
  //     setData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchUserData()
  // }, [])

  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: () => fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10").then((res) => res.json())
  // })

  // if (isLoading) {
  //   return <h1>Loading....</h1>
  // }

  // if (error) {
  //   return <h1>Error:{error.message}</h1>
  // }

  return (
    <div>
      <h1>posts</h1>
      <PostList />
      <AddPost />
    </div>
  )

}
