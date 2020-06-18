import React from 'react';
import Button,{ButtonType,ButtonSize} from './component/Button/button'
import Alert,{AlertType} from './component/Alert/alert'
import './App.css';

const App:React.FC=()=> {
  return (
    <div className="App">
      <Button className="cccc" onClick={()=>{alert(1)}}  >Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' size={ButtonSize.Large}>Hello</Button>
      <Button disabled btnType={ButtonType.Link} href='http://www.baidu.com' size={ButtonSize.Large}>Hello</Button>
      <Button className="cccc" onClick={()=>{alert(1)}}  >Hello</Button>

      <Alert  alertType={AlertType.Info} message='标题' description='正文'></Alert> 
      <Alert closable alertType={AlertType.Danger} message='标题' description='正文'></Alert> 
    </div>
  );
}

export default App;
