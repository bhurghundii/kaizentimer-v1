import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('Load the index page and check the logo turns up', () => {
    render(<Home />)

    expect(screen.getByText("Kaizen Timer: Live intentionally")).toBeInTheDocument
  })
})