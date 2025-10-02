import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.scrollTo to prevent errors in tests
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});

// Mock window.pageYOffset
Object.defineProperty(window, 'pageYOffset', {
  value: 0,
  writable: true,
});

// Mock getBoundingClientRect
Element.prototype.getBoundingClientRect = vi.fn(() => ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: vi.fn(),
}));
