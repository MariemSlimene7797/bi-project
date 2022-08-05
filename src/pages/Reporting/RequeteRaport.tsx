import React from 'react';
import { FetchState } from '../../models/types/FetchState';
import { useGetPosts } from '../../Services/HttpCommunFile';
/**fetches for the API */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReportingProps {}

const Reporting: React.FC<ReportingProps> = () => {
  const [posts, fetchState, getPosts] = useGetPosts();
  return (
    <div>
      <h1>React TypeScript API hooks</h1>
      {fetchState === FetchState.DEFAULT && (
        <>
          <p>Hello there, click the button below to get the list of posts from the API.</p>
          <button onClick={getPosts}>Get Posts</button>
        </>
      )}
      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && (
        <>
          <p>Oops! Something went wrong. Please try again.</p>
          <button onClick={getPosts}>Get Posts</button>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <p>Here s the list of posts:</p>
          <ul className="posts-list">
            {posts.map((post) => (
              <li key={post.id} className="post">
                <h3>
                  {post.id} - {post.title}
                </h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Reporting;
