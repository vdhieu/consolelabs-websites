import { fireEvent, render, screen } from '@testing-library/react'
import { Switch } from '../src'

describe('Switch', () => {
  it('renders the switch with the correct label', () => {
    const labelText = 'Click me'
    const { getByText } = render(<Switch checked label={labelText} />)
    const button = getByText(labelText)
    expect(button).toBeInTheDocument()
  })

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn()
    render(<Switch checked onChange={onClick} data-testid="test-switch" />)
    const switchComponent = screen.getByTestId('test-switch')
    fireEvent.click(switchComponent)
    expect(onClick).toHaveBeenCalled()
  })

  it('calls the onClick function with the correct checked arg', () => {
    const onClick = jest.fn()
    render(<Switch onChange={onClick} data-testid="test-switch" />)
    const switchComponent = screen.getByTestId('test-switch')
    fireEvent.click(switchComponent)
    expect(onClick).toHaveBeenCalledWith(true)
  })

  it('does not call the onClick function when the switch is disabled', () => {
    const onClick = jest.fn()
    render(<Switch onChange={onClick} data-testid="test-switch" disabled />)
    const switchComponent = screen.getByTestId('test-switch')
    fireEvent.click(switchComponent)
    expect(onClick).toHaveBeenCalledTimes(0)
  })

  it('renders the switch with the correct size variant', () => {
    const { container } = render(<Switch size="md" />)
    const switchWrapper = container.querySelector('button')
    expect(switchWrapper).toHaveClass('w-11 h-6 p-0.5')
  })
})
