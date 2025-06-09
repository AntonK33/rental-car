import Styles from './option.module.css'; 
 
  
const Option = (props) => {
  const { selected, option, onClick } = props;
  console.log('wat come in selected',selected)
//   const { value, title } = option;

  const handleClick = () => {
    onClick(option);
  };
  const isSelected = option === selected;
  console.log('wat come in isSelected', isSelected)
  console.log('wat come in isSelected',option)
  return (
    <li
      className={`${Styles.option} ${option === selected ? Styles.selectedItem : Styles.item}`}
      onClick={handleClick}
    
    >
      {option}
    </li>
  );
};

export default Option;
