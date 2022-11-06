import images from "assets";
const CategoryData = [
  {
    id: 0,
    type: "전체",
    img: images.all,
    focus: false,
  },
  {
    id: 1,
    type: "가방",
    img: images.bag,
    focus: false,
  },
  { id: 2, type: "디지털 기기", img: images.laptop, focus: false },
  {
    id: 3,
    type: "지갑",
    img: images.wallet,
    focus: false,
  },
  { id: 4, type: "도서", img: images.book, focus: false },
  { id: 5, type: "우산", img: images.umbrella, focus: false },
  {
    id: 6,
    type: "의류",
    img: images.shirt,
    focus: false,
  },
  { id: 7, type: "화장품", img: images.cosmetics, focus: false },
  { id: 8, type: "악세사리", img: images.necklace, focus: false },
  { id: 9, type: "잡화", img: images.cap, focus: false },
  { id: 10, type: "카드/신분증", img: images.card, focus: false },
  {
    id: 11,
    type: "기타",
    img: images.box,
    focus: false,
  },
];

export default CategoryData;
