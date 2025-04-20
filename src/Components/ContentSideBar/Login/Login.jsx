import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Login() {
    const { container, title, boxRememberMe, lostPassword, btnLogin } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label={'email'} type={'text'} isRequired />
            <InputCommon label={'password'} type={'password'} isRequired />

            <label htmlFor='check_box'>
                <div className={boxRememberMe}>
                    <input type='checkbox' id='check_box' alt='checkbox' />
                    <span>Remember Me</span>
                </div>
            </label>

            <Button content={'LOGIN'} />

            <div className={lostPassword}>Lost Your Password</div>
        </div>
    );
}

export default Login;
