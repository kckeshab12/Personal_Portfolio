"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Stories data with images
const stories = [
  {
    id: 1,
    title: "IESO-2019 (13th International Earth Science Olympiad)",
    description:
      "In 2019, I had the honor of representing Nepal at the prestigious International Earth Science Olympiad (IESO) in South Korea. This event brought together some of the brightest young minds from around the globe to explore the wonders of our planet. I participated in advanced astronomical observation sessions, gaining hands-on experience with high-precision telescopes and learning from world-class scientists. We also toured the Gyeongnam Science Education Center, where I explored interactive exhibits, engaged in cultural exchange, and expanded my global scientific perspective.",
    images: [
      "/images/ieso-1.jpg",
      "/images/ieso-2.jpg",
      "/images/ieso-3.jpg",
      "/images/ieso-4.jpg",
      "/images/ieso-5.jpg",
      "/images/ieso-6.jpg",
      "/images/ieso-7.jpg",
    ],
  },
  {
    id: 2,
    title: "Science Fair 2976, Biratnagar, Nepal",
    description:
      "My journey of scientific exploration deepened when I participated in the Science Fair 2976 held in Biratnagar, Nepal. This platform allowed me to showcase innovative ideas, exchange knowledge with like-minded individuals, and learn from inspiring projects. The event encouraged creativity, problem-solving, and a deeper appreciation for science as a tool for societal progress.",
    images: ["/images/education-fair-1.jpg", "/images/education-fair-2.jpg"],
  },
  {
    id: 3,
    title: "STEM International Olympiads Felicitation Program 2019",
    description:
      "In recognition of my participation in IESO-2019, I was honored at the STEM International Olympiads Felicitation Program 2019, jointly organized by STEM Foundation and the Nepal Academy of Science and Technology (NAST). This event celebrated the achievements of young scientists who represented Nepal internationally, inspiring the next generation to pursue excellence in science and innovation.",
    images: [
      "/images/appreciation-1.jpg",
      "/images/appreciation-2.jpg",
      "/images/appreciation-3.jpg",
    ],
  },
  {
    id: 4,
    title: "Education Trip Across Nepal",
    description:
      "An unforgettable educational journey led by Mr. Surgeon Sir, covering districts from Kathmandu to Tulsipur, Rukum, Dangadi, and back. This trip provided an in-depth understanding of Nepal’s diverse educational and cultural landscapes while strengthening leadership and teamwork skills.",
    images: ["/images/trip-1.jpg", "/images/trip-2.jpg", "/images/trip-3.jpg"],
  },
  {
    id: 5,
    title: "Adventure Trip to Rasuwa & Pokhara, Nepal",
    description:
      "A memorable journey with our group of six adventurous friends, starting from Kathmandu and traveling through Rasuwa, the serene trails of Sano Gosaikunda, Mugling, and onward to Pokhara before returning to Kathmandu. Along the way, we faced the struggles of long treks and bumpy roads but were rewarded with breathtaking mountain views, peaceful lakes, and warm hospitality. The beauty of Rasuwa’s landscapes, the tranquility of Sano Gosaikunda, and the joy of exploring Pokhara together made this trip unforgettable, filled with laughter, challenges, and lifelong memories.",
    images: [
      "/images/rasuwa1.jpg",
      "/images/rasuwa2.jpg",
      "/images/rasuwa3.jpg",
      "/images/rasuwa4.jpg",
      "/images/rasuwa5.jpg",
      "/images/rasuwa6.jpg",
      "/images/rasuwa7.jpg",
      "/images/rasuwa8.jpg",
      "/images/rasuwa9.jpg",
      "/images/rasuwa11.jpg",
      "/images/rasuwa12.jpg",
      "/images/rasuwa13.jpg",
      "/images/rasuwa14.jpg",
      "/images/rasuwa15.jpg",
      "/images/rasuwa16.jpg",
      "/images/rasuwa17.jpg",
      "/images/rasuwa18.jpg",
      "/images/rasuwa19.jpg",
      "/images/video.mp4",
    ],
  },
  {
    id: 6,
    title: "Outing at Sukute Beach",
    description:
      "Our official outing to Sukute Beach was a refreshing one-day and one-night adventure along the banks of the Bhotekoshi River. Surrounded by the soothing sounds of flowing water and lush green hills, we enjoyed the natural beauty of the riverside camp, cozy bonfires, and thrilling river activities. The evening under the stars with music and laughter built unforgettable bonds among colleagues. The calm yet adventurous environment of Sukute Beach provided the perfect escape from routine and strengthened our team spirit.",
    images: [
      "/images/sukute1.jpg",
      "/images/sukute2.jpg",
      "/images/sukute3.jpg",
      "/images/sukute4.jpg",
      "/images/sukute5.jpg",
      "/images/sukute6.jpg",
      "/images/sukute7.jpg",
    ],
  },
];

export default function Stories() {
  const [currentIndexes, setCurrentIndexes] = useState(stories.map(() => 0));
  const [reactions, setReactions] = useState({});
  const videoRefs = useRef([]);

  // Fetch reactions from backend
  useEffect(() => {
    async function fetchReactions() {
      try {
        const res = await fetch("/api/reactions");
        const data = await res.json();
        const reactionMap = {};
        data.forEach((item) => {
          reactionMap[item.image_id] = { love: item.love_count, like: item.like_count };
        });
        setReactions(reactionMap);
      } catch (err) {
        console.error(err);
      }
    }
    fetchReactions();
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((current, i) => {
          const currentMedia = stories[i].images[current];
          if (currentMedia.endsWith(".mp4")) return current;
          return (current + 1) % stories[i].images.length;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = (storyIndex) => {
    setCurrentIndexes((prev) =>
      prev.map((current, i) =>
        i === storyIndex ? (current - 1 + stories[i].images.length) % stories[i].images.length : current
      )
    );
  };

  const handleNext = (storyIndex) => {
    setCurrentIndexes((prev) =>
      prev.map((current, i) =>
        i === storyIndex ? (current + 1) % stories[i].images.length : current
      )
    );
  };

  const handleVideoEnded = (storyIndex) => {
    setCurrentIndexes((prev) =>
      prev.map((current, i) =>
        i === storyIndex ? (current + 1) % stories[i].images.length : current
      )
    );
  };

  // Reaction click
  const handleReact = async (image_id, type) => {
    try {
      const res = await fetch("/api/reactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image_id, type }),
      });
      if (res.ok) {
        const updated = await res.json();
        setReactions((prev) => ({
          ...prev,
          [image_id]: { love: updated.love_count, like: updated.like_count },
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getReactions = (image_id) => reactions[image_id] || { love: 0, like: 0 };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">
          My Journey & Achievements
        </h2>

        <div className="space-y-12">
          {stories.map((story, storyIndex) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="md:flex">
                {/* Media Slider */}
                <div className="relative md:w-1/2 w-full h-96">
                  {story.images.map((media, mediaIndex) => {
                    const isCurrent = currentIndexes[storyIndex] === mediaIndex;
                    const isVideo = media.endsWith(".mp4");
                    const image_id = `${story.id}-${mediaIndex}`;
                    const { love, like } = getReactions(image_id);

                    return (
                      <div
                        key={image_id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                          isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                      >
                        {isVideo ? (
                          <video
                            ref={(el) => (videoRefs.current[storyIndex] = el)}
                            src={media}
                            className="w-full h-full object-cover"
                            autoPlay={isCurrent}
                            controls
                            onEnded={() => handleVideoEnded(storyIndex)}
                          />
                        ) : (
                          <img
                            src={media}
                            alt={story.title}
                            className="w-full h-full object-cover"
                          />
                        )}

                        {/* Reactions */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6 bg-white/80 px-4 py-2 rounded-full shadow">
                          <button
                            onClick={() => handleReact(image_id, "love")}
                            className="flex items-center gap-1 hover:scale-110 transition"
                          >
                            ❤️ {love}
                          </button>
                          <button
                            onClick={() => handleReact(image_id, "like")}
                            className="flex items-center gap-1 hover:scale-110 transition"
                          >
                            👍 {like}
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {/* Always visible Prev/Next buttons */}
                  <button
                    onClick={() => handlePrev(storyIndex)}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white z-20"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => handleNext(storyIndex)}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white z-20"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Text Content */}
                <div className="p-6 md:w-1/2">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-3">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
