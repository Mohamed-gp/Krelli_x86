import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

const featuresCardsData = [
  {
    title: "Pay as Littleas possible!",
    path: "Vector",
  },
  {
    title: "Enjoy wisdom of community!",
    path: "community-line 1",
  },
  {
    title: "Let's somebody else take care of Landlord!",
    path: "stack-line 1",
  },
  {
    title: "Enjoy peaceful Environment!",
    path: "plant-line 1",
  },
  {
    title: "Stay Safe! Save Money!",
    path: "shield-star-line 1",
  },
  {
    title: "Pay for what you use !",
    path: "eye-2-line 1",
  },
] as const;

const propertiesCardsData = [
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage1.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage2.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage3.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage4.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage3.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage4.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage3.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage4.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage3.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage4.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage3.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage4.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage3.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage4.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage3.png",
  },
  {
    title: "ESTIN Amizour, Bejaia",
    path: "properyImage4.png",
  },
] as const;

const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  // {
  //   label: "Windmills",
  //   icon: GiWindmill,
  //   description: "This property is has windmills!",
  // },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  // {
  //   label: "Islands",
  //   icon: GiIsland,
  //   description: "This property is on an island!",
  // },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  // {
  //   label: "Castles",
  //   icon: GiCastle,
  //   description: "This property is an ancient castle!",
  // },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  // {
  //   label: "Arctic",
  //   icon: BsSnow,
  //   description: "This property is in arctic environment!",
  // },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

export { featuresCardsData, propertiesCardsData, categories };
