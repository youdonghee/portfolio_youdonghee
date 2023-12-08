import { Hero } from "../components/common";
import { IoLogoGithub } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { FaBlogger } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (animatedElementRef.current) {
      observer.observe(animatedElementRef.current);
    }

    return () => {
      if (animatedElementRef.current) {
        observer.unobserve(animatedElementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={animatedElementRef}
      className={`flex flex-row items-center justify-between gap-[38px] transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-[280px] h-[100px] md:w-[28%] md:h-[28%]">
        <img
          // src={process.env.PUBLIC_URL + "/img/profileImg.JPG"}
          src={process.env.PUBLIC_URL + "/logo192.png"}
          aria-hidden
          alt="profile image"
          className="w-full h-full m-auto rounded-full border-2 border-white object-cover"
        />
      </div>
      <div className="w-[100%] h-full box-border md:w-[70%] md:p-[10px] ">
        <Hero>
          유동희{" "}
          <span className="text-[16px] text-slate-400 font-normal">
            youdonghee
          </span>
        </Hero>
        <p className="text-slate-700 pt-[5px] md:text-[24px] md:pt-[10px] text-[16px]">
          블록체인 프론트엔드 개발자
        </p>
        <p className="flex flex-col text-[16px] items-left pt-[7px] md:pt-[5px] md:text-[14px]">
          <a
            href="mailto:0103donghee@naver.com"
            className="flex items-center gap-[5px] text-slate-600"
          >
            <TfiEmail />
            0103donghee@naver.com
          </a>
          <a
            href="https://github.com/youdonghee"
            className="flex items-center gap-[5px] text-slate-600"
            target={"_blank"}
          >
            <IoLogoGithub />
            youdonghee
          </a>
          <a
            href="https://youudhee.tistory.com/"
            className="flex items-center gap-[5px] text-slate-600"
            target={"_blank"}
          >
            <FaBlogger />
            youudhee.tistory
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
