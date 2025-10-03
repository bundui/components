import ImageReveal from "@/components/core/image-reveal";

const list = [
  {
    img: "https://images.unsplash.com/photo-1517408395525-fa05dd0bb2ef?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Retro Style"
  },
  {
    img: "https://images.unsplash.com/photo-1501829385782-9841539fa6bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Classic car"
  },
  {
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Computer"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682123999644-1ff465694dde?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Game Console"
  }
];

export default function ImageRevealExample() {
  return <ImageReveal list={list} />;
}
