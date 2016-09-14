import React from 'react'
import { shallow } from 'enzyme'
import Scrolling from '../index'
import { expect } from 'chai'
const { describe, it } = global

describe('Scrolling', () => {
    it('should show the given content', () => {
        const text = 'The Text'
        const wrapper = shallow(<Scrolling>{text}</Scrolling>)
        expect(wrapper.text()).to.be.equal(text)
    })
})
