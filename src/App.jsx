import './App.css';
import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';

function App() {
    return (
        <>
            <MainLayout>
                <MyHeader />
                Content
                <MyFooter />
            </MainLayout>
        </>
    );
}

export default App;
