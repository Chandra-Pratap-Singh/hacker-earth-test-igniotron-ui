import { imagesList } from "./constants";

export const getRandomImageUrl: () => string = () => {
  const index = Math.floor(Math.random() * 10) % 7;
  return imagesList[index].Image;
};

export const getImageUrlFromIndex: (index: number) => string = (index) => {
  return imagesList[index % 7].Image;
};
