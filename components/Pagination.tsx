"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";

export function PaginationDemo() {
  const blogs = [
    {
      id: 1,
      img: "/images/blog1.jpg",
      title: "Mobile App",
      date: "Jan 24,2024",
      des: "Investment strategies for building wealth in any market",
    },
    {
      id: 2,
      img: "/images/blog2.jpg",
      title: "Business",
      date: "Jan 24,2024",
      des: " strategies for archieving balance and security in Life",
    },
    {
      id: 3,
      img: "/images/blog3.jpg",
      title: "Design",
      date: "Jan 24,2024",
      des: "Practical tips for growing your savings account",
    },
    {
      id: 4,
      img: "/images/blog4.jpg",
      title: "Mobile App",
      date: "Jan 24,2024",
      des: "How to build and Maintain a healthy credit score ",
    },
    {
      id: 5,
      img: "/images/blog5.jpg",
      title: "Design",
      date: "Jan 24,2024",
      des: "Understanding the basics and building blocks",
    },
    {
      id: 6,
      img: "/images/blog6.jpg",
      title: "Business",
      date: "Jan 24,2024",
      des: "Building and maintain your financial reputation",
    },
    {
      id: 7,
      img: "/images/blog7.jpg",
      title: "Mobile App",
      date: "Jan 24,2024",
      des: "Essential steps for a healthy credit score",
    },
    {
      id: 8,
      img: "/images/blog8.jpg",
      title: "Business",
      date: "Jan 24,2024",
      des: "Building a healthy credit score from scratch",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = blogs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the start and end index of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <Pagination>
      <PaginationContent className="flex flex-col gap-8 lg:py-20 py-8">
        <PaginationItem>
          <section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-10 place-content-center">
            {currentBlogs.map((blog) => (
              <Link
                key={blog.id}
                href="#"
                className="flex flex-col gap-4 lg:px-8 px-4 justify-center"
              >
                <Image
                  width={1080}
                  height={1080}
                  className="w-96 rounded-3xl"
                  src={blog.img}
                  alt=""
                />
                <div className="flex items-start lg:gap-48 justify-between px-2">
                  <h3 className="bg-slate-200 py-0.5 text-sm px-4 rounded-3xl">
                    {blog.title}
                  </h3>
                  <p>{blog.date}</p>
                </div>
                <h2 className="font-semibold text-xl lg:w-96 w-auto">
                  {blog.des}
                </h2>
              </Link>
            ))}
          </section>
        </PaginationItem>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious
              href="#"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
          )}
          {[...Array(totalPages)].map((_, index) => (
            <PaginationLink
              key={index}
              href="#"
              isActive={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          ))}
          {currentPage < totalPages && (
            <PaginationNext
              href="#"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
