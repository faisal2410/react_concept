
import Home from './components/home/Home';
import Counter from './components/counter/Counter';
import ExternalUser from './components/externalUser/ExternalUser';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <h1 className='text-center' >Hello world</h1>
      <Home></Home>
      <Counter></Counter>
      <ExternalUser></ExternalUser>
      <Footer></Footer>
    </div>
  );
};

export default App;
