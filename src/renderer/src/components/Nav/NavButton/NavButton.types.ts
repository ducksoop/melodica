import { IconProps } from '../../Icon/Icon.types'

export interface NavButtonProps extends IconProps {
  label: string
  onClick?: () => void
}
