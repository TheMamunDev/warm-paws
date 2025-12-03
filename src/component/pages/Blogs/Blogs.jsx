import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';
import usePageTitle from '../../Hooks/useTitle';

const Blogs = () => {
  usePageTitle('Blogs | WarmPaws');
  const blogPosts = useLoaderData();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-[#264653] mb-4">
            Pet Care Tips & Insights
          </h1>
          <p className="text-lg text-gray-600">
            Expert advice, helpful guides, and the latest news to keep your
            furry friends happy and healthy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts?.map(post => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-[#F4A261] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    <Tag size={12} />
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                </div>
                <h2 className="text-xl font-bold text-[#264653] mb-3 line-clamp-2 group-hover:text-[#F4A261] transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm mr-3"
                    />
                    <div>
                      <p className="text-sm font-bold text-[#264653]">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-500">Author</p>
                    </div>
                  </div>
                  <Link to={`/blogs/post/${post.id}`}>
                    <button className="text-[#F4A261] hover:text-[#e08c4b] font-semibold inline-flex items-center transition-colors">
                      Read More{' '}
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
