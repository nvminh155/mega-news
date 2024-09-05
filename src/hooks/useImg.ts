import { ETags, IMG_URL } from "@/types";

export const UseImg = (tag: ETags, imgIndex: number) => {
    const imgSrc = `${IMG_URL}/${tag}/${imgIndex < 10 ? "0" + imgIndex : imgIndex}.png`;

    const img = new Image();
    img.src = imgSrc;

    img.onerror = function () {
      img.src = `${IMG_URL}/${tag}/01.png`;
    };

    return img.src;
  };