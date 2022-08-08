import React, { createContext, useContext, useState } from 'react';
import { FetchState } from '../../models/types/FetchState';
import { useGetPosts } from '../../Services/HttpCommunFile';

interface IReportContext {
  getRequest: () => void;
}

export const ReportContext = createContext<IReportContext>({} as IReportContext);
const ReportContextProvider: React.FC = ({ children }) => {
  const getRequest = () => {
    const [posts, fetchState, getPosts] = useGetPosts();
    {
      fetchState === FetchState.DEFAULT && (
        <>
          <p>Hello there, click the button below to get the list of posts from the API.</p>
          <button onClick={getPosts}>Get Posts</button>;
        </>
      );
    }
    {
      fetchState === FetchState.LOADING && <p>Fetching posts...</p>;
    }
    {
      fetchState === FetchState.ERROR && <button onClick={getPosts}>Get Posts</button>;
    }
    {
      fetchState === FetchState.SUCCESS && (
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
      );
    }
  };
  return <ReportContext.Provider value={{ getRequest }}>{children}</ReportContext.Provider>;
};

export const useReportContext = (): IReportContext => {
  const context = useContext(ReportContext);
  if (context === undefined) {
    throw new Error('useReportContext must be used within a ReportContextProvider');
  }
  return context;
};
export default ReportContextProvider;
