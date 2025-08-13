'use client';
import Link from 'next/link';
import { fetchData } from '@/lib/contentful';
import { useEffect, useState } from 'react';


export default function Usluge() {
  const [usluge, setUsluge] = useState<any[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  
    useEffect(() => {
    const getPost = async () => {
      const post = await fetchData();
      setUsluge(post);
    }

    getPost();
  }, []);


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-beige-800 text-3xl md:text-5xl flex justify-center mb-12">NAŠE USLUGE</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {usluge.map((post) => (
          <div
            key={post.sys.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            {post.fields.coverImage && (
              <img
                src={`https:${post.fields.coverImage.fields.file.url}`}
                alt={post.fields.title}
                width={400}
                height={300}
                className="rounded-t-lg object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="px-1 text-xl font-semibold mb-4">
                {post.fields.title}
              </h2>
              <Link
                href={`/usluge/${post.fields.slug}`}
                className="text-beige-800 font-medium hover:underline"
              >
                <span className='bg-beige-200 px-3 py-1 rounded-3xl'>Saznajte više →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

