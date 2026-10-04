export const HOTEL_IMAGES = {
  facade: '/src/assets/images/hotel_facade_exterior_1791101153724.jpg',
  room: '/src/assets/images/hotel_room_interior_1791101165451.jpg',
  lobby: '/src/assets/images/hotel_reception_lobby_1791101177430.jpg',
  bathroom: '/src/assets/images/clean_bathroom_interior_1791101188212.jpg',
  location: '/src/assets/images/bhabua_hotel_location_1791101199717.jpg',
};

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  tag: string;
}

export const HOTEL_INFO = {
  name: "HOTEL SIVOY",
  nameHindi: "होटल शिवाय",
  tagline: "The Art of a Good Stay",
  rating: 4.3,
  reviewCount: 403,
  address: {
    line1: "Ward No. 3",
    line2: "Azad Nagar",
    city: "Bhabua",
    state: "Bihar",
    pincode: "821101",
    full: "Ward No. 3, Azad Nagar, Bhabua, Bihar 821101",
  },
  plusCode: "2HRX+5J Bhabua, Bihar",
  phone: "075648 72622",
  phoneRaw: "07564872622",
  website: "hotelsivoy.com",
  websiteUrl: "https://hotelsivoy.com",
  checkIn: "11:00 AM",
  checkOut: "10:30 AM",
  defaultGuests: 2,
  priceComparison: [
    { platform: "Goibibo", price: "₹1,430", note: "Listed partner rate" },
    { platform: "MakeMyTrip", price: "₹1,469", note: "Listed partner rate" },
  ],
  priceDisclaimer: "Displayed prices may vary by date, availability and booking platform.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Sivoy+Azad+Nagar+Bhabua+Bihar+821101",
};

export const CONFIRMED_AMENITIES: Amenity[] = [
  {
    id: "wifi",
    name: "FREE WI-FI",
    description: "Stay connected throughout your stay with complimentary wireless internet access.",
    icon: "Wifi",
  },
  {
    id: "parking",
    name: "PARKING",
    description: "Convenient parking available on premises for resident guests.",
    icon: "Car",
  },
  {
    id: "ac",
    name: "AIR-CONDITIONED",
    description: "Air-conditioned accommodation ensuring personal climate comfort in all seasons.",
    icon: "Wind",
  },
  {
    id: "laundry",
    name: "LAUNDRY SERVICE",
    description: "Prompt laundry service available to keep your wardrobe fresh.",
    icon: "Shirt",
  },
  {
    id: "roomservice",
    name: "ROOM SERVICE",
    description: "Courteous room service available delivered directly to your door.",
    icon: "BellRing",
  },
  {
    id: "childfriendly",
    name: "CHILD FRIENDLY",
    description: "Welcoming and suitable environment for families travelling with children.",
    icon: "HeartHandshake",
  },
];

export const VERIFIED_REVIEWS: Review[] = [
  {
    author: "Munni Kumari",
    rating: 5,
    text: "Excellent room service and place is extremely clean and hygienic.",
    tag: "Cleanliness & Service",
  },
  {
    author: "Santosh Singh",
    rating: 5,
    text: "Location is great, staff is polite Very clean rooms , great experience A",
    tag: "Location & Hospitality",
  },
  {
    author: "Ashutosh Pant",
    rating: 5,
    text: "The rooms are well maintained with fantastically done interiors.",
    tag: "Interiors & Comfort",
  },
];

export const DEVELOPER_INFO = {
  name: "RoadsideDeveloper",
  whatsappText: "WhatsApp: +91 7654224826",
  whatsappUrl: "https://wa.me/917654224826",
  callText: "Call: +91 8405918172",
  callUrl: "tel:+918405918172",
};
