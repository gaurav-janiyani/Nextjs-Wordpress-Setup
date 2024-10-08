'use client';
import React from "react";

export default function BlogListing({ posts }) {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {posts.slice(0, 7).reverse().map((item, index) => {
                        console.log("item", item);
                        return (
                            <div className="border border-black p-4 m-2 w-[48%]" key={index}>
                                {item.featuredImage?.node?.sourceUrl && <img src={item.featuredImage?.node?.sourceUrl} alt={item.title} className="w-full h-auto my-2" />}
                                <h1 className="text-xl font-bold">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                </h1>
                                <p dangerouslySetInnerHTML={{ __html: item.excerpt }} />
                            </div>
                        );
                    })}
                </div>
            </div>    
        </section>
    );
}
