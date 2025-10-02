import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HowToSection from '../HowToSection'

describe('HowToSection Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<HowToSection />)
    expect(container).toBeTruthy()
  })

  it('has the correct section id for navigation', () => {
    const { container } = render(<HowToSection />)
    
    const section = container.querySelector('#how-to')
    expect(section).toBeTruthy()
    expect(section?.tagName).toBe('SECTION')
  })

  it('displays the main heading', () => {
    render(<HowToSection />)
    
    const heading = screen.getByText('How to')
    expect(heading).toBeTruthy()
    expect(heading.tagName).toBe('H2')
  })

  it('displays the description text', () => {
    render(<HowToSection />)
    
    const description = screen.getByText('Agricultural and Biosystems Engineering Management Information System')
    expect(description).toBeTruthy()
  })

  it('has proper section styling', () => {
    const { container } = render(<HowToSection />)
    
    const section = container.querySelector('section')
    expect(section).toBeTruthy()
    expect(section?.className).toContain('min-h-screen')
    expect(section?.className).toContain('bg-white')
  })

  it('uses semantic HTML structure', () => {
    const { container } = render(<HowToSection />)
    
    const section = container.querySelector('section')
    expect(section).toBeTruthy()
    expect(section?.tagName).toBe('SECTION')
    
    const h2 = container.querySelector('h2')
    expect(h2).toBeTruthy()
  })
})
