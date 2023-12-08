import { Wrapper, Heading } from "../components/common";
import { FaExternalLinkAlt, FaFigma } from "react-icons/fa";
import {
  DiJavascript,
  DiNodejs,
  DiGithubBadge,
  DiBootstrap,
  DiNginx,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiAmazonec2,
  SiAmazons3,
  SiAxios,
  SiExpress,
  SiFigma,
  SiJsonwebtokens,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPm2,
  SiRedux,
  SiSequelize,
  SiSocketdotio,
  SiSolidity,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiTrello } from "react-icons/di";
import { DiReact } from "react-icons/di";
import useModal from "../hooks/useModal";
import Modal from "../components/modal";
import {
  FaAmazon,
  FaCreativeCommonsSamplingPlus,
  FaNodeJs,
} from "react-icons/fa6";

const Projects = () => {
  const [isShowingModal, toggleModal] = useModal();
  const [isShowingModal2, toggleModal2] = useModal();
  const [isShowingModal3, toggleModal3] = useModal();
  const [isShowingModal4, toggleModal4] = useModal();

  return (
    <Wrapper>
      <Heading>프로젝트</Heading>

      <ul className="flex flex-col w-full gap-[120px]">
        {/* 첫번째 프로젝트 */}
        <li className="flex flex-col gap-[32px] md:flex-row">
          <div className="w-full md:w-[420px] ">
            <img
              src={process.env.PUBLIC_URL + "/img/Dex.gif"}
              className="w-full object-cover"
              alt="DEX 프로젝트"
            />
            <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
              <li className="text-[16px]">팀플 프로젝트 (5명)</li>
              <li className="text-stone-500">2023. 11 ~ 2023. 12</li>
              <li>front-end</li>
              <li>
                <button
                  onClick={toggleModal}
                  className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                >
                  상세보기
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
              DEX (Decentralized Exchange)(협얍프로젝트){" "}
              <a href="https://www.bounswap.site/" target={"_blank"}>
                <FaExternalLinkAlt />
              </a>
            </h2>

            <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
              중앙 집중식 거래소와 달리, 사용자가 직접 피어 투 피어(P2P)
              방식으로 암호화폐를 거래할 수 있는 분산형 거래소 사이트 입니다
            </p>

            <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
            <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
              <DiReact />
              <SiTailwindcss />
              <DiJavascript />
              <SiTypescript />
              <SiAmazons3 />
              <SiSolidity />
              <SiFigma />
              <DiGithubBadge />
            </div>

            <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
            <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
              <li>
                바운스솔루션 API 을 활용한 SNS 로그인 및 해당 Wallet 연동 구현
              </li>
              <li>
                효율적인 디렉터리 구조 설계를 통해 컴포넌트 분리 및 리팩토링
                진행, DOM 조작 최소화 도모
              </li>
              <li>Figma 를 활용한 전체 UI 디자인 및 구성 설계</li>
              <li>
                Tailwind CSS 도입으로 팀의 스타일링 효율성 및 UX 최적화 증진
              </li>
              <li>
                Header (navigation menu) / Sidebar / Swap / Create pages (Pool
                create, Governance create) 페이지 구현
              </li>
              <li>AWS S3 를 이용한 웹사이트 배포</li>
            </ul>
          </div>
        </li>

        <li className="flex flex-col gap-[32px] md:flex-row">
          <div className="w-full md:w-[420px] ">
            <img
              src={process.env.PUBLIC_URL + "/img/IKE.gif"}
              className="w-full"
              alt="IKE 프로젝트"
            />
            <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
              <li className="text-[16px]">팀플 프로젝트 (4명)</li>
              <li className="text-stone-500">2023. 07 ~ 2023. 08</li>
              <li>front-end / back-end</li>
              <li>
                <button
                  className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                  onClick={toggleModal2}
                >
                  상세보기
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
              NFT 마켓 플레이스(협얍프로젝트){" "}
              <a href="https://naver.com">
                <FaExternalLinkAlt />
              </a>
            </h2>

            <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
              Nike , Mapple 과 같은 옷 커스텀 사이트를 참고하여 자신이 직접
              커스텀 하고 커스텀한 옷을 게시할 수 있는 사이트 입니다
            </p>

            <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
            <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
              <DiReact />
              <SiStyledcomponents />
              <DiBootstrap />
              <SiRedux />
              <SiAxios />
              <DiJavascript />
              <DiNodejs />
              <SiExpress />
              <SiSequelize />
              <SiJsonwebtokens />
              <SiMysql />
              <SiPm2 />
              <SiAmazonec2 />
              <DiGithubBadge />
            </div>

            <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
            <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
              <li>[front-end]</li>
              <li>React-Bootstrap 을 사용하여 게시판 UI 설계 및 구현</li>
              <li>
                게시판 목록, 글 작성 페이지, 게시글 상세 보기, 댓글 대댓글 기능
                개발
              </li>
              <li>[back-end]</li>
              <li>내게시판 관련 데이터베이스 구현</li>
            </ul>
          </div>
        </li>

        <li className="flex flex-col gap-[32px] md:flex-row">
          <div className="w-full md:w-[420px] ">
            <img
              src={process.env.PUBLIC_URL + "/img/project3.gif"}
              className="w-full object-cover"
              alt="그림 일심동체"
            />
            <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
              <li className="text-[16px]">팀플 프로젝트 (4명)</li>
              <li className="text-stone-500">2023. 06 ~ 2023. 07</li>
              <li>front-end</li>
              <li>
                <button
                  onClick={toggleModal3}
                  className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                >
                  상세보기
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
              그림 일심동체{" "}
              <a href="https://www.bounswap.site/" target={"_blank"}>
                <FaExternalLinkAlt />
              </a>
            </h2>

            <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
              Gartic Phone 을 모티브로 제작한 게임페이지 입니다. 참여자들이 서로
              문제를 생성하고, 랜덤으로 할당된 제시어를 그림으로 표현한 후. 다른
              참여자가 그 그림을 보고 제시어를 추측하는 게임사이트 입니다
            </p>

            <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
            <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
              <SiExpress />
              <DiNodejs />
              <DiJavascript />
              <SiPm2 />
              <SiSocketdotio />
              <DiNginx />
              <SiMysql />
              <SiSequelize />
              <SiAxios />
              <FaFigma />
              <SiAmazonec2 />
            </div>

            <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
            <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
              <li>UI 디자인 및 설계</li>
              <li>로그인 기능 구현</li>
              <li>
                메인페이지, 로그인, 회원가입, 마이페이지, 어드민페이지 UI 및
                기능 구현
              </li>
              <li>AWS EC2 를 이용한 웹사이트 배포</li>
            </ul>
          </div>
        </li>
        <li className="flex flex-col gap-[32px] md:flex-row">
          <div className="w-full md:w-[420px] ">
            <img
              src={process.env.PUBLIC_URL + "/img/modo.gif"}
              className="w-full object-cover"
              alt="주식게임 Mo & Do"
            />
            <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
              <li className="text-[16px]">팀플 프로젝트 (4명)</li>
              <li className="text-stone-500">2023. 03 ~ 2023. 04</li>
              <li>게임 메인 기능</li>
              <li>
                <button
                  onClick={toggleModal4}
                  className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                >
                  상세보기
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
              주식게임 Mo & Do{" "}
              <a href="https://www.bounswap.site/" target={"_blank"}>
                <FaExternalLinkAlt />
              </a>
            </h2>

            <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
              라운드별로 주가가 변동되는 5개의 증권을 매매하는 트레이딩
              게임입니다. 플레이어는 매수 및 매도 전략을 통해 가장 많은 자산을
              확보, 승리를 목표로 하는 경제 전략 게임입니다
            </p>

            <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
            <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
              <DiHtml5 />
              <DiCss3 />
              <DiJavascript />
            </div>

            <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
            <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
              <li>게임 메인 및 기능 구현</li>
              <li>게시판 기능 구현</li>
            </ul>
          </div>
        </li>
      </ul>

      <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
        test
      </Modal>

      <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
        test2222
      </Modal>
      <Modal show={isShowingModal3} onCloseButtonClick={toggleModal2}>
        test3
      </Modal>
      <Modal show={isShowingModal4} onCloseButtonClick={toggleModal2}>
        test4
      </Modal>
    </Wrapper>
  );
};

export default Projects;
