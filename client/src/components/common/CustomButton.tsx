import { Button } from '@pankod/refine-mui'
import { CustomButtonProps } from 'interfaces/common'


const CustomButton = ({ type, title, fullWidth, icon, handleClick, disabled }: CustomButtonProps) => {
  return (
    <Button
    type={type === 'submit' ? 'submit' : 'button' }
    disabled={disabled}
    sx={{
        flex: fullWidth ? 1 : 'unset',
        padding: '10px 15px',
        width: fullWidth ? '100%' : 'fit-content',
        minWidth: 130,
        borderRadius: '0px',
        backgroundColor: '#F0F0F0',
        color: '#475BE8',
        fontSize: 16,
        fontWeight: 600,
        gap: '10px',
        textTransform: 'capitalize',
        '&:hover': {
          opacity: 0.9,
          backgroundColor: '#E9E9E9',
          color: '#233EFF',
        }
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton