import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>,document.querySelector("#root"))

document.addEventListener("contextmenu",function(test){
    test.preventDefault();
document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 ||
         e.keyCode === 16 ||
         e.keyCode === 80 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        return false;
    }
    else if(e.keyCode === 123){
        return false;
    } 
    else {
        return true;
    }
    };

})  