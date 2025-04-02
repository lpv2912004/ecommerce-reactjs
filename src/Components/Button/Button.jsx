import classNames from 'classnames';
import styles from './styles.module.scss';
function Button({ content, isPrimary = true }) {
    const { btn, secondaryBtn, primaryBtn } = styles;
    return (
        <button
            className={classNames(btn, {
                [primaryBtn]: isPrimary,
                [secondaryBtn]: !isPrimary
            })}
        >
            {content}
        </button>
    );
}

export default Button;
