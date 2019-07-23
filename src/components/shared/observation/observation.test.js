import React from 'react'
import Observation from '../observation'
import { create } from 'react-test-renderer'

describe('observation.test.js', () => {
    test('<Observation /> should render', () => {
        const observation = create(<Observation />)
        expect(observation).toBeTruthy()
    })

    test('<Observation /> should match the snapshot', () => {
        const observation = create(<Observation>Snapshot Test</Observation>)
        expect(observation.toJSON()).toMatchSnapshot()
    })
})