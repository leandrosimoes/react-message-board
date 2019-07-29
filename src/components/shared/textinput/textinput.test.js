import React from 'react'
import { create } from 'react-test-renderer'
import TextInput from '~/components/shared/textinput'

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
