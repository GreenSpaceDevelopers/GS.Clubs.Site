import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/NaviBar';
import Main from './pages/Main';

function App() {
    return (
    <div className='appContainer'>
        <NaviBar />
        <Main />
    </div>
    );                                            
}

export default App;
