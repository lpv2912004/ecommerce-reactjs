import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from '../styles.module.scss';
import { useContext } from 'react';
function Menu({ content, href }) {
    const { menu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleClickShowLogin = () => {
        if (content === 'Sign in') {
            setType('login');
            setIsOpen(true);
        }
    };

    return (
        <div className={menu} onClick={handleClickShowLogin}>
            {content}
        </div>
    );
}

export default Menu;
