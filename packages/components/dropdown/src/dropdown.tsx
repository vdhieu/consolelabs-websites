import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { IconChevronDown, IconCheck } from '@consolelabs/icons'
import { dropdown } from '@consolelabs/theme'
import type {
  DropdownContentRef,
  DropdownContentProps,
  DropdownSubContentRef,
  DropdownSubContentProps,
  DropdownSubTriggerRef,
  DropdownSubTriggerProps,
  DropdownItemRef,
  DropdownLabelProps,
  DropdownLabelRef,
  BaseDropdownItemProps,
  DropdownItemProps,
  DropdownRadioItemRef,
  DropdownRadioItemProps,
  DropdownRadioGroupRef,
  DropdownRadioGroupProps,
} from './type'

const {
  dropdownIconStyleCva,
  dropdownChildItemClsx,
  dropdownChildItemSubtitleClsx,
  dropdownItemStyleCva,
  dropdownMenuSubTriggerClsx,
  dropdownContentStyleCva,
  dropdownMenuRadioIconClsx,
  dropdownMenuSeparatorClsx,
} = dropdown

function renderDropdownChildItem(
  props: BaseDropdownItemProps & {
    defaultRightIcon?: ReactNode
    useIndicator?: boolean
  },
) {
  const {
    children,
    subtitle,
    leftIcon,
    isLeftIconAvatar,
    className,
    rightExtra,
    rightIcon,
    defaultRightIcon,
    useIndicator,
  } = props
  const RightIconWrapper = useIndicator
    ? DropdownMenuPrimitive.ItemIndicator
    : 'span'

  return (
    <>
      {Boolean(leftIcon) && (
        <span className={dropdownIconStyleCva({ isLeftIconAvatar })}>
          {leftIcon}
        </span>
      )}
      <div className={dropdownChildItemClsx({ className })}>
        {children}
        {subtitle && (
          <span className={dropdownChildItemSubtitleClsx()}>{subtitle}</span>
        )}
      </div>
      {rightExtra}
      {rightIcon ? (
        <RightIconWrapper
          className={dropdownIconStyleCva({ isRightIcon: true })}
        >
          {rightIcon}
        </RightIconWrapper>
      ) : (
        defaultRightIcon && (
          <RightIconWrapper
            className={dropdownIconStyleCva({ isRightIcon: true })}
          >
            {defaultRightIcon}
          </RightIconWrapper>
        )
      )}
    </>
  )
}

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = React.forwardRef<
  DropdownRadioGroupRef,
  DropdownRadioGroupProps
>(({ onChange, ...restProps }, ref) => (
  <DropdownMenuPrimitive.RadioGroup
    onValueChange={onChange}
    ref={ref}
    {...restProps}
  />
))
DropdownMenuRadioGroup.displayName =
  DropdownMenuPrimitive.RadioGroup.displayName

const DropdownMenuSubTrigger = React.forwardRef<
  DropdownSubTriggerRef,
  DropdownSubTriggerProps
>((props, ref) => {
  const {
    className,
    children,
    leftIcon,
    isLeftIconAvatar,
    rightExtra,
    rightIcon,
    hasPaddingLeft,
    disabled,
    asChild,
    subtitle,
    ...resetProps
  } = props
  return (
    <DropdownMenuPrimitive.SubTrigger
      asChild={asChild}
      className={dropdownItemStyleCva({ hasPaddingLeft, disabled, className })}
      disabled={disabled}
      ref={ref}
      {...resetProps}
    >
      {asChild
        ? children
        : renderDropdownChildItem({
            children,
            subtitle,
            leftIcon,
            isLeftIconAvatar,
            rightExtra,
            rightIcon,
            className,
            defaultRightIcon: (
              <IconChevronDown className={dropdownMenuSubTriggerClsx()} />
            ),
          })}
    </DropdownMenuPrimitive.SubTrigger>
  )
})
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  DropdownSubContentRef,
  DropdownSubContentProps
>((props, ref) => {
  const { hasShadow, isRounded, className } = props

  return (
    <DropdownMenuPrimitive.SubContent
      className={dropdownContentStyleCva({ hasShadow, isRounded, className })}
      ref={ref}
      {...props}
    />
  )
})
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  DropdownContentRef,
  DropdownContentProps
>(({ className, sideOffset = 4, hasShadow, isRounded, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className={dropdownContentStyleCva({ hasShadow, isRounded, className })}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<DropdownItemRef, DropdownItemProps>(
  (props, ref) => {
    const {
      children,
      hasPaddingLeft,
      className,
      leftIcon,
      isLeftIconAvatar = false,
      rightExtra,
      onClick,
      disabled,
      rightIcon,
      asChild,
      subtitle,
      wrapperClassName,
      ...restProps
    } = props

    return (
      <DropdownMenuPrimitive.Item
        asChild={asChild}
        className={dropdownItemStyleCva({
          hasPaddingLeft,
          disabled,
          className: wrapperClassName,
        })}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        {...restProps}
      >
        {asChild
          ? children
          : renderDropdownChildItem({
              children,
              leftIcon,
              isLeftIconAvatar,
              rightExtra,
              rightIcon,
              className,
              subtitle,
            })}
      </DropdownMenuPrimitive.Item>
    )
  },
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuRadioItem = React.forwardRef<
  DropdownRadioItemRef,
  DropdownRadioItemProps
>((props, ref) => {
  const {
    asChild,
    hasPaddingLeft,
    disabled,
    children,
    leftIcon,
    isLeftIconAvatar,
    rightExtra,
    rightIcon,
    className,
    subtitle,
    onChange,
    wrapperClassName,
    ...restProps
  } = props
  return (
    <DropdownMenuPrimitive.RadioItem
      asChild={asChild}
      className={dropdownItemStyleCva({
        hasPaddingLeft,
        disabled,
        className: wrapperClassName,
      })}
      disabled={disabled}
      // Using onChange for integrate with Hook Form
      onSelect={onChange}
      ref={ref}
      {...restProps}
    >
      {asChild
        ? children
        : renderDropdownChildItem({
            children,
            leftIcon,
            isLeftIconAvatar,
            rightExtra,
            rightIcon,
            defaultRightIcon: (
              <IconCheck className={dropdownMenuRadioIconClsx()} />
            ),
            className,
            subtitle,
            useIndicator: true,
          })}
    </DropdownMenuPrimitive.RadioItem>
  )
})
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  DropdownLabelRef,
  DropdownLabelProps
>((props, ref) => {
  const {
    className,
    hasPaddingLeft,
    disabled,
    leftIcon,
    isLeftIconAvatar,
    rightIcon,
    rightExtra,
    asChild,
    children,
    subtitle,
    wrapperClassName,
    ...restProps
  } = props

  return (
    <DropdownMenuPrimitive.Label
      asChild={asChild}
      className={dropdownItemStyleCva({
        hasPaddingLeft,
        disabled,
        className: clsx(wrapperClassName, 'pointer-events-none'),
      })}
      ref={ref}
      {...restProps}
    >
      {asChild
        ? children
        : renderDropdownChildItem({
            children,
            leftIcon,
            isLeftIconAvatar,
            rightExtra,
            rightIcon,
            className,
            subtitle,
          })}
    </DropdownMenuPrimitive.Label>
  )
})
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    className={dropdownMenuSeparatorClsx({ className })}
    ref={ref}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
}
