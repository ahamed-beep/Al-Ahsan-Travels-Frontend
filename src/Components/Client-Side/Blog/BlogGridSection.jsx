"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const formatDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

function BlogCard({ post }) {
  const [open, setOpen] = useState(true);

  const dateRow = (
    <div className="flex items-center gap-1.5 text-[13px] text-[#4A5565] font-inter">
      <img src="/Images/blog/calender.png" alt="Calendar" className="h-3.5 w-3.5 " />
      <span className="text-[#4A5565]">{formatDate(post.publishedAt || post.createdAt)}</span>
      <span className="text-[#4A5565]">&middot;</span>
      <span>{post.readTime}</span>
    </div>
  );

  return (
    <article className="flex flex-col overflow-hidden rounded-[14px] border-[1px] border-[#E5E7EB] bg-white shadow-sm">
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        width={1024}
        height={640}
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="flex grow flex-col p-5">
        <p className="text-[12px] font-inter font-bold uppercase tracking-wider text-[#1C398E]">
          {post.country}
        </p>
        <h3 className="mt-2 text-[22px] font-inter font-bold leading-snug text-[#101828]">
          {post.title}
        </h3>
        <p className="mt-2 text-[15px] font-inter leading-relaxed text-[#4A5565]">
          {post.excerpt}
        </p>

        {open ? (
          <>
            {/* Expanded: date -> body -> Show less */}
            <div className="mt-5">{dateRow}</div>
            <p className="mt-3 text-[15px] leading-relaxed text-[#4A5565] font-inter whitespace-pre-line">
              {post.body}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center gap-1.5 text-[14px] md:text-[15px] font-inter font-semibold text-[#1C398E] transition-colors hover:text-blue-900"
            >
              Show less
            </button>
          </>
        ) : (
          /* Collapsed: same as before */
          <div className="mt-4 pt-4">
            {dateRow}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-3 flex items-center gap-1.5 text-[14px] text-[14px] font-inter font-semibold text-[#1C398E] transition-colors hover:text-blue-700"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

// Splits posts into columns in left-to-right order: 1,2,3 / 4,5,6
function splitIntoColumns(items, count) {
  const cols = Array.from({ length: count }, () => []);
  items.forEach((item, i) => cols[i % count].push(item));
  return cols;
}

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-3 font-inter text-[14px]">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page <= 1}
        className="rounded-[10px] border border-[#E5E7EB] bg-white px-4 py-2 font-medium text-[#4A5565] transition-colors hover:bg-gray-50 disabled:opacity-40"
      >
        Previous
      </button>
      <span className="text-[#4A5565]">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page >= totalPages}
        className="rounded-[10px] bg-[#1C398E] px-4 py-2 font-medium text-white transition-colors hover:bg-blue-800 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}

export default function BlogGridSection({
  posts = [],
  loading = false,
  error = "",
  noResults = false,
  meta = { totalPages: 1 },
  page = 1,
  onPageChange = () => {},
}) {
  return (
    <div className="min-h-screen ">
      <div className="mx-auto  px-4 py-2 md:px-20">
        <h1 className="text-[36px] font-inter  font-semibold text-[#101828]">
          Discover your next destination
        </h1>
        <p className="mt-1 font-inter text-[18px] text-[#4A5565]">
          Places to inspire you, stories to help you explore.
        </p>

        {error && (
          <p className="mt-8 rounded-lg bg-white p-6 text-center text-sm text-red-500 shadow-sm">
            {error}
          </p>
        )}

        {noResults && (
          <p className="mt-8 rounded-lg bg-white p-6 text-center text-sm text-gray-500 shadow-sm">
            No articles found. Try a different category or search term.
          </p>
        )}

        {loading && posts.length === 0 && !error && (
          <p className="mt-8 rounded-lg bg-white p-6 text-center text-sm text-gray-500 shadow-sm">
            Loading articles...
          </p>
        )}

        <div className={loading && posts.length > 0 ? "opacity-50 transition-opacity" : "transition-opacity"}>
          {/* Desktop: 3 independent columns */}
          <div className="mt-8 hidden gap-6 lg:flex">
            {splitIntoColumns(posts, 3).map((col, i) => (
              <div key={i} className="flex flex-1 flex-col gap-6">
                {col.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ))}
          </div>

          {/* Tablet: 2 independent columns */}
          <div className="mt-8 hidden gap-6 sm:flex lg:hidden">
            {splitIntoColumns(posts, 2).map((col, i) => (
              <div key={i} className="flex flex-1 flex-col gap-6">
                {col.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: single column */}
          <div className="mt-8 flex flex-col gap-6 sm:hidden">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <Pagination page={page} totalPages={meta?.totalPages || 1} onPageChange={onPageChange} />
      </div>
    </div>
  );
}