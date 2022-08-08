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
      {fetchState === FetchState.DEFAULT && <button onClick={getPosts}>Get Posts</button>}
      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && <button onClick={getPosts}>Get Posts</button>}
      {fetchState === FetchState.SUCCESS && (
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
      )}
    </div>
  );
};

export default Reporting;
