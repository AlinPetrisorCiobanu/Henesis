import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../components/footer/footer'

describe('Footer', () => {
  test('shows contact links', () => {
    localStorage.removeItem('cookiesAccepted')
    render(<Footer />)

    expect(screen.getByRole('link', { name: /info@henesis.com/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\+34 624 250 761/ })).toBeInTheDocument()
  })
})
