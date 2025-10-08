import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import HowToSection from '../HowToSection'
import type { ComponentProps, ReactNode } from 'react'

// Mock the UI components
interface MockButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: MockButtonProps) => <button {...props}>{children}</button>
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  ArrowUpRight: () => <div data-testid="arrow-up-right-icon">ArrowUpRight</div>,
  Linkedin: () => <div data-testid="linkedin-icon">Linkedin</div>,
  Facebook: () => <div data-testid="facebook-icon">Facebook</div>,
  Instagram: () => <div data-testid="instagram-icon">Instagram</div>,
  Youtube: () => <div data-testid="youtube-icon">Youtube</div>,
  Image: () => <div data-testid="image-icon">Image</div>
}))

describe('HowToSection Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<HowToSection />)
    expect(container).toBeTruthy()
  })

  it('displays the contact section heading', () => {
    render(<HowToSection />)
    
    expect(screen.getByText('HAVE QUESTIONS?')).toBeTruthy()
    expect(screen.getByText('REACH OUT!')).toBeTruthy()
  })

  it('renders the contact us button', () => {
    render(<HowToSection />)
    
    const button = screen.getByText('CONTACT US')
    expect(button).toBeTruthy()
  })

  it('displays the ABEMIS 3.0 text with background image', () => {
    render(<HowToSection />)
    
    const abemisHeading = screen.getByText('ABEMIS 3.0')
    expect(abemisHeading).toBeTruthy()
    expect(abemisHeading.tagName).toBe('H3')
  })

  it('renders the agricultural equipment background image', () => {
    render(<HowToSection />)
    
    const image = screen.getByAltText('ABEMIS 3.0 Agricultural Equipment')
    expect(image).toBeTruthy()
    expect(image.getAttribute('src')).toBe('/yellow-harvester-combine-in-wheat-field.jpg')
  })

  it('has proper section styling', () => {
    const { container } = render(<HowToSection />)
    
    const section = container.querySelector('section')
    expect(section).toBeTruthy()
    expect(section?.className).toContain('bg-white')
  })

  it('displays footer navigation links', () => {
    render(<HowToSection />)
    
    expect(screen.getByText('HOME')).toBeTruthy()
    expect(screen.getByText('ABOUT')).toBeTruthy()
    expect(screen.getByText('PROJECTS')).toBeTruthy()
    expect(screen.getByText('SERVICES')).toBeTruthy()
    expect(screen.getByText('HOW TO?')).toBeTruthy()
  })

  it('displays copyright text', () => {
    render(<HowToSection />)
    
    expect(screen.getByText('© 2025 ABEMIS 3.0. All Rights Reserved')).toBeTruthy()
  })

  it('renders social media icons', () => {
    const { container } = render(<HowToSection />)
    
    expect(container.querySelector('[data-testid="linkedin-icon"]')).toBeTruthy()
    expect(container.querySelector('[data-testid="facebook-icon"]')).toBeTruthy()
    expect(container.querySelector('[data-testid="instagram-icon"]')).toBeTruthy()
    expect(container.querySelector('[data-testid="youtube-icon"]')).toBeTruthy()
  })

  it('renders certification logo placeholders', () => {
    render(<HowToSection />)
    
    expect(screen.getByAltText('Certification Logo 1')).toBeTruthy()
    expect(screen.getByAltText('Certification Logo 2')).toBeTruthy()
  })
})
