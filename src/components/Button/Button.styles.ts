import styled from 'styled-components'

import { colors } from '../../app/styles/colors'
interface ButtonContainerProps {
  isActive?: boolean
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  color: ${props => (props.isActive ? `${colors.white}` : 'rgb(255, 255, 255, .7)')};
  padding: 23px;
  background-color: ${props => (props.isActive ? `${colors.btnHover}` : `${colors.blue}`)};
  cursor: pointer;

  &:hover {
    transition: all 0.3s linear;
    background-color: ${colors.btnHover};
    color: ${colors.white};
  }
`
export default ButtonContainer
