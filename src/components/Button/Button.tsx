import ButtonContainer from './Button.styles'

export interface ButtonProps {
  title: string
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ title, isActive = false, onClick }: ButtonProps) => {
  return (
    <ButtonContainer
      isActive={isActive}
      onClick={onClick}
    >
      {title}
    </ButtonContainer>
  )
}

export default Button
