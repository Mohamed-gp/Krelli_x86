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
    title: "Pay for what you see !",
    path: "eye-2-line 1",
  },
] as const;

const propertiesCardsData = [
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712710442/tdia6y6xyqojxbmtwv4p.jpg",
  },
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712710658/wglfisxmldoacbolyppj.jpg",
  },

  {
    title: "Tipaza,Alger",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712710879/rnl66ibilkcy1qexokey.jpg",
  },
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712711156/tfwqqcr9z8yuztwvxgso.jpg",
  },
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712711246/wudphgo2a72cpqrtiqza.jpg",
  },
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712711361/rcntezbpdgtb7biigrib.jpg",
  },
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712711606/jrm0c6qetp4eovtf1c1r.jpg",
  },
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712711731/lljoipblazt4q4pytsfn.jpg",
  },
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712712220/usz5kxgfc3rze5lqs0ka.jpg",
  },
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712712277/gaapyvsr0712uahtd4lg.jpg",
  },
  {
    title: "Alger,Algiers",
    path: "https://res.cloudinary.com/drf3vogno/image/upload/v1712712321/uqdzdwg99lt2vquydzc8.jpg",
  },
  // {
  //   title: "Alger,Algiers",
  //   path: "properyImage1.png",
  // },
  // {
  //   title: "Alger,Algiers",
  //   path: "properyImage2.png",
  // },
  // {
  //   title: "Alger,Algiers",
  //   path: "properyImage3.png",
  // },
  // {
  //   title: "Alger,Algiers",
  //   path: "properyImage4.png",
  // },
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

const wilayasInfo = [
  {
    id: "1",
    code: "1",
    name: "Adrar",
    ar_name: "أدرار",
    longitude: "27.9766155",
    latitude: "-0.20396",
  },
  {
    id: "2",
    code: "2",
    name: "Chlef",
    ar_name: "الشلف",
    longitude: "36.1691245",
    latitude: "1.3539002",
  },
  {
    id: "3",
    code: "3",
    name: "Laghouat",
    ar_name: "الأغواط",
    longitude: "33.7873735",
    latitude: "2.8829115",
  },
  {
    id: "4",
    code: "4",
    name: "Oum El Bouaghi",
    ar_name: "أم البواقي",
    longitude: "35.8726014",
    latitude: "7.1180248",
  },
  {
    id: "5",
    code: "5",
    name: "Batna",
    ar_name: "باتنة",
    longitude: "35.32147",
    latitude: "3.1066502",
  },
  {
    id: "6",
    code: "6",
    name: "Béjaïa",
    ar_name: "بجاية",
    longitude: "36.7695969",
    latitude: "5.0085855",
  },
  {
    id: "7",
    code: "7",
    name: "Biskra",
    ar_name: "بسكرة",
    longitude: "34.8515041",
    latitude: "5.7246709",
  },
  {
    id: "8",
    code: "8",
    name: "Bechar",
    ar_name: "بشار",
    longitude: "31.5977602",
    latitude: "-1.8540446",
  },
  {
    id: "9",
    code: "9",
    name: "Blida",
    ar_name: "البليدة",
    longitude: "36.4803023",
    latitude: "2.8009379",
  },
  {
    id: "10",
    code: "10",
    name: "Bouira",
    ar_name: "البويرة",
    longitude: "36.2084234",
    latitude: "3.925049",
  },
  {
    id: "11",
    code: "11",
    name: "Tamanrasset",
    ar_name: "تمنراست",
    longitude: "22.2746227",
    latitude: "5.6754684",
  },
  {
    id: "12",
    code: "12",
    name: "Tbessa",
    ar_name: "تبسة",
    longitude: "35.4117259",
    latitude: "8.110545",
  },
  {
    id: "13",
    code: "13",
    name: "Tlemcen",
    ar_name: "تلمسان",
    longitude: "34.8959541",
    latitude: "-1.3150979",
  },
  {
    id: "14",
    code: "14",
    name: "Tiaret",
    ar_name: "تيارت",
    longitude: "35.3599899",
    latitude: "1.3916159",
  },
  {
    id: "15",
    code: "15",
    name: "Tizi Ouzou",
    ar_name: "تيزي وزو",
    longitude: "36.7002068",
    latitude: "4.075957",
  },
  {
    id: "16",
    code: "16",
    name: "Alger",
    ar_name: "الجزائر",
    longitude: "36.7538259",
    latitude: "3.057841",
  },
  {
    id: "17",
    code: "17",
    name: "Djelfa",
    ar_name: "الجلفة",
    longitude: "34.6672467",
    latitude: "3.2993118",
  },
  {
    id: "18",
    code: "18",
    name: "Jijel",
    ar_name: "جيجل",
    longitude: "36.7962714",
    latitude: "5.7504845",
  },
  {
    id: "19",
    code: "19",
    name: "Se9tif",
    ar_name: "سطيف",
    longitude: "36.1905173",
    latitude: "5.4202134",
  },
  {
    id: "20",
    code: "20",
    name: "Saefda",
    ar_name: "سعيدة",
    longitude: "34.841945",
    latitude: "0.1483583",
  },
  {
    id: "21",
    code: "21",
    name: "Skikda",
    ar_name: "سكيكدة",
    longitude: "36.8777912",
    latitude: "6.9357204",
  },
  {
    id: "22",
    code: "22",
    name: "Sidi Bel Abbes",
    ar_name: "سيدي بلعباس",
    longitude: "35.206334",
    latitude: "-0.6301368",
  },
  {
    id: "23",
    code: "23",
    name: "Annaba",
    ar_name: "عنابة",
    longitude: "36.9184345",
    latitude: "7.7452755",
  },
  {
    id: "24",
    code: "24",
    name: "Guelma",
    ar_name: "قالمة",
    longitude: "36.4569088",
    latitude: "7.4334312",
  },
  {
    id: "25",
    code: "25",
    name: "Constantine",
    ar_name: "قسنطينة",
    longitude: "36.319475",
    latitude: "6.7370571",
  },
  {
    id: "26",
    code: "26",
    name: "Medea",
    ar_name: "المدية",
    longitude: "36.2838408",
    latitude: "2.7728462",
  },
  {
    id: "27",
    code: "27",
    name: "Mostaganem",
    ar_name: "مستغانم",
    longitude: "35.9751841",
    latitude: "0.1149273",
  },
  {
    id: "28",
    code: "28",
    name: "M'Sila",
    ar_name: "المسيلة",
    longitude: "35.7211476",
    latitude: "4.5187283",
  },
  {
    id: "29",
    code: "29",
    name: "Mascara",
    ar_name: "معسكر",
    longitude: "35.382998",
    latitude: "0.1542592",
  },
  {
    id: "30",
    code: "30",
    name: "Ouargla",
    ar_name: "ورقلة",
    longitude: "32.1961967",
    latitude: "4.9634113",
  },
  {
    id: "31",
    code: "31",
    name: "Oran",
    ar_name: "وهران",
    longitude: "35.7066928",
    latitude: "-0.6405861",
  },
  {
    id: "32",
    code: "32",
    name: "El Bayadh",
    ar_name: "البيض",
    longitude: "32.5722756",
    latitude: "0.950011",
  },
  {
    id: "33",
    code: "33",
    name: "Illizi",
    ar_name: "إليزي",
    longitude: "26.5065999",
    latitude: "8.480587",
  },
  {
    id: "34",
    code: "34",
    name: "Bordj Bou Arreridj",
    ar_name: "برج بوعريريج",
    longitude: "36.0686488",
    latitude: "4.7691823",
  },
  {
    id: "35",
    code: "35",
    name: "Boumerdes",
    ar_name: "بومرداس",
    longitude: "36.7564181",
    latitude: "3.4917212",
  },
  {
    id: "36",
    code: "36",
    name: "El Tarf",
    ar_name: "الطارف",
    longitude: "36.7534258",
    latitude: "8.2984543",
  },
  {
    id: "37",
    code: "37",
    name: "Tindouf",
    ar_name: "تندوف",
    longitude: "27.2460501",
    latitude: "-6.3252899",
  },
  {
    id: "38",
    code: "38",
    name: "Tissemsilt",
    ar_name: "تيسمسيلت",
    longitude: "35.6021906",
    latitude: "1.802187",
  },
  {
    id: "39",
    code: "39",
    name: "El Oued",
    ar_name: "الوادي",
    longitude: "33.3714492",
    latitude: "6.8573436",
  },
  {
    id: "40",
    code: "40",
    name: "Khenchela",
    ar_name: "خنشلة",
    longitude: "35.4263293",
    latitude: "7.1414137",
  },
  {
    id: "41",
    code: "41",
    name: "Souk Ahras",
    ar_name: "سوق أهراس",
    longitude: "36.277849",
    latitude: "7.9592299",
  },
  {
    id: "42",
    code: "42",
    name: "Tipaza",
    ar_name: "تيبازة",
    longitude: "36.5980966",
    latitude: "2.4085379",
  },
  {
    id: "43",
    code: "43",
    name: "Mila",
    ar_name: "ميلة",
    longitude: "36.4514882",
    latitude: "6.2487316",
  },
  {
    id: "44",
    code: "44",
    name: "Ain Defla",
    ar_name: "عين الدفلى",
    longitude: "36.1283915",
    latitude: "2.1772514",
  },
  {
    id: "45",
    code: "45",
    name: "Naama",
    ar_name: "النعامة",
    longitude: "33.1995605",
    latitude: "-0.8021968",
  },
  {
    id: "46",
    code: "46",
    name: "Ain Temouchent",
    ar_name: "عين تموشنت",
    longitude: "35.404044",
    latitude: "-1.0580975",
  },
  {
    id: "47",
    code: "47",
    name: "Ghardaefa",
    ar_name: "غرداية",
    longitude: "32.5891743",
    latitude: "3.7455655",
  },
  {
    id: "48",
    code: "48",
    name: "Relizane",
    ar_name: "غليزان",
    longitude: "35.8050195",
    latitude: "0.867381",
  },
  {
    id: "49",
    code: "49",
    name: "El M'ghair",
    ar_name: "المغير",
    longitude: "33.947222",
    latitude: "5.922222",
  },
  {
    id: "50",
    code: "50",
    name: "El Menia",
    ar_name: "المنيعة",
    longitude: "30.579167",
    latitude: "2.879167",
  },
  {
    id: "51",
    code: "51",
    name: "Ouled Djellal",
    ar_name: "أولاد جلال",
    longitude: "34.433333",
    latitude: "5.066667",
  },
  {
    id: "52",
    code: "52",
    name: "Bordj Baji Mokhtar",
    ar_name: "برج باجي مختار",
    longitude: "21.327778",
    latitude: "0.955556",
  },
  {
    id: "53",
    code: "53",
    name: "Béni Abbès",
    ar_name: "بني عباس",
    longitude: "30.133333",
    latitude: "-2.166667",
  },
  {
    id: "54",
    code: "54",
    name: "Timimoun",
    ar_name: "تيميمون",
    longitude: "29.258333",
    latitude: "0.230556",
  },
  {
    id: "55",
    code: "55",
    name: "Touggourt",
    ar_name: "تقرت",
    longitude: "33.108333",
    latitude: "6.063889",
  },
  {
    id: "56",
    code: "56",
    name: "Djanet",
    ar_name: "جانت",
    longitude: "24.554167",
    latitude: "9.484722",
  },
  {
    id: "57",
    code: "57",
    name: "In Salah",
    ar_name: "عين صالح",
    longitude: "27.197222",
    latitude: "2.483333",
  },
  {
    id: "58",
    code: "58",
    name: "In Guezzam",
    ar_name: "عين قزام",
    longitude: "19.572222",
    latitude: "5.769444",
  },
];

const getWilayaIdByName = (name: string): string => {
  const foundedWilaya = wilayasInfo.find(
    (wilayaInfo) => wilayaInfo.name == name
  );
  if (foundedWilaya) {
    return foundedWilaya.id;
  } else {
    return "";
  }
};
const getWilayaNameById = (id: number): string => {
  const foundedWilaya = wilayasInfo.find(
    (wilayaInfo) => +wilayaInfo.id == id
  );
  if (foundedWilaya) {
    return foundedWilaya.name;
  } else {
    return "";
  }
};

export {
  featuresCardsData,
  propertiesCardsData,
  categories,
  wilayasInfo,
  getWilayaIdByName,
  getWilayaNameById
};
