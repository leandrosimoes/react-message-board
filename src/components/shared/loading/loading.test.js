import React from 'react'
import { create } from 'react-test-renderer'
import Loading from './index'

describe('loading.test.js', () => {
    test('<Loading /> should render', () => {
        const loading = create(<Loading />)
        expect(loading).toBeTruthy()
    })

    test('<Loading /> should match the snapshot', () => {
        const loading = create(<Loading>Snapshot Test</Loading>)
        expect(loading.toJSON()).toMatchSnapshot()
    })
})
