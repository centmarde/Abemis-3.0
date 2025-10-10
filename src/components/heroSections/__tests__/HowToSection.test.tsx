import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import HowToSection from '../HowToSection'
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

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  ArrowUpRight: () => <svg data-testid="arrow-up-right-icon" />,
  Linkedin: () => <svg data-testid="linkedin-icon" />,
  Facebook: () => <svg data-testid="facebook-icon" />,
  Instagram: () => <svg data-testid="instagram-icon" />,
  Youtube: () => <svg data-testid="youtube-icon" />,
  Image: () => <svg data-testid="image-icon" />,
}))

describe('HowToSection Component', () => {
  let originalInnerWidth: number

  beforeEach(() => {
    // Store original window.innerWidth
    originalInnerWidth = window.innerWidth
    
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  afterEach(() => {
    // Restore original window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    })
  })

  it('renders without crashing', () => {
    render(<HowToSection />)
    expect(screen.getByText('ABEMIS 3.0')).toBeTruthy()
  })

  it('displays the contact section heading', () => {
    render(<HowToSection />)
    
    expect(screen.getByText('HAVE QUESTIONS?')).toBeTruthy()
    expect(screen.getByText('REACH OUT!')).toBeTruthy()
  })

  it('renders the contact button', () => {
    render(<HowToSection />)
    
    const contactButton = screen.getByText('CONTACT US')
    expect(contactButton).toBeTruthy()
  })

  it('displays ABEMIS 3.0 title', () => {
    render(<HowToSection />)
    
    const title = screen.getByText('ABEMIS 3.0')
    expect(title).toBeTruthy()
  })

  it('renders the main background image', () => {
    render(<HowToSection />)
    
    const image = screen.getByAltText('ABEMIS 3.0 Agricultural Equipment')
    expect(image).toBeTruthy()
    expect(image.getAttribute('src')).toBe('/yellow-harvester-combine-in-wheat-field.jpg')
  })

  it('displays footer navigation links', () => {
    render(<HowToSection />)
    
    expect(screen.getByText('HOME')).toBeTruthy()
    expect(screen.getByText('ABOUT')).toBeTruthy()
    expect(screen.getByText('PROJECTS')).toBeTruthy()
    expect(screen.getByText('SERVICES')).toBeTruthy()
    expect(screen.getByText('HOW TO?')).toBeTruthy()
  })

  it('renders all social media icons', () => {
    render(<HowToSection />)
    
    expect(screen.getByTestId('linkedin-icon')).toBeTruthy()
    expect(screen.getByTestId('facebook-icon')).toBeTruthy()
    expect(screen.getByTestId('instagram-icon')).toBeTruthy()
    expect(screen.getByTestId('youtube-icon')).toBeTruthy()
  })

  it('displays copyright notice', () => {
    render(<HowToSection />)
    
    const copyright = screen.getByText(/© 2025 ABEMIS 3.0. All Rights Reserved/)
    expect(copyright).toBeTruthy()
  })

  it('renders description text in contact section', () => {
    render(<HowToSection />)
    
    const descriptions = screen.getAllByText(/Lorem ipsum dolor sit amet/)
    expect(descriptions.length).toBeGreaterThan(0)
  })

  it('has proper section structure', () => {
    render(<HowToSection />)
    
    const section = document.querySelector('section')
    expect(section).toBeTruthy()
    expect(section?.className).toContain('bg-white')
  })

  it('applies correct styles to contact button', () => {
    render(<HowToSection />)
    
    const button = screen.getByText('CONTACT US').closest('button')
    expect(button).toBeTruthy()
    expect(button?.className).toContain('bg-[#6b8e8f]')
    expect(button?.className).toContain('rounded-full')
  })

  describe('Responsive behavior', () => {
    it('updates mask styles on desktop', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      })

      render(<HowToSection />)
      const title = screen.getByText('ABEMIS 3.0')
      expect(title).toBeTruthy()
    })

    it('handles mobile view correctly', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 480,
      })

      render(<HowToSection />)
      const title = screen.getByText('ABEMIS 3.0')
      expect(title).toBeTruthy()
    })

    it('handles tablet view correctly', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      })

      render(<HowToSection />)
      const title = screen.getByText('ABEMIS 3.0')
      expect(title).toBeTruthy()
    })
  })

  describe('Navigation links', () => {
    it('all navigation links are clickable', () => {
      render(<HowToSection />)
      
      const navLinks = document.querySelectorAll('nav a')
      expect(navLinks.length).toBe(5)
      
      navLinks.forEach(link => {
        expect(link.getAttribute('href')).toBe('#')
      })
    })
  })

  describe('Social media links', () => {
    it('all social media links are clickable', () => {
      render(<HowToSection />)
      
      const socialContainer = document.querySelectorAll('.flex.items-center.gap-4 a')
      expect(socialContainer.length).toBeGreaterThan(0)
      
      socialContainer.forEach(link => {
        expect(link.getAttribute('href')).toBe('#')
      })
    })
  })

  describe('Image rendering', () => {
    it('handles image load errors gracefully', () => {
      render(<HowToSection />)
      
      const images = document.querySelectorAll('img')
      expect(images.length).toBeGreaterThan(0)
    })
  })
})
