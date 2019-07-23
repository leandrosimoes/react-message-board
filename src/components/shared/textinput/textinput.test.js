import React from 'react'
import TextInput from '../textinput'
import { create } from 'react-test-renderer'

describe('textinput.test.js', () => {
    test('<TextInput /> should render', () => {
        const textinput = create(<TextInput />)
        expect(textinput).toBeTruthy()
    })

    test('<TextInput /> should match the snapshot', () => {
        const textinput = create(<TextInput />)
        expect(textinput.toJSON()).toMatchSnapshot()
    })
})