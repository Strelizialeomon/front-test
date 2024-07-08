import { cn } from '../utils/utils.ts';

interface IProps {
  onRef: any;
}

const LightItem = (props: IProps) => {
  const { onRef } = props;
  return (
    <div
      ref={onRef}
      className={cn(
        'w-[120px] h-[120px] bg-[#ff4132] blur-[80px] absolute border-[1px solid rgba(255,255,255,0.1)]',
        'hidden',
        'group-hover:block',
      )}
    />
  );
};

export default LightItem;
