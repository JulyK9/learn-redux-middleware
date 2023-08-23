import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import {
  // decrease,
  // increase,
  decreaseAsync,
  increaseAsync,
  selectNumber,
} from '../modules/couter';

const CounterContainer = () => {
  const testNumber = useSelector(selectNumber);
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    // dispatch(increase());
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    // dispatch(decrease());
    dispatch(decreaseAsync());
  };

  console.log('testNumber', testNumber);
  console.log('number', number);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
