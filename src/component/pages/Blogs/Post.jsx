import React from 'react';
import {
  Calendar,
  ArrowLeft,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { Link, useLoaderData } from 'react-router';

const Post = () => {
  const post = useLoaderData();
  // const { id } = useParams();
  // const post = blogPosts.find(post => post.id === Number(id));

  return (
    <div className="bg-white max-w-11/12 mx-auto min-h-screen pb-20">
      <div className="bg-gray-50 border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
        <div className="">
          <Link to="/blogs">
            {' '}
            <button className="inline-flex items-center text-gray-600 hover:text-[#264653] font-medium transition-colors">
              <ArrowLeft size={20} className="mr-2" /> Back to all articles{' '}
            </button>
          </Link>
        </div>
      </div>
      <article className=" px-4 sm:px-6 lg:px-8 pt-12">
        <header className="mb-10 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
            <span className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full">
              <Tag size={14} />
              {post.category}
            </span>
            <span className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-2" />
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#264653] leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-center md:justify-start pb-8 border-b border-gray-100">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-14 h-14 rounded-full border-2 border-[#F4A261] p-0.5 mr-4"
            />
            <div>
              <p className="text-lg font-bold text-[#264653]">{post.author}</p>
              <p className="text-sm text-gray-500 max-w-md">{post.authorBio}</p>
            </div>
          </div>
        </header>
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl aspect-video">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg  text-gray-700 space-y-8 leading-relaxed">
          {post.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} className="text-lg">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'heading') {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-[#264653] mt-8 mb-4"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={index} className="list-disc pl-6 space-y-3 my-6">
                  {block.items.map((item, i) => (
                    <li key={i} className="pl-2">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
          <h3 className="text-lg font-bold text-[#264653] mb-4 sm:mb-0 flex items-center">
            <Share2 size={20} className="mr-2 text-[#F4A261]" /> Share this
            article
          </h3>
          <div className="flex gap-4">
            <button className="p-3 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-full transition-colors">
              <Facebook size={20} />
            </button>
            <button className="p-3 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-400 rounded-full transition-colors">
              <Twitter size={20} />
            </button>
            <button className="p-3 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-700 rounded-full transition-colors">
              <Linkedin size={20} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Post;
