import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Actions
import { saveShippingAddress } from '../../../redux/slices/cartSlice';

// Import Components
import Button from '../Button';

function ShippingStep({ setCurrentStep }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    setCurrentStep('Payment');
  };

  return (
    <form onSubmit={submitHandler} className="w-full p-4">
      <p className="text-center text-black text-xl leading-relaxed">
        Shipping
        <br />
        <span className="text-sm text-orange-500">Enter Shipping Details</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        <div className="w-full">
          <label htmlFor="address" className="sr-only">
            Address
          </label>

          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              id="address"
              value={address}
              placeholder="Enter Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
              className="w-full text-orange-600 bg-orange-100 placeholder-orange-300 rounded-md p-4 pr-12 text-sm shadow-sm"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="city" className="sr-only">
            City
          </label>

          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              id="city"
              value={city}
              placeholder="Enter City"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              required
              className="w-full text-orange-600 bg-orange-100 placeholder-orange-300 rounded-md p-4 pr-12 text-sm shadow-sm"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="postalCode" className="sr-only">
            Postal Code
          </label>

          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              placeholder="Enter Postal Code"
              onChange={(e) => {
                setPostalCode(e.target.value);
              }}
              required
              className="w-full text-orange-600 bg-orange-100 placeholder-orange-300 rounded-md p-4 pr-12 text-sm shadow-sm"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="country" className="sr-only">
            Country
          </label>

          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              id="country"
              value={country}
              placeholder="Enter Country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              required
              className="w-full text-orange-600 bg-orange-100 placeholder-orange-300 rounded-md p-4 pr-12 text-sm shadow-sm"
            />
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        type="submit"
        className="w-full sm:w-1/3 rounded-full mt-4"
      >
        Continue
      </Button>
    </form>
  );
}

ShippingStep.propTypes = {
  setCurrentStep: PropTypes.func.isRequired,
};

export default ShippingStep;
