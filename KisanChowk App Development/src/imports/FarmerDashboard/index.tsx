import svgPaths from "./svg-ynmbfrhbxd";
import imgUserProfileAvatar from "./6637a51b83b02d406b4e673f7703dbec21db3036.png";
import imgPotatoes from "./78611ca00296211ee70b7e91232593e0b6331a09.png";
import imgWheat from "./6d11e338d110f340833416605caaeb29104c9bb4.png";

function UserProfileAvatar() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User Profile Avatar">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-39.51%] max-w-none top-0 w-[179.02%]" src={imgUserProfileAvatar} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <UserProfileAvatar />
      </div>
      <div aria-hidden className="absolute border-2 border-[#268549] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Ramesh Kumar</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Punjab Farmer</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Border />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[11.328px] relative shrink-0 w-[11.33px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.3282" preserveAspectRatio="none" viewBox="0 0 11.3303 11.3282" width="11.3303">
        <g id="Container">
          <path d={svgPaths.p1e0bf800} fill="#F6FFF3" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#268549] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background+Shadow">
      <Container3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Farmer Mode</p>
      </div>
    </div>
  );
}

function SectionProfileHeaderArea() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section - Profile Header Area">
      <Container />
      <BackgroundShadow />
    </div>
  );
}

function SectionProfileHeaderAreaMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Section - Profile Header Area:margin">
      <SectionProfileHeaderArea />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p24700000} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Orders</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[24px] w-full">
        <p className="leading-[32px]">12</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start pb-[4.5px] relative size-full">
        <Container8 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Active</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-white bottom-[4px] content-stretch drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] flex flex-col items-start justify-between left-[16px] min-w-[140px] p-[17px] rounded-[20px] top-[4px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(190,202,189,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Margin />
      <Container7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[15px] relative shrink-0 w-[15.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15.8333 15" width="15.8333">
        <g id="Container">
          <path d={svgPaths.p3ffe1100} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Earnings</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[24px] w-full">
        <p className="leading-[32px]">₹45.2k</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start pb-[4.5px] relative size-full">
        <Container13 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">This Month</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute bg-white bottom-[4px] content-stretch drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] flex flex-col items-start justify-between left-[168px] min-w-[160px] p-[17px] rounded-[20px] top-[4px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(190,202,189,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Margin1 />
      <Container12 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p368b7f00} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Inventory</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[24px] w-full">
        <p className="leading-[32px]">85%</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#def3e2] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#006a34] inset-[0_15.01%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container18 />
        <Background />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="absolute bg-white bottom-[4px] content-stretch drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] flex flex-col items-start justify-between left-[340px] min-w-[140px] p-[17px] rounded-[20px] top-[4px] w-[140px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(190,202,189,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Margin2 />
      <Container17 />
    </div>
  );
}

function SectionKeyStatsHorizontalScroll() {
  return (
    <div className="absolute h-[126px] left-[-16px] overflow-auto right-[-16px] top-0" data-name="Section - Key Stats Horizontal Scroll">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function SectionKeyStatsHorizontalScrollMargin() {
  return (
    <div className="h-[126px] relative shrink-0 w-full" data-name="Section - Key Stats Horizontal Scroll:margin">
      <SectionKeyStatsHorizontalScroll />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonQuickAction() {
  return (
    <div className="bg-[#006a34] content-stretch drop-shadow-[0px_8px_10px_rgba(0,0,0,0.1)] flex gap-[7.99px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button - Quick Action">
      <Container19 />
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Add New Product</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p28996480} fill="#FE7952" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">AI Price Recommendation</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container21 />
        <Heading1 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="h-[34px] relative shrink-0 w-[32.667px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="34" preserveAspectRatio="none" viewBox="0 0 32.6667 34" width="32.6667">
        <g id="Background">
          <rect fill="#DEF3E2" height="34" rx="16.3333" width="32.6667" />
          <path d={svgPaths.p1d795e80} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p2b41a9d0} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] text-center tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">APPLY PRICE</p>
      </div>
      <Container23 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[16px] whitespace-nowrap">
        <p className="mb-0">
          <span className="leading-[24px]">{`Recommend `}</span>
          <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[#006a34]">₹22/kg</span>
          <span className="leading-[24px]">{` for`}</span>
        </p>
        <p className="leading-[24px] mb-0">Tomatoes based on rising market</p>
        <p className="leading-[24px]">trends in your region.</p>
      </div>
      <Button />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start p-[12px] relative size-full">
        <Background2 />
        <Container22 />
      </div>
    </div>
  );
}

function SectionAiRecommendationCard() {
  return (
    <div className="bg-[#e3f9e8] drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Section - AI Recommendation Card">
      <div aria-hidden className="absolute border border-[#9af7af] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative size-full">
        <Container20 />
        <Background1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] w-full">
        <p className="leading-[28px]">Active Product Listings</p>
      </div>
    </div>
  );
}

function Potatoes() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Potatoes">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgPotatoes} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#d8eedd] relative rounded-[8px] shrink-0 size-[80px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Potatoes />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[8px] relative shrink-0" data-name="Button">
      <Container27 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[25px]">Potatoes</p>
      </div>
      <Button1 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#def3e2] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">500 kg</p>
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#268549] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">₹18/kg</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Background5 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#10b981] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Listed 2 days ago</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative size-full">
        <Container26 />
        <Margin3 />
        <Margin4 />
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Product Card 1">
      <div aria-hidden className="absolute border border-[rgba(190,202,189,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex gap-[12px] items-start p-[17px] relative size-full">
        <Background3 />
        <Container25 />
      </div>
    </div>
  );
}

function Wheat() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Wheat">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgWheat} />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#d8eedd] relative rounded-[8px] shrink-0 size-[80px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Wheat />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[8px] relative shrink-0" data-name="Button">
      <Container32 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[25px]">Wheat</p>
      </div>
      <Button2 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#def3e2] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">2 Tons</p>
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#268549] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">₹24/kg</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Background7 />
      <Background8 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#10b981] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Listed 5 days ago</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container34 />
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative size-full">
        <Container31 />
        <Margin5 />
        <Margin6 />
      </div>
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Product Card 2">
      <div aria-hidden className="absolute border border-[rgba(190,202,189,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex gap-[12px] items-start p-[17px] relative size-full">
        <Background6 />
        <Container30 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <ProductCard />
      <ProductCard1 />
    </div>
  );
}

function SectionActiveProductListings() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Active Product Listings">
      <Heading2 />
      <Container24 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] w-full">
          <p className="leading-[28px]">Demand Forecast</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] w-full">
          <p className="leading-[16px]">Predicted high demand for Grains next week.</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Mon</p>
      </div>
    </div>
  );
}

function SimpleBarChart() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-[39.42px]" data-name="Simple Bar Chart">
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Tue</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-[39.44px]" data-name="Container">
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Wed</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-[39.42px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Thu</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-[39.44px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Fri</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-[39.42px]" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Sat</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-[39.44px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Sun</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-[39.42px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[108px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-end justify-center pt-[12px] relative size-full">
        <SimpleBarChart />
        <Container38 />
        <Container40 />
        <Container42 />
        <Container44 />
        <Container46 />
        <Container48 />
      </div>
    </div>
  );
}

function SectionDemandForecast() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Section - Demand Forecast">
      <div aria-hidden className="absolute border border-[rgba(190,202,189,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative size-full">
        <Heading3 />
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function SectionDemandForecastMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64px] relative shrink-0 w-full" data-name="Section - Demand Forecast:margin">
      <SectionDemandForecast />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[64px] px-[16px] relative size-full">
        <SectionProfileHeaderAreaMargin />
        <SectionKeyStatsHorizontalScrollMargin />
        <ButtonQuickAction />
        <SectionAiRecommendationCard />
        <SectionActiveProductListings />
        <SectionDemandForecastMargin />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 18 12" width="18">
        <g id="Container">
          <path d={svgPaths.p2bce57c0} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006a34] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">KisanDirect</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container52 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#e9ffed] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Button3 />
      <Container51 />
      <Button4 />
    </div>
  );
}

function Container53() {
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

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Market</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container54 />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Button">
      <Container53 />
      <Margin7 />
    </div>
  );
}

function Container55() {
  return (
    <div className="mb-[-0.444px] relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p1b2fa180} fill="#F6FFF3" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Insights</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container56 />
    </div>
  );
}

function Button6() {
  return (
    <div className="flex h-[43.2px] items-center justify-center relative shrink-0 w-[57.6px]">
      <div className="flex-none scale-x-90 scale-y-90">
        <div className="bg-[#268549] content-stretch flex flex-col h-[48px] items-center justify-center pt-[4px] px-[16px] relative rounded-[9999px] w-[64px]" data-name="Button">
          <Container55 />
          <Margin8 />
        </div>
      </div>
    </div>
  );
}

function ButtonCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[3.2px] py-[2.4px] relative shrink-0" data-name="Button:css-transform">
      <Button6 />
    </div>
  );
}

function Container57() {
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

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Orders</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container58 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Button">
      <Container57 />
      <Margin9 />
    </div>
  );
}

function Container59() {
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

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Profile</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container60 />
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative shrink-0 w-[64px]" data-name="Button">
      <Container59 />
      <Margin10 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-[#def3e2] bottom-[-0.5px] content-stretch flex gap-[29.5px] items-center left-0 px-[8px] py-[12px] rounded-tl-[12px] rounded-tr-[12px] w-[390px]" data-name="BottomNavBar">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[390px]" data-name="BottomNavBar:shadow" />
      <Button5 />
      <ButtonCssTransform />
      <Button7 />
      <Button8 />
    </div>
  );
}

export default function FarmerDashboard() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[100px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(233, 255, 237) 0%, rgb(233, 255, 237) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Farmer Dashboard">
      <Main />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}