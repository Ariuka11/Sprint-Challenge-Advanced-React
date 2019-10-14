import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(rtl.cleanup);

test('Render the heading', () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByText('American Female Soccer Players')
  expect(element).toBeVisible()
})
