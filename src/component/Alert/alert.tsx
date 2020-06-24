import React from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Info = 'info',
  Danger = 'danger',
}

interface BaseAlterProps {
  className?: string
  alertType?: AlertType
  message?:string 
  description?:string
  children?: React.ReactNode
  closable?:boolean
}

const Alert: React.FC<BaseAlterProps> = (props) => {
  const { alertType, children,message,description,closable, ...restProps } = props
  

  const classes = classNames('alert', classNames, {
    [`alert-${alertType}`]: alertType,
  })
    return (
      <div  className={classes} {...restProps}>
        <span className='alert-message'>{message}</span>
        <span className='alert-description'>{description}</span>
      </div>
    )

}

Alert.defaultProps = {
  alertType: AlertType.Info,
  closable:false,
}

export default Alert
