import { Routes, Route } from 'react-router-dom';
import styles from './styles/Home.module.css';

import Navbar from './components/navbar/Navbar';
import HomePage from './components/homePage/HomePage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className={styles.background}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;