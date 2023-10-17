import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[700px] mb-[70px] justify-center items-center'>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className='mb-6'>
            <p className='font-bold text-lg'>{post.title}</p>
            <p className='text-sm mt-2'>
              By <span className='italic'>{post.author}</span> on{' '}
              <span className='underline font-bold'>{post.category}</span>
            </p>
            <p className='text-sm mt-2'>Posted on {post.date}</p>
            <p className='text-md mt-4'>{post.content}</p>
            <div className='flex gap-3 mt-4'>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className='text-blue-700 underline font-bold text-xs mt-1'
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
