import Styles from './option.module.css'; 
 
  
const Option = (props) => {
  const { option, onClick } = props;
//   const { value, title } = option;

  const handleClick = () => {
    onClick(option);
  };

  return (
    <li
      className={Styles.option}
      onClick={handleClick}
    
    >
      {option}
    </li>
  );
};

export default Option;
