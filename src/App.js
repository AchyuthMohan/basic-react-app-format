import './app.css'
import Header from './components/Header';
function App() {
  const data='Achyuth Mohan'
  return (
   <div>
      <Header data={data}/>
     <h1 style={{color:'red',backgroundColor:'green'}}>Hello world</h1>
      <p className={'hello'}>Heyy guyss</p>
      <p>{data}</p>
     
      <br/>
      </div>
  );
}

export default App;

