import { describe, it, expect } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Footer } from '.'
import { theme } from '../../styles/theme'

describe('Footer', () => {
  it('should a render footer component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>,
    )

    expect(
      screen.getByText(/Todos os direitos reservados./i),
    ).toBeInTheDocument()
  })
})
