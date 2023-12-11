
import './App.css';
import { Statistics } from './components/Statistics';

import { Table } from './components/Table';
function App() {
  return (
    <div className="main">
      <section className='section1'>
        <Table/>
      </section>
      <section className='section2'>
        <Statistics />
      </section>
    
     
    </div>
  );
}

export default App;
