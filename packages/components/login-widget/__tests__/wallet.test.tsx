import { fireEvent, render } from '@testing-library/react'
import Wallet from '../src/wallet'

describe('Wallet', () => {
  const mockProps = {
    icon: () => <div>Icon</div>,
    isInstalled: true,
    active: false,
    connect: jest.fn(),
    name: 'mockWallet',
  }

  it('renders the component with the correct class', () => {
    const { container } = render(<Wallet {...mockProps} />)
    expect(container.firstChild).toHaveClass(
      'flex gap-x-3 items-center py-3 px-6 rounded-xl transition hover:bg-neutral-100 text-neutral-600',
    )
  })

  it('renders the component with the correct icon', () => {
    const { getByText } = render(<Wallet {...mockProps} />)
    expect(getByText('Icon')).toBeInTheDocument()
  })

  it('disables the button when isInstalled is false', () => {
    const { getByRole } = render(<Wallet {...mockProps} isInstalled={false} />)
    expect(getByRole('button')).toBeDisabled()
  })

  it('calls the connect function when clicked', () => {
    const { getByRole } = render(<Wallet {...mockProps} />)
    fireEvent.click(getByRole('button'))
    expect(mockProps.connect).toHaveBeenCalled()
  })
})
