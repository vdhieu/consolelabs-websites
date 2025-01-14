import { VariantProps, cva } from 'class-variance-authority'

const toggleButtonVariants = cva([
  'border border-neutral-300 rounded px-2 py-1 hover:bg-neutral-100 data-[state=on]:bg-primary-700 data-[state=on]:text-white data-[state=on]:hover:bg-primary-800 disabled:text-neutral-400 disabled:bg-white disabled:cursor-not-allowed',
])

const toggleButtonGroupVariants = cva(['flex gap-x-2'])

export const toggleButton = {
  toggleButtonVariants,
  toggleButtonGroupVariants,
}

export type ToggleButtonStylesProps = VariantProps<typeof toggleButtonVariants>
export type ToggleButtonGroupStylesProps = VariantProps<
  typeof toggleButtonGroupVariants
>
