import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import AboutSection from '../AboutSection'
import type { ComponentProps, ReactNode } from 'react'

// Mock the UI components
interface MockButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  variant?: string
  size?: string
  asChild?: boolean
}

vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: MockButtonProps) => (
    <button {...props}>{children}</button>
  )
}))

describe('AboutSection Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<AboutSection />)
    expect(container).toBeTruthy()
  })

  it('displays the correct heading', () => {
    render(<AboutSection />)
    
    expect(screen.getByText('ABOUT ABEMIS 3.0')).toBeTruthy()
    expect(screen.getByText('WE CAN MAKE SUSTAINABILITY')).toBeTruthy()
  })

  it('renders the hero image', () => {
    render(<AboutSection />)
    
    const image = screen.getByAltText('Aerial view of sustainable agriculture')
    expect(image).toBeTruthy()
    expect(image.getAttribute('src')).toBe('/assets/Hero.png')
  })

  it('renders both action buttons', () => {
    render(<AboutSection />)
    
    expect(screen.getByText('ABOUT US')).toBeTruthy()
    expect(screen.getByText('OUR Services')).toBeTruthy()
  })

  it('has proper main element with correct styling', () => {
    render(<AboutSection />)
    
    const main = screen.getByRole('main')
    expect(main).toBeTruthy()
    expect(main.className).toContain('bg-[#f5f1ed]')
  })

  it('displays description text', () => {
    render(<AboutSection />)
    
    const description = screen.getByText(/Lorem ipsum dolor sit amet consectetur adipiscing elit/)
    expect(description).toBeTruthy()
  })

  it('has decorative line element', () => {
    const { container } = render(<AboutSection />)
    
    const decorativeLine = container.querySelector('.bg-black')
    expect(decorativeLine).toBeTruthy()
  })

  it('uses responsive grid layout', () => {
    const { container } = render(<AboutSection />)
    
    const gridContainer = container.querySelector('.grid')
    expect(gridContainer).toBeTruthy()
    expect(gridContainer?.className).toContain('lg:grid-cols-2')
  })
})
