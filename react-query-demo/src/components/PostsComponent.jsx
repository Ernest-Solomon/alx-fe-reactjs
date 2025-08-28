import { useQuery } from 'react-query';
import { useState } from 'react';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true);

  // Using useQuery hook to fetch data
  const {
    data: posts,
    isLoading,
    error,
    refetch,
    isFetching,
    dataUpdatedAt,
  } = useQuery(
    'posts', // Query key
    fetchPosts, // Query function
    {
      // Additional options
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false, // Don't refetch on window focus
      retry: 3, // Retry 3 times on failure
    }
  );

  // Handle refetch button click
  const handleRefetch = () => {
    refetch();
  };

  // Toggle posts visibility to demonstrate caching
  const togglePostsVisibility = () => {
    setShowPosts(!showPosts);
  };

  if (!showPosts) {
    return (
      <div className="posts-container">
        <div className="posts-header">
          <h2>Posts Component (Hidden)</h2>
          <p>Click "Show Posts" to see cached data load instantly!</p>
          <div className="button-group">
            <button onClick={togglePostsVisibility} className="toggle-button">
              Show Posts
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="posts-container">
        <div className="loading-state">
          <h2>Loading Posts...</h2>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="posts-container">
        <div className="error-state">
          <h2>Error Loading Posts</h2>
          <p>Error: {error.message}</p>
          <button onClick={handleRefetch} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h2>Posts from JSONPlaceholder API</h2>
        <p>
          Data last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
        </p>
        <div className="button-group">
          <button 
            onClick={handleRefetch} 
            disabled={isFetching}
            className="refetch-button"
          >
            {isFetching ? 'Refreshing...' : 'Refresh Data'}
          </button>
          <button onClick={togglePostsVisibility} className="toggle-button">
            Hide Posts (Test Caching)
          </button>
        </div>
        {isFetching && <div className="fetching-indicator">Updating data...</div>}
      </div>

      <div className="posts-grid">
        {posts?.slice(0, 10).map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
            <div className="post-meta">
              <span className="post-id">ID: {post.id}</span>
              <span className="post-user">User: {post.userId}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="posts-footer">
        <p>
          Showing {Math.min(10, posts?.length || 0)} of {posts?.length} posts
        </p>
        <p className="cache-info">
          💡 Try hiding and showing posts to see React Query caching in action!
        </p>
      </div>
    </div>
  );
};

export default PostsComponent;
