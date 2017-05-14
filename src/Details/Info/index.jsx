import React from 'react';
import Label from '../../components/Label';
import './style.css';

export default () => (
  <div className="details-info">
    <div className="details-info-colors">
      <button className="btn-color btn-color-gray" />
      <button className="btn-color btn-color-blue" />
      <button className="btn-color btn-color-black" />
      <button className="btn-color btn-color-silver" />
    </div>
    <Label className="label">Sale</Label>
    <div className="details-info-price">
      <h2 className="details-info-price-heading">$170</h2>
    </div>
  </div>
);
