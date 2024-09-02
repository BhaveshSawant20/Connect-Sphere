import {  getMyPostsFeed } from "@/actions/post";
import HomeView from "@/sections/HomeView";
import { currentUser } from "@clerk/nextjs";
import { QueryClient } from "@tanstack/react-query";

export const metadata = () => {
  return {
    title: `Connect Sphere`,
    description: `Connect to people across the Globe`,
  };
};

const HomePage = async () => {
  // const queryClient = new QueryClient();
  // const user = await currentUser()
  // // get posts
  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["posts", "all"],
  //   queryFn: ({ pageParam = "" }) => getMyPostsFeed(pageParam),
  //   getNextPageParam: (lastPage) => {
  //     return lastPage?.metaData.lastCursor;
  //   },
  //   enabled: !!user,
  // });

  return <HomeView />;
};

export default HomePage;