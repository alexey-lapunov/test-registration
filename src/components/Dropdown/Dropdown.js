import React, { useState, useRef } from 'react';

import styles from './Dropdown.module.scss';

const Dropdown = () => {
  const [isShowMenu, setShowMenu] = useState(false);

  const refDropdown = useRef();
  const refSelectedText = useRef();

  const openMenu = () => {
    setShowMenu(true);

    document.addEventListener('click', check);
  };

  const closeMenu = () => {
    setShowMenu(false);
    document.removeEventListener('click', check);
  };

  const selectItem = e => {
    const selectedNode = refSelectedText.current;
    selectedNode.innerHTML = e.target.innerText;
    closeMenu();
  };

  const check = e => {
    const isDropdownNode = e.target.closest(`.${styles.dropdown}`);
    if (isDropdownNode !== refDropdown.current) closeMenu();
  };

  return (
    <div ref={refDropdown} className={styles.dropdown}>
      <div className={styles.header} onClick={openMenu}>
        <span ref={refSelectedText} className={styles.selectedText}>
          Default text
        </span>
      </div>
      {isShowMenu && (
        <div className={styles.menu}>
          <div className={styles.item} onClick={selectItem}>
            Item1
          </div>
          <div className={styles.item} onClick={selectItem}>
            Item2
          </div>
          <div className={styles.item} onClick={selectItem}>
            Item3
          </div>
          <div className={styles.item} onClick={selectItem}>
            Item4
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
