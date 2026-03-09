import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/farmlyf';

const soyProducts = [
  {
    id: 'soy-001',
    slug: 'unsweetened-soy-milk-1l',
    brand: 'VRUSHAHI',
    name: 'Unsweetened Soy Milk 1L',
    category: 'soy-products',
    subcategory: 'soy-milk',
    description: 'Plant-based unsweetened soy milk, high in protein and calcium.',
    rating: 4.7,
    reviews: 48,
    tag: 'DAIRY-FREE',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'soy-001-v1', quantity: '1', unit: 'L', mrp: 120, price: 99, discount: '18% off', stock: 250 }
    ],
    stock: { quantity: 250 },
    inStock: true
  },
  {
    id: 'soy-002',
    slug: 'chocolate-soy-milk-1l',
    brand: 'VRUSHAHI',
    name: 'Chocolate Soy Milk 1L',
    category: 'soy-products',
    subcategory: 'soy-milk',
    description: 'Creamy chocolate-flavoured soy milk with plant protein.',
    rating: 4.6,
    reviews: 31,
    tag: 'KIDS FAV',
    image: 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'soy-002-v1', quantity: '1', unit: 'L', mrp: 140, price: 119, discount: '15% off', stock: 180 }
    ],
    stock: { quantity: 180 },
    inStock: true
  },
  {
    id: 'soy-003',
    slug: 'soy-paneer-tofu-200g',
    brand: 'VRUSHAHI',
    name: 'Soy Paneer (Tofu) 200g',
    category: 'soy-products',
    subcategory: 'tofu',
    description: 'Fresh tofu block suitable for stir-fry, curry and salads.',
    rating: 4.8,
    reviews: 56,
    tag: 'HIGH PROTEIN',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'soy-003-v1', quantity: '200', unit: 'g', mrp: 85, price: 69, discount: '19% off', stock: 220 }
    ],
    stock: { quantity: 220 },
    inStock: true
  },
  {
    id: 'soy-004',
    slug: 'firm-tofu-400g',
    brand: 'VRUSHAHI',
    name: 'Firm Tofu 400g',
    category: 'soy-products',
    subcategory: 'tofu',
    description: 'Firm tofu for grilling and pan-searing.',
    rating: 4.5,
    reviews: 22,
    tag: 'CHEF PICK',
    image: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'soy-004-v1', quantity: '400', unit: 'g', mrp: 150, price: 129, discount: '14% off', stock: 150 }
    ],
    stock: { quantity: 150 },
    inStock: true
  },
  {
    id: 'soy-005',
    slug: 'soya-chunks-500g',
    brand: 'VRUSHAHI',
    name: 'Soya Chunks 500g',
    category: 'soy-products',
    subcategory: 'soy-protein',
    description: 'Protein-rich soya chunks for curries and pulao.',
    rating: 4.7,
    reviews: 73,
    tag: 'BESTSELLER',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageUrl: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    variants: [
      { id: 'soy-005-v1', quantity: '500', unit: 'g', mrp: 180, price: 149, discount: '17% off', stock: 300 }
    ],
    stock: { quantity: 300 },
    inStock: true
  },
  {
    id: 'soy-006',
    slug: 'soya-granules-500g',
    brand: 'VRUSHAHI',
    name: 'Soya Granules 500g',
    category: 'soy-products',
    subcategory: 'soy-protein',
    description: 'Fine soy granules ideal for keema-style dishes.',
    rating: 4.4,
    reviews: 28,
    tag: 'PROTEIN PLUS',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'soy-006-v1', quantity: '500', unit: 'g', mrp: 165, price: 139, discount: '16% off', stock: 170 }
    ],
    stock: { quantity: 170 },
    inStock: true
  },
  {
    id: 'soy-007',
    slug: 'soy-flour-1kg',
    brand: 'VRUSHAHI',
    name: 'Soy Flour 1kg',
    category: 'soy-products',
    subcategory: 'soy-flour',
    description: 'Defatted soy flour for protein fortification and baking.',
    rating: 4.3,
    reviews: 19,
    tag: 'HEALTHY',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'soy-007-v1', quantity: '1', unit: 'kg', mrp: 210, price: 179, discount: '15% off', stock: 120 }
    ],
    stock: { quantity: 120 },
    inStock: true
  },
  {
    id: 'soy-008',
    slug: 'soy-curd-400g',
    brand: 'VRUSHAHI',
    name: 'Soy Curd 400g',
    category: 'soy-products',
    subcategory: 'soy-dairy-alternative',
    description: 'Plant-based curd alternative made from soy.',
    rating: 4.2,
    reviews: 16,
    tag: 'PROBIOTIC',
    image: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=1200&q=80'
    ],
    variants: [
      { id: 'soy-008-v1', quantity: '400', unit: 'g', mrp: 95, price: 79, discount: '17% off', stock: 140 }
    ],
    stock: { quantity: 140 },
    inStock: true
  }
];

const seedSoyProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected for soy product seeding');

    for (const product of soyProducts) {
      await Product.updateOne(
        { id: product.id },
        { $set: product },
        { upsert: true }
      );
    }

    console.log(`Soy products upserted: ${soyProducts.length}`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Soy product seeding failed:', error);
    try {
      await mongoose.disconnect();
    } catch (_) {}
    process.exit(1);
  }
};

seedSoyProducts();
