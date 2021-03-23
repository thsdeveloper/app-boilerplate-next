import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Deve renderizar o título', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avadddddddnçado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
