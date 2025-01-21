import styled from 'styled-components'

import { colors } from '../../app/styles/colors'

export const ContainerBlock = styled.div`
  max-width: 1440px;
  padding: 0 62px;
  margin: 0 auto;
`

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 52px 48px;
  padding: 48px 0 30px;
`

export const LoadWrap = styled.div`
  width: 20%;
  display: block;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.black};
`
