import './App.scss';

import Header from '../Header/Header';
import Card from '../Card/Card';
// import FindOne from '../FindOne/FindOne';

function App() {
  return (
    <>
      <Header />
      <div className="posts-container">
        {/* <FindOne dinosaurId={3} />
      <FindOne dinosaurId={67} /> */}
        <Card />
      </div>
    </>
  );
}

export default App;
