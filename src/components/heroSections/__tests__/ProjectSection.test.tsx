import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProjectSection from '../ProjectSection'
import type { ComponentProps, ReactNode } from 'react'

// Mock the UI components
interface MockButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: MockButtonProps) => <button {...props}>{children}</button>
}))

describe('ProjectSection Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<ProjectSection />)
    expect(container).toBeTruthy()
  })

  it('displays the main heading', () => {
    render(<ProjectSection />)
    
    const heading = screen.getByText('OUR PROJECTS OF ABEMIS 3.0')
    expect(heading).toBeTruthy()
    expect(heading.tagName).toBe('H1')
  })

  it('displays the description text', () => {
    render(<ProjectSection />)
    
    const description = screen.getByText(/Lorem ipsum dolor sit amet consectetur adipiscing elit/)
    expect(description).toBeTruthy()
  })

  it('has proper main element styling', () => {
    const { container } = render(<ProjectSection />)
    
    const main = container.querySelector('main')
    expect(main).toBeTruthy()
    expect(main?.className).toContain('min-h-screen')
    expect(main?.className).toContain('bg-[#f5f5f5]')
  })

  it('renders three project images', () => {
    render(<ProjectSection />)
    
    const constructionImage = screen.getByAltText('Construction vehicle')
    const infrastructureImage = screen.getByAltText('Infrastructure project')
    const produceImage = screen.getByAltText('Agricultural produce')
    
    expect(constructionImage).toBeTruthy()
    expect(infrastructureImage).toBeTruthy()
    expect(produceImage).toBeTruthy()
    
    expect(constructionImage.getAttribute('src')).toBe('/yellow-construction-tractor-vehicle.jpg')
    expect(infrastructureImage.getAttribute('src')).toBe('/white-barn-with-silos-rural-farm.jpg')
    expect(produceImage.getAttribute('src')).toBe('/fresh-vegetables-produce-carrots.jpg')
  })

  it('displays project number and title', () => {
    render(<ProjectSection />)
    
    expect(screen.getByText('02')).toBeTruthy()
    expect(screen.getByText('INFRASTRACTURE')).toBeTruthy()
    expect(screen.getByText('Project')).toBeTruthy()
  })

  it('renders the see detail button', () => {
    render(<ProjectSection />)
    
    const button = screen.getByText('SEE DETAIL')
    expect(button).toBeTruthy()
  })

  it('uses grid layout for images', () => {
    const { container } = render(<ProjectSection />)
    
    const grid = container.querySelector('.grid-cols-12')
    expect(grid).toBeTruthy()
  })

  it('has center text alignment for header', () => {
    const { container } = render(<ProjectSection />)
    
    const textCenter = container.querySelector('.text-center')
    expect(textCenter).toBeTruthy()
  })
})
