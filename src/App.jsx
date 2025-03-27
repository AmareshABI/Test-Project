import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Card from './component/Card';

function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleNextContact = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePreviousContact = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - 1);
    }
  };

  const handleFirstContact = () => {
    setCurrentIndex(0);
  };

  const handleLastContact = () => {
    setCurrentIndex(data.length - 1);
  };

  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleFirstContact}
        style={{ backgroundColor: 'lightblue', padding: '10px 15px', margin: '5px', border: 'none', borderRadius: '5px' }}
        >First Contact</button>
        <button onClick={handlePreviousContact}
        style={{ backgroundColor: 'lightblue', padding: '10px 15px', margin: '5px', border: 'none', borderRadius: '5px' }}
        >Previous Contact</button>
        <button onClick={handleNextContact}
        style={{ backgroundColor: 'lightblue', padding: '10px 15px', margin: '5px', border: 'none', borderRadius: '5px' }}
        >Next Contact</button>
        <button onClick={handleLastContact}
        style={{ backgroundColor: 'lightblue', padding: '10px 15px', margin: '5px', border: 'none', borderRadius: '5px' }}
        >Last Contact</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {data.length > 0 && (
          <div style={{ width: '500px' }}>
            <Card key={data[currentIndex].id} user={data[currentIndex]} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;