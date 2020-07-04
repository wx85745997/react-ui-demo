import React,{ButtonHTMLAttributes,AnchorHTMLAttributes,FC} from 'react'
import classNames from 'classnames'


type ButtonSize = 'lg' | 'sm'

type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  /**设置类型*/ 
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
* 这是我们第一个组件
*~~~js
~import{ button} from 'vikiing' 
*~~~
*/ 

export const Button: FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, href, className, ...restProps } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  })


  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}


Button.defaultProps = {
  disabled: false,
  btnType: 'primary',
}

export default Button
