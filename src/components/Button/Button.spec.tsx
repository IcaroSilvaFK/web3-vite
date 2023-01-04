import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { theme } from '../../styles/theme'

import { Button } from '.'
import { ThemeProvider } from 'styled-components'

const onClickMock = vi.fn()

describe('Button', () => {
  it('should a render components', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Test</Button>
      </ThemeProvider>,
    )

    expect(screen.getByText(/Test/i)).toBeInTheDocument()
  })

  it('should a called onclick function', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickMock}>Test</Button>
      </ThemeProvider>,
    )

    screen.getByText(/Test/i).click()

    expect(onClickMock).toBeCalled()
  })
})
