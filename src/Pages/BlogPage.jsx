import React, { useState } from "react";
import MainHeading from "../components/MainHeading";
import blogs11 from "../assets/img/blog/blog-s-1-1.jpg";
import BlogComponents from "../components/BlogSection/BlogComponents";
const blogsPerPage = 3;
const BlogPage = () => {
  const blogImg = [
    {
      id: 1,
      img: blogs11,
      title: "Understanding React Hooks",
      desc: "A deep dive into React hooks and how they can be used effectively.",
      date: "21 June, 2024",
      comments: 5,
    },
    {
      id: 2,
      img: blogs11,
      title: "JavaScript ES6 Features",
      desc: "Explore the most useful features of ES6 that make JavaScript development easier.",
      date: "18 June, 2024",
      comments: 8,
    },
    {
      id: 3,
      img: blogs11,
      title: "CSS Grid vs Flexbox",
      desc: "Which one should you use for your layout? Let's compare CSS Grid and Flexbox.",
      date: "15 June, 2024",
      comments: 3,
    },
    {
      id: 4,
      img: blogs11,
      title: "Performance Optimization in React",
      desc: "Techniques and best practices to make your React applications faster.",
      date: "10 June, 2024",
      comments: 6,
    },
    {
      id: 5,
      img: blogs11,
      title: "Building a Full-Stack App with MERN",
      desc: "Learn how to build a full-stack web application using MongoDB, Express, React, and Node.js.",
      date: "5 June, 2024",
      comments: 10,
    },
  ];

  return (
    <div>
      <MainHeading
        title="BLOG"
        subtitle="BLOG"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
      />
      <BlogComponents />
    </div>
  );
};

export default BlogPage;
