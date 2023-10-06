
type ButtonProps = {
  text: string | null;
  color: string;
  count: number;
  setCount: (count: number) => void;
};
  
const Button = ({text="button", color="red", count, setCount}: ButtonProps) => {
  
  const handleIncrement = () => {
    setCount(count + 1);
  }
  
  return (
      <button className="px-5 py-2 text-white rounded-lg" style={{backgroundColor: color}} onClick={handleIncrement}>
        {text}: {count}
      </button>
  );
};

export default Button;
