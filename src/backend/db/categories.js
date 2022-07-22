import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Road Trip",
    categoryImg:"https://user-images.githubusercontent.com/54243544/180292586-064d48b7-922a-49d7-a263-06f61500ace6.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Budget Travel",
    categoryImg:"https://user-images.githubusercontent.com/54243544/180292415-2d86838b-c6c1-4282-a5bd-67af2d69f4dd.jpg",
  },
  
  {
    _id: uuid(),
    categoryName: "Luxury Travel",
    categoryImg:"https://user-images.githubusercontent.com/54243544/180292527-51fe2d00-e3be-4cbc-ac9d-4ad8f966600b.jpg",
  },{
    _id: uuid(),
    categoryName: "Group Travel",
    categoryImg:"https://user-images.githubusercontent.com/54243544/180292473-db432dad-48e4-4b29-9753-ad43a3b1c7cc.jpg",
  },{
    _id: uuid(),
    categoryName: "Adventure Travel",
    categoryImg:"https://user-images.githubusercontent.com/54243544/180292343-8b676105-5f29-4adc-bae2-b95db698b98c.jpg",
  },{
    _id: uuid(),
    categoryName: "Solo Travel",
    categoryImg:"https://user-images.githubusercontent.com/54243544/180292644-baacd150-2136-4d34-8235-d479cd2dd989.jpg",
  },
];
