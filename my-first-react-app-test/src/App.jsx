import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';

function App() {
    //serves at the root
    return(
      <>  
        <Header/>
        <Food/>
        <Footer/>
        <Food/>
      </>
    );
}

export default App