import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  // useCounter() returns the counter, so we're storing that returned value in
  // counter here.
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
