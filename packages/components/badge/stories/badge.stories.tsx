import type { Meta, StoryObj } from '@storybook/react'
import {
  IconSolidDot,
  IconClose,
  IconArrowDown,
  IconTwinkle,
  IconPlus,
} from '@consolelabs/icons'
import Badge from '../src/badge'
import type { BadgeProps } from '../src/badge'

const args: BadgeProps[] = [
  {
    label: 'Label',
  },
  {
    label: 'Label',
    icon: <IconSolidDot />,
  },
  {
    label: 'Label',
    icon: <IconClose />,
    iconPosition: 'right',
  },
  {
    label: 'Label',
    icon: <IconArrowDown />,
    iconPosition: 'right',
  },
  {
    label: 'Label',
    icon: <IconTwinkle />,
  },
  {
    icon: <IconPlus />,
  },
]

const renderByAppearance = (appearance: BadgeProps['appearance']) => (
  <div className="flex gap-3">
    {args.map((props, i) => (
      <Badge
        {...props}
        appearance={appearance}
        key={`badge-${appearance}-${i}`}
      />
    ))}
  </div>
)

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      control: 'text',
    },
    icon: {
      control: 'select',
      options: ['avatar', 'icon-arrow', 'icon-dot'],
      //   mapping: {
      //     avatar: <Avatar src="https://mochi.gg/logo.png" />,
      //     'icon-dot': <IconSolidDot />,
      //     'icon-arrow': <IconArrow />,
      //   },
    },
    appearance: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'black',
        'white',
      ],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    isAvatarIcon: {
      control: 'select',
      options: [true, false],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    label: 'Label',
    icon: <IconPlus />,
  },
}

export const Primary: Story = {
  render: () => renderByAppearance('primary'),
}

export const Secondary: Story = {
  render: () => renderByAppearance('secondary'),
}

export const Success: Story = {
  render: () => renderByAppearance('success'),
}

export const Danger: Story = {
  render: () => renderByAppearance('danger'),
}

export const Warning: Story = {
  render: () => renderByAppearance('warning'),
}

export const Black: Story = {
  render: () => renderByAppearance('black'),
}

export const White: Story = {
  render: () => renderByAppearance('white'),
}

export const TruncateText: Story = {
  render: () => (
    <Badge
      label={
        <span className="w-32 truncate">
          The quick brown fox jumps over the lazy dog
        </span>
      }
    />
  ),
}
