import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './Constant';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import CartIcon from '@icons/svgs/cartIcon.svg';
import HeartIcon from '@icons/svgs/heartIcon.svg';
import ReloadIcon from '@icons/svgs/reloadIcon.svg';
function MyHeader() {
    const {
        containerHeader,
        containerBox,
        containerBoxIcon,
        containerMenu,
        container
    } = styles;
    return (
        <div className={container}>
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
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((item, index) => {
                                return (
                                    <Menu
                                        key={index}
                                        content={item.content}
                                        href={item.href}
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

                        <img
                            width={26}
                            height={26}
                            src={CartIcon}
                            alt='cartIcon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
