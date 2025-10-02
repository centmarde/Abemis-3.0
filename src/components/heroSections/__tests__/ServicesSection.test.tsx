import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ServicesSection from '../ServicesSection'

describe('ServicesSection Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<ServicesSection />)
    expect(container).toBeTruthy()
  })

  it('displays the main heading with typo', () => {
    render(<ServicesSection />)
    
    const heading = screen.getByText('Service Sesction')
    expect(heading).toBeTruthy()
    expect(heading.tagName).toBe('H2')
  })

  it('has correct section id', () => {
    const { container } = render(<ServicesSection />)
    
    const section = container.querySelector('#services')
    expect(section).toBeTruthy()
  })

  it('has gray background', () => {
    const { container } = render(<ServicesSection />)
    
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-gray-50')
  })
})
