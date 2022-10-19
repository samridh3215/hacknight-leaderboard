import './App.css';
import logo from './hn_logo.png'
import Scores from './logtable'

function App() {
  return(
      <div className='main-container'>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"/>
        <div className="hn-info"> 
          <img alt="hacknight logo" src={logo}/>
          <br/>
          <h1>ACM PESUECC Hacknight 3.0</h1>
          <br/>
          <h1>Leaderboard</h1>
          <br/>
        </div>
        <div className="App">
          <Scores />
        </div>

      </div> 
  );
}

export default App;
