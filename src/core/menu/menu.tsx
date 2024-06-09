// Assets
import { MenuContainer } from './menu.style';

// Hook
import useOutsideClick from '../../hooks/useOutsideClick';

const Menu = () => {
    const [menuState, setMenuState, menuRef] = useOutsideClick();

    return (
        <MenuContainer ref={menuRef}>
            <div className='title' onClick={() => setMenuState(!menuState)}>
                Profile
            </div>
            <div className={`menu-container ${menuState ? 'active' : ''}`}>
                <span className='item'>Information</span>
            </div>
        </MenuContainer>
    );
};

export default Menu;
