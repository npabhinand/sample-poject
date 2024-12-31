import { checkedIcon, failedIcon, moneyIcon } from '../assets/icons';
import { DetailImage, menu1, menu2, menuPhoto, orderImage1, orderImage2, orderImage3, payoneerLogo, paypalLogo, photoMenu1, photoMenu2, photoMenu3, profile1, profile2, profile3, promo2, promo3, restaurantImage1, restaurantImage2, restaurantImage3, restaurantImage4, restaurantImage5, restaurantImage6, testimonialImage, visaLogo } from '../assets/images';

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
const restaurantCards = [
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
    DishName: 'Spacy fresh crab',
    restaurantName: 'Waroenk kita',
    price: 35,
  },
  {
    id: 2,
    imgURL: orderImage2,
    DishName: 'Spacy fresh crab',
    restaurantName: 'Waroenk kita',
    price: 35,
  },
  {
    id: 3,
    imgURL: orderImage3,
    DishName: 'Spacy fresh crab',
    restaurantName: 'Waroenk kita',
    price: 35,
  },
  {
    id: 4,
    imgURL: orderImage3,
    DishName: 'Spacy fresh crab',
    restaurantName: 'Waroenk kita',
    price: 35,
  },
];

const voucherPromo = [
  {
    id: 1,
    imageURL: promo2,
    btnText: 'Order Now',
    cardColor: '#3DC279',
    textColor: '#fff',
    btnTextColor: '#fff',

  },
  {
    id: 1,
    imageURL: promo3,
    btnText: 'Order Now',
    cardColor: '#E9F7BA',
    textColor: '#6B3A5B',
    btnTextColor: '#6B3A5B',
  },
];

const address = [
  {
    id: 1,
    name: '4517 Washington Ave. Manchester, Kentucky 39495',
    set: 'Deliver to',
  },
  {
    id: 2,
    name: '8502 Preston Rd. Inglewood, Maine 98380',
    set: 'Payment Method',
  },

];

const paymentContent = [
  {
    id: 1,
    imgURL: paypalLogo,
    cardNumber: '212163528465****',
  },
  {
    id: 2,
    imgURL: visaLogo,
    cardNumber: '212163523665****',
  },
  {
    id: 3,
    imgURL: payoneerLogo,
    cardNumber: '212163521265****',
  },
];

const popularMenu = [{
  id: 1,
  imgURL: menu1,
  name: 'Spacy fresh crab',
  price: 16,
}, {
  id: 2,
  imgURL: menu2,
  name: 'Spacy fresh crab',
  price: 16,
}, {
  id: 3,
  imgURL: menu1,
  name: 'Spacy fresh crab',
  price: 16,
}];

const testimonials = [
  {
    id: 1,
    name: 'Dianne Russel',
    date: '12 April 2021',
    rating: 5,
    imgURL: testimonialImage,
    review: 'This Is great, So delicious! You Must Here, With Your family . . ',
  },
  {
    id: 2,
    name: 'Dianne Russel',
    date: '12 April 2021',
    rating: 5,
    imgURL: testimonialImage,
    review: 'This Is great, So delicious! You Must Here, With Your family . . ',
  },
  {
    id: 3,
    name: 'Dianne Russel',
    date: '12 April 2021',
    rating: 5,
    imgURL: testimonialImage,
    review: 'This Is great, So delicious! You Must Here, With Your family . . ',
  },
];

const sections = [
  {
    key: 'image',
    content: DetailImage,
  },
  {
    key: 'details',
    title: 'Wijie Bar and Resto',
    location: '19 Km',
    rating: '4.9 Rating',
    description: 'Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole ...',
  },
  {
    key: 'popularMenu',
  },
  {
    key: 'testimonials',
  },
];

const menuSections = [
  {
    key: 'image',
    content: menuPhoto,
  },
  {
    key: 'details',
    title: 'Rainbow Sandwich Sugarless',
    orders: '2000+ orders',
    rating: '4.9 Rating',
    description1: 'Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.',
    recipe: ['Strawberry', 'Cream', 'Wheat'],
    description2: 'Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.',
  },
  {
    key: 'testimonials',
    type: 'testimonials',
  },
];

export { restaurantArray, menuArray, locationButton, typeButton, foodButton, chatList, ChatContent, NotificationContent, orderContents, voucherPromo, address, paymentContent, popularMenu, testimonials, sections, menuSections, restaurantCards };
