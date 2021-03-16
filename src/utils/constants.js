import React from 'react'
import {
  GiAnvilImpact,
  GiCompass,
  GiDiamondHard,
  GiStabbedNote,
  GiBabyBottle,
  GiSofa,
  GiOfficeChair,
  GiShop
} from 'react-icons/gi'
import { IoBedSharp } from "react-icons/io5";
import { MdLocalDining, MdKitchen } from "react-icons/md";
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',

  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]
export const subLinks = [
  {
    id: 1,
    text: 'all',
    url: '/products',
    icon: <GiShop />
  },
  {
    id: 2,
    text: 'bedroom',
    icon: <IoBedSharp />
  },
  {
    id: 3,
    text: 'office',
    icon: <GiOfficeChair />
  },
  {
    id: 4,
    text: 'salon',
    icon: <GiSofa />
  },
  {
    id: 5,
    text: 'kids',
    icon: <GiBabyBottle />
  },
  {
    id: 6,
    text: 'kitchen',
    icon: <MdKitchen />
  },
  {
    id: 7,
    text: 'dining',
    icon: <MdLocalDining />
  },


]
export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 4,
    icon: <GiAnvilImpact />,
    title: 'craftsmen',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

