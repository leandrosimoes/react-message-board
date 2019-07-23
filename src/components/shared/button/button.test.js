import React from 'react'
import Button from '../button'
import { create } from 'react-test-renderer'

describe('button.test.js', () => {
    test('<Button /> should render', () => {
        const button = create(<Button />)
        expect(button).toBeTruthy()
    })

    test('<Button /> should match the snapshot', () => {
        const button = create(<Button>Snapshot Test</Button>)
        expect(button.toJSON()).toMatchSnapshot()
    })
})