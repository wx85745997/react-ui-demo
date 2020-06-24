import React from 'react'
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react'
import Menu, { MenuPorps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuPorps = {
    defultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenuPorps = {
    defultIndex: '0',
    mode: 'vertical'
}

const generateMenu = (props:MenuPorps) => {
    return (
        <Menu {...props}>
            <MenuItem index={'0'}>active</MenuItem>
            <MenuItem disabled index={'0'}>disabled</MenuItem>
            <MenuItem index={'0'}>xyz</MenuItem>
        </Menu>
    )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

describe('test Menu and MenuItem compent', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('viking-menu test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })

    it('click items sould change active and call the right callback', () => {
        const thirdItem = wrapper.getByText('xyz')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)

    })


    it('should render vertical mode when mode is set to vertical', () => {
        cleanup()
        const wrapper = render(generateMenu(testVerProps));
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
})

