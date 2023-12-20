import { IconProps } from '../../Icon/Icon.types'

export interface NavButtonProps extends IconProps {
  label: string
  selected?: boolean
  onClick?: () => void
}
