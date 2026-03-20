import { NavItems } from "./NavItems";
import { useNavLogic } from "./useNavLogic";
import logo from "../../assets/logo.png";
export function DesktopNav() {
  const { currentPage, openId, toggle, goTo, scrollTo } = useNavLogic();

  return (
    <>
      {/* Left brand strip */}
      <div className="fixed left-0 top-0 bottom-0 w-fit px-2 z-40 flex items-center justify-center border-r border-stone-200 bg-white">
        <span className="[writing-mode:vertical-rl] rotate-180 text-sm tracking-[0.22em] uppercase text-stone-400 font-bold select-none font-jost">
          P.K. Sah & Associates
          {/* <img src={logo} alt="brand logo" className="-rotate-90 object-cover" /> */}
        </span>
      </div>

      {/* Right nav panel */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-55 bg-white border-l border-stone-200 z-40 overflow-y-auto flex flex-col pt-12 pb-8">
        <NavItems
          currentPage={currentPage}
          openId={openId}
          toggle={toggle}
          goTo={goTo}
          scrollTo={scrollTo}
        />
      </div>
    </>
  );
}
