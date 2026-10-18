import svgPaths from "./svg-6ekqasazhr";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[24px] w-full">
        <p className="leading-[32px]">Bulk Buyer Portal</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Manage your large-scale requirements and</p>
        <p className="leading-[24px]">orders.</p>
      </div>
    </div>
  );
}

function SectionPageTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section - Page Title">
      <Heading1 />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p35b5ef0} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryAction() {
  return (
    <div className="bg-[#006a34] drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[12px] shrink-0 w-full" data-name="Button - Primary Action">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative size-full">
          <Container1 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[20px]">Post New Bulk Requirement</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] w-full">
        <p className="leading-[28px]">Active Requirements</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Red Onions</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Qty: 2,000kg • Grade A</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Container4 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#268549] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Active</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Background />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.pc8fd0aa} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">3 Responses</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Basmati Rice</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Qty: 5,000kg • Premium</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <Container10 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#d2e8d7] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Draft</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Background1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.pc8fd0aa} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">0 Responses</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <Container8 />
        <Container11 />
      </div>
    </div>
  );
}

function SectionActiveRequirements() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Active Requirements">
      <Heading2 />
      <BackgroundShadow />
      <BackgroundShadow1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Received Quotations</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">For: Red Onions</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container15 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#268549] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f6fff3] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">SP</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Sharma Produce</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 20 19" width="20">
        <g id="Container">
          <path d={svgPaths.p1f93f980} fill="#755700" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container18 />
        <Container20 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Price</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">₹25/kg</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-start relative row-1 self-start shrink-0" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Grade</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">A+</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-start relative row-1 self-start shrink-0" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Distance</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">45 km</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Delivery</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">2 Days</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-y-[12px] grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__36px_36px] inline-grid relative size-full">
        <Container22 />
        <Container25 />
        <Container28 />
        <Container31 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#006a34] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Accept Quote</p>
        </div>
      </div>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className="absolute bg-white bottom-[16px] content-stretch drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] flex flex-col gap-[16px] items-start left-[16px] min-w-[280px] p-[18px] rounded-[20px] top-0" data-name="Quote Card 1">
      <div aria-hidden className="absolute border-2 border-[#006a34] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container17 />
      <Container21 />
      <Button />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#fe7952] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6c1900] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">RK</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Raj Kisan Coop</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] w-full">
        <p className="leading-[16px]">Price</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[20px]">₹24/kg</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] w-full">
        <p className="leading-[16px]">Grade</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[20px]">A</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] w-full">
        <p className="leading-[16px]">Distance</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[20px]">120 km</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] w-full">
        <p className="leading-[16px]">Delivery</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[20px]">4 Days</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__36px_36px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container41 />
      <Container44 />
      <Container47 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-px py-[9px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[#6f7a6f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Accept Quote</p>
      </div>
    </div>
  );
}

function QuoteCard1() {
  return (
    <div className="absolute bg-white bottom-[16px] content-stretch drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] flex flex-col gap-[16px] items-start left-[312px] min-w-[280px] p-[16px] rounded-[20px] top-0" data-name="Quote Card 2">
      <Container34 />
      <Container37 />
      <Button1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[236px] left-[-16px] overflow-auto right-[-16px] top-0" data-name="Container">
      <QuoteCard />
      <QuoteCard1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[236px] relative shrink-0 w-full" data-name="Margin">
      <Container16 />
    </div>
  );
}

function SectionReceivedQuotations() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Received Quotations">
      <Container14 />
      <Margin />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d1f15] text-[20px] w-full">
        <p className="leading-[28px]">Upcoming Deliveries</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 38 38" width="38">
        <g id="Overlay">
          <rect fill="#0070F3" fillOpacity="0.1" height="38" rx="8" width="38" />
          <path d={svgPaths.pec36400} fill="#0070F3" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Tomatoes (1,500kg)</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Order #KD-892</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading7 />
      <Container52 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Overlay />
        <Container51 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0070f3] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Today</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#d2e8d7] border-b border-solid inset-0 pointer-events-none" />
      <Container50 />
      <Container53 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pb-[4px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[#0070f3] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Background" />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Dispatched</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Margin1 />
      <Container56 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[2px] items-start px-[8px] relative shrink-0 w-[68.38px]" data-name="Margin">
      <div className="bg-[#0070f3] h-[2px] relative shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pb-[4px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="relative rounded-[9999px] shrink-0 size-[16px]" data-name="Border">
        <div aria-hidden className="absolute border-2 border-[#0070f3] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0070f3] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">In Transit</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Margin3 />
      <Container58 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[2px] items-start px-[8px] relative shrink-0 w-[68.39px]" data-name="Margin">
      <div className="bg-[#d2e8d7] h-[2px] relative shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pb-[4px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[#d2e8d7] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Background" />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Delivered</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Margin5 />
      <Container60 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Container55 />
          <Margin2 />
          <Container57 />
          <Margin4 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] relative rounded-[20px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <HorizontalBorder />
        <Container54 />
      </div>
    </div>
  );
}

function SectionUpcomingDeliveries() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Upcoming Deliveries">
      <Heading6 />
      <BackgroundShadow2 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[80px] px-[16px] relative size-full">
        <SectionPageTitle />
        <ButtonPrimaryAction />
        <SectionActiveRequirements />
        <SectionReceivedQuotations />
        <SectionUpcomingDeliveries />
      </div>
    </div>
  );
}

function Container61() {
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

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container61 />
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

function Container62() {
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

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container62 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#e9ffed] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Button2 />
      <Heading />
      <Button3 />
    </div>
  );
}

function Container63() {
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

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Market</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container64 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[64px]" data-name="Button">
      <Container63 />
      <Margin6 />
    </div>
  );
}

function Container65() {
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

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Insights</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container66 />
    </div>
  );
}

function Button5() {
  return (
    <div className="flex h-[44.6px] items-center justify-center relative shrink-0 w-[78.09px]">
      <div className="flex-none scale-x-90 scale-y-90">
        <div className="bg-[#268549] content-stretch flex flex-col items-center justify-center px-[16px] py-[4px] relative rounded-[9999px]" data-name="Button">
          <Container65 />
          <Margin7 />
        </div>
      </div>
    </div>
  );
}

function ButtonCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center px-[4.35px] py-[2.8px] relative shrink-0" data-name="Button:css-transform">
      <Button5 />
    </div>
  );
}

function Container67() {
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

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Orders</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container68 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[64px]" data-name="Button">
      <Container67 />
      <Margin8 />
    </div>
  );
}

function Container69() {
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

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Profile</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container70 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[64px]" data-name="Button">
      <Container69 />
      <Margin9 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-[#def3e2] bottom-0 content-stretch drop-shadow-[0px_-2px_4px_rgba(45,138,78,0.08)] flex gap-[23.8px] items-center left-0 px-[8px] py-[12px] rounded-tl-[12px] rounded-tr-[12px] w-[390px]" data-name="BottomNavBar">
      <Button4 />
      <ButtonCssTransform />
      <Button6 />
      <Button7 />
    </div>
  );
}

export default function BulkBuyerDashboard() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[90px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(233, 255, 237) 0%, rgb(233, 255, 237) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Bulk Buyer Dashboard">
      <MainContent />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}