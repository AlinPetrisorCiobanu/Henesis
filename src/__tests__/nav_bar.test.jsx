import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Nav_bar from '../components/nav_bar/nav_bar'

describe('Nav_bar', () => {
  test('renders logo and main links', () => {
    render(
      <MemoryRouter>
        <Nav_bar />
      </MemoryRouter>
    )

    expect(screen.getByAltText(/henesis/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Inicio/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Contacto/i).length).toBeGreaterThan(0)
  })
})
