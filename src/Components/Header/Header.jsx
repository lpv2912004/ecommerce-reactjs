import useScrollHandling from '@/hooks/useScrollHandling';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './Constant';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import CartIcon from '@icons/svgs/cartIcon.svg';
import HeartIcon from '@icons/svgs/heartIcon.svg';
import ReloadIcon from '@icons/svgs/reloadIcon.svg';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
function MyHeader() {
    const {
        containerHeader,
        containerBox,
        containerBoxIcon,
        containerMenu,
        container,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedHeaderPosition, setFixedHeaderPosition] = useState(false);
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    console.log(isOpen);

    useEffect(() => {
        //mac dinh neu dieu` kien dung' se tu tra ve true false
        setFixedHeaderPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedHeaderPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => {
                            return (
                                <BoxIcon
                                    key={index}
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => {
                            return (
                                <Menu
                                    key={index}
                                    content={item.content}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        style={({ width: '153px' }, { height: '53px' })}
                        src={Logo}
                        alt='Logo'
                    />
                </div>

                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item, index) => {
                            return (
                                <Menu
                                    key={index}
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img
                            width={26}
                            height={26}
                            src={ReloadIcon}
                            alt='reloadIcon'
                        />

                        <img
                            width={26}
                            height={26}
                            src={HeartIcon}
                            alt='heartIcon'
                        />

                        <img width={26} height={26} src={CartIcon} alt='cartIcon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
