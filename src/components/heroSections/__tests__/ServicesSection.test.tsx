import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ServicesSection from '../ServicesSection'

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  ArrowUpRight: () => <div data-testid="arrow-up-right-icon">ArrowUpRight</div>
}))

describe('ServicesSection Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<ServicesSection />)
    expect(container).toBeTruthy()
  })

  it('displays the main heading', () => {
    render(<ServicesSection />)
    
    const heading = screen.getByText('SERVICES OF ABEMIS 3.0')
    expect(heading).toBeTruthy()
    expect(heading.tagName).toBe('H2')
  })

  it('has dark background', () => {
    const { container } = render(<ServicesSection />)
    
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-[#0a0a0a]')
  })

  it('displays description text', () => {
    render(<ServicesSection />)
    
    const description = screen.getByText(/Lorem ipsum dolor sit amet consectetur adipiscing elit/)
    expect(description).toBeTruthy()
  })

  it('renders the hero image', () => {
    render(<ServicesSection />)
    
    const image = screen.getByAltText('Agricultural services')
    expect(image).toBeTruthy()
    expect(image.getAttribute('src')).toBe('/grain-harvest-pouring-into-container-with-tractor-.jpg')
  })

  it('displays all three service items', () => {
    render(<ServicesSection />)
    
    expect(screen.getByText('SERVICES 01')).toBeTruthy()
    expect(screen.getByText('SERVICES 02')).toBeTruthy()
    expect(screen.getByText('SERVICES 03')).toBeTruthy()
  })

  it('renders arrow icons for services', () => {
    const { container } = render(<ServicesSection />)
    
    const icons = container.querySelectorAll('[data-testid="arrow-up-right-icon"]')
    expect(icons.length).toBeGreaterThan(0)
  })

  it('has diagonal stripe pattern background', () => {
    const { container } = render(<ServicesSection />)
    
    const stripePattern = container.querySelector('.absolute.inset-0.opacity-10')
    expect(stripePattern).toBeTruthy()
  })

  it('service items have hover effects', () => {
    const { container } = render(<ServicesSection />)
    
    const serviceItem = container.querySelector('.group')
    expect(serviceItem).toBeTruthy()
    expect(serviceItem?.className).toContain('cursor-pointer')
  })

  it('renders service descriptions', () => {
    const { container } = render(<ServicesSection />)
    
    const descriptions = container.querySelectorAll('.text-gray-400')
    expect(descriptions.length).toBe(3)
  })
})
