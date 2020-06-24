import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

const defaultPorps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

const disableProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('test Button component', () => {
    it('sould render the correct default button', () => {
        const wrapper = render(<Button {...defaultPorps} >Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn-default btn')
        fireEvent.click(element)
        expect(defaultPorps.onClick).toHaveBeenCalled()
        //console.log(element)
    })

    it('sould render the correct component base on different porps', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg klass')
    })

    it('sould render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })

    it('sould render disabled button when disabled set true', () => {
        const wrapper = render(<Button {...disableProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disableProps.onClick).not.toHaveBeenCalled()
    })
})