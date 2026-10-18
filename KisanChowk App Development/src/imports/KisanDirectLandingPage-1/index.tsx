import svgPaths from "./svg-xzo1cuaix1";
import imgHeroSection from "./6d0f6d45a329d0df77bf63c2688239ea46429955.png";
import imgAb6AXuBg2W10Hx6COcWGqPDveegb0G0Nk0D0LnnJomaVkeqz5IMkCyJhAPoFiCe9AhUpAxzgF7ZTLicyFd3FBKp1CfXQtnxKOtFBd7TBuKtDs0Bmk1B3UxAcgtr81BOGxuoEbbkbiWgbKug9BdUSel9ESkQ7B4Lf7OhObwIMhDrsZ66ApVYtccLU9HTocGPguVKoIsJo80ObZcbA4TqLjSmk5QNxcm5NLi9Z3TOZsblSsf1Hp from "./ca5d30252b2a5922a9517f3b12632022956420ec.png";
import imgAb6AXuDq8LvyhJcRGi5P1KAxl01Msba5Aj6Kk2ITvnFaJh9JmX6Gn4MY0XpDfecLJujQ4MEZgaIpScvloQ6XpX35DmGbhJpeDmGYvWrz1Dz7M21GrSXUdrKwYRnkAqw3MHdVYqIxzTkUoTy7BjEzIyHgsgosCgDB298ZEEdVy6Ydk451OAj1E2VnSkjH5CBdJinqoHeWqU0W4BhY2IVn71ZiAFwsu7Wh4XzYufeAgGeL from "./f637b5e240e18680d376c49cc4fcd4dbd5dd99bc.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-0.96px] w-full">
        <p className="leading-[60px] mb-0">From Farm to</p>
        <p className="leading-[60px] mb-0">Market,</p>
        <p className="leading-[60px]">Directly.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] w-full">
        <p className="leading-[28px] mb-0">Connect farmers directly with consumers</p>
        <p className="leading-[28px] mb-0">and bulk buyers, get better prices, and</p>
        <p className="leading-[28px] mb-0">deliver fresh produce efficiently with AI-</p>
        <p className="leading-[28px]">powered logistics.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#006a34] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[40px] py-[12px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[20px]">Start Selling</p>
          </div>
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[2px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#a73918] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[42px] py-[14px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fe7952] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[20px]">Buy Directly</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Container">
      <Heading />
      <Container1 />
      <Margin />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-size-[512px_279px] bg-top-left h-[751px] relative rounded-bl-[40px] rounded-br-[40px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" style={{ backgroundImage: `url("${imgHeroSection}")` }} data-name="Hero Section">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-center pb-[40px] px-[16px] relative size-full">
          <div className="absolute bg-gradient-to-t from-[rgba(13,31,21,0.9)] inset-0 to-[rgba(13,31,21,0)] via-1/2 via-[rgba(13,31,21,0.4)]" data-name="Gradient" />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006a34] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">How it Works</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">A seamless journey from seed to table.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[25px] relative shrink-0 w-[22.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 22.5 25" width="22.5">
        <g id="Container">
          <path d={svgPaths.p1eef4b20} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#def3e2] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[22.11px] pr-[22.12px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Farmer</p>
        <p className="leading-[28px]">Lists</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center px-[8.22px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px] mb-0">Easy uploading of</p>
        <p className="leading-[16px] mb-0">crop details and</p>
        <p className="leading-[16px]">yields.</p>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] justify-self-stretch relative rounded-[20px] row-1 self-start shrink-0" data-name="Step 1">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative size-full">
          <Background />
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[25px] relative shrink-0 w-[24.977px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 24.9769 25" width="24.9769">
        <g id="Container">
          <path d={svgPaths.paaa4980} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#def3e2] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[24.53px] pr-[24.55px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Buyer</p>
        <p className="leading-[28px]">Orders</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px] mb-0">Direct purchasing by</p>
        <p className="leading-[16px] mb-0">consumers and bulk</p>
        <p className="leading-[16px]">buyers.</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] justify-self-stretch relative rounded-[20px] row-1 self-start shrink-0" data-name="Step 2">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative size-full">
          <Background1 />
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22.5" preserveAspectRatio="none" viewBox="0 0 22.5 22.5" width="22.5">
        <g id="Container">
          <path d={svgPaths.p14afbe20} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#def3e2] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[7.05px] pr-[7.06px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">AI</p>
        <p className="leading-[28px]">Optimizes</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[3.88px] pr-[3.89px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px] mb-0">Smart routing and</p>
        <p className="leading-[16px]">demand prediction.</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] justify-self-stretch relative rounded-[20px] row-2 self-start shrink-0" data-name="Step 3">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center pb-[40px] pt-[24px] px-[24px] relative size-full">
          <Background2 />
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 27.5 20" width="27.5">
        <g id="Container">
          <path d={svgPaths.pc00c480} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#def3e2] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center px-[17.41px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Fresh</p>
        <p className="leading-[28px]">Delivery</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center px-[1.78px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px] mb-0">Efficient transport</p>
        <p className="leading-[16px] mb-0">ensuring farm-fresh</p>
        <p className="leading-[16px]">quality.</p>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] justify-self-stretch relative rounded-[20px] row-2 self-start shrink-0" data-name="Step 4">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative size-full">
          <Background3 />
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__240px_240px] relative shrink-0 w-full" data-name="Container">
      <Step />
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}

function SectionFeaturesShowcaseHowItWorks() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section - Features Showcase: How it Works">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[16px] relative size-full">
        <Container4 />
        <Container6 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[25.8px] relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="25.8" preserveAspectRatio="none" viewBox="0 0 278 25.8" width="278">
        <g id="Container">
          <path d={svgPaths.p345427e0} fill="#F6FFF3" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f6fff3] text-[24px] w-full">
        <p className="leading-[32px]">For Farmers</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container21 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Guaranteed Fair Prices</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container22 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">AI Demand Forecasting</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="List:margin">
      <List />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin2 />
      <Heading2 />
      <ListMargin />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Ab6AXuBg2W10Hx6COcWGqPDveegb0G0Nk0D0LnnJomaVkeqz5IMkCyJhAPoFiCe9AhUpAxzgF7ZTLicyFd3FBKp1CfXQtnxKOtFBd7TBuKtDs0Bmk1B3UxAcgtr81BOGxuoEbbkbiWgbKug9BdUSel9ESkQ7B4Lf7OhObwIMhDrsZ66ApVYtccLU9HTocGPguVKoIsJo80ObZcbA4TqLjSmk5QNxcm5NLi9Z3TOZsblSsf1Hp() {
  return (
    <div className="h-[192px] relative rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="AB6AXuBG2w10Hx6cOcWGqPDveegb0g0nk0D0LNNJomaVkeqz5IMkCYJhAPoFICe9ah__UpAxzgF7zTLicy-FD3fBKp1CfX_QtnxKOtFBd7TBuKtDs0BMK1B3UXAcgtr81bOGxuoEBBKBIWgbKug9BdU_sel9ESkQ7B_4LF7ohObwIMh_drsZ66apVYtcc-lU9hTOC-gPguVKoIs_JO80ObZcbA4TQLjSMK5Q_Nxcm5NLi9Z3tOZsblSSF1HP">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-full left-[-11.82%] max-w-none top-0 w-[123.64%]" src={imgAb6AXuBg2W10Hx6COcWGqPDveegb0G0Nk0D0LnnJomaVkeqz5IMkCyJhAPoFiCe9AhUpAxzgF7ZTLicyFd3FBKp1CfXQtnxKOtFBd7TBuKtDs0Bmk1B3UxAcgtr81BOGxuoEbbkbiWgbKug9BdUSel9ESkQ7B4Lf7OhObwIMhDrsZ66ApVYtccLU9HTocGPguVKoIsJo80ObZcbA4TqLjSmk5QNxcm5NLi9Z3TOZsblSsf1Hp} />
      </div>
    </div>
  );
}

function ForFarmers() {
  return (
    <div className="bg-[#268549] relative rounded-[24px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="For Farmers">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
          <div className="absolute bg-[rgba(0,106,52,0.2)] blur-[20px] right-[-48px] rounded-[9999px] size-[192px] top-[-48px]" data-name="Overlay+Blur" />
          <Margin1 />
          <Ab6AXuBg2W10Hx6COcWGqPDveegb0G0Nk0D0LnnJomaVkeqz5IMkCyJhAPoFiCe9AhUpAxzgF7ZTLicyFd3FBKp1CfXQtnxKOtFBd7TBuKtDs0Bmk1B3UxAcgtr81BOGxuoEbbkbiWgbKug9BdUSel9ESkQ7B4Lf7OhObwIMhDrsZ66ApVYtccLU9HTocGPguVKoIsJo80ObZcbA4TqLjSmk5QNxcm5NLi9Z3TOZsblSsf1Hp />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.5" preserveAspectRatio="none" viewBox="0 0 278 28.5" width="278">
        <g id="Container">
          <path d={svgPaths.pbe0f218} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container24 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006a34] text-[24px] w-full">
        <p className="leading-[32px]">For Consumers</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container25 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">100% Farm Fresh Produce</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container26 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Transparent Pricing</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item2 />
      <Item3 />
    </div>
  );
}

function ListMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="List:margin">
      <List1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin4 />
      <Heading3 />
      <ListMargin1 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Ab6AXuDq8LvyhJcRGi5P1KAxl01Msba5Aj6Kk2ITvnFaJh9JmX6Gn4MY0XpDfecLJujQ4MEZgaIpScvloQ6XpX35DmGbhJpeDmGYvWrz1Dz7M21GrSXUdrKwYRnkAqw3MHdVYqIxzTkUoTy7BjEzIyHgsgosCgDB298ZEEdVy6Ydk451OAj1E2VnSkjH5CBdJinqoHeWqU0W4BhY2IVn71ZiAFwsu7Wh4XzYufeAgGeL() {
  return (
    <div className="h-[192px] relative rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="AB6AXuDq8LvyhJc_rGi5_P1kAXL0_1MSBA5aj6kk2iTVN_FaJH9jmX6GN4mY0xpDfecLJujQ4mEZgaIpScvloQ6xpX_35DmGBHJpeDm-gYVWrz1Dz7M21gr-sXUdrKwYRnkAqw3MHdVYqIxz-tkUOTy7BjEzIyHGSGOSCg_dB298zEEdVy6--ydk451oAJ1e-2VNSkjH5-cBDJinqoHEWqU0W4_Bh_y2iVN71ZiA-Fwsu7Wh4XzYufeAGGeL">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-full left-[-13.37%] max-w-none top-0 w-[126.74%]" src={imgAb6AXuDq8LvyhJcRGi5P1KAxl01Msba5Aj6Kk2ITvnFaJh9JmX6Gn4MY0XpDfecLJujQ4MEZgaIpScvloQ6XpX35DmGbhJpeDmGYvWrz1Dz7M21GrSXUdrKwYRnkAqw3MHdVYqIxzTkUoTy7BjEzIyHgsgosCgDB298ZEEdVy6Ydk451OAj1E2VnSkjH5CBdJinqoHeWqU0W4BhY2IVn71ZiAFwsu7Wh4XzYufeAgGeL} />
      </div>
    </div>
  );
}

function ForConsumers() {
  return (
    <div className="bg-[#d2e8d7] relative rounded-[24px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="For Consumers">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0.5)] blur-[20px] right-[-48px] rounded-[9999px] size-[192px] top-[-48px]" data-name="Overlay+Blur" />
          <Margin3 />
          <Ab6AXuDq8LvyhJcRGi5P1KAxl01Msba5Aj6Kk2ITvnFaJh9JmX6Gn4MY0XpDfecLJujQ4MEZgaIpScvloQ6XpX35DmGbhJpeDmGYvWrz1Dz7M21GrSXUdrKwYRnkAqw3MHdVYqIxzTkUoTy7BjEzIyHgsgosCgDB298ZEEdVy6Ydk451OAj1E2VnSkjH5CBdJinqoHeWqU0W4BhY2IVn71ZiAFwsu7Wh4XzYufeAgGeL />
        </div>
      </div>
    </div>
  );
}

function SectionFeaturesShowcaseBenefitCards() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section - Features Showcase: Benefit Cards">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative size-full">
        <ForFarmers />
        <ForConsumers />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center leading-[0] relative size-full text-center whitespace-nowrap">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#006a34] text-[48px] tracking-[-0.96px]">
          <p className="leading-[60px]">10,000+</p>
        </div>
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#3f4940] text-[20px]">
          <p className="leading-[28px]">Farmers Connected</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center leading-[0] relative size-full text-center whitespace-nowrap">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#fe7952] text-[48px] tracking-[-0.96px]">
          <p className="leading-[60px]">30%</p>
        </div>
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#3f4940] text-[20px]">
          <p className="leading-[28px]">More Earnings</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center leading-[0] relative size-full text-center whitespace-nowrap">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#006a34] text-[48px] tracking-[-0.96px]">
          <p className="leading-[60px]">24/7</p>
        </div>
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#3f4940] text-[20px]">
          <p className="leading-[28px]">Real-time AI Logistics</p>
        </div>
      </div>
    </div>
  );
}

function ImpactSection() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[32px] shrink-0 w-full" data-name="Impact Section">
      <div aria-hidden className="absolute border border-[#def3e2] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center p-[41px] relative size-full">
          <Paragraph />
          <div className="bg-[rgba(190,202,189,0.5)] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
          <Paragraph1 />
          <div className="bg-[rgba(190,202,189,0.5)] h-px relative shrink-0 w-full" data-name="Horizontal Divider" />
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function ImpactSectionMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Impact Section:margin">
      <div className="content-stretch flex flex-col items-start pb-[64px] px-[16px] relative size-full">
        <ImpactSection />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1280px] overflow-clip relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionFeaturesShowcaseHowItWorks />
      <SectionFeaturesShowcaseBenefitCards />
      <ImpactSectionMargin />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 18 12" width="18">
        <g id="Container">
          <path d={svgPaths.p2bce57c0} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button - Menu">
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006a34] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">KisanDirect</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNotifications() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button - Notifications">
      <Container29 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#e9ffed] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <ButtonMenu />
      <Container28 />
      <ButtonNotifications />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.094px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 20.0939 18" width="20.0939">
        <g id="Container">
          <path d={svgPaths.p209d4440} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Market</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Container30 />
      <Margin5 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Insights</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Container31 />
      <Margin6 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p146eb80} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Orders</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Container32 />
      <Margin7 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Profile</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Container33 />
      <Margin8 />
    </div>
  );
}

function BottomNavBarMobileOnly() {
  return (
    <div className="absolute bg-[#def3e2] bottom-[0.3px] content-stretch drop-shadow-[0px_-2px_4px_rgba(45,138,78,0.08)] flex gap-[28.7px] items-center left-0 px-[8px] py-[12px] rounded-tl-[12px] rounded-tr-[12px] w-[390px]" data-name="BottomNavBar (Mobile Only)">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

export default function KisanDirectLandingPage() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[96px] pt-[64px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(233, 255, 237) 0%, rgb(233, 255, 237) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="KisanDirect - Landing Page">
      <Main />
      <HeaderTopAppBar />
      <BottomNavBarMobileOnly />
    </div>
  );
}