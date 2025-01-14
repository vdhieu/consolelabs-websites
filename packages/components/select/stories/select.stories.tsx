import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  IconDiscordColored,
  IconGithub,
  IconGoogleColored,
  IconMail,
  IconTelegramColored,
  IconX,
  IconGoogle,
  IconDiscord,
  IconTelegram,
} from '@consolelabs/icons'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../src/select'

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

const items = [
  {
    label: 'Discord',
    subtitle: 'Chat and voice communication platform',
    value: '1',
    key: 'Discord',
    icon: <IconDiscordColored />,
    rightIcon: <IconDiscord />,
  },
  {
    label: 'Telegram',
    subtitle: 'Instant messaging app',
    value: '2',
    key: 'Telegram',
    icon: <IconTelegramColored />,
    rightIcon: <IconTelegram />,
  },
  {
    label: 'Gmail',
    subtitle: 'Email service by Google',
    value: '3',
    key: 'Gmail',
    icon: <IconGoogleColored />,
    rightIcon: <IconGoogle />,
  },
  {
    label: 'GitHub',
    subtitle: 'Web-based platform for version control and collaboration',
    value: '4',
    key: 'GitHub',
    icon: <IconGithub />,
    rightIcon: <IconGithub />,
  },
  {
    label: 'Email',
    subtitle: 'Send and receive electronic mail',
    value: '5',
    key: 'Email',
    icon: <IconMail />,
    rightIcon: <IconMail />,
  },
  {
    label: 'X',
    subtitle: 'A variable or unknown value',
    value: '6',
    key: 'X',
    icon: <IconX />,
    rightIcon: <IconX />,
  },
]

export const Default: StoryObj = {
  render() {
    return (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="min-w-[200px]">
          {items.map(({ key, label, value }) => (
            <SelectItem key={key} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const WithCustomTriggerLabel: StoryObj = {
  render() {
    /* eslint-disable react-hooks/rules-of-hooks -- for demonstration */
    const [value, setValue] = useState(items[0].value)
    const selectedValue = items.find((i) => i.value === value)
    return (
      <Select onChange={setValue} value={value}>
        <SelectTrigger leftIcon={selectedValue?.icon}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="min-w-[200px]">
          {items.map(({ key, label, ...props }) => (
            <SelectItem key={key} leftIcon={props.icon} value={props.value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const WithLabel: StoryObj = {
  render() {
    /* eslint-disable react-hooks/rules-of-hooks -- for demonstration */
    const [value, setValue] = useState(items[0].value)
    /* eslint-disable react-hooks/rules-of-hooks -- for demonstration */
    const selectedValue = items.find((i) => i.value === value)
    return (
      <Select onChange={setValue} value={value}>
        <SelectTrigger leftIcon={selectedValue?.icon}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="min-w-[200px]">
          <SelectGroup>
            <SelectLabel>Socials</SelectLabel>
            {items.map(({ key, label, ...props }) => (
              <SelectItem key={key} leftIcon={props.icon} value={props.value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>2nd Socials Group</SelectLabel>
            {items.map(({ key, label, ...props }) => (
              <SelectItem
                key={key}
                leftIcon={props.icon}
                value={`${props.value}2`}
              >
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  },
}

export const WithItemIndicator: StoryObj = {
  render() {
    return (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="min-w-[200px]">
          {items.map(({ key, label, value }) => (
            <SelectItem key={key} useIndicator value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const WithSubtittle: StoryObj = {
  render() {
    return (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="min-w-[200px]">
          {items.map(({ key, label, rightIcon, subtitle, value, icon }) => (
            <SelectItem
              key={key}
              leftIcon={icon}
              rightIcon={rightIcon}
              subTitle={subtitle}
              useIndicator
              value={value}
            >
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}
