
import './App.css';
import  './Style.css'
import image from './Images/Reacts.png'
import Video from './Video/Video.mp4'
function App() {
  return (<>
    <div style={{border:"solid 1px black", maxWidth: 100}}>
     <h1 className="title">haythem</h1>
     <img src="./Image/React.png" alt="logo"/>
     <img src={image} alt="logo" />
    </div>
    <video style={{width:320,height:240}} controls src={Video} type="video/mp4"/>
    </>
  );
}

export default App;
