import React from 'react';
import Button,{ButtonType,ButtonSize} from './component/Button/button'
import './App.css';

const App:React.FC=()=> {
  return (
    <div className="App">
      <Button className="cccc" onClick={()=>{alert(1)}}  >Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' size={ButtonSize.Large}>Hello</Button>
      <Button disabled btnType={ButtonType.Link} href='http://www.baidu.com' size={ButtonSize.Large}>Hello</Button>
    </div>
  );
}

export default App;
