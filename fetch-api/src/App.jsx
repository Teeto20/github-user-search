import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/Postscomponent";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>My Blog</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
