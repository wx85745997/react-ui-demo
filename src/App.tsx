import React from 'react';
import Button,{ButtonType,ButtonSize} from './component/Button/button'
import Alert,{AlertType} from './component/Alert/alert'
import Menu from './component/Menu/menu'
import MenuItem from './component/Menu/menuItem'
import SubMenu from './component/Menu/subMenu'
import './App.css';

const App:React.FC=()=> {
  return (
    <div className="App">
      <Menu defultIndex={0} onSelect={(index)=>{alert(index)}} mode='vertical'>
        <MenuItem >cool</MenuItem>
        <MenuItem >cool2</MenuItem>
        <MenuItem disabled >cool3</MenuItem>
        <SubMenu title='dropdown'>
        <MenuItem >dropdown1</MenuItem> 
        <MenuItem >dropdown2</MenuItem>
        <MenuItem >dropdown3</MenuItem>
        </SubMenu>

      </Menu>


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
