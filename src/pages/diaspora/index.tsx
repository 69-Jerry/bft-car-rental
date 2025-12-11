"use client";

import { useState, useEffect } from "react";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../components/ui/select";

// Local images (kept where available)
import Kakum from "../../assets/images/Sunrise @ Kakum National Park GH (1).jpeg";
import CapeCoast from "../../assets/images/Cape Coast Castle.jpeg";
import Mole from "../../assets/images/Mole National Park, Northern Region.jpeg";
import KNM from "../../assets/images/@alitcandle - Photo 28 - On our final day in….jpeg";
import Labadi from "../../assets/images/La-beach.jpeg";
import Nzulezu from "../../assets/images/Nzulezu Stilt Village floating above Lake Tadane….jpeg";
import Wli from "../../assets/images/Wli Falls.jpeg";
import Afadjato from "../../assets/images/The best views comes after the hardest climb….jpeg";
import Busua from "../../assets/images/Busua Beach.jpeg";
import PagaCrocodile from "../../assets/images/30+ Things to see and do in Ghana.jpeg";
import Larabanga from "../../assets/images/Photo of Larabanga Mosque taken in December 2014_.jpeg";
import Aburi from "../../assets/images/Aburi Botanical Gardens , Ghana.jpeg";
import KintampoFalls from "../../assets/images/kintampo waterfalls.jpeg";
import BotiFalls from "../../assets/images/Boti Falls is a 30m-high waterfall within the Boti….jpeg";
import TafiMonkeySanctuary from "../../assets/images/monkysanc.jpeg";
import KumasiMuseum from "../../assets/images/Manhyia Palace Museum (2025) - All You Need to Know BEFORE You Go (with Reviews).jpeg";

import { Hero } from "./hero";

interface Attraction {
  id: number;
  name: string;
  region: string;
  location: string;
  description: string;
  image: any; // main image - can be local import or external URL string
  images?: any[]; // additional images for gallery
  category: string; // 'Attraction' | 'Beach' | 'Hotel' | 'Restaurant' | 'Playground'
}

const attractions: Attraction[] = [
  // CENTRAL
  {
    id: 1,
    name: "Kakum National Park",
    region: "Central",
    location: "Cape Coast",
    description: "Rainforest canopy walkway and wildlife.",
    image: Kakum,

    category: "Attraction",
  },
  {
    id: 2,
    name: "Cape Coast Castle",
    region: "Central",
    location: "Cape Coast",
    description: "UNESCO site with deep history.",
    image: CapeCoast,

    category: "Attraction",
  },
  {
    id: 3,
    name: "Brenu Beach",
    region: "Central",
    location: "Brenu",
    description: "Quiet family beach.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/120966257.webp?k=c52cb85d994ae0cc05e471dd3fe45b659f63be44cabdec1fee3072d41cfd5230&o=",
    category: "Beach",
  },
  {
    id: 4,
    name: "Hans Cottage Botel",
    region: "Central",
    location: "Cape Coast",
    description: "Unique accommodation with crocodile pond.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/135742571.jpg?k=7e8449e29a4220068860f60f70a0939121c7336e8ddf342e1f808940f36c8f23&o=&hp=1",
    category: "Hotel",
  },
  {
    id: 5,
    name: "The Moorings Restaurant",
    region: "Central",
    location: "Elmina",
    description: "Seafood restaurant by the coast.",
    image:
      "https://res.cloudinary.com/enchanting/q_auto:good,f_auto,c_lfill,w_1920,h_720/moorings-web/2025/01/A7404658.jpg",
    category: "Restaurant",
  },
  {
    id: 6,
    name: "Anomabo Beach",
    region: "Central",
    location: "Anomabo",
    description:
      "A historic and scenic beach near Anomabo Fort and local fishing villages.",
    image: "https://anomabo.com/assets/images/gallery/Beachfront.png",
    category: "Beach",
  },
  {
    id: 7,
    name: "Elmina Bay Resort",
    region: "Central",
    location: "Elmina",
    description:
      "Coastal resort offering ocean views and proximity to Elmina Castle.",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxajLhmbN8MY6SnGprN1pL6DwJTla8SiAqopxGD269_QsFNN2xMDGE_oIJFc5kVHUdYEnCtjz8ih37nWe0usEETD1WBrmX1ySJl7PNnN1wFO9SBCXlLK0jV7637sA8Rw8QuRimbdg=s1360-w1360-h1020-rw",
    category: "Hotel",
  },
  {
    id: 8,
    name: "Oceans Restaurant",
    region: "Central",
    location: "Cape Coast",
    description:
      "A beachfront restaurant with delicious seafood and ocean views.",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwcHd1FO3yXvQnkXc5WJd_7i4SxXk346DOZ76o0LAKr7v-MpdleaxRJDPBBpEpkfGG7FhnKd-syL5PmekOe10RF5FyJS8TqunFHsqOc2GVFz0fLQQoSAPKFP1utW6e9Q7Ili__1Pg=s1360-w1360-h1020-rw",
    category: "Restaurant",
  },
  {
    id: 64,
    name: "Coconut Grove Beach Resort",
    region: "Central",
    location: "Elmina",
    description: "Beachfront resort with pools, spa, and water sports.",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwqLf7ZeuKLrf_Bq5UqKQfQJxY1XkgMzSXFf6UoRLAO-uErh51kNupPmJTuiebGf2VFOt-jHhy3ANqfq_qvHUfNJLrVL2H3B7l18qjV1D3TnByBEYqxVgNIbygyze8His9dN1w-=s1360-w1360-h1020-rw",
    category: "Hotel",
  },
  {
    id: 65,
    name: "Ko-Sa Beach Resort",
    region: "Central",
    location: "Busua",
    description:
      "Relaxing beach resort perfect for surfing and coastal relaxation.",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPRL4giXGGHgCY_z5YBnD7EQCnYGgGh5j1utKP1=s1360-w1360-h1020-rw",
    category: "Hotel",
  },
  {
    id: 66,
    name: "Cape Cafe",
    region: "Central",
    location: "Cape Coast",
    description: "Cozy cafe with fresh seafood and stunning ocean views.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/53/69/c7/casual-protected-atmosphere.jpg?w=900&h=500&s=1",
    category: "Restaurant",
  },

  // GREATER ACCRA
  {
    id: 9,
    name: "Labadi Beach",
    region: "Greater Accra",
    location: "Accra",
    description: "Popular city beach with music and rides.",
    image: Labadi,
    images: [
      Labadi,
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
    category: "Beach",
  },
  {
    id: 51,
    name: "Kokrobite Beach",
    region: "Greater Accra",
    location: "Kokrobite",
    description:
      "Vibrant beach known for reggae music, drumming, and cultural festivals.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/9a/aa/be/playa-cercana-a-lambda.jpg?w=1400&h=1400&s=1",
    images: [
      "https://explore.rehlat.ae/static/media/searchdestination/thingstodo/images/accra/kokrobite_beach/large_ghana-2000084_1280.webp",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8c/78/b3/sunswt.jpg?w=800&h=800&s=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/599414148.webp?k=36a13cb39c1c03b46ad1a6535573e59f6f3ccde44ff38465863fd3dc020bae12&o=",
    ],
    category: "Beach",
  },
  {
    id: 52,
    name: "Bojo Beach",
    region: "Greater Accra",
    location: "Bortianor",
    description:
      "Secluded beach resort accessible by canoe, perfect for weekend getaways.",
    image:
      "https://bojobeachresort.com/wp-content/uploads/2021/12/Mainland.jpg",
    category: "Beach",
  },
  {
    id: 53,
    name: "Coco Beach",
    region: "Greater Accra",
    location: "Nungua",
    description:
      "Family-friendly beach with restaurants and water sports activities.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/76/28/8a/the-gold-coast-so-beautiful.jpg?w=1200&h=-1&s=1",
    category: "Beach",
  },
  {
    id: 54,
    name: "Sandbox Beach Club",
    region: "Greater Accra",
    location: "Langma",
    description: "Trendy beach club with pools, cabanas, and beach volleyball.",
    image:
      "https://images.squarespace-cdn.com/content/v1/664dba1b7010434630fe5d29/1b8cc584-ad61-4659-91a1-ed8a7f4608b9/411A7169+%282%29.jpg",
    category: "Beach",
  },
  {
    id: 55,
    name: "Teshie Beach",
    region: "Greater Accra",
    location: "Teshie",
    description:
      "Local beach popular with fishermen, offering authentic coastal experience.",
    image:
      "https://images.trvl-media.com/lodging/31000000/30360000/30354900/30354862/569cab52_y.jpg",
    category: "Beach",
  },
  {
    id: 10,
    name: "Kwame Nkrumah Mausoleum",
    region: "Greater Accra",
    location: "Accra",
    description: "Historic memorial and museum.",
    image: KNM,

    category: "Attraction",
  },
  {
    id: 11,
    name: "Kempinski Hotel Gold Coast City",
    region: "Greater Accra",
    location: "Accra",
    description: "Luxury hotel in Accra.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/8c/65/07/pool-image.jpg?w=900&h=-1&s=1",
    category: "Hotel",
  },
  {
    id: 12,
    name: "Skybar 25",
    region: "Greater Accra",
    location: "Airport City",
    description: "Rooftop bar & restaurant.",
    image:
      "https://coupons.com.gh/attachments/6937976d1b11a202a794f3cf73656860ec84ad08/store/fill/1000!/600!/e37f7a83202ff28ab4ae09f0d2c7196136dd867535c9d3253460f2fb06a7/77149087_957303074625345_985618561194000384_n.jpg",
    category: "Restaurant",
  },
  {
    id: 13,
    name: "Efua Sutherland Children’s Park",
    region: "Greater Accra",
    location: "Accra",
    description: "Popular public playground.",
    image: "https://www.graphic.com.gh/images/2022/july/30/park.png",
    category: "Playground",
  },
  {
    id: 14,
    name: "La Palm Royal Beach Hotel",
    region: "Greater Accra",
    location: "Accra",
    description:
      "Beachfront hotel with conference facilities, casino, and restaurants.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/90/6a/a7/la-palm-royal-beach-hotel.jpg?w=900&h=500&s=1",
    category: "Hotel",
  },
  {
    id: 61,
    name: "Movenpick Ambassador Hotel Accra",
    region: "Greater Accra",
    location: "Accra",
    description: "5-star luxury hotel with world-class amenities and dining.",
    image:
      "https://images.trvl-media.com/lodging/5000000/4450000/4447800/4447779/cfc78dde.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    category: "Hotel",
  },
  {
    id: 62,
    name: "Chez Clarisse",
    region: "Greater Accra",
    location: "Osu",
    description: "Authentic Lebanese cuisine in the heart of Osu.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/75/09/e5/photo0jpg.jpg?w=1200&h=-1&s=1",
    category: "Restaurant",
  },
  {
    id: 63,
    name: "Buka Restaurant",
    region: "Greater Accra",
    location: "East Legon",
    description:
      "Nigerian restaurant famous for jollof rice and authentic West African flavors.",
    image: "https://bukarestaurant.com/images/main-1.jpg",
    category: "Restaurant",
  },

  // ASHANTI
  {
    id: 15,
    name: "Manhyia Palace Museum",
    region: "Ashanti",
    location: "Kumasi",
    description: "Ashanti royal history and artifacts.",
    image: KumasiMuseum,

    category: "Attraction",
  },
  {
    id: 16,
    name: "Kumasi Central Market",
    region: "Ashanti",
    location: "Kumasi",
    description: "Bustling market with local cuisine and crafts.",
    image:
      "https://lda-audiotech.com/wp-content/uploads/2022/01/Kumasi-Central-Market-LDA-1.jpg",
    category: "Attraction",
  },
  {
    id: 17,
    name: "Golden Tulip Hotel Kumasi",
    region: "Ashanti",
    location: "Kumasi",
    description: "Comfortable hotel with modern amenities.",
    image:
      "https://www.hotelscombined.com/rimg/himg/2a/04/35/agoda-188634-876754339-563010.jpg?width=968&height=607&crop=true",
    category: "Hotel",
  },
  {
    id: 18,
    name: "Boakyewaa Restaurant",
    region: "Ashanti",
    location: "Kumasi",
    description: "Local dishes and continental menu.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/fb/31/e4/our-new-location.jpg?w=1200&h=-1&s=1",
    category: "Restaurant",
  },
  {
    id: 19,
    name: "Han Court Chinese Restaurant",
    region: "Ashanti",
    location: "Kumasi",
    description:
      "Kumasi’s most famous Chinese restaurant known for authentic flavors.",
    image: "https://www.hancourt.co.uk/images/newhp-image-1.jpg",
    category: "Restaurant",
  },
  {
    id: 67,
    name: "Lancaster Kumasi",
    region: "Ashanti",
    location: "Kumasi",
    description: "Upscale hotel with rooftop pool and fine dining restaurant.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/680360702.jpg?k=c5b74aef5cde656e6f4c70f82025bad18ffdbfccca0c7a061427cd348f91b79f&o=",
    category: "Hotel",
  },
  {
    id: 68,
    name: "Vie Lounge",
    region: "Ashanti",
    location: "Kumasi",
    description: "Trendy rooftop restaurant and bar with panoramic city views.",
    image:
      "https://lavie-dc.com/wp-content/uploads/2018/06/DSC_0243-min-1300x865.jpg",
    category: "Restaurant",
  },

  // BONO
  {
    id: 20,
    name: "Fuller Falls",
    region: "Bono",
    location: "Bono",
    description: "Scenic waterfall, quieter than Kintampo.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/25/05/12/fuller-falls.jpg?w=1200&h=-1&s=1",
    category: "Attraction",
  },
  {
    id: 56,
    name: "Eusbett Hotel",
    region: "Bono",
    location: "Sunyani",
    description:
      "Modern hotel in Sunyani with conference facilities and restaurant.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/7d/0b/67/eusbett-hotel.jpg?w=900&h=500&s=1",
    category: "Hotel",
  },
  // {
  //   id: 57,
  //   name: "Metro Hotel",
  //   region: "Bono",
  //   location: "Sunyani",
  //   description:
  //     "Comfortable accommodation with friendly service in Bono capital.",
  //   image: "https://visitghana.com/wp-content/uploads/2020/08/Metro-Hotel.jpg",
  //   category: "Hotel",
  // },
  // {
  //   id: 58,
  //   name: "Kozy's Kitchen",
  //   region: "Bono",
  //   location: "Sunyani",
  //   description:
  //     "Local restaurant serving authentic Ghanaian and continental dishes.",
  //   image:
  //     "https://visitghana.com/wp-content/uploads/2021/02/Kosys-Kitchen.jpg",
  //   category: "Restaurant",
  // },

  // BONO EAST
  {
    id: 21,
    name: "Kintampo Waterfalls",
    region: "Bono East",
    location: "Kintampo",
    description: "Multi-tiered waterfall and picnic spots.",
    image: KintampoFalls,
    images: [
      KintampoFalls,
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
    ],
    category: "Attraction",
  },
  {
    id: 22,
    name: "Kintampo Eco Park Lodge",
    region: "Bono East",
    location: "Kintampo",
    description: "Eco-lodge near waterfalls.",
    image: "https://okumahhotels.com/kintampo/images/car_park_KINTAMPO_03.jpg",
    category: "Hotel",
  },
  // {
  //   id: 59,
  //   name: "Sonzele Restaurant",
  //   region: "Bono East",
  //   location: "Techiman",
  //   description:
  //     "Popular restaurant in Techiman serving local and continental cuisine.",
  //   image:
  //     "https://visitghana.com/wp-content/uploads/2021/03/Sonzele-Restaurant.jpg",
  //   category: "Restaurant",
  // },
  // {
  //   id: 60,
  //   name: "Goodness Hotel",
  //   region: "Bono East",
  //   location: "Techiman",
  //   description:
  //     "Comfortable hotel with modern facilities in the market hub of Bono East.",
  //   image:
  //     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/345678901.jpg",
  //   category: "Hotel",
  // },

  // EASTERN
  {
    id: 23,
    name: "Aburi Botanical Gardens",
    region: "Eastern",
    location: "Aburi",
    description: "Historic gardens ideal for picnics.",
    image: Aburi,
    images: [
      Aburi,
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    ],
    category: "Attraction",
  },
  {
    id: 24,
    name: "Boti Falls",
    region: "Eastern",
    location: "Boti",
    description: "Twin waterfalls in a lush setting.",
    image: BotiFalls,
    images: [
      BotiFalls,
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    ],
    category: "Attraction",
  },
  {
    id: 25,
    name: "Sajuna Beach Club (Akosombo)",
    region: "Eastern",
    location: "Akosombo",
    description: "Riverside club with activities.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/05/8d/69/sajuna-beach-club.jpg?w=1200&h=1200&s=1",
    category: "Beach",
  },
  {
    id: 26,
    name: "Akosombo Hotel",
    region: "Eastern",
    location: "Akosombo",
    description: "Popular hotel by the lake.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/69/fc/54/akosombo-continental.jpg?w=900&h=500&s=1",
    category: "Hotel",
  },
  {
    id: 27,
    name: "Hillburi Restaurant",
    region: "Eastern",
    location: "Aburi",
    description: "A scenic hilltop restaurant with mountain views.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/79/e9/f6/hillburi-aburi.jpg?w=900&h=500&s=1",
    category: "Restaurant",
  },
  {
    id: 74,
    name: "Bridge View Hotel",
    region: "Eastern",
    location: "Adomi Bridge, Atimpoku",
    description:
      "Stunning hotel with breathtaking views of the Volta River and Adomi Bridge.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/1f/0f/30/bridgeview-resort.jpg?w=900&h=500&s=1",
    category: "Hotel",
  },
  {
    id: 75,
    name: "Royal Senchi Resort",
    region: "Eastern",
    location: "Akosombo",
    description:
      "Luxury lakeside resort with spa, pools, and water sports on the Volta Lake.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/09/cd/the-senchi-pool-at-night.jpg?w=900&h=500&s=1",
    category: "Hotel",
  },
  {
    id: 76,
    name: "Peduase Valley Resort",
    region: "Eastern",
    location: "Peduase",
    description:
      "Serene resort with golf course, spa facilities, and mountain views.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/9c/72/c5/pool-view.jpg?w=900&h=500&s=1",
    category: "Hotel",
  },
  {
    id: 77,
    name: "Miklin Hotel",
    region: "Eastern",
    location: "Nsawam",
    description:
      "Modern hotel with conference facilities and restaurant in Nsawam.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/5a/35/dc/miklin-hotel.jpg?w=1200&h=1200&s=1",
    category: "Hotel",
  },
  {
    id: 78,
    name: "Volta Lodge",
    region: "Eastern",
    location: "Akosombo",
    description: "Affordable lakeside accommodation with restaurant and bar.",
    image:
      "https://b3324290.smushcdn.com/3324290/wp-content/uploads/2023/10/Volta-Hotel-Akosombo-Photos-11.jpg?lossy=0&strip=1&webp=1",
    category: "Hotel",
  },
  // {
  //   id: 79,
  //   name: "Aburi Taste Restaurant",
  //   region: "Eastern",
  //   location: "Aburi",
  //   description:
  //     "Local restaurant serving traditional Ghanaian dishes and continental cuisine.",
  //   image:
  //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a5/b6/c7/aburi-taste.jpg?w=900&h=500&s=1",
  //   category: "Restaurant",
  // },

  // NORTHERN
  {
    id: 28,
    name: "Larabanga Mosque",
    region: "Northern",
    location: "Larabanga",
    description: "Ancient Sudano-Sahelian mosque.",
    image: Larabanga,
    images: [
      Larabanga,
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
      "https://images.unsplash.com/photo-1583021934337-8fd840bbc88a?w=800&q=80",
    ],
    category: "Attraction",
  },
  {
    id: 29,
    name: "Mole National Park",
    region: "Northern",
    location: "Damongo",
    description: "Largest wildlife park with elephants.",
    image: Mole,
    images: [
      Mole,
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
      "https://images.unsplash.com/photo-1535338454770-e7f8f6760bf7?w=800&q=80",
    ],
    category: "Attraction",
  },
  {
    id: 30,
    name: "Nyaji Star Hotel",
    region: "Northern",
    location: "Tamale",
    description: "Recognized hotel suitable for business and leisure.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/737634474.jpg?k=eac8a3dafc4bd3aad918760bbf2facaa237de5787f459f2f136be2e2ee4b8a73&o=",
    category: "Hotel",
  },
  // {
  //   id: 31,
  //   name: "Wooden Tavern Restaurant",
  //   region: "Northern",
  //   location: "Tamale",
  //   description:
  //     "Cozy spot offering local Northern Ghana delicacies and grills.",
  //   image:
  //     "https://visitghana.com/wp-content/uploads/2020/04/Wooden-Tavern.jpg",
  //   category: "Restaurant",
  // },

  // NORTH EAST
  {
    id: 32,
    name: "Gambaga Escarpment",
    region: "North East",
    location: "Gambaga",
    description: "Scenic escarpment and historical sites.",
    image:
      "https://wp-haunsinafrica.s3.amazonaws.com/wp-content/uploads/sites/10/2019/06/18011114/20170808-whaun-gingana-mountain-escarpment-north-east-region-ghana-0123-1024x767.jpg",
    category: "Attraction",
  },
  // {
  //   id: 69,
  //   name: "Nalerigu Guest House",
  //   region: "North East",
  //   location: "Nalerigu",
  //   description: "Simple and comfortable accommodation near historical sites.",
  //   image:
  //     "https://visitghana.com/wp-content/uploads/2020/10/Nalerigu-Guest.jpg",
  //   category: "Hotel",
  // },
  // {
  //   id: 70,
  //   name: "Walewale Canteen",
  //   region: "North East",
  //   location: "Walewale",
  //   description: "Local eatery serving traditional Northern Ghanaian dishes.",
  //   image:
  //     "https://visitghana.com/wp-content/uploads/2021/09/Walewale-Canteen.jpg",
  //   category: "Restaurant",
  // },

  // OTI
  {
    id: 33,
    name: "Ote Falls",
    region: "Oti",
    location: "Jasikan",
    description: "Beautiful layered waterfall.",
    image: "https://graphiconline.com/images/2023/jun/05/otewaterfallnew.jpg",
    category: "Attraction",
  },
  {
    id: 71,
    name: "Jasikan Tourist Lodge",
    region: "Oti",
    location: "Jasikan",
    description: "Eco-friendly lodge near waterfalls and natural attractions.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/41/b6/1d/main-entrace-kikis-court.jpg?w=1200&h=-1&s=1",
    category: "Hotel",
  },
  // {
  //   id: 72,
  //   name: "Kadjebi Kitchen",
  //   region: "Oti",
  //   location: "Kadjebi",
  //   description: "Family restaurant with homemade Ghanaian food.",
  //   image:
  //     "https://visitghana.com/wp-content/uploads/2021/10/Kadjebi-Kitchen.jpg",
  //   category: "Restaurant",
  // },

  // SAVANNAH
  {
    id: 34,
    name: "Paga Crocodile Pond",
    region: "Savannah",
    location: "Paga",
    description: "Sacred crocodile pond with tame crocs.",
    image: PagaCrocodile,
    images: [
      PagaCrocodile,
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80",
      "https://images.unsplash.com/photo-1550159512-428c7d5e5b5f?w=800&q=80",
    ],
    category: "Attraction",
  },
  // {
  //   id: 35,
  //   name: "Mali's Lodge Restaurant",
  //   region: "Savannah",
  //   location: "Mole",
  //   description:
  //     "A serene restaurant inside Mole offering continental meals with wildlife views.",
  //   image: "https://visitghana.com/wp-content/uploads/2020/05/Malis-Lodge.jpg",
  //   category: "Restaurant",
  // },
  // {
  //   id: 73,
  //   name: "Mole Motel",
  //   region: "Savannah",
  //   location: "Mole",
  //   description:
  //     "Historic motel with panoramic views of Mole National Park wildlife.",
  //   image:
  //     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567890123.jpg",
  //   category: "Hotel",
  // },

  // UPPER EAST
  {
    id: 36,
    name: "Tongo Hills",
    region: "Upper East",
    location: "Tongo",
    description: "Rocky hills with views and cultural sites.",
    image:
      "https://tortoisepath.com/wp-content/uploads/2025/03/Tongo-Hills-and-Tengzug-Shrine-Yinduri-Ghana-TortoisePathcom-3-1024x768.jpeg",
    category: "Attraction",
  },
  {
    id: 37,
    name: "Akayet Hotel Restaurant",
    region: "Upper East",
    location: "Bolgatanga",
    description:
      "A popular restaurant offering continental and local meals in luxury setting.",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxY9UHNHpJMUmaq3vd1stRDgudy4GmyVHPiUAFYLB9fhsmsd1s3xD3QFPM8YnuxnJ-QbfaAVQtv6K_GHpbI8ymzCnTzil01kyPKZfbIHta-P1hezwJkKft-aIkT7m5r5CIVPafH7g=s1360-w1360-h1020-rw",
    category: "Restaurant",
  },
  // {
  //   id: 38,
  //   name: "Upper East Boutique Lodge",
  //   region: "Upper East",
  //   location: "Bolgatanga",
  //   description:
  //     "Charming lodge offering a local cultural experience in Upper East Ghana.",
  //   image: "https://example.com/upper-east-lodge.jpg",
  //   category: "Hotel",
  // },

  // UPPER WEST
  // {
  //   id: 39,
  //   name: "Wechiau Hippo Sanctuary",
  //   region: "Upper West",
  //   location: "Wechiau",
  //   description: "Hippo viewing on the Black Volta.",
  //   image:
  //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/0b/ea/9d/wichiau-hippo-sanctuary.jpg?w=1200&h=-1&s=1",
  //   category: "Attraction",
  // },
  // {
  //   id: 40,
  //   name: "Blue Sky Hotel Restaurant",
  //   region: "Upper West",
  //   location: "Wa",
  //   description:
  //     "A well-known restaurant offering Ghanaian, continental, and buffet options.",
  //   image: "https://visitghana.com/wp-content/uploads/2020/06/Blue-Sky.jpg",
  //   category: "Restaurant",
  // },
  // {
  //   id: 41,
  //   name: "Wechiau Riverside Lodge",
  //   region: "Upper West",
  //   location: "Wechiau",
  //   description:
  //     "Simple riverside accommodation ideal for visiting the hippo sanctuary.",
  //   image:
  //     "https://visitghana.com/wp-content/uploads/2018/03/Wechiau-Hippo-Sanctuary.jpg",
  //   category: "Hotel",
  // },

  // VOLTA
  {
    id: 42,
    name: "Wli Waterfalls",
    region: "Volta",
    location: "Hohoe",
    description: "Tallest waterfall in Ghana.",
    image: Wli,
    images: [
      Wli,
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    ],
    category: "Attraction",
  },
  {
    id: 43,
    name: "Mount Afadja",
    region: "Volta",
    location: "Gbledi",
    description: "Ghana's highest mountain and great hiking.",
    image: Afadjato,
    images: [
      Afadjato,
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    ],
    category: "Attraction",
  },
  {
    id: 44,
    name: "Tafi Monkey Sanctuary",
    region: "Volta",
    location: "Tafi-Atome",
    description: "Protected forest home to Mona monkeys.",
    image: TafiMonkeySanctuary,
    images: [
      TafiMonkeySanctuary,
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&q=80",
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&q=80",
    ],
    category: "Attraction",
  },
  {
    id: 45,
    name: "Meet Me There Restaurant",
    region: "Volta",
    location: "Dzita",
    description:
      "A lagoon-side restaurant known for eco-friendly tourism and fresh meals.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/0c/e4/7f/meet-me-there.jpg?w=700&h=-1&s=1",
    category: "Restaurant",
  },
  {
    id: 46,
    name: "Volta River View Hotel",
    region: "Volta",
    location: "Ho",
    description:
      "Comfortable hotel with views of the Volta landscape and easy access to nearby attractions.",
    image:
      "https://tortoisepath.com/wp-content/uploads/2024/06/Volta-Hotel-Akosombo-Akosombo-Ghana-TortoisePathcom-1024x575.webp",
    category: "Hotel",
  },
  {
    id: 80,
    name: "Chances Hotel & Restaurant",
    region: "Volta",
    location: "Ho",
    description:
      "Modern hotel in Ho city center with restaurant and conference facilities.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f6/7e/7d/chances-hotel.jpg?w=1200&h=1200&s=1",
    category: "Hotel",
  },
  {
    id: 81,
    name: "Woezor Hotel",
    region: "Volta",
    location: "Ho",
    description:
      "Affordable hotel with good amenities in the heart of Ho town.",
    image:
      "https://www.hotelsgh.com/sites/default/files/public/styles/hotel_image/public/w11.jpg?itok=zUXZ-B5B",
    category: "Hotel",
  },
  // {
  //   id: 82,
  //   name: "HP Hotel",
  //   region: "Volta",
  //   location: "Ho",
  //   description:
  //     "Budget-friendly hotel offering comfortable stays for travelers in Ho.",
  //   image:
  //     "https://lh3.googleusercontent.com/p/AF1QipOA7vQ8Z9X5Y6J7K8L9M0N1O2P3Q4R5S6T7U8V=s1360-w1360-h1020",
  //   category: "Hotel",
  // },
  // {
  //   id: 83,
  //   name: "Taste of Africa Restaurant",
  //   region: "Volta",
  //   location: "Ho",
  //   description:
  //     "Popular restaurant in Ho serving authentic local Volta cuisine.",
  //   image:
  //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b7/c8/d9/local-dishes.jpg?w=900&h=500&s=1",
  //   category: "Restaurant",
  // },
  // {
  //   id: 84,
  //   name: "Beige Lounge & Restaurant",
  //   region: "Volta",
  //   location: "Ho",
  //   description:
  //     "Upscale lounge and restaurant offering continental and local dishes in Ho.",
  //   image:
  //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/c9/a7/b8/beige-lounge.jpg?w=900&h=500&s=1",
  //   category: "Restaurant",
  // },

  // WESTERN
  {
    id: 47,
    name: "Nzulezu Stilt Village",
    region: "Western",
    location: "Nzulezu",
    description: "Village on stilts over a lake.",
    image: Nzulezu,
    images: [
      Nzulezu,
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    ],
    category: "Attraction",
  },
  {
    id: 48,
    name: "Busua Beach",
    region: "Western",
    location: "Busua",
    description: "Popular surfing beach.",
    image: Busua,
    images: [
      Busua,
      "data:image/jpeg;base64,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",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    ],
    category: "Beach",
  },
  {
    id: 49,
    name: "Breeze Restaurant",
    region: "Western",
    location: "Takoradi",
    description: "Seafood and local cuisine.",
    image:
      "https://images.contentstack.io/v3/assets/bltba617d00249585dc/blt655d223c4fe61e8f/685c43802114b428fce0df94/25HICV_OLR_WV_F&B_Restaurant_Breezes_7_4320x2700-HICV.jpg?format=pjpg&auto=webp&disable=upscale&quality=70&width=2048&height=1280&fit=crop",
    category: "Restaurant",
  },
  {
    id: 50,
    name: "Takoradi Beach Hotel",
    region: "Western",
    location: "Takoradi",
    description: "Comfortable coastal hotel.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/5f/53/4a/africa-beach-hotel.jpg?w=1200&h=-1&s=1",
    category: "Hotel",
  },
];

export default function DiasporaPage() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAttraction, setSelectedAttraction] =
    useState<Attraction | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedAttraction) {
      setCurrentImageIndex(0);
    }
  }, [selectedAttraction]);

  const regions = [
    "All",
    "Greater Accra",
    "Ashanti",
    "Central",
    "Eastern",
    "Northern",
    "North East",
    "Oti",
    "Savannah",
    "Upper East",
    "Upper West",
    "Volta",
    "Western",
    "Bono",
    "Bono East",
    "Ahafo",
  ];

  const categories = [
    "All",
    "Attraction",
    "Beach",
    "Hotel",
    "Restaurant",
    "Playground",
  ];

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRegion, selectedCategory]);

  const filteredAttractions = attractions.filter((attraction) => {
    const matchesRegion =
      selectedRegion === "" || selectedRegion === "All"
        ? true
        : attraction.region === selectedRegion;

    const matchesCategory =
      selectedCategory === "" || selectedCategory === "All"
        ? true
        : attraction.category === selectedCategory;

    const matchesSearch =
      attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attraction.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesRegion && matchesCategory && matchesSearch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAttractions = filteredAttractions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredAttractions.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Hero />

      <div className="p-4 sm:p-8 md:p-16 lg:p-24 xl:p-[126px]">
        {/* Heading and Writeup Section */}
        <div className="mb-8 sm:mb-12 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00235A] mb-4 sm:mb-6">
            Explore Ghana
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Discover the rich cultural heritage, breathtaking landscapes, and
            warm hospitality that make Ghana a must-visit destination. From the
            historic castles of the Central Region to the wildlife sanctuaries
            of the North, from pristine beaches along the coast to vibrant
            markets in Ashanti, Ghana offers unforgettable experiences for every
            traveler. Use our filters below to explore attractions, beaches,
            hotels, restaurants, and playgrounds across all 16 regions of this
            beautiful West African nation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            placeholder="Search by region, name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />

          <Select
            onValueChange={(value) => setSelectedRegion(value)}
            value={selectedRegion}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) => setSelectedCategory(value)}
            value={selectedCategory}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentAttractions.map((attraction) => (
            <div
              key={attraction.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div
                className="relative cursor-pointer"
                onClick={() => setSelectedAttraction(attraction)}
              >
                <img
                  src={
                    typeof attraction.image === "string"
                      ? attraction.image
                      : attraction.image.src
                  }
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg ${
                    attraction.category === "Attraction"
                      ? "bg-purple-600"
                      : attraction.category === "Beach"
                      ? "bg-cyan-600"
                      : attraction.category === "Hotel"
                      ? "bg-amber-600"
                      : attraction.category === "Restaurant"
                      ? "bg-pink-600"
                      : attraction.category === "Playground"
                      ? "bg-green-600"
                      : "bg-gray-600"
                  }`}
                >
                  {attraction.category}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{attraction.name}</h3>
                  <p className="text-sm text-gray-500">{attraction.region}</p>
                  <p className="mt-2 text-gray-700">{attraction.description}</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => window.open("tel:+233244579498", "_self")}
                    className="flex-1 bg-[#F26722] hover:bg-[#D9571C] text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    Call
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `mailto:info.mybftservices@gmail.com?subject=Enquiry about ${attraction.name}&body=Hi, I would like to enquire about ${attraction.name} in ${attraction.region}.`)
                    }
                    className="flex-1 bg-[#00235A] hover:bg-[#001A44] text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Image Viewer Modal */}
      {selectedAttraction && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedAttraction(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-100 transition z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={
                  selectedAttraction.images &&
                  selectedAttraction.images.length > 0
                    ? typeof selectedAttraction.images[currentImageIndex] ===
                      "string"
                      ? selectedAttraction.images[currentImageIndex]
                      : selectedAttraction.images[currentImageIndex].src
                    : typeof selectedAttraction.image === "string"
                    ? selectedAttraction.image
                    : selectedAttraction.image.src
                }
                alt={selectedAttraction.name}
                className="w-full h-auto max-h-[60vh] object-contain bg-gray-100"
              />

              {/* Image Navigation - Only show if multiple images */}
              {selectedAttraction.images &&
                selectedAttraction.images.length > 0 && (
                  <>
                    {/* Previous Button */}
                    {selectedAttraction.images.length > 1 && (
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === 0
                              ? selectedAttraction.images!.length - 1
                              : prev - 1
                          )
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                    )}

                    {/* Next Button */}
                    {selectedAttraction.images.length > 1 && (
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === selectedAttraction.images!.length - 1
                              ? 0
                              : prev + 1
                          )
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    )}

                    {/* Image Counter */}
                    {selectedAttraction.images.length > 1 && (
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} /{" "}
                        {selectedAttraction.images.length}
                      </div>
                    )}
                  </>
                )}

              <span
                className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg ${
                  selectedAttraction.category === "Attraction"
                    ? "bg-purple-600"
                    : selectedAttraction.category === "Beach"
                    ? "bg-cyan-600"
                    : selectedAttraction.category === "Hotel"
                    ? "bg-amber-600"
                    : selectedAttraction.category === "Restaurant"
                    ? "bg-pink-600"
                    : selectedAttraction.category === "Playground"
                    ? "bg-green-600"
                    : "bg-gray-600"
                }`}
              >
                {selectedAttraction.category}
              </span>
            </div>

            {/* Thumbnail Gallery */}
            {selectedAttraction.images &&
              selectedAttraction.images.length > 1 && (
                <div className="flex gap-2 px-6 py-3 overflow-x-auto">
                  {selectedAttraction.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                        currentImageIndex === index
                          ? "border-[#F26722]"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={typeof img === "string" ? img : img.src}
                        alt={`${selectedAttraction.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

            {/* Details */}
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#00235A] mb-2">
                {selectedAttraction.name}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-1">
                📍 {selectedAttraction.location}, {selectedAttraction.region}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {selectedAttraction.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.open("tel:+233000000000", "_self")}
                  className="flex-1 bg-[#F26722] hover:bg-[#D9571C] text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Call
                </button>
                <button
                  onClick={() =>
                    (window.location.href = `mailto:info@bftcarrental.com?subject=Enquiry about ${selectedAttraction.name}&body=Hi, I would like to enquire about ${selectedAttraction.name} in ${selectedAttraction.region}.`)
                  }
                  className="flex-1 bg-[#00235A] hover:bg-[#001A44] text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Enquire
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
