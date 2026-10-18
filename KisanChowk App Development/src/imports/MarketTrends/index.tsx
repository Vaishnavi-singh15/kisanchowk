import svgPaths from "./svg-570xcyc1ux";
import imgImage from "./10c4c011fe7a7f5fc9d9854ed99ce9ab5c2f001d.png";
import imgBackgroundBorder from "./69886a5d90c47987d0a6ef6e69405532cdcd21f8.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006a34] text-[24px] w-full">
        <p className="leading-[32px]">{`Market Trends & Insights`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Real-time commodity pricing and demand</p>
        <p className="leading-[24px]">forecasting.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6f] text-[16px] w-full">
          <p className="leading-[normal]">Search specific crops (e.g., Tomatoes)</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[49px] pr-[17px] py-[14px] relative size-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#becabd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(45,138,78,0.08)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-1/4 content-stretch flex flex-col items-start left-[16px] top-1/4" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p8a35e00} fill="#6F7A6F" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Search Bar">
      <Input />
      <Container3 />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header Section">
      <Container />
      <SearchBar />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[24.59px] relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Price Analysis (Last 30</p>
        <p className="leading-[28px]">Days)</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[7px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 10.5 7" width="10.5">
        <g id="Container">
          <path d={svgPaths.p3592ed80} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Filter</p>
      </div>
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p26408280} fill="#268549" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#268549] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">+4% vs 7d avg</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[6.84px] pt-[4px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="absolute bg-[#def3e2] bottom-[8px] content-stretch flex flex-col items-start left-[8px] min-w-[140px] pl-[16px] pr-[12px] py-[12px] rounded-[8px] top-0" data-name="Background+VerticalBorder">
      <div aria-hidden className="absolute border-[#006a34] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Tomatoes</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">₹32/kg</p>
      </div>
      <Container6 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[1.333px] relative shrink-0 w-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.33333" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p5c74060} fill="#6F7A6F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">0% vs 7d avg</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[14.97px] pt-[4px] relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="absolute bg-[#def3e2] bottom-[8px] content-stretch flex flex-col items-start left-[164px] min-w-[140px] pl-[16px] pr-[12px] py-[12px] rounded-[8px] top-0" data-name="Background+VerticalBorder">
      <div aria-hidden className="absolute border-[#f9bd14] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Wheat</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">₹24/kg</p>
      </div>
      <Container9 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p197ced00} fill="#BA1A1A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">-2% vs 7d avg</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[10.14px] pt-[4px] relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder2() {
  return (
    <div className="absolute bg-[#def3e2] bottom-[8px] content-stretch flex flex-col items-start left-[320px] min-w-[140px] pl-[16px] pr-[12px] py-[12px] rounded-[8px] top-0" data-name="Background+VerticalBorder">
      <div aria-hidden className="absolute border-[#ba1a1a] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Onions</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">₹45/kg</p>
      </div>
      <Container12 />
    </div>
  );
}

function QuickStatsRow() {
  return (
    <div className="h-[96px] overflow-auto relative shrink-0 w-[326px]" data-name="Quick Stats Row">
      <BackgroundVerticalBorder />
      <BackgroundVerticalBorder1 />
      <BackgroundVerticalBorder2 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[242px] relative shrink-0 w-[310px]" data-name="image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
      </div>
    </div>
  );
}

function ChartCanvas() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#d2e8d7] from-[1.6%] h-[250px] items-start pt-[8px] relative shrink-0 to-[1.6%] to-[rgba(210,232,215,0)] w-full" data-name="Chart Canvas">
      <Image />
    </div>
  );
}

function PriceAnalysisChartBentoGridSpan() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Price Analysis Chart (Bento Grid span 8)">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
          <Container4 />
          <QuickStatsRow />
          <ChartCanvas />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20.05px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.05" preserveAspectRatio="none" viewBox="0 0 20 20.05" width="20">
        <g id="Container">
          <path d={svgPaths.p3f50100} fill="#FE7952" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <Container15 />
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Supply Alerts</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 22 19" width="22">
          <path d={svgPaths.p7555480} fill="#BA1A1A" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[2px] relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#93000a] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Supply Shortage in Karnataka</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(147,0,10,0.8)] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Expect 15% price rise for Onions in the</p>
        <p className="leading-[16px]">next 48 hours due to unseasonal rain.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0" data-name="Container">
      <Heading3 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Margin />
        <Container19 />
      </div>
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-[#ffdad6] relative rounded-[12px] shrink-0 w-full" data-name="Alert 1">
      <div aria-hidden className="absolute border border-[rgba(186,26,26,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Container">
      <div className="h-[17.2px] relative shrink-0 w-[22px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="17.2" preserveAspectRatio="none" viewBox="0 0 22 17.2" width="22">
          <path d={svgPaths.p6597400} fill="#006A34" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[2px] relative size-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Harvest Peak in Punjab</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Wheat prices stabilizing. Market influx</p>
        <p className="leading-[16px]">expected this weekend.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0" data-name="Container">
      <Heading4 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Margin1 />
        <Container23 />
      </div>
    </div>
  );
}

function Alert1() {
  return (
    <div className="bg-[#d8eedd] relative rounded-[12px] shrink-0 w-full" data-name="Alert 2">
      <div aria-hidden className="absolute border border-[rgba(190,202,189,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Container">
      <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 20 12" width="20">
          <path d={svgPaths.p33125000} fill="#755700" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[2px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">High Demand Alert: Delhi</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Tomato demand up 20%. Consider</p>
        <p className="leading-[16px]">rerouting shipments if possible.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0" data-name="Container">
      <Heading5 />
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Margin2 />
        <Container27 />
      </div>
    </div>
  );
}

function Alert2() {
  return (
    <div className="bg-[#d8eedd] relative rounded-[12px] shrink-0 w-full" data-name="Alert 3">
      <div aria-hidden className="absolute border border-[rgba(190,202,189,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="max-h-[350px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start max-h-[inherit] pr-[8px] relative size-full">
          <Alert />
          <Alert1 />
          <Alert2 />
        </div>
      </div>
    </div>
  );
}

function SupplyAlertsBentoGridSpan() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Supply Alerts (Bento Grid span 4)">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Heading2Margin />
        <Container16 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p1f25e00} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <Container29 />
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Regional Demand</p>
        <p className="leading-[28px]">Heatmap</p>
      </div>
    </div>
  );
}

function Heading2Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[16px] right-[24px] top-[24px]" data-name="Heading 2:margin">
      <Heading6 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-px relative size-full">
          <div className="bg-[#ba1a1a] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">High Demand</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-px relative size-full">
          <div className="bg-[#755700] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Moderate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-px relative size-full">
          <div className="bg-[#006a34] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Stable</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pt-[16px] right-[24px] top-[396px]" data-name="Margin">
      <Container30 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">High</p>
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Shadow">
      <div className="absolute inset-[0_-15%_-28%_-15%]">
        <svg className="block size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 26 32" width="26">
          <g filter="url(#filter0_dd_0_36)" id="Shadow">
            <path d={svgPaths.p12f72080} fill="#BA1A1A" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_dd_0_36" width="26" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_36" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect1_dropShadow_0_36" mode="normal" result="effect2_dropShadow_0_36" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_0_36" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Shadow />
    </div>
  );
}

function OverlayPins() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[calc(25.17%-0.5px)_calc(52.81%+0.06px)_calc(54.83%+0.1px)_calc(33.44%-0.33px)] items-center" data-name="Overlay Pins">
      <Background />
      <Margin4 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#006a34] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Stable</p>
      </div>
    </div>
  );
}

function Shadow1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Shadow">
      <div className="absolute inset-[0_-15%_-28%_-15%]">
        <svg className="block size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 26 32" width="26">
          <g filter="url(#filter0_dd_0_14)" id="Shadow">
            <path d={svgPaths.p12f72080} fill="#006A34" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_dd_0_14" width="26" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_14" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect1_dropShadow_0_14" mode="normal" result="effect2_dropShadow_0_14" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_0_14" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Shadow1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[calc(46.56%-0.07px)_calc(25.16%-0.5px)_calc(33.44%-0.33px)_calc(58%+0.16px)] items-center" data-name="Container">
      <Background1 />
      <Margin5 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#d2e8d7] border border-[#becabd] border-solid h-[300px] left-[24px] overflow-clip right-[24px] rounded-[12px] top-[96px]" data-name="Background+Border">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[103.36%] left-0 max-w-none top-[-1.68%] w-full" src={imgBackgroundBorder} />
      </div>
      <OverlayPins />
      <Container35 />
    </div>
  );
}

function RegionalDemandHeatmapBentoGridSpan() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] h-[452px] relative rounded-[20px] shrink-0 w-full" data-name="Regional Demand Heatmap (Bento Grid span 6)">
      <Heading2Margin1 />
      <Margin3 />
      <BackgroundBorder />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[18.15px] relative shrink-0 w-[20.679px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.15" preserveAspectRatio="none" viewBox="0 0 20.6794 18.15" width="20.6794">
        <g id="Container">
          <path d={svgPaths.p37534660} fill="#755700" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <Container36 />
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">{`Export & Logistics`}</p>
        <p className="leading-[28px]">Opportunities</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p146eb80} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#def3e2] content-stretch flex h-[40px] items-center justify-center relative rounded-[9999px] shrink-0 w-[39.61px]" data-name="Background">
      <Container40 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Tomatoes →</p>
        <p className="leading-[20px]">Mumbai</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Margin: +12% vs Local</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading8 />
      <Container42 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container41 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#268549] content-stretch flex flex-col items-start pl-[8px] pr-[37.2px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">High</p>
        <p className="leading-[16px]">Match</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[8px] relative size-full">
        <Container39 />
        <Background3 />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#def3e2] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[#006a34] h-[6px] left-0 right-[15%] rounded-[9999px] top-0" data-name="Background" />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6f] text-[12px] text-right whitespace-nowrap">
          <p className="leading-[16px]">Route viability: 85%</p>
        </div>
      </div>
    </div>
  );
}

function OpportunityCard() {
  return (
    <div className="bg-[#e9ffed] relative rounded-[12px] shrink-0 w-full" data-name="Opportunity Card">
      <div aria-hidden className="absolute border border-[#becabd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative size-full">
        <Container38 />
        <Background4 />
        <Container43 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p237be000} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#def3e2] content-stretch flex h-[40px] items-center justify-center relative rounded-[9999px] shrink-0 w-[34px]" data-name="Background">
      <Container46 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Onions → UAE</p>
        <p className="leading-[20px]">(Export)</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Margin: +25% vs Local</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading9 />
      <Container48 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background5 />
      <Container47 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#d2e8d7] content-stretch flex flex-col items-start pl-[9px] pr-[40.72px] py-[5px] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#6f7a6f] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Review</p>
        <p className="leading-[16px]">Needed</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[8px] relative size-full">
        <Container45 />
        <BackgroundBorder1 />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#def3e2] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[#f9bd14] h-[6px] left-0 right-[60%] rounded-[9999px] top-0" data-name="Background" />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6f7a6f] text-[12px] text-right whitespace-nowrap">
          <p className="leading-[16px]">Requires export cert.</p>
        </div>
      </div>
    </div>
  );
}

function OpportunityCard1() {
  return (
    <div className="bg-[#e9ffed] relative rounded-[12px] shrink-0 w-full" data-name="Opportunity Card">
      <div aria-hidden className="absolute border border-[#becabd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative size-full">
        <Container44 />
        <Background6 />
        <Container49 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <OpportunityCard />
      <OpportunityCard1 />
    </div>
  );
}

function ExportOpportunitiesBentoGridSpan() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Export Opportunities (Bento Grid span 6)">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Heading7 />
        <Container37 />
      </div>
    </div>
  );
}

function DashboardGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Dashboard Grid">
      <PriceAnalysisChartBentoGridSpan />
      <SupplyAlertsBentoGridSpan />
      <RegionalDemandHeatmapBentoGridSpan />
      <ExportOpportunitiesBentoGridSpan />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Main Content Area">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] pb-[128px] pt-[32px] px-[16px] relative size-full">
        <HeaderSection />
        <DashboardGrid />
      </div>
    </div>
  );
}

function Container50() {
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

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
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
          <path d={svgPaths.p164b49c0} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container52 />
    </div>
  );
}

function HeaderTopAppBarMobileSideNavIntegrationDesktop() {
  return (
    <div className="absolute bg-[#e9ffed] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar (Mobile) / SideNav Integration (Desktop)">
      <Button1 />
      <Container51 />
      <Button2 />
    </div>
  );
}

function Margin6() {
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

function Container53() {
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
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[64px]" data-name="Link">
      <Margin6 />
      <Container53 />
    </div>
  );
}

function Margin7() {
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

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Insights</p>
      </div>
    </div>
  );
}

function LinkActiveTabInsights() {
  return (
    <div className="flex h-[44.6px] items-center justify-center relative shrink-0 w-[78.09px]">
      <div className="flex-none scale-x-90 scale-y-90">
        <div className="bg-[#268549] content-stretch drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] flex flex-col items-center justify-center px-[16px] py-[4px] relative rounded-[9999px]" data-name="Link - Active Tab: Insights">
          <Margin7 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function LinkActiveTabInsightsCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center px-[4.35px] py-[2.8px] relative shrink-0" data-name="Link - Active Tab: Insights:css-transform">
      <LinkActiveTabInsights />
    </div>
  );
}

function Margin8() {
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

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Orders</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[64px]" data-name="Link">
      <Margin8 />
      <Container55 />
    </div>
  );
}

function Margin9() {
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

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Profile</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[64px]" data-name="Link">
      <Margin9 />
      <Container56 />
    </div>
  );
}

function BottomNavBarMobile() {
  return (
    <div className="absolute bg-[#def3e2] bottom-0 content-stretch drop-shadow-[0px_-2px_4px_rgba(45,138,78,0.08)] flex gap-[23.8px] items-center left-0 px-[8px] py-[12px] rounded-tl-[12px] rounded-tr-[12px] w-[390px]" data-name="BottomNavBar (Mobile)">
      <Link />
      <LinkActiveTabInsightsCssTransform />
      <Link1 />
      <Link2 />
    </div>
  );
}

export default function MarketTrends() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[96px] pt-[64px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(233, 255, 237) 0%, rgb(233, 255, 237) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Market Trends">
      <MainContentArea />
      <HeaderTopAppBarMobileSideNavIntegrationDesktop />
      <BottomNavBarMobile />
    </div>
  );
}