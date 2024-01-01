"use client";

import { useState } from "react";

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="font-bold">Total Likes: </p> {likes}
      <button
        className="group text-primary font-semibold text-md border-b text-blue-500 hover:bg-blue-500 hover:text-blue-50 focus:outline-none focus:ring focus:ring-blue-300 backdrop-blur-2xl w-auto rounded-md border border-blue-500 px-4 py-1"
        onClick={async () => {
          const updatedLikes = likes + 1;
          setLikes(updatedLikes);
        }}
      >
        Like
      </button>
    </div>
  );
}
