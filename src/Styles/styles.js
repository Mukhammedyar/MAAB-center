export const styles = {
  justifyCenter: "flex justify-center",
  justifyBetween: "flex justify-between",
  justifyAround: "flex justify-around",
  justifyEvenly: "flex justify-evenly",
  itemsCenter: "flex items-center",
  flexCol: "flex flex-col text-black",
  flexColMobile:
    "flex lg:flex-col xl:flex-col text-black justify-between items-center sm:items-center md:items-center lg:items-stretch xl:items-stretch",
  primaryColor: "bg-gray-400",
  transition: "transition-all transition-2",
  responsiveHidden: "hidden sm:hidden md:hidden lg:flex xl:flex",
  responsiveVisible: "flex sm:flex md:flex lg:hidden xl:hidden",
  responsiveHeight: "h-[60px] md:[60px] lg:h-[80px] xl:h-[80px]",
  responsiveContainer: "px-4 sm:px-4 md:px-16 lg:px-[4%] xl:px-[6%]",
  responsiveContainerMenu: "px-3 sm:px-3 md:px-5",
  backgroundPartnerCard:
    "backdrop-blur-sm bg-[rgba(255,255,255,.1)] sm:bg-[rgba(255,255,255,.1)] md:bg-[rgba(255,255,255,0)] lg:bg-none xl:bg-none sm:backdrop-blur-0 md:backdrop-blur-0 lg:backdrop-blur-0 xl:backdrop-blur-0",
  gridPartnerCard:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-4",
  borderPartnerCardMobile: "border-[#c4c4c445] border-[2px] md:border-0",
  borderPartnerCard: "md:border-[#c4c4c445] md:border-[2px]",
  hoverRadioItem:
    "flex justify-between items-center py-[2px] text-xs font-normal hover:text-orange-600",
};

export const buttons = {
  orangeButton:
    "bg-[#FB5f12] lg:text-xs w-full sm:w-full md:w-full justify-center h-[35px] sm:h-[38px] md:h-[33px] lg:h-[30px] rounded-full text-white flex gap-1 items-center hover:bg-[#ff691e] hover:transition-all hover:transition-2 transition-colors transition-2",
  darkButton:
    "bg-[rgb(53,52,55)] w-full sm:w-full md:w-full lg:w-[120px] lg:text-xs h-[35px] sm:h-[33px] md:h-[33px] lg:h-[30px] justify-center rounded-full text-white flex gap-2 items-center hover:bg-[rgb(64,63,66)] hover:transition-all hover:transition-2  transition-colors transition-2",
  primaryButton:
    "bg-[#236bf4] w-full sm:w-[120px] md:w-[120px] lg:text-xs h-[40px] sm:h-[38px] md:h-[38px] lg:h-[35px] justify-center rounded-full text-white flex gap-2 items-center hover:bg-[#347afb] hover:transition-all hover:transition-2  transition-colors transition-2",
  primarySolidButton:
    "bg-white justify-center rounded-full flex gap-2 items-center border-[1px] border-[#236bf4] transition-colors transition-2",
  solidButton:
    "bg-white w-full lg:text-xs h-[40px] sm:h-[38px] md:h-[38px] lg:h-[35px] justify-center rounded-full flex gap-2 items-center hover:border-[1px] hover:border-[rgb(30,64,175,.6)] hover:transition-all hover:transition-2  transition-colors transition-2",
  secondaryButton:
    "bg-[#F5F5F7] w-full lg:text-xs h-[40px] sm:h-[38px] md:h-[38px] lg:h-[35px] justify-center rounded-full flex gap-2 items-center  hover:bg-[white] hover:transition-all hover:transition-2  transition-colors transition-2",
  glassButton:
    "bg-none h-[20px] justify-center rounded-full text-white flex gap-2 items-center transition-colors transition-2",
  orangeSolidButton:
    "bg-white justify-center rounded-full flex gap-1 items-center border-[1px] border-[#FB5f12]",
};
