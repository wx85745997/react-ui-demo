import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void
export interface MenuPorps {
  defultIndex?: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
  defultOpenSubMenu?:string[]
}

interface IMenuContext {
  index?: string
  onSelect?: SelectCallback
  mode?: MenuMode
  defultOpenSubMenu?:string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuPorps> = (porps) => {
  const { className, mode, defultIndex, style, children, onSelect ,defultOpenSubMenu } = porps
  const [currentActive, setActive] = useState(defultIndex)
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defultOpenSubMenu
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index:index.toString() })
      } else {
        console.error(
          'Warning. Menu has a child which is not a menuitem component'
        )
      }
    })
  }

  return (
    <ul data-testid="test-menu" className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defultIndex: '0',
  mode: 'horizontal',
  defultOpenSubMenu:[]
}

export default Menu
