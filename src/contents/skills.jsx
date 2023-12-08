import { Wrapper, Heading } from "../components/common";
import { DiJavascript, DiNodejs, DiGithubBadge } from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiReact,
} from "react-icons/si";

const Skills = () => {
  return (
    <Wrapper>
      <Heading>기술 스택</Heading>
      <ul className="flex flex-col divide-y divide-gray-400">
        <li className="flex flex-row gap-[32px] py-[32px">
          <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
            언어
          </h3>
          <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
            <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
              <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                <SiJavascript />
                <span className="md:w-[120px]">Javascript</span>
              </span>
              <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                {/* <li></li> */}
              </ul>
            </li>

            <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
              <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                <SiTypescript />
                <span className="md:w-[120px]">Typescript</span>
              </span>
              <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                {/* <li></li> */}
              </ul>
            </li>
          </ul>
        </li>

        <li className="flex flex-row gap-[32px] py-[32px]">
          <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
            프론트 앤드
          </h3>
          <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
            <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
              <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                <SiReact />
                <span className="md:w-[120px]">React</span>
              </span>
              <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                {/* <li></li> */}
              </ul>
            </li>

            <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
              <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                <SiNextdotjs />
                <span className="md:w-[120px]">NextJS</span>
              </span>
              <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                {/* <li></li> */}
              </ul>
            </li>
          </ul>
        </li>

        <li className="flex flex-row gap-[32px] py-[32px]">
          <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
            백앤드
          </h3>
          <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
            <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
              <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                <SiExpress />
                <span className="md:w-[120px]">Express</span>
              </span>
              <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                {/* <li></li> */}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Skills;
