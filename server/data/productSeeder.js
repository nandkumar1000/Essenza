const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const products = [
  {
    name: 'Ocean Breeze',
    description: 'A fresh and clean scent inspired by sea waves.',
    price: 49.99,
    sizes: ['50ml', '100ml'],
    images: [
      'https://th.bing.com/th/id/OIP.J8ACqzLPyZdwd9_igY8XMgHaJQ?rs=1&pid=ImgDetMain'
    ]
  },
  {
    name: 'Rose Bloom',
    description: 'Elegant floral fragrance with a hint of rose petals.',
    price: 59.99,
    sizes: ['30ml', '75ml'],
    images: [
      'https://m.media-amazon.com/images/I/81yfbM3jHHL._SL1500_.jpg'
    ]
  },
  {
    name: 'Citrus Splash',
    description: 'Lively citrus fragrance to energize your day.',
    price: 39.99,
    sizes: ['50ml'],
    images: [
      'https://th.bing.com/th/id/OIP.aKCqDVptOAz_C67IAesDfgHaKI?rs=1&pid=ImgDetMain'
    ]
  },
  {
    name: 'Mystic Oud',
    description: 'Deep, warm scent with traditional oud notes.',
    price: 89.99,
    sizes: ['100ml'],
    images: [
      'https://th.bing.com/th/id/R.5e37dd6a7a1e9c818318a3c44bfc45ad?rik=OcUrrrQXde7vBg&riu=http%3a%2f%2ffimgs.net%2fimages%2fsecundar%2fo.24261.jpg&ehk=KxeUGLFduO7XUrBYmnTrMF%2fOCx6D23kMEuDmtDAN7A0%3d&risl=&pid=ImgRaw&r=0'
    ]
  },
  {
    name: 'Vanilla Twilight',
    description: 'Sweet and soothing vanilla scent for cozy evenings.',
    price: 44.99,
    sizes: ['50ml', '100ml'],
    images: [
      'https://th.bing.com/th/id/OIP.u04J_YOo7d7vbt7rt6KKaAHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5'
    ]
  },
  {
    name: 'Lavender Dreams',
    description: 'Relaxing and smooth fragrance with lavender essence.',
    price: 34.99,
    sizes: ['30ml', '75ml'],
    images: ['https://th.bing.com/th/id/OIP.wcpH69WineHp5SjLEB8q4AHaHa?rs=1&pid=ImgDetMain']
  },
  {
    name: 'Spice Rush',
    description: 'Bold and spicy fragrance with cinnamon and clove.',
    price: 54.99,
    sizes: ['100ml'],
    images: ['https://5.imimg.com/data5/SELLER/Default/2021/1/XC/LZ/RH/11429660/2-500x500.jpg']
  },
  {
    name: 'Fresh Lemongrass',
    description: 'Crisp lemongrass scent, perfect for summer.',
    price: 42.99,
    sizes: ['50ml'],
    images: ['https://fimgs.net/mdimg/perfume/270x270.37647.jpg']
  },
  {
    name: 'Amber Soul',
    description: 'Warm amber notes with a touch of musk.',
    price: 64.99,
    sizes: ['50ml', '100ml'],
    images: ['https://fimgs.net/photogram/p1200/qq/fb/vRg5YPcwJCTtExyE.jpg']
  },
  {
    name: 'Mint Breeze',
    description: 'Cool and invigorating mint-based perfume.',
    price: 37.99,
    sizes: ['30ml', '60ml'],
    images: ['https://th.bing.com/th/id/OIP.Df39kH2AseD1c9X2xR9cmwHaJ1?rs=1&pid=ImgDetMain']
  }
];

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Product data seeded!');
    process.exit();
  } catch (error) {
    console.error(' Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
