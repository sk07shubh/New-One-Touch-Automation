import { Category, Product } from '@/types/product';

// Import all machine images
import namkeenMixer from '@/assets/machines/namkeen-mixer.jpg';
import besanMixer from '@/assets/machines/besan-mixer.jpg';
import boondiMaker from '@/assets/machines/boondi-maker.jpg';
import chapatiBhatti from '@/assets/machines/chapati-bhatti.jpg';
import doughBall from '@/assets/machines/dough-ball.jpg';
import dryFruit from '@/assets/machines/dry-fruit.jpg';
import flourMixer from '@/assets/machines/flour-mixer.jpg';
import gravyMachine from '@/assets/machines/gravy-machine.jpg';
import powderGrinder from '@/assets/machines/powder-grinder.jpg';
import ladduMaker from '@/assets/machines/laddu-maker.jpg';
import mawaMachine from '@/assets/machines/mawa-machine.jpg';
import mixerGrinder from '@/assets/machines/mixer-grinder.jpg';
import namkeenMaker from '@/assets/machines/namkeen-maker.jpg';
import oilDryer from '@/assets/machines/oil-dryer.jpg';
import peeler from '@/assets/machines/peeler.jpg';
import rotiMachine from '@/assets/machines/roti-machine.jpg';
import rotiPress from '@/assets/machines/roti-press.jpg';
import steamDhokla from '@/assets/machines/steam-dhokla.jpg';
import sugarcaneJuicer from '@/assets/machines/sugarcane-juicer.jpg';
import vegetableCutter from '@/assets/machines/vegetable-cutter.jpg';
import waferSlicer from '@/assets/machines/wafer-slicer.jpg';

export const categories: Category[] = [
  { id: 'atta-mixing', name: 'Atta Mixing Machine', slug: 'atta-mixing', image: flourMixer },
  { id: 'masala-mixing', name: 'Masala Mixing Machine', slug: 'masala-mixing', image: namkeenMixer },
  { id: 'besan-mixing', name: 'Besan Mixing Machine', slug: 'besan-mixing', image: besanMixer },
  { id: 'boondi-making', name: 'Boondi Making Machine', slug: 'boondi-making', image: boondiMaker },
  { id: 'chapati-bhatthi', name: 'Chapati Bhatthi', slug: 'chapati-bhatthi', image: chapatiBhatti },
  { id: 'dough-ball', name: 'Dough Ball Machine', slug: 'dough-ball', image: doughBall },
  { id: 'dry-fruit', name: 'Dry Fruit Machine', slug: 'dry-fruit', image: dryFruit },
  { id: 'flour-mixing', name: 'Flour Mixing Machine', slug: 'flour-mixing', image: flourMixer },
  { id: 'garlic-peeling', name: 'Garlic Peeling Machine', slug: 'garlic-peeling', image: peeler },
  { id: 'gravy-making', name: 'Gravy Making Machine', slug: 'gravy-making', image: gravyMachine },
  { id: 'gravy-masala', name: 'Gravy Masala Machine', slug: 'gravy-masala', image: gravyMachine },
  { id: 'halwa-machine', name: 'Halwa Machine', slug: 'halwa-machine', image: mawaMachine },
  { id: 'mixer-grinder', name: 'Mixer Grinder', slug: 'mixer-grinder', image: mixerGrinder },
  { id: 'namkeen-making', name: 'Namkeen Making Machine', slug: 'namkeen-making', image: namkeenMaker },
  { id: 'namkeen-pan-coating', name: 'Namkeen Pan Coating Machine', slug: 'namkeen-pan-coating', image: namkeenMixer },
  { id: 'dryer-machine', name: 'Dryer Machine', slug: 'dryer-machine', image: oilDryer },
  { id: 'papad-rolling', name: 'Papad Rolling Machine', slug: 'papad-rolling', image: rotiPress },
  { id: 'coconut-scraper', name: 'Coconut Scraper', slug: 'coconut-scraper', image: mixerGrinder },
  { id: 'potato-peeler', name: 'Potato Peeler Machine', slug: 'potato-peeler', image: peeler },
  { id: 'powder-masala-mixer', name: 'Powder Masala Mixer Machine', slug: 'powder-masala-mixer', image: namkeenMixer },
  { id: 'roti-making', name: 'Roti Making Machine', slug: 'roti-making', image: rotiMachine },
  { id: 'roti-pressing', name: 'Roti Pressing Machine', slug: 'roti-pressing', image: rotiPress },
  { id: 'burr-pressing', name: 'Burr Pressing Machine', slug: 'burr-pressing', image: rotiPress },
  { id: 'roll-labeling', name: 'Roll Labeling Machine', slug: 'roll-labeling', image: doughBall },
  { id: 'conveyor-machine', name: 'Conveyor Machine', slug: 'conveyor-machine', image: rotiMachine },
  { id: 'steam-dhokla', name: 'Steam Dhokla Machine', slug: 'steam-dhokla', image: steamDhokla },
  { id: 'steam-khaman', name: 'Naylon Khaman Machine', slug: 'steam-khaman', image: steamDhokla },
  { id: 'sugarcane-juicer', name: 'Sugarcane Juicer', slug: 'sugarcane-juicer', image: sugarcaneJuicer },
  { id: 'vegetable-chopping', name: 'Vegetable Chopping Machine', slug: 'vegetable-chopping', image: vegetableCutter },
  { id: 'vegetable-cutting', name: 'Vegetable Cutting Machine', slug: 'vegetable-cutting', image: vegetableCutter },
  { id: 'wafer-slicer', name: 'Wafer Slicer Machine', slug: 'wafer-slicer', image: waferSlicer },
  { id: 'powder-grinder', name: 'High Speed Powder Grinder', slug: 'powder-grinder', image: powderGrinder },
  { id: 'laddu-jamun', name: 'Laddu & Jamun Ball Making Machine', slug: 'laddu-jamun', image: ladduMaker },
  { id: 'milk-mawa', name: 'Milk Mawa (Khoya) Machine', slug: 'milk-mawa', image: mawaMachine },
];

export const products: Product[] = [
  // ===== ATTA MIXING MACHINES =====
  // Domestic Atta Mixing Machine (RAM series)
  {
    id: 'atta-mixing-1',
    name: 'Domestic Atta Mixing Machine',
    slug: 'domestic-atta-mixing-machine',
    categoryId: 'atta-mixing',
    description: 'Domestic atta mixing machine for home and small kitchen use. Available in 2 KG to 20 KG capacity.',
    image: flourMixer,
    basePrice: 6000,
    isFeatured: true,
    variants: [
      { id: 'ram-01', name: '2 KG Domestic Atta Mixing Machine', modelNo: 'RAM-01', price: 6000, mrp: 9000, bodyMaterial: 'SS Body', motor: '0.25 hp', gstPercent: 18, description: '2 KG capacity domestic atta mixer' },
      { id: 'ram-02', name: '5 KG Domestic Atta Mixing Machine', modelNo: 'RAM-02', price: 7500, weight: '20 kg', bodyMaterial: 'SS Body', motor: '0.5 hp', gstPercent: 18, description: '5 KG capacity domestic atta mixer' },
      { id: 'ram-03', name: '10 KG Domestic Atta Mixing Machine', modelNo: 'RAM-03', price: 9500, weight: '25 kg', bodyMaterial: 'SS Body', motor: '0.5 hp', gstPercent: 18, description: '10 KG capacity domestic atta mixer' },
      { id: 'ram-04', name: '15 KG Domestic Atta Mixing Machine', modelNo: 'RAM-04', price: 11500, weight: '30 kg', bodyMaterial: 'SS Body', motor: '1 hp', gstPercent: 18, description: '15 KG capacity domestic atta mixer' },
      { id: 'ram-05', name: '20 KG Domestic Atta Mixing Machine', modelNo: 'RAM-05', price: 14500, weight: '35 kg', bodyMaterial: 'SS Body', motor: '1 hp', gstPercent: 18, description: '20 KG capacity domestic atta mixer' },
    ],
  },
  // 2 KG Domestic Atta Mixing Machine (DAM - Fully SS, Helical Gear)
  {
    id: 'atta-mixing-dam',
    name: '2 KG Domestic Atta Mixing Machine',
    slug: '2kg-domestic-atta-mixing-machine',
    categoryId: 'atta-mixing',
    description: 'Fully S.S. Body, Maintenance-Free, Helical Gear System, Noise Less.',
    image: flourMixer,
    basePrice: 6000,
    variants: [
      { id: 'dam-01', name: '2 KG Domestic Atta Mixing Machine', modelNo: 'DAM-01', price: 6000, weight: '11 kg', bodyMaterial: 'SS Body', size: '12\' X 14\' X 19\'', capacity: '0.3 KG TO 2 KG APX / 10 MIN', motor: '0.25 H.P.', gstPercent: 18, description: 'Fully S.S. Body, Maintenance-Free, Helical Gear System, Noise Less', features: ['Fully S.S. Body', 'Maintenance-Free', 'Helical Gear System', 'Noise Less'] },
    ],
  },
  // Atta Mixing Machine Premium (AMP series)
  {
    id: 'atta-mixing-premium',
    name: 'Atta Mixing Machine Premium',
    slug: 'atta-mixing-machine-premium',
    categoryId: 'atta-mixing',
    description: 'Disc Brake, Foot Pressing System, Maintenance Free Helical Gear, Oval Shape Bowl, New Look, Smart Design.',
    image: flourMixer,
    basePrice: 11100,
    isFeatured: true,
    variants: [
      { id: 'amp-01', name: '5 KG Atta Mixing Machine Premium', modelNo: 'AMP-01', price: 11100, weight: '46 kg', bodyMaterial: 'Ms Body', size: '30\' X 16\' X 25\'', capacity: '5 KG / 10 MIN', motor: '0.75 HP', gstPercent: 18, description: 'Disc Brake, Foot Pressing System, Maintenance Free Helical Gear, Oval Shape Bowl, New Look, Smart Design', features: ['Disc Brake', 'Foot Pressing System', 'Maintenance Free Helical Gear', 'Oval Shape Bowl', 'New Look', 'Smart Design'] },
      { id: 'amp-02', name: '10 KG Atta Mixing Machine Premium', modelNo: 'AMP-02', price: 20100, weight: '65 kg', bodyMaterial: 'Ms Body', size: '36\' X 21\' X 35\'', capacity: '10 KG / 10 MIN', motor: '1.5 H.P.', gstPercent: 18, description: 'Disc Brake, Foot Pressing System, Maintenance Free Helical Gear, Oval Shape Bowl, New Look, Smart Design', features: ['Disc Brake', 'Foot Pressing System', 'Maintenance Free Helical Gear', 'Oval Shape Bowl', 'New Look', 'Smart Design'] },
      { id: 'amp-03', name: '15 KG Atta Mixing Machine Premium', modelNo: 'AMP-03', price: 20600, weight: '67 kg', bodyMaterial: 'Ms Body', size: '36\' X 21\' X 35\'', capacity: '15 KG / 10 MIN', motor: '1.5 H.P.', gstPercent: 18, description: 'Disc Brake, Foot Pressing System, Maintenance Free Helical Gear, Oval Shape Bowl, New Look, Smart Design', features: ['Disc Brake', 'Foot Pressing System', 'Maintenance Free Helical Gear', 'Oval Shape Bowl', 'New Look', 'Smart Design'] },
      { id: 'amp-04', name: '20 KG Atta Mixing Machine Premium', modelNo: 'AMP-04', price: 27300, weight: '105 kg', bodyMaterial: 'Ms Body', size: '46\' X 41\' X 26\'', capacity: '20 KG / 15 MIN', motor: '2 H.P.', gstPercent: 18, description: 'Disc Brake, Foot Pressing System, Maintenance Free Helical Gear, Oval Shape Bowl, New Look, Smart Design', features: ['Disc Brake', 'Foot Pressing System', 'Maintenance Free Helical Gear', 'Oval Shape Bowl', 'New Look', 'Smart Design'] },
      { id: 'amp-05', name: '25 KG Atta Mixing Machine Premium', modelNo: 'AMP-05', price: 27900, weight: '135 kg', bodyMaterial: 'Ms Body', size: '48\' X 42\' X 28\'', capacity: '20 KG / 15 MIN', motor: '2 H.P.', gstPercent: 18, description: 'Disc Brake, Foot Pressing System, Maintenance Free Helical Gear, Oval Shape Bowl, New Look, Smart Design', features: ['Disc Brake', 'Foot Pressing System', 'Maintenance Free Helical Gear', 'Oval Shape Bowl', 'New Look', 'Smart Design'] },
    ],
  },
  // Atta Mixing Machine Drum Type S.S. (AMDS series)
  {
    id: 'atta-mixing-drum-ss',
    name: 'Atta Mixing Machine Drum Type S.S.',
    slug: 'atta-mixing-machine-drum-type-ss',
    categoryId: 'atta-mixing',
    description: 'Maintenance Free Helical Gear System, Fully S.S Body, Tilting Drum System.',
    image: flourMixer,
    basePrice: 12100,
    isNewArrival: true,
    variants: [
      { id: 'amds-01', name: '5 KG Atta Mixing Machine Drum Type S.S.', modelNo: 'AMDS-01', price: 12100, weight: '23 kg', bodyMaterial: 'SS Body', size: '25\' X 11\' X 21\'', capacity: '5 KG', motor: '0.5 H.P.', gstPercent: 18, description: 'Maintenance Free Helical Gear System, Fully S.S Body, Tilting Drum System', features: ['Maintenance Free Helical Gear System', 'Fully S.S Body', 'Tilting Drum System'] },
      { id: 'amds-02', name: '10 KG Atta Mixing Machine Drum Type S.S.', modelNo: 'AMDS-02', price: 18100, weight: '40 kg', bodyMaterial: 'SS Body', size: '28\' X 15\' X 31\'', capacity: '10 KG', motor: '1 H.P.', gstPercent: 18, description: 'Maintenance Free Helical Gear System, Fully S.S Body, Tilting Drum System', features: ['Maintenance Free Helical Gear System', 'Fully S.S Body', 'Tilting Drum System'] },
      { id: 'amds-03', name: '15 KG Atta Mixing Machine Drum Type S.S.', modelNo: 'AMDS-03', price: 21100, weight: '52 kg', bodyMaterial: 'SS Body', size: '31\' X 15\' X 35\'', capacity: '15 KG', motor: '1.5 H.P.', gstPercent: 18, description: 'Maintenance Free Helical Gear System, Fully S.S Body, Tilting Drum System', features: ['Maintenance Free Helical Gear System', 'Fully S.S Body', 'Tilting Drum System'] },
    ],
  },
  // Atta Mixing Machine Premium S.S. Bowl Type (AMPS series)
  {
    id: 'atta-mixing-premium-ss-bowl',
    name: 'Atta Mixing Machine Premium S.S. (Bowl Type)',
    slug: 'atta-mixing-machine-premium-ss-bowl-type',
    categoryId: 'atta-mixing',
    description: 'Premium S.S. Body Atta Mixing Machine with Bowl Type design.',
    image: flourMixer,
    basePrice: 12100,
    variants: [
      { id: 'amps-01', name: '5 kg Atta Mixing Machine Premium S.S. (Bowl Type)', modelNo: 'AMPS-01', price: 12100, weight: '46 kg', bodyMaterial: 'SS BODY', size: '30\'x16\'x25\'', capacity: '5 kg / 10 Min', motor: '0.75 hp', gstPercent: 18, description: 'Premium SS Bowl Type atta mixer' },
      { id: 'amps-02', name: '10 kg Atta Mixing Machine Premium S.S. (Bowl Type)', modelNo: 'AMPS-02', price: 21600, weight: '65 kg', bodyMaterial: 'SS BODY', size: '36\'x21\'x35\'', capacity: '10 kg / 10 Min', motor: '1.5 hp', gstPercent: 18, description: 'Premium SS Bowl Type atta mixer' },
      { id: 'amps-03', name: '15 kg Atta Mixing Machine Premium S.S. (Bowl Type)', modelNo: 'AMPS-03', price: 22100, weight: '67 kg', bodyMaterial: 'SS BODY', size: '36\'x21\'x35\'', capacity: '15 kg / 15 Min', motor: '1.5 hp', gstPercent: 18, description: 'Premium SS Bowl Type atta mixer' },
      { id: 'amps-04', name: '20 kg Atta Mixing Machine Premium S.S. (Bowl Type)', modelNo: 'AMPS-04', price: 29600, weight: '105 kg', bodyMaterial: 'SS BODY', size: '46\'x41\'x26\'', capacity: '20 kg / 15 Min', motor: '2 hp', gstPercent: 18, description: 'Premium SS Bowl Type atta mixer' },
      { id: 'amps-05', name: '25 kg Atta Mixing Machine Premium S.S. (Bowl Type)', modelNo: 'AMPS-05', price: 30100, weight: '135 kg', bodyMaterial: 'SS BODY', size: '48\'x42\'x28\'', capacity: '25 kg / 15 Min', motor: '2 hp', gstPercent: 18, description: 'Premium SS Bowl Type atta mixer' },
    ],
  },

  // ===== MASALA MIXING MACHINE =====
  {
    id: 'masala-mixing-1',
    name: 'Namkeen Masala Mixing Machine',
    slug: 'namkeen-masala-mixing-machine',
    categoryId: 'masala-mixing',
    description: 'Namkeen Masala Mixer used to mixing different of spices, powder, fryms, namkeen, pickels, etc. available in 1.5 to 5 feet.',
    image: namkeenMixer,
    basePrice: 20050,
    isFeatured: true,
    variants: [
      { id: 'nmm-01', name: 'Namkeen Masala Mixing Machine 1.5 feet', modelNo: 'NMM-01', price: 20050, weight: '50 kg', bodyMaterial: 'SS Body', size: '36 X 27 X 16', capacity: '8 - 10 KG (one time)', motor: '0.5 H.P.', drumSize: '1.5 Feet(Steel Body)', gstPercent: 18, description: 'Namkeen Masala Mixer used to mixing different of spices, powder, fryms, namkeen, pickels, etc. available in 1.5 to 5 feet.' },
      { id: 'nmm-02', name: 'Namkeen Masala Mixing Machine 2 feet', modelNo: 'NMM-02', price: 22150, weight: '64 kg', bodyMaterial: 'SS Body', size: '38 X 27 X 18', capacity: '15 - 20 KG (one time)', motor: '0.5 H.P.', drumSize: '2 Feet(Steel Body)', gstPercent: 18, description: 'Namkeen Masala Mixer used to mixing different of spices, powder, fryms, namkeen, pickels, etc. available in 1.5 to 5 feet.' },
      { id: 'nmm-03', name: 'Namkeen Masala Mixing Machine 3 feet', modelNo: 'NMM-03', price: 48000, mrp: 52000, weight: '155 kg', bodyMaterial: 'SS Body', size: '65 X 45 X 27', capacity: '40 - 50 KG (one time)', motor: '1.5 hp', drumSize: '3 Feet(Steel Body)', gstPercent: 18, description: 'Namkeen Masala Mixer used to mixing different of spices, powder, fryms, namkeen, pickels, etc. available in 1.5 to 5 feet.' },
      { id: 'nmm-04', name: 'Namkeen Masala Mixing Machine 5 feet', modelNo: 'NMM-04', price: 61000, mrp: 85000, weight: '195 kg', bodyMaterial: 'SS Body', size: '85 X 45 X 29', capacity: '80 - 100 KG ( one time)', motor: '2 hp', drumSize: '5 Feet(Steel Body)', gstPercent: 18, description: 'Namkeen Masala Mixer used to mixing different of spices, powder, fryms, namkeen, pickels, etc. available in 1.5 to 5 feet.' },
    ],
  },

  // ===== BESAN MIXING MACHINE =====
  {
    id: 'besan-mixing-1',
    name: 'Besan Mixing Machine',
    slug: 'besan-mixing-machine',
    categoryId: 'besan-mixing',
    description: 'The Besan Mixing Machine is used to evenly mix the water and the batter or gram flour powder. Batter powder. Besan mixer is used in the namkeen factory, catering company, and small namkeen shops.',
    image: besanMixer,
    basePrice: 22900,
    variants: [
      { id: 'bm-01', name: '10 kg Besan Mixing Machine', modelNo: 'BM-01', price: 22900, mrp: 25000, weight: '84 kg', bodyMaterial: 'SS Body', size: '29 x 37 x 20', capacity: '10kg/10min', motor: '1 hp', gstPercent: 18, description: 'The Besan Mixing Machine is used to evenly mix the water and the batter or gram flour powder, applied in diluted batter powder. Besan mixer is used in the namkeen factory, catering company, and small namkeen shops.' },
      { id: 'bm-02', name: '15 kg Besan Mixing Machine', modelNo: 'BM-02', price: 23950, mrp: 45000, weight: '88 kg', bodyMaterial: 'SS Body', size: '32 x 38 x 20', capacity: '15kg/10min', motor: '1 hp', gstPercent: 18, description: 'The Besan Mixing Machine is used to evenly mix the water and the batter or gram flour powder, applied in diluted batter powder. Besan mixer is used in the namkeen factory, catering company, and small namkeen shops.' },
      { id: 'bm-03', name: '20 Kg Besan Mixing Machine', modelNo: 'BM-03', price: 28450, mrp: 30000, weight: '100 kg', bodyMaterial: 'SS Body', size: '35 x 40 x 25', capacity: '20kg / 15 min', motor: '1.5 hp', gstPercent: 18, description: 'The Besan Mixing Machine is used to evenly mix the water and the batter or gram flour powder, applied in diluted batter powder. Besan mixer is used in the namkeen factory, catering company, and small namkeen shops.' },
    ],
  },

  // ===== BOONDI MAKING MACHINE =====
  {
    id: 'boondi-making-1',
    name: 'Boondi Making Machine',
    slug: 'boondi-making-machine',
    categoryId: 'boondi-making',
    description: 'Big Size Boondi & Motichoor Making, Easy To Use, Fully S.S Body.',
    image: boondiMaker,
    basePrice: 52100,
    variants: [
      { id: 'bmm-01', name: 'Boondi Making Machine', modelNo: 'BMM - 01', price: 52100, mrp: 69748, weight: '62 kg', bodyMaterial: 'SS Body', size: '38\' X 23\' X 43\'', capacity: '100 - 120 LTR PR HR', motor: '1 HP (Speed Controller)', gstPercent: 18, description: 'Big Size Boondi & Motichoor Making, Easy To Use, Fully S.S Body', features: ['Big Size Boondi & Motichoor Making', 'Easy To Use', 'Fully S.S Body'] },
    ],
  },

  // ===== CHAPATI BHATTHI =====
  {
    id: 'chapati-bhatthi-1',
    name: 'SS Chapati Bhatthi',
    slug: 'ss-chapati-bhatthi',
    categoryId: 'chapati-bhatthi',
    description: 'Chapati Tawa bhatti for kitchen hotel is made of SS body material and non stick coating of Tawa cast iron is best for health and its budget friendly.',
    image: chapatiBhatti,
    basePrice: 7350,
    variants: [
      { id: 'cb-105', name: 'SS Chapati bhathi (30X15X14)', modelNo: 'CB - 105', price: 7350, weight: '25 kg', bodyMaterial: 'SS BODY', gstPercent: 18, description: 'Chapati Tawa bhatti for kitchen hotel is made of SS body material and non stick coating of Tawa cast iron is best for health and its budget friendly' },
      { id: 'cb-101', name: 'SS Chapati Bhatthi (18 x 36 x 12)', modelNo: 'CB-101', price: 11550, weight: '42 kg', bodyMaterial: 'SS Body', size: '18 x 36 x 12', gstPercent: 18, description: 'Chapati Tawa bhatti for kitchen hotel is made of SS body material and non stick coating of Tawa cast iron is best for health and its budget friendly' },
      { id: 'cb-102', name: 'SS Chapati Bhatthi (18 x 36 x 32)', modelNo: 'CB-102', price: 13250, weight: '50 kg', bodyMaterial: 'SS Body', size: '18 x 36 x 32', gstPercent: 18, description: 'Chapati Tawa bhatti for kitchen hotel is made of SS body material and non stick coating of Tawa cast iron is best for health and its budget friendly' },
      { id: 'cb-103', name: 'SS Chapati Bhatthi (24 x 48 x 12)', modelNo: 'CB-103', price: 17100, weight: '77 kg', bodyMaterial: 'SS Body', size: '24 x 48 x 12', gstPercent: 18, description: 'Chapati Tawa bhatti for kitchen hotel is made of SS body material and non stick coating of Tawa cast iron is best for health and its budget friendly' },
      { id: 'cb-104', name: 'SS Chapati Bhatthi (24 x 48 x 32)', modelNo: 'CB-104', price: 19400, weight: '90 kg', bodyMaterial: 'SS Body', size: '24 x 48 x 32', gstPercent: 18, description: 'Chapati Tawa bhatti for kitchen hotel is made of SS body material and non stick coating of Tawa cast iron is best for health and its budget friendly' },
    ],
  },

  // ===== DOUGH BALL MACHINE =====
  {
    id: 'dough-ball-1',
    name: 'Dough Ball Machine',
    slug: 'dough-ball-machine',
    categoryId: 'dough-ball',
    description: 'The machine is easy-to-operate and clean and can be customized to control the size of dough balls as per the requirement.',
    image: doughBall,
    basePrice: 34000,
    isFeatured: true,
    variants: [
      { id: 'dbm-05', name: 'DOUGH BALL MACHINE BLADE TYPE (NEW MODEL)', modelNo: 'DBM-05', price: 34000, weight: '56 kg', bodyMaterial: 'SS Body', size: '25 X 17 X 26', capacity: '1500 To 2000 Pr hr', motor: '0.75 hp + 120w', gstPercent: 18, description: 'Blade type dough ball machine - new model' },
      { id: 'db-01', name: 'Dough Ball Machine (Single Worm Type)', modelNo: 'DB-01', price: 35000, mrp: 38115, weight: '63 kg', bodyMaterial: 'SS Body', size: '30 x 16 x 35', capacity: '2000 TO 2500', motor: '0.75hp', gstPercent: 18, description: 'The machine is easy-to-operate and clean and can be customized to control the size of dough balls as per the requirement.' },
      { id: 'db-02', name: 'Dough Ball Machine (Double Worm Type)', modelNo: 'DB-02', price: 45000, weight: '93 kg', bodyMaterial: 'SS Body', size: '38 x 22 x 38', capacity: '2500 TO 6000', motor: '1 hp', gstPercent: 18, description: 'The machine is easy-to-operate and clean and can be customized to control the size of dough balls as per the requirement.' },
      { id: 'db-03', name: 'Dough Ball and Dough Kneading 2 In 1 Machine', modelNo: 'DB-03', price: 45000, weight: '81 kg', bodyMaterial: 'SS Body', size: '45 x 19 x 33', motor: '1.5 hp', gstPercent: 18, description: 'Commercial Atta Dough Kneader With Dough Ball Making / Cutting Machine used for Hotels, Restaurant and more places which evenly cuts dough as per your requirement.' },
      { id: 'dbdkbt-01', name: 'Dough Ball And Dough Kneading 2 IN 1 Machine Blade Type', modelNo: 'DBDKBT - 01', price: 45000, motor: '1.5 hp', gstPercent: 18, description: '2 in 1 Dough Ball and Dough kneading machine Blade Type. A stainless steel 2-in-1 dough ball and dough kneading machine (blade type).' },
    ],
  },

  // ===== DRY FRUIT MACHINE =====
  {
    id: 'dry-fruit-1',
    name: 'Dry Fruit Chips & Powder Machine',
    slug: 'dry-fruit-chips-powder-machine',
    categoryId: 'dry-fruit',
    description: 'It is used to make slice and powder from peanut, almond, cashew, Pista and other dry fruits.',
    image: dryFruit,
    basePrice: 10500,
    variants: [
      { id: 'dfm-101', name: 'Dry Fruit Chips & Powder Machine', modelNo: 'DFM-101', price: 10500, weight: '30 kg', bodyMaterial: 'SS Body', size: '22 x 21 x 16', capacity: '25-30 KG', motor: '1 HP 960 RPM', gstPercent: 18, description: 'It is used to make slice and powder from peanut, almond, cashew, Pista and other dry fruits.' },
    ],
  },

  // ===== FLOUR MIXING MACHINE =====
  {
    id: 'flour-mixing-1',
    name: 'Flour Mixing Machine',
    slug: 'flour-mixing-machine',
    categoryId: 'flour-mixing',
    description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.',
    image: flourMixer,
    basePrice: 5850,
    isNewArrival: true,
    variants: [
      { id: 'fm-01', name: '2 Kg Flour Mixing Machine', modelNo: 'FM-01', price: 5850, weight: '16 kg', bodyMaterial: 'SS Body', size: '14 x 18 x 15', capacity: '2 kg / 5 min', motor: '0.25 hp', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
      { id: 'fm-02', name: '5 Kg Flour Mixing Machine', modelNo: 'FM-02', price: 8400, weight: '30 kg', bodyMaterial: 'SS Body', size: '22 x 18 x 18', capacity: '5 kg/10 min', motor: '0.5 hp', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
      { id: 'fm-09', name: '5 Kg Flour Mixing Machine', modelNo: 'FM-09', price: 11100, weight: '46 kg', bodyMaterial: 'MS Body', size: '30 x 16 x 25', capacity: '5kg / 10 min', motor: '0.75 hp', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
      { id: 'fm-03', name: '10 Kg Flour Mixing Machine', modelNo: 'FM-03', price: 19000, weight: '65 kg', bodyMaterial: 'MS BODY', size: '36 x 21 x 35', capacity: '10 kg/10min', motor: '1.5 hp', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
      { id: 'fm-04', name: '15 Kg Flour Mixing Machine', modelNo: 'FM-04', price: 19550, weight: '67 kg', bodyMaterial: 'Ms Body', size: '36 x 21 x 35', capacity: '15KG/10 min', motor: '1.5 hp', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
      { id: 'fm-05', name: '20 Kg Flour Mixing Machine', modelNo: 'FM -05', price: 26350, weight: '105 kg', bodyMaterial: 'MS Body', size: '46 x 41 x 26', capacity: '20kg/15 min', motor: '2 hp', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
      { id: 'fm-06', name: '25 Kg Flour Mixing Machine', modelNo: 'FM-06', price: 27400, weight: '135 kg', bodyMaterial: 'Ms Body', size: '48 x 42 x 28', capacity: '25kg / 15min', motor: '2 hp', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
      { id: 'fm-07', name: '30 Kg Flour Mixing Machine', modelNo: 'FM-07', price: 32100, weight: '140 kg', bodyMaterial: 'MS Body', size: '42 x 40 x 25', capacity: '30kg /15min', motor: '2 hp', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
      { id: 'fm-08a', name: '40 Kg Flour Mixing Machine', modelNo: 'FM-08', price: 44200, weight: '158 kg', bodyMaterial: 'Ms Body', size: '50 x 42 x 25', capacity: '40kg/15min', motor: '2 hp three phase', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
      { id: 'fm-08b', name: '50 Kg Flour Mixing Machine', modelNo: 'FM-08', price: 48400, weight: '165 kg', bodyMaterial: 'Ms Body', size: '51 x 45 x 27', capacity: '50 kg/ 20min', motor: '2 hp three phase', gstPercent: 18, description: 'We are manufacturing mini to large sized dough making/ kneading machine having bowl capacity 2 kg to 50 kg, easy to handle for all kinds of dough.' },
    ],
  },

  // ===== GARLIC PEELING MACHINE =====
  {
    id: 'garlic-peeling-1',
    name: 'Garlic Peeling Machine',
    slug: 'garlic-peeling-machine',
    categoryId: 'garlic-peeling',
    description: 'Automatic garlic peeling machine for efficient peeling. Available in 5 KG to 50 KG capacity.',
    image: peeler,
    basePrice: 22500,
    isNewArrival: true,
    variants: [
      { id: 'gp-01', name: 'Garlic Peeling Machine 5 Kg', modelNo: 'GP-01', price: 22500, weight: '30 kg', bodyMaterial: 'SS Body', size: '18 x 18 x 30', capacity: '5 kg/hr', motor: '0.5 hp', gstPercent: 18, description: '5 Kg/hr garlic peeler' },
      { id: 'gp-02', name: 'Garlic Peeling Machine 10 Kg', modelNo: 'GP-02', price: 26000, weight: '35 kg', bodyMaterial: 'SS Body', size: '18 x 18 x 30', capacity: '10 kg/hr', motor: '0.5 hp', gstPercent: 18, description: '10 Kg/hr garlic peeler' },
      { id: 'gp-03', name: 'Garlic Peeling Machine 20 Kg', modelNo: 'GP-03', price: 32000, weight: '40 kg', bodyMaterial: 'SS Body', size: '18 x 18 x 36', capacity: '20 kg/hr', motor: '1 hp', gstPercent: 18, description: '20 Kg/hr garlic peeler' },
      { id: 'gp-04', name: 'Garlic Peeling Machine 50 Kg', modelNo: 'GP-04', price: 45000, weight: '50 kg', bodyMaterial: 'SS Body', size: '18 x 18 x 42', capacity: '50 kg/hr', motor: '1 hp', gstPercent: 18, description: '50 Kg/hr garlic peeler' },
    ],
  },
  // Gravy Making Machine
  {
    id: 'gravy-making-1',
    name: 'Gravy Making Machine',
    slug: 'gravy-making-machine',
    categoryId: 'gravy-making',
    description: 'This Gravy machine is very useful in all types of commercial kitchens just you have to fill the raw material into the grinding chamber and this gravy Pulverizer converts the material into gravy or chutney. You can make gravy of either tomatoes, ginger, garlic or onions.',
    image: gravyMachine,
    basePrice: 7250,
    isFeatured: true,
    variants: [
      { id: 'gm-101', name: '1 Hp Gravy Machine', modelNo: 'GM-101', price: 7250, weight: '20 kg', bodyMaterial: 'SS Body', size: '19 x 21 x 14', capacity: '10 to 15 Kg P/Hr', motor: '1 Hp', drumSize: '5 x 3', gstPercent: 18, description: 'This Gravy machine is very useful in all types of commercial kitchens.' },
      { id: 'gm-102', name: '2 Hp Gravy Machine', modelNo: 'GM-102', price: 8500, weight: '37 kg', bodyMaterial: 'SS Body', size: '21 x 27 x 14', capacity: '35-40 Kg P/Hr', motor: '2 Hp', drumSize: '7 x 3', gstPercent: 18, description: 'This Gravy machine is very useful in all types of commercial kitchens.' },
      { id: 'gm-103', name: '3 Hp Gravy Machine', modelNo: 'GM-103', price: 11650, weight: '40 kg', bodyMaterial: 'SS Body', size: '22 x 30 x 16', capacity: '100 to 130 Kg P/Hr', motor: '3 Hp', drumSize: '9 x 3', gstPercent: 18, description: 'This Gravy machine is very useful in all types of commercial kitchens.' },
      { id: 'gm-104', name: '5 Hp Gravy Machine (Three Phase)', modelNo: 'GM-104', price: 20050, weight: '65 kg', bodyMaterial: 'SS Body', size: '22 x 33 x 17', capacity: '200 to 300 Kg P/Hr', motor: '5 Hp', drumSize: '12 x 4', gstPercent: 18, description: 'This Gravy machine is very useful in all types of commercial kitchens.' },
      { id: 'gm-105', name: '7.5 Hp Gravy Machine (Three Phase)', modelNo: 'GM-105', price: 44700, weight: '140 kg', bodyMaterial: 'SS Body', size: '35 x 45 x 25', capacity: '600 to 700 Kg P/Hr', motor: '7.5 Hp', drumSize: '14 x 7', gstPercent: 18, description: 'This Gravy machine is very useful in all types of commercial kitchens.' },
    ],
  },
  // Gravy Masala Machine
  {
    id: 'gravy-masala-1',
    name: 'Gravy Masala Machine',
    slug: 'gravy-masala-machine',
    categoryId: 'gravy-masala',
    description: 'Gravy Masala machine use for making punjabi gravy, pest, pulp & juice of all green vegetable like tomato, onion, palak, beetroot etc... wet dal crush for idli, dhosa, khaman, dalwada, juice form amla & fruits. This most useful in restaurant, catering, hotel etc.',
    image: gravyMachine,
    basePrice: 12700,
    isNewArrival: true,
    variants: [
      { id: 'gmm-101', name: '2 Hp Gravy Masala Machine', modelNo: 'GMM-101', price: 12700, weight: '45 kg', bodyMaterial: 'SS Body', size: '21 x 17 x 31', capacity: '35-40 Kg P/Hr', motor: '2 Hp', drumSize: '8 x 4', gstPercent: 18, description: 'Gravy Masala machine use for making punjabi gravy, pest, pulp & juice.' },
      { id: 'gmm-102', name: '3 Hp Gravy Masala Machine', modelNo: 'GMM-102', price: 16000, weight: '54 kg', bodyMaterial: 'SS Body', size: '25 x 19 x 37', capacity: '100 to 130 Kg P/Hr', motor: '3 Hp', drumSize: '10 x 4', gstPercent: 18, description: 'Gravy Masala machine use for making punjabi gravy, pest, pulp & juice.' },
      { id: 'gmm-103', name: '4 Hp Gravy Masala Machine', modelNo: 'GMM-103', price: 22100, weight: '82 kg', bodyMaterial: 'SS Body', size: '28 x 24 x 41', capacity: '150 to 180 Kg P/Hr', motor: '4 Hp', drumSize: '10 x 6', gstPercent: 18, description: 'Gravy Masala machine use for making punjabi gravy, pest, pulp & juice.' },
      { id: 'gmm-104', name: '5 Hp Gravy Masala Machine', modelNo: 'GMM-104', price: 23700, weight: '85 kg', bodyMaterial: 'SS Body', size: '28 x 24 x 41', capacity: '200 to 300 Kg P/Hr', motor: '5 Hp', drumSize: '10 x 6', gstPercent: 18, description: 'Gravy Masala machine use for making punjabi gravy, pest, pulp & juice.' },
      { id: 'gmm-105', name: '7.5 Hp Gravy Masala Machine', modelNo: 'GMM-105', price: 36850, weight: '105 kg', bodyMaterial: 'SS Body', size: '30 x 24 x 48', capacity: '600 to 700 Kg P/Hr', motor: '7.5 Hp', drumSize: '12 x 6', gstPercent: 18, description: 'Gravy Masala machine use for making punjabi gravy, pest, pulp & juice.' },
    ],
  },
  // Halwa Machine
  {
    id: 'halwa-machine-1',
    name: 'Halwa Machine',
    slug: 'halwa-machine',
    categoryId: 'halwa-machine',
    description: 'Machine will bake the material evenly. It can be used as a mixing machine to mix materials, slurry, liquids etc. It is useful for baking all types of halwa like moong halwa, Karachi halwa, tirunelveli halwa, Bombay halwa, ice halwa, besan, atta, all types of burfi\'s etc.',
    image: mawaMachine,
    basePrice: 89100,
    variants: [
      { id: 'hm-01', name: 'Halwa Machine 2 Feet', modelNo: 'HM-01', price: 89100, weight: '200 kg', bodyMaterial: 'SS Body', size: '48 x 30 x 43', capacity: '20 TO 25 KG', motor: '0.5 H.P.', gstPercent: 18, description: 'Halwa machine 2 feet for baking and mixing halwa.' },
      { id: 'hm-02', name: 'Halwa Machine 3 Feet', modelNo: 'HM-02', price: 105100, weight: '250 kg', bodyMaterial: 'SS Body', size: '56 x 38 x 43', capacity: '30 TO 35 KG', motor: '1 H.P.', gstPercent: 18, description: 'Halwa machine 3 feet for baking and mixing halwa.' },
      { id: 'hm-03', name: 'Halwa Machine 4 Feet', modelNo: 'HM-03', price: 141100, weight: '300 kg', bodyMaterial: 'SS Body', size: '68 x 50 x 49', capacity: '50 TO 60 KG', motor: '1.5 hp', gstPercent: 18, description: 'Halwa machine 4 feet for baking and mixing halwa.' },
      { id: 'hm-04', name: 'Halwa Machine 5 Feet', modelNo: 'HM-04', price: 247100, weight: '350 kg', bodyMaterial: 'SS Body', size: '88 x 62 x 49', capacity: '70 TO 80 KG', motor: '2 hp', gstPercent: 18, description: 'Halwa machine 5 feet for baking and mixing halwa.' },
    ],
  },
  // Mixer Grinder
  {
    id: 'mixer-grinder-1',
    name: 'Mixer Grinder',
    slug: 'mixer-grinder',
    categoryId: 'mixer-grinder',
    description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc. Available in standard, square, and tilting models from 0.5 HP to 3 HP.',
    image: mixerGrinder,
    basePrice: 4900,
    isFeatured: true,
    variants: [
      { id: 'm-101', name: '0.5 Hp Mixer Grinder 2.5 Ltr', modelNo: 'M-101', price: 4900, weight: '10 kg', bodyMaterial: 'SS Body', size: '10 x 8 x 20', capacity: '2.5 Liter', motor: '0.5 HP', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-102', name: '1.5 Hp Mixer Grinder 3 Ltr', modelNo: 'M-102', price: 7250, weight: '33 kg', bodyMaterial: 'SS Body', size: '10 x 15 x 22', capacity: '3 Liter', motor: '1.5 hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-103', name: '1.5 Hp Mixer Grinder 5 Ltr', modelNo: 'M-103', price: 7350, weight: '33 kg', bodyMaterial: 'SS Body', size: '10 x 14 x 26', capacity: '5 liter', motor: '1.5 HP', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-104', name: '2 Hp Mixer Grinder 5 Ltr', modelNo: 'M-104', price: 7870, weight: '35 kg', bodyMaterial: 'SS Body', size: '10 x 14 x 26', capacity: '5 Liter', motor: '2 Hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-105', name: '2 Hp Mixer Grinder 10 Ltr', modelNo: 'M-105', price: 8400, weight: '35 kg', bodyMaterial: 'SS Body', size: '10 x 14 x 26', capacity: '10 Liter', motor: '2 Hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-106', name: '2 Hp Mixer Grinder 10 Ltr With Pipe', modelNo: 'M-106', price: 8900, weight: '36 kg', bodyMaterial: 'SS Body', size: '10 x 20 x 27', capacity: '10 Liter', motor: '2 Hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-107', name: '1.5 Hp Mixer Grinder Square Model 5 Ltr', modelNo: 'M-107', price: 8500, weight: '36 kg', bodyMaterial: 'SS Body', size: '17 x 22 x 27', capacity: '5 Liter', motor: '1.5 hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-108', name: '2 Hp Mixer Grinder Square Model 5 Ltr', modelNo: 'M-108', price: 9000, weight: '38 kg', bodyMaterial: 'SS Body', size: '22 x 27 x 13', capacity: '5 Liter', motor: '2 Hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-109', name: '2 Hp Mixer Grinder Square Model 10 Ltr', modelNo: 'M-109', price: 9550, weight: '40 kg', bodyMaterial: 'SS Body', size: '12 x 32 x 15', capacity: '10 Liter', motor: '2 Hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-110', name: '3 Hp Mixer Grinder Square Model 14 Ltr', modelNo: 'M-110', price: 13950, weight: '45 kg', bodyMaterial: 'SS Body', size: '14 x 15 x 37', capacity: '14 Liter.', motor: '3 Hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-111', name: '1.5 Hp Mixer Grinder Tilting Model 5 Ltr', modelNo: 'M-111', price: 9550, weight: '38 kg', bodyMaterial: 'SS Body', size: '23 x 18 x 35', capacity: '5 Liter', motor: '1.5 hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-112', name: '2 Hp Mixer Grinder Tilting Model 5 Ltr', modelNo: 'M-112', price: 10080, weight: '41 kg', bodyMaterial: 'SS Body', size: '23 x 18 x 35', capacity: '5 Liter', motor: '2 Hp', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-113', name: '2 HP Mixer Grinder Tilting Model 10 Ltr', modelNo: 'M-113', price: 10600, weight: '43 kg', bodyMaterial: 'SS Body', size: '23x18x40', capacity: '10 Liter', motor: '2 HP', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
      { id: 'm-114', name: '3 HP Mixer Grinder Tilting Model 14 Ltr', modelNo: 'M-114', price: 14800, weight: '49 kg', bodyMaterial: 'SS Body', size: '25x19x49', capacity: '14 Liter', motor: '3 HP', gstPercent: 18, description: 'Heavy Duty Mixer Grinder is used in commercial kitchen like hotel, canteen, cafe, restaurant, hostel etc.' },
    ],
  },
  // Namkeen Making Machine
  {
    id: 'namkeen-making-1',
    name: 'Namkeen Making Machine',
    slug: 'namkeen-making-machine',
    categoryId: 'namkeen-making',
    description: 'Commercial namkeen making machine for production of various namkeen and snacks.',
    image: namkeenMaker,
    basePrice: 15850,
    variants: [
      { id: 'nm-01', name: '7 Inch Namkeen Machine', modelNo: 'NM-01', price: 15850, weight: '55 kg', bodyMaterial: 'SS Body', size: '40x36x11', capacity: '60-70 KG/hr', motor: '0.5 HP', gstPercent: 18, description: '7 inch namkeen making machine' },
      { id: 'nm-02', name: '9 Inch Namkeen Machine', modelNo: 'NM-02', price: 17950, weight: '80 kg', bodyMaterial: 'SS Body', size: '46X41X13', capacity: '100-150 KG', motor: '1 hp', gstPercent: 18, description: '9 inch namkeen making machine' },
    ],
  },
  // Namkeen Pan Coating Machine
  {
    id: 'namkeen-pan-coating-1',
    name: 'Namkeen Pan Coating Machine',
    slug: 'namkeen-pan-coating-machine',
    categoryId: 'namkeen-pan-coating',
    description: 'Namkeen pan coating machine for uniform masala coating on namkeen products.',
    image: namkeenMixer,
    basePrice: 31600,
    variants: [
      { id: 'ncm-01', name: 'Namkeen Pan Coating Machine 18x18', modelNo: 'NCM-01', price: 31600, weight: '66 kg', bodyMaterial: 'SS Body', size: '41 x 23 x 36', capacity: '10-15 Kg (one time)', motor: '0.5 hp', gstPercent: 18, description: '18x18 pan coating machine' },
      { id: 'ncm-04', name: 'Namkeen Pan Coating Machine Tilting 18x18', modelNo: 'NCM-04', price: 32650, weight: '88 kg', bodyMaterial: 'SS Body', size: '42 x 19 x 38', capacity: '10-15 KG (one time)', motor: '0.5 hp', gstPercent: 18, description: 'Tilting 18x18 pan coating machine' },
      { id: 'ncm-05', name: 'Namkeen Pan Coating Machine Tilting 24x24', modelNo: 'NCM-05', price: 36850, weight: '162 kg', bodyMaterial: 'SS Body', size: '68 x 37 x 51', capacity: '30-40 KG (one time)', motor: '1 hp', gstPercent: 18, description: 'Tilting 24x24 pan coating machine' },
      { id: 'ncm-03', name: 'Namkeen Pan Coating Machine 32x32', modelNo: 'NCM-03', price: 50500, weight: '210 kg', bodyMaterial: 'SS Body', size: '78 x 31 x 75', capacity: '35-40 KG (one time)', motor: '1 HP', gstPercent: 18, description: '32x32 pan coating machine' },
      { id: 'ncm-05b', name: 'Namkeen Pan Coating Machine Tilting 24x24 (Heavy)', modelNo: 'NCM 05', price: 96850, weight: '302 Kg', bodyMaterial: 'SS 304', size: '60 X 91 X 74', capacity: '20 KG (approx)', motor: '1 Hp', gstPercent: 18, description: 'Heavy duty tilting 24x24 pan coating machine' },
    ],
  },
  // Dryer Machine
  {
    id: 'dryer-machine-1',
    name: 'Dryer Machine',
    slug: 'dryer-machine',
    categoryId: 'dryer-machine',
    description: 'Industrial dryer machine for drying namkeen, snacks, and food products.',
    image: oilDryer,
    basePrice: 19550,
    variants: [
      { id: 'dm-101', name: 'Dryer Machine', modelNo: 'DM-101', price: 19550, weight: '95 kg', bodyMaterial: 'SS Body', size: '38 x 30 x 21', capacity: '20kg', motor: '1Hp', gstPercent: 18, description: 'Standard dryer machine' },
    ],
  },
  // Papad Rolling Machine
  {
    id: 'papad-rolling-1',
    name: 'Papad Rolling Machine',
    slug: 'papad-rolling-machine',
    categoryId: 'papad-rolling',
    description: 'Commercial papad rolling machine for uniform papad production.',
    image: rotiPress,
    basePrice: 16500,
    variants: [
      { id: 'pr-01', name: 'Papad Rolling Machine', modelNo: 'PR-01', price: 16500, weight: '63 kg', bodyMaterial: 'SS Body', size: '27 x 18 x 28', capacity: '50-60 Kg', motor: '0.5Hp', gstPercent: 18, description: 'Standard papad rolling machine' },
    ],
  },
  // Coconut Scraper
  {
    id: 'coconut-scraper-1',
    name: 'Coconut Scraper',
    slug: 'coconut-scraper',
    categoryId: 'coconut-scraper',
    description: 'Electric coconut scraper machine for fast and efficient coconut scraping.',
    image: mixerGrinder,
    basePrice: 3750,
    variants: [
      { id: 'cs-01', name: 'Coconut Scraper', modelNo: 'CS-01', price: 3750, weight: '8 kg', bodyMaterial: 'SS Body', size: '13 x 11 x 11', motor: '0.25Hp', gstPercent: 18, description: 'Compact coconut scraper' },
    ],
  },
  // Potato Peeler Machine
  {
    id: 'potato-peeler-1',
    name: 'Potato Peeler Machine',
    slug: 'potato-peeler-machine',
    categoryId: 'potato-peeler',
    description: 'Commercial potato peeler machine. Available in 5 KG to 30 KG capacity.',
    image: peeler,
    basePrice: 11100,
    variants: [
      { id: 'ppm-101', name: 'Potato Peeler Machine 5 kg', modelNo: 'PPM-101', price: 11100, weight: '33 kg', bodyMaterial: 'SS Body', size: '25 x 19 x 15', capacity: '5kg', motor: '0.5Hp', gstPercent: 18, description: '5 kg potato peeler' },
      { id: 'ppm-102', name: 'Potato Peeler Machine 10 kg', modelNo: 'PPM-102', price: 13750, weight: '44 kg', bodyMaterial: 'SS Body', size: '31 x 28 x 17', capacity: '10 Kg', motor: '0.75Hp', gstPercent: 18, description: '10 kg potato peeler' },
      { id: 'ppm-103', name: 'Potato Peeler Machine 15 kg', modelNo: 'PPM-103', price: 18450, weight: '56 kg', bodyMaterial: 'SS Body', size: '33 x 31 x 19', capacity: '15kg', motor: '1.5Hp', gstPercent: 18, description: '15 kg potato peeler' },
      { id: 'ppm-104', name: 'Potato Peeler Machine 20 Kg', modelNo: 'PPM-104', price: 22150, weight: '59 kg', bodyMaterial: 'SS Body', size: '33 x 34 x 19', capacity: '20kg', motor: '2Hp', gstPercent: 18, description: '20 kg potato peeler' },
      { id: 'ppm-105', name: 'Potato Peeler Machine 30 kg', modelNo: 'PPM-105', price: 34750, weight: '100 kg', bodyMaterial: 'SS Body', size: '35 x 44 x 20', capacity: '30kg', motor: '2Hp', gstPercent: 18, description: '30 kg potato peeler' },
    ],
  },
  // Powder Masala Mixer Machine
  {
    id: 'powder-masala-mixer-1',
    name: 'Powder Masala Mixer Machine',
    slug: 'powder-masala-mixer-machine',
    categoryId: 'powder-masala-mixer',
    description: 'Powder masala mixer machine drum type for uniform mixing of powder masala.',
    image: namkeenMixer,
    basePrice: 44200,
    variants: [
      { id: 'pmrm-b6', name: '2 Feet Powder Masala Mixer Machine', modelNo: 'PMRM-B6', price: 44200, weight: '50 kg', bodyMaterial: 'SS 304 BODY', size: '24 x 40 x 25', motor: '1.5HP', gstPercent: 18, description: '2 feet powder masala mixer' },
      { id: 'pm-ms-103', name: '5 Feet Powder Masala Mixer Machine', modelNo: 'PM/MS 103', price: 98250, bodyMaterial: 'SS 304', size: '91 x 45 x 35', motor: '2 HP 380 V', gstPercent: 18, description: '5 feet powder masala mixer' },
    ],
  },
  // Roti Making Machine
  {
    id: 'roti-making-1',
    name: 'Roti Making Machine',
    slug: 'roti-making-machine',
    categoryId: 'roti-making',
    description: 'Automatic roti making machine for commercial production. Multiple models available.',
    image: rotiMachine,
    basePrice: 35000,
    isFeatured: true,
    variants: [
      { id: 'srm-01b', name: 'Premium Automatic Roti Machine 500 Jr', modelNo: 'SRM-01', price: 35000, mrp: 80000, weight: '125 kg', bodyMaterial: 'Stainless Steel', size: '31 x 23 x 38 inch', capacity: '500 pc/Hr', motor: '3kW 1P', gstPercent: 18, description: 'Premium 500 Jr automatic roti machine' },
      { id: 'compact-plus', name: '2D Automatic Roti Machine', modelNo: 'Compact Plus', price: 60000, weight: '52 kg', bodyMaterial: 'Stainless Steel', capacity: '500/Hour', motor: 'Single Phase 240/250 V', gstPercent: 18, description: '2D compact automatic roti machine' },
      { id: 'rcs', name: 'Premium Automatic Roti Machine 700 pf/hr', modelNo: 'RCS', price: 110000, weight: '185 kg', bodyMaterial: 'MS + IRON', capacity: '700+ ROTI', motor: '220V Single Phase', gstPercent: 18, description: 'Premium 700 p/hr automatic roti machine' },
      { id: 'arm-700', name: 'Premium Automatic Roti Machine 700 pf/hr', modelNo: '86.5', price: 110000, weight: '100 kg', bodyMaterial: 'SS BODY', capacity: '700 ROTI PF/HR', motor: '2.25 KW', gstPercent: 18, description: 'Premium 700 p/hr roti machine' },
      { id: 'dk-08', name: 'Double Plate Automatic Roti Making Machine Set', modelNo: 'DK-08', price: 129000, weight: '150 kg', bodyMaterial: 'SS Body', capacity: '1200 to 1800 pc/HR', motor: '1 HP + 1/2V + 1/4 HP', gstPercent: 18, description: 'Double plate automatic roti machine set' },
      { id: 'pc4', name: 'Premium Automatic Roti Machine 900-1000 PC/HR', modelNo: 'PC4', price: 330000, weight: '350 kg', capacity: '900-1000 PC/HR', motor: '1 HP', gstPercent: 18, description: 'High capacity premium automatic roti machine' },
      { id: 'c-800', name: 'C-800 14" Automatic Roti Making Machine Big Size', modelNo: 'C-800', price: 1600000, weight: '160 kg', bodyMaterial: 'MS-BODY SS', size: '60" X 25" X 50"', capacity: '12 Per Minute', motor: '1 HP 220V Single Phase', gstPercent: 18, description: 'Industrial grade big size automatic roti machine' },
    ],
  },
  // Burr Pressing Machine
  {
    id: 'burr-pressing-1',
    name: 'Burr Pressing Machine',
    slug: 'burr-pressing-machine',
    categoryId: 'burr-pressing',
    description: 'Heavy duty burr pressing machine for commercial use.',
    image: rotiPress,
    basePrice: 30000,
    variants: [
      { id: 'bp-01', name: 'Burr Pressing Machine', modelNo: 'BP-01', price: 30000, bodyMaterial: 'SS Ring', size: "3'x3'x7' Feet", capacity: '110-115 mm', motor: '15 hp 440/415 V 3 Phase 50 Hz', gstPercent: 18, description: 'Heavy duty burr pressing machine' },
    ],
  },
  // Roti Pressing Machine
  {
    id: 'roti-pressing-1',
    name: 'Roti Pressing Machine',
    slug: 'roti-pressing-machine',
    categoryId: 'roti-pressing',
    description: 'Commercial roti pressing machine for uniform rotis. Multiple models available.',
    image: rotiPress,
    basePrice: 25200,
    variants: [
      { id: 'hdm-01', name: 'Hardpress Roti Machine', modelNo: 'HDM-01', price: 25200, weight: '35 kg', size: '30 x 12 x 28', motor: '2000 W', gstPercent: 18, description: 'Hardpress roti machine' },
      { id: 'rpm-s', name: 'Premium Roti Pressing Machine 9inch (500 Roti/hr)', modelNo: 'RPM-S', price: 26000, mrp: 30000, bodyMaterial: 'SS Body', size: '12 X 18 X 17', capacity: '500 roti/hr', motor: '1/2 Hp', gstPercent: 18, description: '9 inch premium roti pressing machine' },
      { id: 'p-700', name: 'P-700 Roti Pressing Machine Premium', modelNo: 'P-700', price: 29000, mrp: 35000, weight: '35 kg', bodyMaterial: 'SS Body', size: '43" X 38" X 37"', motor: '0.25 H.P', gstPercent: 18, description: 'P-700 premium roti pressing machine' },
      { id: 'r-3', name: 'Premium Roti Pressing Machine 1000 Roti p/Hr', modelNo: 'R-3', price: 32000, weight: '50 kg', bodyMaterial: 'S.S. 304/18', size: '22X16X22', capacity: '1000 Roti p/Hr', motor: '3 KW', gstPercent: 18, description: '1000 roti/hr pressing machine' },
      { id: 'rp-ceramic', name: 'Roti Pressing Machine Ceramic Plate Type', modelNo: 'RP-CP', price: 45000, weight: '100 kg', bodyMaterial: 'SS Body', capacity: '300 to 450/Hour', motor: '2-5 KW/HR 230V Single Phase', gstPercent: 18, description: 'Ceramic plate type roti pressing machine' },
      { id: 'rpm-14', name: 'Premium Roti Pressing Machine 14inch', modelNo: 'RPM-14', price: 48000, weight: '40 kg', bodyMaterial: 'SS Body', size: '20 × 20 × 2.5', capacity: '14 inch roti', motor: '0.5 HP Motor', gstPercent: 18, description: '14 inch premium roti pressing machine' },
      { id: 'rp-balls', name: 'Roti Pressing Machine With Balls (Ceramic Plate Type)', modelNo: 'RP-CB', price: 60000, mrp: 100000, weight: '38 kg', bodyMaterial: 'Stainless Steel', size: '50 X 50 X 90 CM', capacity: '1 MM to 4 MM', motor: '2.5 H.P. × 2 240V Single Phase', gstPercent: 18, description: 'Roti pressing with balls ceramic plate type' },
    ],
  },
  // Roll Labeling Machine
  {
    id: 'roll-labeling-1',
    name: 'Roll Labeling Machine',
    slug: 'roll-labeling-machine',
    categoryId: 'roll-labeling',
    description: 'Domestic roll labeling machine for product packaging and labeling.',
    image: doughBall,
    basePrice: 16500,
    variants: [
      { id: 'p-300', name: 'P-300 Domestic Roll Labeling Machine', modelNo: 'P-300', price: 16500, bodyMaterial: 'Plastic, Aluminium', capacity: '250 MM', motor: '27 Watt, 230V AC', gstPercent: 18, description: 'P-300 domestic roll labeling machine' },
    ],
  },
  // Conveyor Machine
  {
    id: 'conveyor-machine-1',
    name: 'Conveyor Machine',
    slug: 'conveyor-machine',
    categoryId: 'conveyor-machine',
    description: 'Iron machine set conveyor / conveyor plane for food processing lines.',
    image: rotiMachine,
    basePrice: 72000,
    variants: [
      { id: 'conv-01', name: 'Iron Machine Set Conveyor / Conveyor Plane', modelNo: 'CONV-01', price: 72000, bodyMaterial: 'MS SS', capacity: '30 to 150 KG', motor: '0.25 - 11 KW', gstPercent: 18, description: 'Conveyor machine set' },
    ],
  },
  // Steam Dhokla Machine
  {
    id: 'steam-dhokla-1',
    name: 'Steam Dhokla Machine',
    slug: 'steam-dhokla-machine',
    categoryId: 'steam-dhokla',
    description: 'Commercial steam dhokla machine for restaurants and catering. Available in 6 to 12 tray.',
    image: steamDhokla,
    basePrice: 16350,
    variants: [
      { id: 'sd-101', name: '6 Tray Steam Dhokla Machine', modelNo: 'SD-101', price: 16350, mrp: 48710, weight: '4.5 kg', bodyMaterial: 'SS-304', size: '24 x 24 x 40', gstPercent: 18, description: '6 tray steam dhokla machine' },
      { id: 'sd-102', name: '8 Tray Steam Dhokla Machine', modelNo: 'SD-102', price: 17450, weight: '48 kg', bodyMaterial: 'SS', size: '24 x 24 x 45', gstPercent: 18, description: '8 tray steam dhokla machine' },
      { id: 'sd-193', name: '10 Tray Steam Dhokla Machine', modelNo: 'SD 193', price: 29050, mrp: 387185, weight: '35 kg', bodyMaterial: 'SS Body', size: '24 x 24 x 47', gstPercent: 18, description: '10 tray steam dhokla machine' },
      { id: 'sd-104', name: '12 Tray Steam Dhokla Machine', modelNo: 'SD 104', price: 22600, weight: '58 kg', bodyMaterial: 'SS Body', size: '24 x 24 x 56 inch', gstPercent: 18, description: '12 tray steam dhokla machine' },
    ],
  },
  // Naylon Khaman Machine
  {
    id: 'steam-khaman-1',
    name: 'Naylon Khaman Machine',
    slug: 'naylon-khaman-machine',
    categoryId: 'steam-khaman',
    description: 'Commercial naylon khaman machine for producing soft and uniform khaman.',
    image: steamDhokla,
    basePrice: 21600,
    variants: [
      { id: 'sd-105', name: '6 Plate Naylon Khaman Machine', modelNo: 'SD 105', price: 21600, weight: '56 kg', bodyMaterial: 'SS 304', size: '89 x 24 x 52', gstPercent: 18, description: '6 plate naylon khaman machine' },
      { id: 'sd-366', name: '8 Plate Naylon Khaman Machine', modelNo: 'SD 366', price: 24250, mrp: 48500, weight: '66 kg', bodyMaterial: 'SS or MS', size: '29 x 24 x 56', gstPercent: 18, description: '8 plate naylon khaman machine' },
      { id: 'sd-896', name: '6 Plate Naylon Khaman Machine (with chhapan)', modelNo: 'SD 896', price: 25800, mrp: 48000, weight: '35 kg', bodyMaterial: 'SS Body', size: '6 tray', gstPercent: 18, description: '6 plate naylon khaman with chhapan' },
      { id: 'sd-197', name: '10 Plate Naylon Khaman Machine', modelNo: 'SD 197', price: 26500, mrp: 30107, bodyMaterial: 'SS Body', size: '26 x 22 x 43 Inch', gstPercent: 18, description: '10 plate naylon khaman machine' },
      { id: 'sd-199', name: '8 Plate Nylon Khaman Machine (with Chipapari)', modelNo: 'SD 199', price: 29000, mrp: 35000, weight: '34 kg', bodyMaterial: 'SS & Aluminum', size: '39 × 24 × 6.5', gstPercent: 18, description: '8 plate nylon khaman with chipapari' },
      { id: 'sd-10', name: '10 Plate Naylon Khaman Machine (with chhaparl)', modelNo: 'SD-10', price: 47500, weight: '10.3 kg', bodyMaterial: 'Aluminium', size: '55 x 24 x 74', gstPercent: 18, description: '10 plate naylon khaman with chhaparl' },
    ],
  },
  // Sugarcane Juicer
  {
    id: 'sugarcane-juicer-1',
    name: 'Sugarcane Juicer Machine',
    slug: 'sugarcane-juicer-machine',
    categoryId: 'sugarcane-juicer',
    description: 'Heavy duty sugarcane juice extraction machine with stainless steel rollers. Multiple models available.',
    image: sugarcaneJuicer,
    basePrice: 12500,
    variants: [
      { id: 'dsj-01', name: 'Domestic Sugarcane Juicer', modelNo: 'DSJ-01', price: 12500, weight: '18 kg', bodyMaterial: 'SS Body', gstPercent: 18, description: 'Domestic sugarcane juicer' },
      { id: 'ssc-01', name: 'Sugarcane Juicer Machine Slim', modelNo: 'SSC-01', price: 19000, weight: '38 kg', bodyMaterial: 'SS Body', size: '36 x 18 x 22 (inches)', capacity: '200 TO 250 (Glasses)/Hr', motor: '0.5 hp Cycloid Gear Box', gstPercent: 18, description: 'Slim sugarcane juicer' },
      { id: 'sf-01', name: 'Sugarcane Juicer Machine Engine', modelNo: 'SF-01', price: 19500, bodyMaterial: 'SS Body', size: '36 x 18 x 43', capacity: '200 LTR/Hr', gstPercent: 18, description: 'Engine model sugarcane juicer' },
      { id: 'sr-03', name: 'Sugarcane Juicer Machine Engine Model', modelNo: 'SR-03', price: 19500, mrp: 8500, weight: '32 Kg', bodyMaterial: 'SS Body', size: '36 x 18 x 43', capacity: '200 TO 250 Glasses P/Hr', gstPercent: 18, description: 'Engine model sugarcane juicer' },
      { id: 'smit-01', name: 'Sugarcane Juicer Hygienic', modelNo: 'SMIT-01', price: 21500, weight: '35 Kgs', bodyMaterial: 'SS Body', motor: '1 H.P.', gstPercent: 18, description: 'Hygienic sugarcane juicer with SS diamond roller' },
      { id: 'srm-01', name: 'Sugarcane Juicer Machine Engine Model With Motor', modelNo: 'SRM-01', price: 23600, weight: '110 kg', bodyMaterial: 'SS Body', size: '36 x 18 x 43', capacity: '200 TO 250 glasses', gstPercent: 18, description: 'Engine model with motor sugarcane juicer' },
      { id: 'shh-08', name: 'Sugarcane Juicer Machine Hygienic Jumbo', modelNo: 'SHH-08', price: 24500, weight: '80 Kg', bodyMaterial: 'SS Body', size: '23*25*40', motor: '1.5 H.P.', gstPercent: 18, description: 'Hygienic jumbo sugarcane juicer' },
      { id: 'sp-01', name: 'Sugarcane Peeler Machine', modelNo: 'SP-01', price: 146600, bodyMaterial: 'SS Body', capacity: '450 TO 475 LTRS', motor: '1 Hp', gstPercent: 18, description: 'Sugarcane peeler machine' },
    ],
  },
  // Vegetable Chopping Machine
  {
    id: 'vegetable-chopping-1',
    name: 'Vegetable Chopping Machine',
    slug: 'vegetable-chopping-machine',
    categoryId: 'vegetable-chopping',
    description: 'Commercial vegetable chopping machine for fast and uniform chopping.',
    image: vegetableCutter,
    basePrice: 9350,
    variants: [
      { id: 'cm-01', name: 'Vegetable Chopping Machine', modelNo: 'CM-01', price: 9350, mrp: 9700, weight: '28 Kg', bodyMaterial: 'SS Body', size: '29 x 19 x 21', capacity: '200 KG', motor: '240 V', gstPercent: 18, description: 'Standard vegetable chopping machine' },
    ],
  },
  // Vegetable Cutting Machine
  {
    id: 'vegetable-cutting-1',
    name: 'Vegetable Cutting Machine',
    slug: 'vegetable-cutting-machine',
    categoryId: 'vegetable-cutting',
    description: 'Commercial vegetable cutting machine for onions, chillies, cabbage and more.',
    image: vegetableCutter,
    basePrice: 7750,
    isNewArrival: true,
    variants: [
      { id: 'ccm-01', name: 'Onion And Chilly Cutter Machine', modelNo: 'CCM-01', price: 7750, weight: '25 kg', bodyMaterial: 'SS Body', size: '25 x 20 x 12', capacity: '30-40 KG P/Hr', motor: '1 hp', gstPercent: 18, description: 'Onion and chilly cutter' },
      { id: 'ccm-101', name: '1 Hp Onion & Chilly Cutter (Premium Model)', modelNo: 'CCM-101', price: 9050, weight: '38 kg', bodyMaterial: 'SS Body', size: '20 x 14 x 20 in', capacity: '40 TO 60 Kg', motor: '1 Hp 960 RPM', gstPercent: 18, description: 'Premium onion and chilly cutter' },
      { id: 'os-04', name: 'Onion Slicer', modelNo: 'OS-04', price: 11450, bodyMaterial: 'SS Body', size: '25 x 34 x 12', capacity: '125-150 KG P/Hr', motor: '0.5 H.P.', gstPercent: 18, description: 'Onion slicer machine' },
      { id: 'ccm-802', name: '2 Hp Onion & Chilly Cutter', modelNo: 'CCM-802', price: 15850, weight: '90 kg', bodyMaterial: 'SS Body', size: '23 x 20 x 14', motor: '2 Hp', gstPercent: 18, description: '2 HP onion and chilly cutter' },
      { id: 'cc-01', name: 'Cabbage Cutter Machine', modelNo: 'CC-01', price: 16400, weight: '45 kg', bodyMaterial: 'SS 202 Material', size: '29 x 2.3 x 49', motor: '1 hp', gstPercent: 18, description: 'Cabbage cutter machine' },
      { id: 'vcm-03', name: 'Vegetable Cutting Machine Delux Model', modelNo: 'VCM-03', price: 19550, mrp: 47710, weight: '20 kg', bodyMaterial: 'MS Body', size: '40 x 22 x 12', capacity: '150-200 KG P/Hr', motor: 'Single Phase', gstPercent: 18, description: 'Delux model vegetable cutter' },
      { id: 'vcm-01', name: 'Vegetable Cutting Machine 1 Hp', modelNo: 'VCM 01', price: 19950, weight: '50 kg', size: '40 L x 35 B x 50 H', capacity: 'Material 30 kg', motor: '1 Hp', gstPercent: 18, description: '1 HP vegetable cutting machine' },
      { id: 'vcm-02', name: 'Vegetable Cutting Machine Heavy 2 Hp', modelNo: 'VCM-02', price: 36850, weight: '90 kg', bodyMaterial: 'SS Body', size: '45 x 28 x 35', capacity: '500-600 KG/Hr', motor: '2 Hp', gstPercent: 18, description: '2 HP heavy duty vegetable cutter' },
    ],
  },
  // Wafer Slicer Machine
  {
    id: 'wafer-slicer-1',
    name: 'Wafer Slicer Machine',
    slug: 'wafer-slicer-machine',
    categoryId: 'wafer-slicer',
    description: 'Commercial potato slicer machine for wafer and chips production.',
    image: waferSlicer,
    basePrice: 18450,
    variants: [
      { id: 'ws-01', name: 'Potato Slicer Machine', modelNo: '504130', price: 18450, weight: '50 kg', bodyMaterial: 'SS304', size: '30 X 32 X 50 cm', capacity: '200 to 250 Kg/Hour', motor: '1 Hp', gstPercent: 18, description: 'Potato slicer machine for wafer production' },
    ],
  },
  // High Speed Powder Grinder
  {
    id: 'powder-grinder-1',
    name: 'High Speed Powder Grinder',
    slug: 'high-speed-powder-grinder',
    categoryId: 'powder-grinder',
    description: 'Our high speed grinders are designed in such a way that they work at very high speed and is suitable for grinding dry material like spices, herbs etc.',
    image: powderGrinder,
    basePrice: 8800,
    variants: [
      { id: 'hspg-102', name: '500 GM High Speed Powder Grinder', modelNo: 'HSPG-102', price: 8800, weight: '5 kg', bodyMaterial: 'SS Body', size: '9 x 14 x 8', capacity: '500 Gm', motor: '2300 W', gstPercent: 18, description: 'Our high speed grinders are designed for grinding dry material like spices, herbs etc.' },
      { id: 'hspg-103', name: '1 Kg High Speed Powder Grinder', modelNo: 'HSPG-103', price: 10000, weight: '7 kg', bodyMaterial: 'SS Body', size: '9 x 15 x 8', capacity: '1 Kg', motor: '2800 W', gstPercent: 18, description: 'Our high speed grinders are designed for grinding dry material like spices, herbs etc.' },
      { id: 'hspg-105', name: '1.5 Kg High Speed Powder Grinder', modelNo: 'HSPG-105', price: 11200, weight: '7 kg', bodyMaterial: 'SS Body', size: '8" x 9" x 15"', capacity: '1500 Gm', motor: '3500 W', gstPercent: 18, description: 'Our high-speed grinders are designed to operate at very high speeds and are suitable for grinding dry materials like spices, herbs, etc.' },
      { id: 'hspg-106', name: '2.5 Kg High Speed Powder Grinder', modelNo: 'HSPG-106', price: 14800, weight: '7 kg', bodyMaterial: 'SS Body', size: '8" x 9" x 15"', capacity: '2500 Gm', motor: '4000 W', gstPercent: 18, description: 'Our high-speed grinders are designed for grinding dry material like spices, herbs etc.' },
      { id: 'hspg-104', name: '3.5 Kg High Speed Powder Grinder', modelNo: 'HSPG-104', price: 16900, weight: '11 kg', bodyMaterial: 'SS Body', size: '11 x 18 x 11', capacity: '3.5 KG', motor: '5000 W', gstPercent: 18, description: 'Our high speed grinders are designed for grinding dry material like spices, herbs etc.' },
    ],
  },
  // Laddu & Jamun Ball Making Machine
  {
    id: 'laddu-jamun-1',
    name: 'Laddu & Jamun Ball Making Machine',
    slug: 'laddu-jamun-ball-making-machine',
    categoryId: 'laddu-jamun',
    description: 'The Laddu Making Machine is useful for making various types of Laddus and sweet balls. The operations are easy to carry out and are hygienically proven.',
    image: ladduMaker,
    basePrice: 105000,
    variants: [
      { id: 'lmm-01', name: 'Laddu Making Machine (Single Worm Type)', modelNo: 'LMM-01', price: 105000, weight: '157 kg', bodyMaterial: 'SS Body', size: '58 x 26 x 42', capacity: '1200 TO 1500 P/Hr', motor: '1.5 hp', gstPercent: 18, description: 'The Laddu Making Machine is useful for making various types of Laddus and sweet balls. Naylone Worm type.' },
      { id: 'jb-01', name: 'Jamun Ball Making Machine', modelNo: 'JB-01', price: 160000, weight: '196 kg', bodyMaterial: 'SS Body', size: '70 x 32 x 53', capacity: '3500 TO 4000 P/Hr', motor: '1 hp', gstPercent: 18, description: 'Ball Forming Machine is useful for cutting & rounding various types of Sweets/food products like Peda, Gulabjamun, Rasmalai, Chumchum, etc.' },
    ],
  },
  // Milk Mawa (Khoya) Machine
  {
    id: 'milk-mawa-1',
    name: 'Milk Mawa (Khoya) Machine',
    slug: 'milk-mawa-khoya-machine',
    categoryId: 'milk-mawa',
    description: 'Mawa / Khova making is one of best Indian sweet making machine. Which can be used in Indian sweet makings such as Barphi, Penda, Dudhpak, Basundi, and Cashewnut Etc. It can also be used in Roasting, Mixing, and Ice-Cream Making.',
    image: mawaMachine,
    basePrice: 58000,
    variants: [
      { id: 'mmm-104', name: '55 Liter Milk Mawa (Khoya) Machine', modelNo: 'MMM-104', price: 58000, weight: '135 kg', bodyMaterial: 'SS Body', size: '47x26x32', motor: '0.5 HP (1440 Rpm)', gstPercent: 18, description: 'Mawa / Khova making is one of best Indian sweet making machine.' },
      { id: 'mmm-04', name: '55 Liter Milk Mawa (Khoya) Machine Tilting', modelNo: 'MMM-04', price: 64000, weight: '160 kg', bodyMaterial: 'SS Body', size: '52x26x56', capacity: '55 LTR', motor: '0.5 HP (1440 RPM)', gstPercent: 18, description: 'Mawa / Khova making is one of best Indian sweet making machine. Tilting model.' },
      { id: 'mmm-06', name: '100 Liter Milk Mawa (Khoya) Machine', modelNo: 'MMM-06', price: 69000, weight: '210 kg', bodyMaterial: 'SS BODY', size: '51x32x39', motor: '1 HP 1440 RPM', gstPercent: 18, description: 'Mawa / Khova making is one of best Indian sweet making machine.' },
      { id: 'mmm-05', name: '100 Liter Milk Mawa (Khoya) Machine Tilting', modelNo: 'MMM-05', price: 75000, weight: '235 kg', bodyMaterial: 'SSBody', size: '57x32x60', capacity: '100 LTR', motor: '1 HP (1440 RPM)', gstPercent: 18, description: 'Mawa / Khova making is one of best Indian sweet making machine. Tilting model.' },
    ],
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(p => p.categoryId === categoryId);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.isNewArrival);
};
