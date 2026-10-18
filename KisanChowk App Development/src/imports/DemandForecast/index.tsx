import svgPaths from "./svg-0ll13xsphb";
import imgImage from "./6fe2341634e57a5359c3dcd940ae4cf2d91b01a2.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[24px] w-full">
        <p className="leading-[32px]">AI Demand Insights</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Actionable market forecasts to maximize your</p>
        <p className="leading-[24px]">yield value.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Background() {
  return (
    <div className="h-[50px] relative shrink-0 w-[42px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 42 50" width="42">
        <g id="Background">
          <rect fill="#268549" height="50" rx="21" width="42" />
          <path d={svgPaths.p33fea880} fill="#F6FFF3" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Market needs more</p>
        <p className="leading-[28px]">potatoes next week</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Due to unseasonal rain in</p>
        <p className="leading-[24px] mb-0">neighboring states, demand for</p>
        <p className="leading-[24px] mb-0">local potatoes is expected to</p>
        <p className="leading-[24px] mb-0">spike by 15%. Prepare harvest</p>
        <p className="leading-[24px]">accordingly.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading2 />
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Background />
        <Container3 />
      </div>
    </div>
  );
}

function SectionAiPlainLanguageSummaryCard() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Section - AI Plain Language Summary Card">
      <div aria-hidden className="absolute border border-[#def3e2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] w-full">
        <p className="leading-[28px]">Regional Demand Heatmap</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#fe7952] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">High</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#f9bd14] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Medium</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#7eda95] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Low</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] bottom-[25px] left-[25px] right-[25px] rounded-[8px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden className="absolute border border-[#d2e8d7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[13px] relative size-full">
        <Container5 />
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
          <div className="h-[256px] opacity-90 relative rounded-[12px] shrink-0 w-full" data-name="Image">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-full left-[-22.5%] max-w-none top-0 w-[145%]" src={imgImage} />
            </div>
          </div>
          <OverlayBorderShadowOverlayBlur />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#def3e2] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_8px_0px_rgba(45,138,78,0.08)]" />
    </div>
  );
}

function DemandHeatmapSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Demand Heatmap Section">
      <Heading3 />
      <BackgroundBorderShadow />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] w-full">
        <p className="leading-[28px]">Trending Products</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 11.6667 7" width="11.6667">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="#166534" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#dcfce7] content-stretch flex gap-[3.99px] items-center left-[91.19px] px-[8px] py-[4px] rounded-[6px] top-0" data-name="Background">
      <Container10 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#166534] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">+15%</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-0 text-[#0d1f15] text-[20px] top-[14px] whitespace-nowrap">
          <p className="leading-[28px]">Potatoes</p>
        </div>
        <Background1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] w-full">
          <p className="leading-[16px]">High demand expected</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] justify-self-stretch relative rounded-[20px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#def3e2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container9 />
        <Container11 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 11.6667 7" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p9f44800} fill="#991B1B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex gap-[3.99px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <Container13 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#991b1b] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">-5%</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Onions</p>
        </div>
        <Background2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] w-full">
          <p className="leading-[16px]">Oversupply detected</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] justify-self-stretch relative rounded-[20px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#def3e2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container12 />
        <Container14 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="h-[52px] relative shrink-0 w-[39px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="52" preserveAspectRatio="none" viewBox="0 0 39 52" width="39">
        <g id="Background">
          <rect fill="#946F00" height="52" rx="19.5" width="39" />
          <path d={svgPaths.p3dfc6f20} fill="#FFFBFF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#755700] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Recommended Action</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Increase Wheat supply for</p>
        <p className="leading-[24px] mb-0">November - expected 20% spike</p>
        <p className="leading-[24px]">in price.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background3 />
        <Container16 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white col-[1/span_2] drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] justify-self-stretch relative rounded-[20px] row-2 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#def3e2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__86px_130px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function SectionTrendingProductsBentoGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Trending Products Bento Grid">
      <Heading4 />
      <Container8 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] w-full">
        <p className="leading-[28px]">Rice Price Prediction (4 Wks)</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] h-[32px] leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center left-0 text-[#006a34] text-[24px] top-[15.5px]">
        <p className="leading-[32px]">{`₹2,450 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[91.97px] not-italic text-[#3f4940] text-[16px] top-[18px]">
        <p className="leading-[24px]">/ quintal</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
        <g id="Container">
          <path d={svgPaths.p1f49bc80} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Projected Peak</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Paragraph />
      <Container21 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-right tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Current: ₹2,300</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Container20 />
        <Container23 />
      </div>
    </div>
  );
}

function ChartSvg() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Chart SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="119" preserveAspectRatio="none" viewBox="0 0 315 119" width="315">
        <g id="Chart SVG">
          <g id="Vector">
            <path d="M98 29.75H217H98" fill="black" />
            <path d="M98 29.75H217H98" stroke="#BECABD" strokeDasharray="2.38 2.38" strokeOpacity="0.2" strokeWidth="0.595" />
          </g>
          <g id="Vector_2">
            <path d="M98 59.5H217H98" fill="black" />
            <path d="M98 59.5H217H98" stroke="#BECABD" strokeDasharray="2.38 2.38" strokeOpacity="0.2" strokeWidth="0.595" />
          </g>
          <g id="Vector_3">
            <path d="M98 89.25H217H98" fill="black" />
            <path d="M98 89.25H217H98" stroke="#BECABD" strokeDasharray="2.38 2.38" strokeOpacity="0.2" strokeWidth="0.595" />
          </g>
          <path d={svgPaths.p214c7980} fill="url(#paint0_linear_0_24)" id="Vector_4" opacity="0.3" />
          <path d={svgPaths.pc071e80} id="Vector_5" stroke="#006A34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.57" />
          <path d={svgPaths.p18081000} fill="#006A34" id="Vector_6" />
          <path d={svgPaths.p2ee5cd00} fill="#006A34" id="Vector_7" />
          <path d={svgPaths.p2b96a200} fill="#006A34" id="Vector_8" />
          <g id="Vector_9">
            <path d={svgPaths.p12797060} fill="white" />
            <path d={svgPaths.p12797060} stroke="#006A34" strokeWidth="2.38" />
          </g>
          <path d={svgPaths.p3825e880} fill="#006A34" id="Vector_10" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_24" x1="98" x2="98" y1="11.9" y2="119">
            <stop stopColor="#006A34" />
            <stop offset="1" stopColor="#006A34" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function YAxisLabels() {
  return (
    <div className="absolute bottom-px left-[-25.91px]" data-name="Y Axis Labels">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">2.3k</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Wk 1</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Wk 2</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Wk 3</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Wk 4</p>
      </div>
    </div>
  );
}

function XAxisLabels() {
  return (
    <div className="absolute bottom-[-23px] left-[9px] right-[-8px]" data-name="X Axis Labels">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container25 />
        <Container26 />
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function StylizedSimpleChartRepresentation() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Stylized Simple Chart representation">
      <div aria-hidden className="absolute border-[rgba(190,202,189,0.3)] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pb-[9px] pl-[9px] relative size-full">
          <ChartSvg />
          <YAxisLabels />
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] left-[-25.91px] not-italic text-[#3f4940] text-[10px] top-[7.5px] whitespace-nowrap">
            <p className="leading-[15px]">2.5k</p>
          </div>
          <XAxisLabels />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#def3e2] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[49px] pt-[17px] px-[17px] relative size-full">
        <Container19 />
        <StylizedSimpleChartRepresentation />
      </div>
    </div>
  );
}

function SectionPricePredictionChart() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Price Prediction Chart">
      <Heading5 />
      <BackgroundBorderShadow4 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[80px] px-[16px] relative size-full">
        <Container />
        <SectionAiPlainLanguageSummaryCard />
        <DemandHeatmapSection />
        <SectionTrendingProductsBentoGrid />
        <SectionPricePredictionChart />
      </div>
    </div>
  );
}

function Container30() {
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

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container30 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006a34] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">KisanDirect</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button />
      <Heading />
    </div>
  );
}

function Container31() {
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

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container31 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#e9ffed] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container29 />
      <Button1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[22px] relative shrink-0 w-[20.094px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 20.0939 22" width="20.0939">
        <g id="Margin">
          <path d={svgPaths.p209d4440} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Market</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Margin />
      <Container32 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[22px] mb-[-0.444px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 18 22" width="18">
        <g id="Margin">
          <path d={svgPaths.p1b2fa180} fill="#F6FFF3" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Insights</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex h-[44.6px] items-center justify-center relative shrink-0 w-[78.09px]">
      <div className="flex-none scale-x-90 scale-y-90">
        <div className="bg-[#268549] content-stretch flex flex-col items-center justify-center px-[16px] py-[4px] relative rounded-[9999px]" data-name="Link">
          <Margin1 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start justify-center pl-[4.33px] pr-[4.32px] py-[6.8px] relative shrink-0" data-name="Link:css-transform">
      <Link1 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 22 20" width="22">
        <g id="Margin">
          <path d={svgPaths.p146eb80} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Orders</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Margin2 />
      <Container34 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Margin">
          <path d={svgPaths.p85bff00} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Profile</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Link">
      <Margin3 />
      <Container35 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-[#def3e2] bottom-[-0.5px] content-stretch drop-shadow-[0px_-2px_4px_rgba(45,138,78,0.08)] flex gap-[24.7px] items-center left-0 px-[8px] py-[12px] rounded-tl-[12px] rounded-tr-[12px] w-[390px]" data-name="BottomNavBar">
      <Link />
      <LinkCssTransform />
      <Link2 />
      <Link3 />
    </div>
  );
}

export default function DemandForecast() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[128px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(233, 255, 237) 0%, rgb(233, 255, 237) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Demand Forecast">
      <MainContent />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}