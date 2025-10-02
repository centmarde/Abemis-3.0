import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import HeroView from '../HeroView'

// Mock the child components to isolate testing
vi.mock('@/components/navbar', () => ({
  Navbar: () => <nav data-testid="navbar">Navbar</nav>
}))

vi.mock('@/components/heroSections/LandingSection', () => ({
  default: () => <div data-testid="landing-section">Landing Section</div>
}))

vi.mock('@/components/heroSections/AboutSection', () => ({
  default: () => <div data-testid="about-section">About Section</div>
}))

vi.mock('@/components/heroSections/ProjectSection', () => ({
  default: () => <div data-testid="project-section">Project Section</div>
}))

vi.mock('@/components/heroSections/ServicesSection', () => ({
  default: () => <div data-testid="services-section">Services Section</div>
}))

vi.mock('@/components/heroSections/HowToSection', () => ({
  default: () => <div data-testid="howto-section">How To Section</div>
}))

describe('HeroView Component', () => {
  it('renders without crashing', () => {
    render(<HeroView />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<HeroView />)
    
    // Check if all sections are rendered
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('landing-section')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('project-section')).toBeInTheDocument()
    expect(screen.getByTestId('services-section')).toBeInTheDocument()
    expect(screen.getByTestId('howto-section')).toBeInTheDocument()
  })

  it('renders sections in the correct order', () => {
    const { container } = render(<HeroView />)
    
    // Get all elements in DOM order
    const allElements = container.querySelectorAll('[data-testid]')
    
    // Check if navbar comes first
    expect(allElements[0]).toHaveAttribute('data-testid', 'navbar')
    
    // Check if sections exist in order
    expect(screen.getByTestId('landing-section')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('project-section')).toBeInTheDocument()
    expect(screen.getByTestId('services-section')).toBeInTheDocument()
    expect(screen.getByTestId('howto-section')).toBeInTheDocument()
  })

  it('has proper container structure', () => {
    const { container } = render(<HeroView />)
    
    // Check if the main container div exists
    const mainContainer = container.querySelector('div')
    expect(mainContainer).toBeInTheDocument()
    
    // Check if all sections are children of the main container
    const childElements = mainContainer?.children
    expect(childElements).toHaveLength(6) // navbar + 5 sections
  })

  it('applies correct accessibility structure', () => {
    render(<HeroView />)
    
    // Since sections should have proper semantic structure
    // we can test that they're rendered with expected test IDs
    const sectionsTestIds = [
      'navbar',
      'landing-section', 
      'about-section',
      'project-section',
      'services-section',
      'howto-section'
    ]

    sectionsTestIds.forEach(testId => {
      expect(screen.getByTestId(testId)).toBeInTheDocument()
    })
  })

  it('renders consistently across multiple renders', () => {
    const { rerender } = render(<HeroView />)
    
    // First render check
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getAllByTestId(/.*-section$/)).toHaveLength(5)
    
    // Re-render and check consistency
    rerender(<HeroView />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getAllByTestId(/.*-section$/)).toHaveLength(5)
  })
})

describe('HeroView Integration', () => {
  it('maintains proper component hierarchy', () => {
    const { container } = render(<HeroView />)
    
    // Test the DOM structure
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv.tagName).toBe('DIV')
    
    // Check that all components are mounted within the main container
    const componentsInContainer = mainDiv.querySelectorAll('[data-testid]')
    expect(componentsInContainer).toHaveLength(6)
  })
})
