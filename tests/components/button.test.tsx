import React from 'react'
import { mount } from 'enzyme'

xtest('hello world', () => {
  const wrapper = mount(<p>Hello Jest!</p>)
  expect(wrapper.text()).toMatch('Hello Tests!')
})
