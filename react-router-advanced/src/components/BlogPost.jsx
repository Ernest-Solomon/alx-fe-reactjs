import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock blog posts data
  const blogPosts = {
    '1': {
      id: 1,
      title: 'Getting Started with React Router',
      author: 'Jane Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Tutorial',
      content: `
        React Router is the standard routing library for React applications. It enables you to create single-page applications with navigation features, allowing users to navigate between different components or pages without refreshing the entire page.

        ## Why Use React Router?

        React Router provides several benefits:
        - **Declarative routing**: Define your routes as components
        - **Dynamic routing**: Routes are rendered as components
        - **Nested routing**: Create complex layouts with nested routes
        - **History management**: Built-in browser history support

        ## Basic Setup

        To get started with React Router, you'll need to install it:

        \`\`\`bash
        npm install react-router-dom
        \`\`\`

        Then wrap your app with a Router component and define your routes using the Routes and Route components.

        ## Key Concepts

        Understanding these core concepts will help you build more effective routing:

        1. **BrowserRouter**: Uses HTML5 history API
        2. **Routes**: Container for your route definitions  
        3. **Route**: Defines path-to-component mapping
        4. **Link**: Navigation component for internal links
        5. **useNavigate**: Hook for programmatic navigation

        This foundation will serve you well as you build more complex routing scenarios in your React applications.
      `,
      tags: ['React', 'React Router', 'JavaScript', 'Frontend']
    },
    '2': {
      id: 2,
      title: 'Advanced Routing Techniques',
      author: 'Mike Johnson',
      date: '2024-02-01',
      readTime: '8 min read',
      category: 'Advanced',
      content: `
        Once you're comfortable with basic routing, it's time to explore advanced techniques that will make your applications more robust and user-friendly.

        ## Nested Routes

        Nested routes allow you to create complex layouts where certain parts of the UI remain constant while others change. This is perfect for dashboard layouts, admin panels, or any application with a consistent navigation structure.

        ## Route Parameters

        Dynamic routes with parameters let you create flexible URLs that can handle variable data:

        \`\`\`jsx
        <Route path="/user/:id" element={<UserProfile />} />
        \`\`\`

        ## Query Parameters

        Use query parameters for optional data like filters, search terms, or pagination:

        \`\`\`jsx
        const [searchParams] = useSearchParams();
        const filter = searchParams.get('filter');
        \`\`\`

        ## Route Guards

        Implement authentication checks and conditional routing to protect sensitive areas of your application.

        ## Code Splitting

        Combine React Router with React.lazy() for automatic code splitting and better performance:

        \`\`\`jsx
        const LazyComponent = React.lazy(() => import('./LazyComponent'));
        \`\`\`

        These techniques will help you build more sophisticated and performant routing solutions.
      `,
      tags: ['React Router', 'Advanced', 'Performance', 'Architecture']
    },
    '3': {
      id: 3,
      title: 'Protected Routes Best Practices',
      author: 'Sarah Wilson',
      date: '2024-02-10',
      readTime: '6 min read',
      category: 'Security',
      content: `
        Securing your React applications with protected routes is crucial for maintaining user privacy and application security. Here are the best practices you should follow.

        ## Authentication vs Authorization

        Understanding the difference is key:
        - **Authentication**: Verifying who the user is
        - **Authorization**: Verifying what the user can access

        ## Implementation Strategies

        ### Higher-Order Components (HOC)
        Create reusable components that wrap your protected content:

        \`\`\`jsx
        const withAuth = (Component) => {
          return (props) => {
            const { isAuthenticated } = useAuth();
            return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />;
          };
        };
        \`\`\`

        ### Custom Hooks
        Encapsulate authentication logic in custom hooks for better reusability:

        \`\`\`jsx
        const useRequireAuth = () => {
          const { user, loading } = useAuth();
          const navigate = useNavigate();
          
          useEffect(() => {
            if (!loading && !user) {
              navigate('/login');
            }
          }, [user, loading, navigate]);
          
          return { user, loading };
        };
        \`\`\`

        ## Security Considerations

        1. **Never rely solely on client-side protection**
        2. **Validate permissions on the server**
        3. **Handle loading states properly**
        4. **Provide clear error messages**
        5. **Implement proper session management**

        ## Testing Protected Routes

        Ensure your protected routes work correctly by testing various scenarios:
        - Authenticated users
        - Unauthenticated users
        - Users with different permission levels
        - Loading states and error conditions

        Following these practices will help you build secure and user-friendly authentication flows.
      `,
      tags: ['Security', 'Authentication', 'Best Practices', 'React']
    }
  };

  useEffect(() => {
    // Simulate API call
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const postData = blogPosts[id];
        if (!postData) {
          throw new Error('Post not found');
        }
        
        setPost(postData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const getNextPost = () => {
    const currentId = parseInt(id);
    const nextId = currentId + 1;
    return blogPosts[nextId.toString()] ? nextId : null;
  };

  const getPrevPost = () => {
    const currentId = parseInt(id);
    const prevId = currentId - 1;
    return blogPosts[prevId.toString()] && prevId > 0 ? prevId : null;
  };

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="loading-spinner"></div>
        <p>Loading blog post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post-error">
        <h2>Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <div className="error-actions">
          <button onClick={handleGoBack} className="back-button">
            Go Back
          </button>
          <Link to="/" className="home-link">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const nextPost = getNextPost();
  const prevPost = getPrevPost();

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <button onClick={handleGoBack} className="back-button">
          ← Back
        </button>
        
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <time className="post-date">{post.date}</time>
          <span className="post-read-time">{post.
