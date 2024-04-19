import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLink } from 'react-icons/bs';
import newsletterImage from '../images/newsletter.jpg';

export default function About() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='text-center md:text-left'>
            <h1 className='text-4xl font-bold text-teal-600 mb-4'>About TechCrush</h1>
            <p className='text-lg text-gray-700 mb-6'>
              Welcome to TechCrush! Our blog is dedicated to exploring the latest in technology, from groundbreaking innovations to emerging trends. We're passionate about sharing knowledge and insights to help you stay informed and inspired.
            </p>

            <p className='text-lg text-gray-700 mb-6'>
              Here at TechCrush, you'll find a wide range of articles covering topics such as web development, artificial intelligence, cybersecurity, and more. Whether you're a seasoned tech enthusiast or just starting your journey, there's something for everyone.
            </p>

            <p className='text-lg text-gray-700 mb-6'>
              Join our vibrant community of readers by leaving comments, sharing your thoughts, and connecting with fellow tech enthusiasts. Together, we can explore the ever-evolving world of technology and its impact on our lives.
            </p>

            <div className="flex justify-center md:justify-start space-x-6">
              <a href='#' className="text-gray-600 hover:text-teal-600"><BsFacebook /></a>
              <a href='#' className="text-gray-600 hover:text-teal-600"><BsInstagram /></a>
              <a href='#' className="text-gray-600 hover:text-teal-600"><BsTwitter /></a>
              <a href='https://github.com/Ritesh17rb' className="text-gray-600 hover:text-teal-600"><BsGithub /></a>
              {/* Updated link to your portfolio */}
              <a href='https://ritesh17rb.github.io/myPortfolio/' className="text-gray-600 hover:text-teal-600"><BsLink /></a>
            </div>

            {/* Styled button linking to your portfolio */}
            <a href='https://ritesh17rb.github.io/myPortfolio/' className="mt-6 inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300">
              Visit My Portfolio
            </a>
          </div>
          <div className='text-center md:text-right'>
            <img src={newsletterImage} alt='Tech Crush' className='rounded-lg shadow-lg' />
          </div>
        </div>
      </div>
    </div>
  );
}
