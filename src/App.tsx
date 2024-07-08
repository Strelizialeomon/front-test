import './App.css';
import { cn } from './utils/utils.ts';
import CardItem from './hover-light/card-item.tsx';

const Light = () => {
  return (
    <div
      className={cn('w-[60px] h-[60px] bg-[#ff4132] blur-2xl absolute')}
    />
  );
};

const App = () => {
  return (
    <div className={cn('w-[1200px] bg-[#000000] grid grid-cols-3 gap-4 p-4')}>
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
};

export default App;
