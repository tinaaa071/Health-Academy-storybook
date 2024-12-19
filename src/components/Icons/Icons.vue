<template>
    <div class="p-4 space-y-8">
      <div>
        <h1 class="mb-4 text-3xl font-bold">Icons</h1>
        <p class="font-light">
          Icons are graphical representations of meaning. Icons can express actions, states, and even categorize data. Our icons are designed to maintain cross-platform consistency.
        </p>
      </div>
  
      <!-- 使用 v-for 渲染每個圖示區塊 -->
      <div v-for="(block, index) in iconBlocks" :key="index">
        <h2 class="mb-4 text-xl font-bold">
          <span class="mr-2 text-sky-400">#</span>{{ block.title }}
        </h2>
  
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-3">
          <IconCard 
            v-for="(item, index) in block.icons" 
            :key="index" 
            :icon="item.icon" 
            :iconClass="item.iconClass" 
            :name="item.name" 
            :token="item.token" 
            :showBTN="item.showBTN" 
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Solid
  import Fa6SolidHouse from '~icons/fa6-solid/house';
  import Fa6SolidBars from '~icons/fa6-solid/bars';
  import Fa6SolidMagnifyingGlass from '~icons/fa6-solid/magnifying-glass';
  import Fa6SolidBell from '~icons/fa6-solid/bell';
  import Fa6SolidCheck from '~icons/fa6-solid/check';
  import Fa6SolidXmark from '~icons/fa6-solid/xmark';
  import Fa6SolidAngleDown from '~icons/fa6-solid/angle-down';
  import Fa6SolidAngleUp from '~icons/fa6-solid/angle-up';
  import Fa6SolidAngleLeft from '~icons/fa6-solid/angle-left';
  import Fa6SolidAngleRight from '~icons/fa6-solid/angle-right';
  import Fa6SolidAnglesRight from '~icons/fa6-solid/angles-right';
  import Fa6SolidArrowDownLong from '~icons/fa6-solid/arrow-down-long';
  import Fa6SolidArrowUpLong from '~icons/fa6-solid/arrow-up-long';
  import Fa6SolidArrowLeftLong from '~icons/fa6-solid/arrow-left-long';
  import Fa6SolidArrowRightLong from '~icons/fa6-solid/arrow-right-long';
  import Fa6SolidAward from '~icons/fa6-solid/award';
  import Fa6SolidLocationDot from '~icons/fa6-solid/location-dot';
  import Fa6SolidPhone from '~icons/fa6-solid/phone';
  import Fa6SolidEnvelope from '~icons/fa6-solid/envelope';
  import Fa6SolidUser from '~icons/fa6-solid/user';
  import Fa6SolidGraduationCap from '~icons/fa6-solid/graduation-cap';
  import Fa6SolidPlus from '~icons/fa6-solid/plus';
  import Fa6SolidMinus from '~icons/fa6-solid/minus';
  import Fa6SolidTrashCan from '~icons/fa6-solid/trash-can';
  import Fa6SolidPenToSquare from '~icons/fa6-solid/pen-to-square';
  import Fa6SolidFileArrowDown from '~icons/fa6-solid/file-arrow-down';
  import Fa6SolidFileImport from '~icons/fa6-solid/file-import';
  import Fa6SolidFileExport from '~icons/fa6-solid/file-export';
  import Fa6SolidArrowRightFromBracket from '~icons/fa6-solid/arrow-right-from-bracket';
  import Fa6SolidReply from '~icons/fa6-solid/reply';
  import Fa6SolidBullhorn from '~icons/fa6-solid/bullhorn';
  import Fa6SolidDollarSign from '~icons/fa6-solid/dollar-sign';
  import Fa6SolidFilter from '~icons/fa6-solid/filter';
  import Fa6SolidEllipsis from '~icons/fa6-solid/ellipsis';
  import Fa6SolidEarthAfrica from '~icons/fa6-solid/earth-americas';
  import Fa6SolidEye from '~icons/fa6-solid/eye';
  import Fa6SolidEyeSlash from '~icons/fa6-solid/eye-slash';
  import Fa6SolidHospital from '~icons/fa6-solid/hospital';
  import Fa6SolidPaperPlane from '~icons/fa6-solid/paper-plane';
  import Fa6SolidPaperclip from '~icons/fa6-solid/paperclip';
  import Fa6SolidArrowRotateRight from '~icons/fa6-solid/arrow-rotate-right';
  import Fa6SolidGear from '~icons/fa6-solid/gear';
  import Fa6SolidMapLocationDot from '~icons/fa6-solid/map-location-dot';
  import Fa6SolidBus from '~icons/fa6-solid/bus';
  import Fa6SolidTrainSubway from '~icons/fa6-solid/train-subway';
  import Fa6SolidTrain from '~icons/fa6-solid/train';
  import Fa6SolidBook from '~icons/fa6-solid/book';
  import Fa6SolidAddressBook from '~icons/fa6-solid/address-book';
  
  // Regular
  import Fa6RegularCircleQuestion from '~icons/fa6-regular/circle-question';
  import Fa6RegularClock from '~icons/fa6-regular/clock';
  import Fa6RegularLightbulb from '~icons/fa6-regular/lightbulb';
  import Fa6RegularClone from '~icons/fa6-regular/clone';
  import Fa6RegularBookmark from '~icons/fa6-regular/bookmark';
  import Fa6RegularComment from '~icons/fa6-regular/comment';
  import Fa6RegularCalendar from '~icons/fa6-regular/calendar';
  import Fa6RegularStar from '~icons/fa6-regular/star';
  
  // Brand
  import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f';
  import Fa6BrandsLine from '~icons/fa6-brands/line';
  import Fa6BrandsYoutube from '~icons/fa6-brands/youtube';
  import Fa6BrandsXTwitter from '~icons/fa6-brands/x-twitter';
  import IconCard from './IconCard.vue';
  
  export default {
    name: 'Icon',
    components: { IconCard },
    data() {
      return {
        iconBlocks: [
          {
            title: 'Variants',
            icons: [
              { 
                icon: Fa6SolidHouse, 
                name: "Error", 
                token: "Home" ,
                iconClass: "text-red-500",
                showBTN: false
              },
              { 
                icon: Fa6SolidHouse, 
                name: "text-sm", 
                token: "Home" ,
                iconClass: "text-sm",
                showBTN: false
              },
              { 
                icon: Fa6SolidHouse, 
                name: "text-base", 
                token: "Home" ,
                iconClass: "text-base",
                showBTN: false
              },
              { 
                icon: Fa6SolidHouse, 
                name: "text-lg", 
                token: "Home" ,
                iconClass: "text-lg",
                showBTN: false
              },
            ]
          },
          {
            title: 'Icons',
            icons: [
            { 
                icon: Fa6SolidHouse, 
                name: "Fa6SolidHouse", 
                token: "Home" 
              },
              { 
                icon: Fa6SolidBars, 
                name: "Fa6SolidBars", 
                token: "Menu" 
              },
              { 
                icon: Fa6SolidMagnifyingGlass, 
                name: "Fa6SolidMagnifyingGlass", 
                token: "Search" 
              },
              { 
                icon: Fa6SolidBell, 
                name: "Fa6SolidBell", 
                token: "Notification" 
              },
              { 
                icon: Fa6BrandsFacebookF, 
                name: "Fa6BrandsFacebookF", 
                token: "Facebook" 
              },
              { 
                icon: Fa6BrandsLine, 
                name: "Fa6BrandsLine", 
                token: "Line" 
              },
              { 
                icon: Fa6BrandsYoutube, 
                name: "Fa6BrandsYoutube", 
                token: "Youtube" 
              },
              { 
                icon: Fa6BrandsXTwitter, 
                name: "Fa6BrandsXTwitter", 
                token: "X" 
              },
              { 
                icon: Fa6SolidCheck, 
                name: "Fa6SolidCheck", 
                token: "Check" 
              },
              { 
                icon: Fa6SolidXmark, 
                name: "Fa6SolidXmark", 
                token: "Cross" 
              },
              { 
                icon: Fa6RegularCircleQuestion, 
                name: "Fa6RegularCircleQuestion", 
                token: "Question" 
              },
              { 
                icon: Fa6SolidAnglesRight, 
                name: "Fa6SolidAnglesRight", 
                token: "Double Chevron-Right" 
              },
              { 
                icon: Fa6SolidAngleDown, 
                name: "Fa6SolidAngleDown", 
                token: "Chevron-Down" 
              },
              { 
                icon: Fa6SolidAngleUp, 
                name: "Fa6SolidAngleUp", 
                token: "Chevron-Up" 
              },
              { 
                icon: Fa6SolidAngleLeft, 
                name: "Fa6SolidAngleLeft", 
                token: "Chevron-Left" 
              },
              { 
                icon: Fa6SolidAngleRight, 
                name: "Fa6SolidAngleRight", 
                token: "Chevron-Right" 
              },
              { 
                icon: Fa6SolidArrowDownLong, 
                name: "Fa6SolidArrowDownLong", 
                token: "Arrow-Down" 
              },
              { 
                icon: Fa6SolidArrowUpLong, 
                name: "Fa6SolidArrowUpLong", 
                token: "Arrow-Up" 
              },
              { 
                icon: Fa6SolidArrowLeftLong, 
                name: "Fa6SolidArrowLeftLong", 
                token: "Arrow-Left" 
              },
              { 
                icon: Fa6SolidArrowRightLong, 
                name: "Fa6SolidArrowRightLong", 
                token: "Arrow-Right" 
              },
              { 
                icon: Fa6SolidAward, 
                name: "Fa6SolidAward", 
                token: "Award" 
              },
              { 
                icon: Fa6SolidLocationDot, 
                name: "Fa6SolidLocationDot", 
                token: "Location" 
              },
              { 
                icon: Fa6SolidPhone, 
                name: "Fa6SolidPhone", 
                token: "Phone" 
              },
              { 
                icon: Fa6SolidEnvelope, 
                name: "Fa6SolidEnvelope", 
                token: "Mail" 
              },
              { 
                icon: Fa6RegularClock, 
                name: "Fa6RegularClock", 
                token: "Time" 
              },
              { 
                icon: Fa6RegularCalendar, 
                name: "Fa6RegularCalendar", 
                token: "Calendar" 
              },
              { 
                icon: Fa6SolidUser, 
                name: "Fa6SolidUser", 
                token: "User" 
              },
              { 
                icon: Fa6SolidGraduationCap, 
                name: "Fa6SolidGraduationCap", 
                token: "Graduation" 
              },
              { 
                icon: Fa6SolidPlus, 
                name: "Fa6SolidPlus", 
                token: "Plus" 
              },
              { 
                icon: Fa6SolidMinus, 
                name: "Fa6SolidMinus", 
                token: "Minus" 
              },
              { 
                icon: Fa6SolidTrashCan, 
                name: "Fa6SolidTrashCan", 
                token: "Trash" 
              },
              { 
                icon: Fa6SolidPenToSquare, 
                name: "Fa6SolidPenToSquare", 
                token: "Edit" 
              },
              { 
                icon: Fa6SolidFileArrowDown, 
                name: "Fa6SolidFileArrowDown", 
                token: "Download File" 
              },
              { 
                icon: Fa6SolidFileImport, 
                name: "Fa6SolidFileImport", 
                token: "Import File" 
              },
              { 
                icon: Fa6SolidFileExport, 
                name: "Fa6SolidFileExport", 
                token: "Export File" 
              },
              { 
                icon: Fa6SolidArrowRightFromBracket, 
                name: "Fa6SolidArrowRightFromBracket", 
                token: "Logout" 
              },
              { 
                icon: Fa6SolidReply, 
                name: "Fa6SolidReply", 
                token: "Reply" 
              },
              { 
                icon: Fa6SolidBullhorn, 
                name: "Fa6SolidBullhorn", 
                token: "Bullhorn" 
              },
              { 
                icon: Fa6RegularLightbulb, 
                name: "Fa6RegularLightbulb", 
                token: "Hint" 
              },
              { 
                icon: Fa6SolidDollarSign, 
                name: "Fa6SolidDollarSign", 
                token: "Price" 
              },
              { 
                icon: Fa6SolidFilter, 
                name: "Fa6SolidFilter", 
                token: "Filter" 
              },
              { 
                icon: Fa6SolidEllipsis, 
                name: "Fa6SolidEllipsis", 
                token: "Ellipsis Button" 
              },
              { 
                icon: Fa6SolidEarthAfrica, 
                name: "Fa6SolidEarthAfrica", 
                token: "Language" 
              },
              { 
                icon: Fa6SolidEye, 
                name: "Fa6SolidEye", 
                token: "Show" 
              },
              { 
                icon: Fa6SolidEyeSlash, 
                name: "Fa6SolidEyeSlash", 
                token: "Hidden" 
              },
              { 
                icon: Fa6SolidHospital, 
                name: "Fa6SolidHospital", 
                token: "Hospital" 
              },
              { 
                icon: Fa6SolidPaperPlane, 
                name: "Fa6SolidPaperPlane", 
                token: "Send Message" 
              },
              { 
                icon: Fa6SolidPaperclip, 
                name: "Fa6SolidPaperclip", 
                token: "Attachment file" 
              },
              { 
                icon: Fa6SolidArrowRotateRight, 
                name: "Fa6SolidArrowRotateRight", 
                token: "Refresh" 
              },
              { 
                icon: Fa6RegularClone, 
                name: "Fa6RegularClone", 
                token: "Clone" 
              },
              { 
                icon: Fa6RegularBookmark, 
                name: "Fa6RegularBookmark", 
                token: "Wishlist" 
              },
              { 
                icon: Fa6RegularComment, 
                name: "Fa6RegularComment", 
                token: "Chat" 
              },
              { 
                icon: Fa6RegularStar, 
                name: "Fa6RegularStar", 
                token: "Star" 
              },
              { 
                icon: Fa6SolidGear, 
                name: "Fa6SolidGear", 
                token: "Setting" 
              },
              { 
                icon: Fa6SolidMapLocationDot, 
                name: "Fa6SolidMapLocationDot", 
                token: "Map" 
              },
              { 
                icon: Fa6SolidBus, 
                name: "Fa6SolidBus", 
                token: "Bus" 
              },
              { 
                icon: Fa6SolidTrainSubway, 
                name: "Fa6SolidTrainSubway", 
                token: "Subway" 
              },
              { 
                icon: Fa6SolidTrain, 
                name: "Fa6SolidTrain", 
                token: "Train" 
              },
              { 
                icon: Fa6SolidBook, 
                name: "Fa6SolidBook", 
                token: "Course" 
              },
              { 
                icon: Fa6SolidAddressBook, 
                name: "Fa6SolidAddressBook", 
                token: "Profile" 
              },
            ]
          }
        ]
      };
    }
  };
  </script>
  