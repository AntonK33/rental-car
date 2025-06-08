import { useEffect, useRef, useState } from "react";
import  Option  from "./Option";
//import arrowDown from "../../assets/chevron-down.svg"
import Styles from "./select.module.css"
const Select = (props) => {
    const { selected, options, placeholder, mode, status, onChange, onClose } = props;
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            const { target } = event;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                if (isOpen) {
                    onClose?.();
                    setIsOpen(false);
                }
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen, onClose]);

    const handleOptionClick = (value) => {
        setIsOpen(false);
        onChange?.(value);
      };
    
      const handlePlaceholderClick = () => {
        setIsOpen((prev) => !prev);
      };

    return (
        <div
          className={Styles.selectWrapper}
          ref={rootRef}
          data-is-active={isOpen}
          data-mode={mode}
        >
          
          <div
            className={Styles.placeholder}
            data-status={status}
            data-selected={!!selected?.value}
            onClick={handlePlaceholderClick}
            role="button"
            
          >
            {selected || placeholder}
          </div>
            {/* {isOpen && ( */}
            <div className={Styles.itemContainer}>
            <ul className={`${Styles.select}  ${isOpen ? Styles.visible : Styles.hidden}`}>
                
                {options.map((option) => (
                  
                    <Option
                        className={Styles.item}
                  key={option}
                  option={option}
                  onClick={() => handleOptionClick(option)}
                />
              ))}
            </ul>

            </div>
           
          {/* )} */}
        </div>
      );;
};

export default Select;
