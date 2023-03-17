import React from 'react';
import Carousel from 'components/carousel/carousel';
import CouponImg from 'assets/image/coupon-card.png';
import OrderImg from 'assets/image/custom-order.png';
import DeliveryImg from 'assets/image/fast-delivery.png';
import FemaleCareImg from 'assets/image/female-care.png';
import MediRakshaBg from './medirakhsabg.jpg'

const data = [
  {
    id: 1,
    image: DeliveryImg,
    link: '#',
    title: 'Fast delivery',
  },
  {
    id: 2,
    image: CouponImg,
    link: '#',
    title: 'Coupon savings',
  },
  {
    id: 3,
    image: OrderImg,
    link: '#',
    title: 'Custom order',
  },
  {
    id: 4,
    image: FemaleCareImg,
    link: '#',
    title: 'Female care',
  },
];

export default function HeroBlock() {
  return (
    <div className="w-full relative my-35px  h-580px">
        <img
        src={MediRakshaBg}
        alt="WeddingBg"
        className="w-full h-full hidden md:flex absolute top-0 left-0 object-cover opacity-75"
      />
      {/* <Carousel data={data} itemClass="px-5px" /> */}
    </div>
  );
}
