import { ChevronLeft } from "lucide-react";
import Coment from "./Coment";
import { comments } from "./heroComents.config";
import { useEffect, useState } from "react";

export default function HeroComents() {
  const [startIndex, setStartIndex] = useState(0);
  const [commentPerView, setCommentPerView] = useState(getCommentPerView());

  function getCommentPerView() {
    return window.innerWidth < 768 ? 1 : 2;
  }

  useEffect(() => {
    const handleResize = () => {
      setCommentPerView(getCommentPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAnterior = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - commentPerView);
    }
  };

  const handleProximo = () => {
    if (startIndex + 2 < comments.length) {
      setStartIndex(startIndex + commentPerView);
    }
  };

  return (
    <section className="px-(--sdp) lg:px-(--dp) md:h-(--mdh) lg:h-60 flex flex-row items-center justify-between">
      <button
        onClick={handleAnterior}
        className="cursor-pointer"
        disabled={startIndex === 0}
      >
        <ChevronLeft size={40} className="hover:scale-110 duration-500" />
      </button>
      <div className="flex gap-7">
        {comments
          .slice(startIndex, startIndex + commentPerView)
          .map((comment, index) => {
            return (
              <Coment
                key={index}
                img={comment.img}
                title={comment.title}
                text={comment.text}
              />
            );
          })}
      </div>
      <button onClick={handleProximo} className="cursor-pointer">
        <ChevronLeft
          size={40}
          className="rotate-180 hover:scale-110 duration-500"
        />
      </button>
    </section>
  );
}
