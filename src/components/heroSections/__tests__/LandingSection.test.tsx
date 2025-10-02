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
})
