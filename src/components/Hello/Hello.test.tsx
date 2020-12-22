import React from 'react'
import { shallow } from 'enzyme'
import { Hello } from 'src/components/Hello'

test('Hello test', () => {
  const hello = shallow(<Hello name="World" />)

  // Interaction demo
  expect(hello.text()).toEqual('Hello World!')
  hello.setProps({ name: 'Jest' })
  expect(hello.text()).toEqual('Hello Jest!')

  // Snapshot demo
  expect(hello).toMatchSnapshot()
})
