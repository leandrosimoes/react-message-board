import React from 'react'
import Title from '../title'
import { create } from 'react-test-renderer'

describe('title.test.js', () => {
    test('<Title /> should render', () => {
        const title = create(<Title />)
        expect(title).toBeTruthy()
    })

    test('<Title /> should match the snapshot', () => {
        const title = create(<Title>Snapshot Test</Title>)
        expect(title.toJSON()).toMatchSnapshot()
    })
})