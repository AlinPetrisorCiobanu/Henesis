import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Contact from '../pages/contact/contact'

describe('Contact page', () => {
  test('submit form shows success message', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )

    const nombre = screen.getByPlaceholderText(/Nombre completo/i)
    const email = screen.getByPlaceholderText(/Correo electrónico/i)
    const telefono = screen.getByPlaceholderText(/Teléfono/i)
    const mensaje = screen.getByPlaceholderText(/Tu mensaje/i)
    const submit = screen.getByRole('button', { name: /Enviar mensaje/i })

    fireEvent.change(nombre, { target: { value: 'Juan' } })
    fireEvent.change(email, { target: { value: 'juan@example.com' } })
    fireEvent.change(telefono, { target: { value: '612345678' } })
    fireEvent.change(mensaje, { target: { value: 'Necesito presupuesto' } })

    fireEvent.click(submit)

    expect(screen.getByText(/¡Mensaje enviado correctamente!/i)).toBeInTheDocument()
  })
})
