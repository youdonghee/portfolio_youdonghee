import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Introduce = () => {
  const { animatedElementRef, isVisible } = useIntersectionObserver(0.7);

  return (
    <div
      ref={animatedElementRef}
      className={`w-full flex pt-[32px] transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col gap-[16px] w-full items-center">
        <RiDoubleQuotesL />
        <div className="text-center text-[16px] md:text-[24px]">
          <p>지속적인 자기 발전과 새로운 지식 습득 없이는 만족할 수 없는,</p>
          <p>끊임없이 성장하고자 하는 개발자 입니다</p>
        </div>
        <RiDoubleQuotesR />
      </div>
    </div>
  );
};

export default Introduce;
