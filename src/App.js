import './App.css';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {

const [data, setData] = useState([]);
const [totalValue, setTotalValue] = useState([]);
const [count, setCount] = useState(10);
const [minCount, setMinCount] = useState(0);
const [ldisable, setLDisable] = useState(true);
const [rdisable, setRDisable] = useState(false);

useEffect(() => {
  fetch("../json/list.json")
      .then(response => {
          return response.json();
      })
      .then(data => setData(data))
},[]);
    
const rightOnclick = () =>{
  setMinCount(minCount + 10 )
  setCount(count + 10)
  console.log(minCount)
  setLDisable(false);
  setRDisable(true)
}

const leftOnclick = () =>{
  setMinCount(minCount - 10 )
  setCount(count - 10)
  setRDisable(false);
  setLDisable(true);
}
console.log(data)
console.log(totalValue)

  return (
    <div className="App">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} className="parent">
        <div className={ldisable === true ? 'arrows disable': 'arrows'}>
          <a onClick={leftOnclick}><i class="arrow left"></i></a>
        </div>
        <div className="main">
            <div className='content'> 
              <h3>Vimeo Staff Picks</h3>
              <p>The best short films on the internet, handpicked by Vimeo staff</p>
            </div>
            
            <div className='panel'>

              {data.slice(minCount,count).map((item)=>(
                <div key={item.id} className="a">
                <img src={item.img} alt='text'/>
                <div className='bottom'>
                  <span>{item.content}</span>
                </div>
                </div>
              ))}
             
            </div>
        </div>
        <div className={rdisable === true ? 'arrows disable': 'arrows'}>
          <a onClick={rightOnclick}><i class="arrow right"></i></a>
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
