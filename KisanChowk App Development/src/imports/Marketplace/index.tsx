import svgPaths from "./svg-uz8bou0qpr";
import imgAb6AXuDCzfofb5K1Xe2OhOIdgNrzfUfGvcRL8PJ9NxNfmUod4YdoAn1W39ItpkGg8Tf2Ztm9Hwn5Hnok4PwoykqijPRhQx4TPiLXtiOnkdjNso0WLcffRGr59L9W2Vy2V8IEpziC8Z72GvACjTmM9HiSqB97G6N1TsRhCi8RsAtPql738KuptsXq2GSy4HIkP2Iz5MqYuR5DIugkqwGyXUelBgp3Z4TbGU1JSk6QrS1QyeeI1OO from "./9df89aa968d20a10c4938eb08a5e3579d3ce02dd.png";
import imgAb6AXuDXzpYCrlThaTkkGNvk0WvLol1E28W5K6AiWvfFcuuVlxRtQxHmsSez5IH2Lc8Rwwn6ProuHyQueO2BZIvgdVAdGtkwTbgT7Xin8D9Scdf0V63AYy4AtFkTdhOaQ9YrCyZ6Ma8Q2JrmkOUnAkmozSlslxTjWmELpRmqtgCmEdgRgT72AJ0IMAm0WdNKpIuDx2LgNlGLsXUqPn6TrSzsIFcgsVWeAXrUHiFjEwANxDdwuThQrp from "./ee71cd6d4f9f8abca3371c7ac539b6890a0be3c7.png";
import imgAb6AXuCjGVsFqCzmOx3GoO7MbuTnMPbf8Hu0CMzo7SXtpUt2Edrq3OmCyWuQnhMLchAqBshgP7WbZZggBlK9YOvdv1Eyep2XlfjJOypzdiUr66QaHsQ4DVgmrl6YhrdT7Ch2IS9CP4Yo1HxYpmkDbYvgKh4OFe9UfbpOzTxs95Z0UhSmK9Z9QaLjMl4LwXbf3VCyYXjV5B0Khqm2NHngmv2I3Kaz69LZHXjqNMafc3AEmngyb7Z3Rv from "./be04494aa5a19deecc6e1a9ae75ea78f3ce9bb6a.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[16px] w-full">
        <p className="leading-[normal]">Search fresh produce...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#def3e2] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[40px] pr-[12px] py-[14px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-1/4 content-stretch flex flex-col items-start left-[12px] top-1/4" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p8a35e00} fill="#3F4940" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Input />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p7eb0b80} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFilters() {
  return (
    <div className="bg-[#def3e2] content-stretch drop-shadow-[0px_2px_4px_rgba(45,138,78,0.08)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button - Filters">
      <Container3 />
    </div>
  );
}

function SectionSearchAndFilter() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Section - Search and Filter">
      <Container />
      <ButtonFilters />
    </div>
  );
}

function SectionSearchAndFilterMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Section - Search and Filter:margin">
      <SectionSearchAndFilter />
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#006a34] content-stretch drop-shadow-[0px_4px_6px_rgba(0,106,52,0.2)] flex flex-col items-center justify-center left-[16px] px-[24px] py-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">All</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#def3e2] content-stretch flex flex-col items-center justify-center left-[93.94px] px-[24px] py-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Vegetables</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#def3e2] content-stretch flex flex-col items-center justify-center left-[231.45px] px-[24px] py-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Fruits</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#def3e2] content-stretch flex flex-col items-center justify-center left-[330.53px] px-[24px] py-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Grains</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#def3e2] content-stretch flex flex-col items-center justify-center left-[435.25px] px-[24px] py-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Dairy</p>
      </div>
    </div>
  );
}

function SectionCategories() {
  return (
    <div className="absolute h-[36px] left-[-16px] overflow-auto right-0 top-0" data-name="Section - Categories">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function SectionCategoriesMargin() {
  return (
    <div className="h-[36px] relative shrink-0 w-[374px]" data-name="Section - Categories:margin">
      <SectionCategories />
    </div>
  );
}

function Ab6AXuDCzfofb5K1Xe2OhOIdgNrzfUfGvcRL8PJ9NxNfmUod4YdoAn1W39ItpkGg8Tf2Ztm9Hwn5Hnok4PwoykqijPRhQx4TPiLXtiOnkdjNso0WLcffRGr59L9W2Vy2V8IEpziC8Z72GvACjTmM9HiSqB97G6N1TsRhCi8RsAtPql738KuptsXq2GSy4HIkP2Iz5MqYuR5DIugkqwGyXUelBgp3Z4TbGU1JSk6QrS1QyeeI1OO() {
  return (
    <div className="h-[157px] relative shrink-0 w-full" data-name="AB6AXuDCzfofb5k1xe2OhOIdg_nrzfUFGvcR_l8pJ9NX_NfmUOD4YdoAn1-W39ItpkGg8Tf2Ztm9Hwn5hnok4PwoykqijPRhQx4TPiLXtiOnkdjNSO-0WLcffRGr59L9W2Vy2V8IEpziC8z72gv_ACjTmM9HISqB97G6N1tsRhCi8rsATPql738kuptsXQ2gSy4HIkP2Iz5MQYuR5DIugkqw_GyXUelBGP3Z4_TbG_u1jSk6qrS1QyeeI1oO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgAb6AXuDCzfofb5K1Xe2OhOIdgNrzfUfGvcRL8PJ9NxNfmUod4YdoAn1W39ItpkGg8Tf2Ztm9Hwn5Hnok4PwoykqijPRhQx4TPiLXtiOnkdjNso0WLcffRGr59L9W2Vy2V8IEpziC8Z72GvACjTmM9HiSqB97G6N1TsRhCi8RsAtPql738KuptsXq2GSy4HIkP2Iz5MqYuR5DIugkqwGyXUelBgp3Z4TbGU1JSk6QrS1QyeeI1OO} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#7eda95] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[2px] rounded-[6px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#00210c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Grade A</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#def3e2] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <Ab6AXuDCzfofb5K1Xe2OhOIdgNrzfUfGvcRL8PJ9NxNfmUod4YdoAn1W39ItpkGg8Tf2Ztm9Hwn5Hnok4PwoykqijPRhQx4TPiLXtiOnkdjNso0WLcffRGr59L9W2Vy2V8IEpziC8Z72GvACjTmM9HiSqB97G6N1TsRhCi8RsAtPql738KuptsXq2GSy4HIkP2Iz5MqYuR5DIugkqwGyXUelBgp3Z4TbGU1JSk6QrS1QyeeI1OO />
      <Background1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[20px]">Organic Tomatoes</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667" width="9.33333">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Ramesh K, Punjab</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
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

function Paragraph() {
  return (
    <div className="[word-break:break-word] h-[28px] leading-[0] relative shrink-0 w-[59.84px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center left-0 text-[#006a34] text-[20px] top-[14px]">
        <p className="leading-[28px]">₹40</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[41.84px] not-italic text-[#3f4940] text-[12px] top-[16.5px]">
        <p className="leading-[16px]">/kg</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[15.525px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.75" preserveAspectRatio="none" viewBox="0 0 15.525 15.75" width="15.525">
        <g id="Container">
          <path d={svgPaths.p1422a80} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonAddToCart() {
  return (
    <div className="bg-[#006a34] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button - Add to cart">
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <ButtonAddToCart />
    </div>
  );
}

function ArticleProductCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-1 self-start shadow-[0px_2px_8px_0px_rgba(45,138,78,0.08)] shrink-0" data-name="Article - Product Card 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
          <Background />
          <Container4 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Ab6AXuDXzpYCrlThaTkkGNvk0WvLol1E28W5K6AiWvfFcuuVlxRtQxHmsSez5IH2Lc8Rwwn6ProuHyQueO2BZIvgdVAdGtkwTbgT7Xin8D9Scdf0V63AYy4AtFkTdhOaQ9YrCyZ6Ma8Q2JrmkOUnAkmozSlslxTjWmELpRmqtgCmEdgRgT72AJ0IMAm0WdNKpIuDx2LgNlGLsXUqPn6TrSzsIFcgsVWeAXrUHiFjEwANxDdwuThQrp() {
  return (
    <div className="h-[157px] relative shrink-0 w-full" data-name="AB6AXuDXzpYCrlThaTkkGNvk0WvLol1e28w5k6AiWvfFCUUVlxRtQx-hmsSEZ5iH2Lc8Rwwn6ProuHyQueO2bZIvgdV-ADGtkwTbgT7xin8D9SCDF0v63aYY4AtFkTDHOaQ9YrCyZ6MA8q2JrmkOUnAkmozSLSLXTjWmELpRMQTGCmEdgRG_T72aJ0iMAm0wdNKpIuDX2LgNlGLs_XUqPn6TrSzs_iFcgs_vWeAXrUHiFJEwANxDdwuThQRP">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgAb6AXuDXzpYCrlThaTkkGNvk0WvLol1E28W5K6AiWvfFcuuVlxRtQxHmsSez5IH2Lc8Rwwn6ProuHyQueO2BZIvgdVAdGtkwTbgT7Xin8D9Scdf0V63AYy4AtFkTdhOaQ9YrCyZ6Ma8Q2JrmkOUnAkmozSlslxTjWmELpRmqtgCmEdgRgT72AJ0IMAm0WdNKpIuDx2LgNlGLsXUqPn6TrSzsIFcgsVWeAXrUHiFjEwANxDdwuThQrp} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#f9bd14] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[2px] rounded-[6px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#251a00] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Premium</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#def3e2] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <Ab6AXuDXzpYCrlThaTkkGNvk0WvLol1E28W5K6AiWvfFcuuVlxRtQxHmsSez5IH2Lc8Rwwn6ProuHyQueO2BZIvgdVAdGtkwTbgT7Xin8D9Scdf0V63AYy4AtFkTdhOaQ9YrCyZ6Ma8Q2JrmkOUnAkmozSlslxTjWmELpRmqtgCmEdgRgT72AJ0IMAm0WdNKpIuDx2LgNlGLsXUqPn6TrSzsIFcgsVWeAXrUHiFjEwANxDdwuThQrp />
      <Background3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[20px]">Basmati Rice</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[11.721px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 11.7214 10.5" width="11.7214">
        <g id="Container">
          <path d={svgPaths.p14f25800} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Green FPO, Haryana</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container11 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] h-[28px] leading-[0] relative shrink-0 w-[57.59px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center left-0 text-[#006a34] text-[20px] top-[14px]">
        <p className="leading-[28px]">₹85</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[39.59px] not-italic text-[#3f4940] text-[12px] top-[16.5px]">
        <p className="leading-[16px]">/kg</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[15.525px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.75" preserveAspectRatio="none" viewBox="0 0 15.525 15.75" width="15.525">
        <g id="Container">
          <path d={svgPaths.p1422a80} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonAddToCart1() {
  return (
    <div className="bg-[#006a34] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button - Add to cart">
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <ButtonAddToCart1 />
    </div>
  );
}

function ArticleProductCard1() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-1 self-start shadow-[0px_2px_8px_0px_rgba(45,138,78,0.08)] shrink-0" data-name="Article - Product Card 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
          <Background2 />
          <Container10 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Ab6AXuCjGVsFqCzmOx3GoO7MbuTnMPbf8Hu0CMzo7SXtpUt2Edrq3OmCyWuQnhMLchAqBshgP7WbZZggBlK9YOvdv1Eyep2XlfjJOypzdiUr66QaHsQ4DVgmrl6YhrdT7Ch2IS9CP4Yo1HxYpmkDbYvgKh4OFe9UfbpOzTxs95Z0UhSmK9Z9QaLjMl4LwXbf3VCyYXjV5B0Khqm2NHngmv2I3Kaz69LZHXjqNMafc3AEmngyb7Z3Rv() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuCjGVsFqCzmOx3GoO7MBUTnMPbf8hu0cMZO7sXtpUT2Edrq3OmCyWuQnhMLchAqBshgP7wbZZggBlK9y-ovdv1eyep2XlfjJOypzdiUr66QaHsQ4DVgmrl6YHRD_T7CH2-iS9cP4yo1HxYpmkDbYVGKh4OFe9ufbpOzTxs95z0uhSM_k9Z9qaLjMl4LwXBF3vCyYXjV5B0Khqm2NHngmv2I3KAZ69lZ_HXjqNMafc3aEMNGYB7z3Rv-">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[149.25%] left-0 max-w-none top-[-24.62%] w-full" src={imgAb6AXuCjGVsFqCzmOx3GoO7MbuTnMPbf8Hu0CMzo7SXtpUt2Edrq3OmCyWuQnhMLchAqBshgP7WbZZggBlK9YOvdv1Eyep2XlfjJOypzdiUr66QaHsQ4DVgmrl6YhrdT7Ch2IS9CP4Yo1HxYpmkDbYvgKh4OFe9UfbpOzTxs95Z0UhSmK9Z9QaLjMl4LwXbf3VCyYXjV5B0Khqm2NHngmv2I3Kaz69LZHXjqNMafc3AEmngyb7Z3Rv} />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#def3e2] content-stretch flex flex-col h-[128px] items-start justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <Ab6AXuCjGVsFqCzmOx3GoO7MbuTnMPbf8Hu0CMzo7SXtpUt2Edrq3OmCyWuQnhMLchAqBshgP7WbZZggBlK9YOvdv1Eyep2XlfjJOypzdiUr66QaHsQ4DVgmrl6YhrdT7Ch2IS9CP4Yo1HxYpmkDbYvgKh4OFe9UfbpOzTxs95Z0UhSmK9Z9QaLjMl4LwXbf3VCyYXjV5B0Khqm2NHngmv2I3Kaz69LZHXjqNMafc3AEmngyb7Z3Rv />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[79.69px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center left-0 text-[#006a34] text-[20px] top-[14px]">
        <p className="leading-[28px]">₹20</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[39.88px] not-italic text-[#3f4940] text-[12px] top-[16.5px]">
        <p className="leading-[16px]">/bunch</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0d1f15] text-[20px]">
        <p className="leading-[28px]">Fresh Spinach</p>
      </div>
      <Paragraph2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p3d09b280} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Sun Farms, UP</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[10.667px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667" width="14.6667">
        <g id="Container">
          <path d={svgPaths.p3e6ef100} fill="#3F4940" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006d36] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Next Day Del.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container22 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Margin />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[15.525px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.75" preserveAspectRatio="none" viewBox="0 0 15.525 15.75" width="15.525">
        <g id="Container">
          <path d={svgPaths.p1422a80} fill="#006A34" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#def3e2] content-stretch flex gap-[8px] items-center justify-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Container25 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006a34] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Add to Cart</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Margin">
      <Button5 />
    </div>
  );
}

function ArticleProductCard2() {
  return (
    <div className="bg-white col-[1/span_2] justify-self-stretch relative rounded-[20px] row-2 self-start shadow-[0px_2px_8px_0px_rgba(45,138,78,0.08)] shrink-0" data-name="Article - Product Card 3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
          <Background4 />
          <Container16 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function SectionProductGridBentoStyle() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__273px_268px] relative shrink-0 w-full" data-name="Section - Product Grid (Bento Style)">
      <ArticleProductCard />
      <ArticleProductCard1 />
      <ArticleProductCard2 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[96px] pt-[64px] px-[16px] relative size-full">
        <SectionSearchAndFilterMargin />
        <SectionCategoriesMargin />
        <SectionProductGridBentoStyle />
      </div>
    </div>
  );
}

function Container26() {
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
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[-8px] pb-[14px] pt-[8px] px-[8px] rounded-[9999px] top-0" data-name="Button - Menu">
      <Container26 />
    </div>
  );
}

function ButtonMenuMargin() {
  return (
    <div className="h-[46px] relative shrink-0 w-[32.02px]" data-name="Button - Menu:margin">
      <ButtonMenu />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006a34] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">KisanDirect</p>
      </div>
    </div>
  );
}

function Container27() {
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
      <Container27 />
    </div>
  );
}

function ButtonNotificationsMargin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32.02px]" data-name="Button - Notifications:margin">
      <ButtonNotifications />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#e9ffed] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <ButtonMenuMargin />
      <Heading />
      <ButtonNotificationsMargin />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.094px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 20.0939 18" width="20.0939">
        <g id="Container">
          <path d={svgPaths.p725c500} fill="#F6FFF3" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="flex h-[23.4px] items-center justify-center relative shrink-0 w-[46.884px]">
      <div className="flex-none scale-x-90 scale-y-90">
        <div className="bg-[#268549] content-stretch flex flex-col items-center justify-center px-[16px] py-[4px] relative rounded-[9999px]" data-name="Background">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function BackgroundCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-[2.8px] pr-[2.81px] relative shrink-0 w-[56.02px]" data-name="Background:css-transform">
      <Background5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1f15] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[20px]">Market</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container29 />
    </div>
  );
}

function ButtonMarket() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center justify-center pt-[1.6px] relative shrink-0" data-name="Button - Market">
      <BackgroundCssTransform />
      <Margin2 />
    </div>
  );
}

function Container30() {
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

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Insights</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container31 />
    </div>
  );
}

function ButtonInsights() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button - Insights">
      <Container30 />
      <Margin3 />
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

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Orders</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container33 />
    </div>
  );
}

function ButtonOrders() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button - Orders">
      <Container32 />
      <Margin4 />
    </div>
  );
}

function Container34() {
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

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f4940] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Profile</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container35 />
    </div>
  );
}

function ButtonProfile() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button - Profile">
      <Container34 />
      <Margin5 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-[#def3e2] bottom-0 content-stretch drop-shadow-[0px_-2px_4px_rgba(45,138,78,0.08)] flex gap-[37.2px] items-center left-0 px-[8px] py-[12px] rounded-tl-[12px] rounded-tr-[12px] w-[390px]" data-name="BottomNavBar">
      <ButtonMarket />
      <ButtonInsights />
      <ButtonOrders />
      <ButtonProfile />
    </div>
  );
}

export default function Marketplace() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Marketplace">
      <MainContentCanvas />
      <HeaderTopAppBar />
      <BottomNavBar />
    </div>
  );
}