import { checkedIcon, failedIcon, moneyIcon } from '../assets/icons';
import { orderImage1, orderImage2, orderImage3, photoMenu1, photoMenu2, photoMenu3, profile1, profile2, profile3, restaurantImage1, restaurantImage2, restaurantImage3, restaurantImage4, restaurantImage5, restaurantImage6 } from '../assets/images';

const restaurantArray = [
  {
    id: 1,
    name: 'Vegan Resto',
    time: 12,
    imgURL: restaurantImage1,
  },
  {
    id: 2,
    name: 'Healthy Food',
    time: 8,
    imgURL: restaurantImage2,
  },
  {
    id: 3,
    name: 'Good Food',
    time: 12,
    imgURL: restaurantImage3,
  },
  {
    id: 4,
    name: 'Smart Resto',
    time: 8,
    imgURL: restaurantImage4,
  },
  {
    id: 5,
    name: 'Vegan Resto',
    time: 8,
    imgURL: restaurantImage5,
  },
  {
    id: 6,
    name: 'Healthy Food',
    time: 8,
    imgURL: restaurantImage6,
  },
];

const menuArray = [
  {
    id: 1,
    title: 'Green Noodle',
    imgURL: photoMenu3,
    restaurantName: 'Noodle Home',
    price: 15,
  },
  {
    id: 2,
    title: 'Fruit Salad',
    imgURL: photoMenu2,
    restaurantName: 'warung Herbal',
    price: 5,
  },
  {
    id: 3,
    title: 'Herbal pancake',
    imgURL: photoMenu1,
    restaurantName: 'warung Herbal',
    price: 7,
  },
];

const typeButton = [
  {
    id: 1,
    buttonName: 'Restaurant',
  },
  {
    id: 2,
    buttonName: 'Menu',

  },
];

const locationButton = [
  {
    id: 1,
    buttonName: '1 Km',
  },
  {
    id: 2,
    buttonName: '>10 Km',
  },
  {
    id: 3,
    buttonName: '<10 Km',
  },
];

const foodButton = [
  {
    id: 1,
    buttonName: 'cake',
  },
  {
    id: 2,
    buttonName: 'Soup',
  },
  {
    id: 3,
    buttonName: 'Main Course',
  },
  {
    id: 4,
    buttonName: 'Appetizer',
  },
  {
    id: 5,
    buttonName: 'Desert',
  },

];


const chatList = [{
  id: 1,
  name: 'Anamwp',
  imageURL: profile1,
}, {
  id: 2,
  name: 'Guy Hawkins',
  imageURL: profile2,
}, {
  id: 3,
  name: 'Leslie Alexander',
  imageURL: profile3,
}];


const ChatContent = [
  {
    id: 1,
    content: 'Just to order',
  }, {
    id: 2,
    content: 'Okay, for what level of spiciness',
  },
  {
    id: 3,
    content: 'Okay Wait a minute! 👍',
  },
  {
    id: 4,
    content: "Okay I'm waiting 👍",
  },
];
const NotificationContent = [
  {
    status: 'orderSuccess',
    content: 'Your order has been taken by the driver',
    time: 'Recently',
    imgURl: checkedIcon,
  },
  {
    status: 'PaymentSuccess',
    content: 'Topup for $100 was successful',
    time: '10.00 Am',
    imgURl: moneyIcon,
  },
  {
    status: 'orderFailed',
    content: 'Your order has been canceled',
    time: '22 July 2021',
    imgURl: failedIcon,
  },
];

const orderContents = [
  {
    id: 1,
    imgURL: orderImage1,
    DishName: 'spacy fresh crab',
    restaurantName: 'Waroenk kita',
    price: 35,
  },
  {
    id: 2,
    imgURL: orderImage2,
    DishName: 'spacy fresh crab',
    restaurantName: 'Waroenk kita',
    price: 35,
  },
  {
    id: 3,
    imgURL: orderImage3,
    DishName: 'spacy fresh crab',
    restaurantName: 'Waroenk kita',
    price: 35,
  },
]

export { restaurantArray, menuArray, locationButton, typeButton, foodButton, chatList, ChatContent, NotificationContent, orderContents };
