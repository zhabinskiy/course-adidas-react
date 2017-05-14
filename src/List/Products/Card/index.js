import React from 'react';
import {Link} from 'react-router-dom';
import Label from '../../../components/Label';
import './style.css';

export default props => (
  <div className="products-item">
    <Label className={props.labelClass}>{props.label}</Label>
    <img className="products-item-image" src={props.image} />
    <Link
      className={
        'products-item-price ' + 'products-item-price-' + props.priceType
      }
      to={props.item}
    >
      {props.price}
    </Link>
  </div>
);
