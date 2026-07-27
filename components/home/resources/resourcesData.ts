import {
  FaBook,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";


import {
  HiOutlineDocumentText,
} from "react-icons/hi2";



export const resources = [

  {
    id:"documentation",

    title:"Official Documentation",

    description:
      "Documentation.",

    icon:HiOutlineDocumentText,

    color:"#2563EB",
  },


  {
    id:"youtube",

    title:"YouTube Playlists",

    description:
      "Video Courses.",

    icon:FaYoutube,

    color:"#EF4444",
  },


  {
    id:"books",

    title:"Programming Books",

    description:
      "Books.",

    icon:FaBook,

    color:"#10B981",
  },


  {
    id:"websites",

    title:"Useful Websites",

    description:
      "Tools.",

    icon:FaGlobe,

    color:"#7C3AED",
  },

];