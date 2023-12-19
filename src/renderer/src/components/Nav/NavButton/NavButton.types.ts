import { To } from 'react-router-dom'
import { IconProps } from '../../Icon/Icon.types'

export interface NavButtonProps extends IconProps {
  label: string
  to: To
  onClick?: () => void
}
