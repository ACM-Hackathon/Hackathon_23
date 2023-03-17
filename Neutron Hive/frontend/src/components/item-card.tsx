import { CURRENCY } from 'helpers/constants';
import {
  ItemCardBase,
  ItemCardImage,
  ItemCardContent,
  ItemCardPrice,
} from './utils/theme';

interface ItemProps {
  image: string;
  name: string;
  price: number;
}

interface ItemCardProps {
  item: ItemProps;
  onClick?: (e: any) => void;
}

// height uthay dite hobe

const ItemCard: React.FC<ItemCardProps> = ({ item, onClick }) => {
  return (
    <div className={ItemCardBase} onClick={onClick} >
      <div className={ItemCardImage }>
        <img
          className="object-cover"
          src={item.image}
          alt={' Alt ' + item.name}
          height="200rem"
          width="200rem"
        />
      </div>

      <div className={ItemCardContent} style={{marginLeft:"2rem",marginBottom:"2rem"}}>
        <span className={ItemCardPrice} style={{marginBottom:"0"}}>
          {CURRENCY}
          {item.price}
        </span>
        <span className=" font-bold text-18px" style={{marginTop:"0"}}>{item.name}</span>
      </div>
    </div>
  );
};

export default ItemCard;
