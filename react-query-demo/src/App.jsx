import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PostsComponent from './components/PostsComponent';
import './App.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data will be considered fresh for 5 minutes
      staleTime: 5 * 60 * 1000,
      // Keep data in cache for 10 minutes
      cacheTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="app-header">
          <h1>React Query Demo</h1>
          <p>Advanced Data Handling with React Query</p>
        </header>
        
        <main className="main-content">
          <PostsComponent />
        </main>
      </div>
      
      {/* React Query DevTools - helpful for development */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
