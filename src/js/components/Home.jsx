import Navbar from './Navbar';
import Welcome from './Welcome';
import Cards from './Cards';
import Footer from './Footer';

const Home = () => {
	
	return (
        <>
	<Navbar/>
  <div className='container'>
    <Welcome/>
    <div className='d-flex justify-content-between'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  </div>
    <Footer/>
        </>
    );
};

export default Home
