import styled from 'styled-components'
import { theme } from '~/constants'

const Title = styled.h1`
    color: ${theme.secondaryColor};
    font-family: ${theme.primaryFont};
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`

export default Title
