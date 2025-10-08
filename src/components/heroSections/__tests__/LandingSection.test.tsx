import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LandingSection from '../LandingSection'

describe('LandingSection Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<LandingSection />)
    expect(container).toBeTruthy()
  })

  it('displays the main heading', () => {
    render(<LandingSection />)
    
    const mainHeading = screen.getByText('ABEMIS 3.0')
    expect(mainHeading).toBeTruthy()
    expect(mainHeading.style.color).toBe('rgb(217, 119, 6)')
  })

  it('renders the hero image', () => {
    render(<LandingSection />)
    
    const image = screen.getByAltText('Modern architecture background')
    expect(image).toBeTruthy()
    expect(image.getAttribute('src')).toBe('/assets/Hero.png')
  })

  it('displays the description text', () => {
    render(<LandingSection />)
    
    expect(screen.getByText('AGRICULTURAL AND BIOSYSTEMS')).toBeTruthy()
    expect(screen.getByText('ENGINEERING MANAGEMENT')).toBeTruthy()
    expect(screen.getByText('INFORMATION SYSTEM (ABEMIS)')).toBeTruthy()
  })

  it('renders the counts section', () => {
    render(<LandingSection />)
    
    expect(screen.getByText('Counts of Registered')).toBeTruthy()
  })

  it('has correct section id for navigation', () => {
    const { container } = render(<LandingSection />)
    
    const section = container.querySelector('#home')
    expect(section).toBeTruthy()
  })

  it('has full screen height main section', () => {
    const { container } = render(<LandingSection />)
    
    const main = container.querySelector('main')
    expect(main).toBeTruthy()
    expect(main?.className).toContain('h-screen')
  })

  it('has dark overlay on background image', () => {
    const { container } = render(<LandingSection />)
    
    const overlay = container.querySelector('.bg-black\\/40')
    expect(overlay).toBeTruthy()
  })

  it('displays subtitle about Agricultural and Biosystems Engineering', () => {
    render(<LandingSection />)
    
    const subtitle = screen.getByText('Agricultural and Biosystems Engineering Management Information System')
    expect(subtitle).toBeTruthy()
  })

  it('uses responsive text sizing', () => {
    render(<LandingSection />)
    
    const heading = screen.getByText('ABEMIS 3.0')
    expect(heading.className).toContain('text-7xl')
    expect(heading.className).toContain('md:text-9xl')
  })
})
