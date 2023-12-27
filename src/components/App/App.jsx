import './App.scss';

import Card from '../Card/Card';
import FindOne from '../FindOne/FindOne';

function App() {
  return (
    <div className="posts-container">
      <FindOne dinosaurId={3} />
      <FindOne dinosaurId={67} />
      <Card />
    </div>
  );
}

export default App;
