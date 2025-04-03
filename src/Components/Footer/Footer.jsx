import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import { dataMenu } from '@components/Footer/Constant';
function MyFooter() {
    const { container, boxNavigate } = styles;

    return (
        <div className={container}>
            <div>
                <img src={Logo} width={160} height={55} alt='' />
            </div>

            <div className={boxNavigate}>
                {dataMenu.map((item) => {
                    return <div>{item.content}</div>;
                })}
            </div>

            <div>
                <p style={{ textAlign: 'center' }}>Guaranteed safe ckeckout</p>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
                    alt=''
                />
            </div>
            <div style={{ marginTop: '20px' }}>
                Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.
            </div>
        </div>
    );
}

export default MyFooter;
