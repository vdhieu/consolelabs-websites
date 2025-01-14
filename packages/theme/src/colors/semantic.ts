import { commonColors, gray } from './common'

export const semanticColors = {
  light: {
    primary: {
      solid: {
        DEFAULT: commonColors.primary['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.primary['800'],
        active: commonColors.primary['800'],
        disable: commonColors.primary['400'],
        focus: commonColors.primary['400'],
      },
      outline: {
        DEFAULT: commonColors.primary['100'],
        fg: commonColors.primary['700'],
        border: commonColors.primary['300'],
        hover: commonColors.primary['200'],
        active: commonColors.primary['200'],
        'disable-fg': commonColors.primary['400'],
      },
      plain: {
        fg: commonColors.primary['700'],
        hover: commonColors.primary['100'],
        active: commonColors.primary['100'],
        'disable-fg': commonColors.primary['400'],
      },
    },
    secondary: {
      solid: {
        DEFAULT: commonColors.secondary['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.secondary['800'],
        active: commonColors.secondary['800'],
        disable: commonColors.secondary['400'],
        focus: commonColors.secondary['400'],
      },
      outline: {
        DEFAULT: commonColors.secondary['100'],
        fg: commonColors.secondary['700'],
        border: commonColors.secondary['300'],
        hover: commonColors.secondary['200'],
        active: commonColors.secondary['200'],
        'disable-fg': commonColors.secondary['400'],
      },
      plain: {
        fg: commonColors.secondary['700'],
        hover: commonColors.secondary['100'],
        active: commonColors.secondary['100'],
        'disable-fg': commonColors.secondary['400'],
      },
    },
    success: {
      solid: {
        DEFAULT: commonColors.success['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.success['800'],
        active: commonColors.success['800'],
        disable: commonColors.success['400'],
        focus: commonColors.success['400'],
      },
      outline: {
        DEFAULT: commonColors.success['100'],
        fg: commonColors.success['700'],
        border: commonColors.success['300'],
        hover: commonColors.success['200'],
        active: commonColors.success['200'],
        'disable-fg': commonColors.success['400'],
      },
      plain: {
        fg: commonColors.success['700'],
        hover: commonColors.success['100'],
        active: commonColors.success['100'],
        'disable-fg': commonColors.success['400'],
      },
    },
    warning: {
      solid: {
        DEFAULT: commonColors.warning['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.warning['800'],
        active: commonColors.warning['800'],
        disable: commonColors.warning['400'],
        focus: commonColors.warning['400'],
      },
      outline: {
        DEFAULT: commonColors.warning['100'],
        fg: commonColors.warning['700'],
        border: commonColors.warning['300'],
        hover: commonColors.warning['200'],
        active: commonColors.warning['200'],
        'disable-fg': commonColors.warning['400'],
      },
      plain: {
        fg: commonColors.warning['700'],
        hover: commonColors.warning['100'],
        active: commonColors.warning['100'],
        'disable-fg': commonColors.warning['400'],
      },
    },
    danger: {
      solid: {
        DEFAULT: commonColors.danger['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.danger['800'],
        active: commonColors.danger['800'],
        disable: commonColors.danger['400'],
        focus: commonColors.danger['400'],
      },
      outline: {
        DEFAULT: commonColors.danger['100'],
        fg: commonColors.danger['700'],
        border: commonColors.danger['300'],
        hover: commonColors.danger['200'],
        active: commonColors.danger['200'],
        'disable-fg': commonColors.danger['400'],
      },
      plain: {
        fg: commonColors.danger['700'],
        hover: commonColors.danger['100'],
        active: commonColors.danger['100'],
        'disable-fg': commonColors.danger['400'],
      },
    },
    neutral: {
      solid: {
        DEFAULT: commonColors.neutral['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.neutral['800'],
        active: commonColors.neutral['800'],
        disable: commonColors.neutral['400'],
        focus: commonColors.neutral['400'],
      },
      outline: {
        DEFAULT: commonColors.neutral['100'],
        fg: commonColors.neutral['700'],
        border: commonColors.neutral['300'],
        hover: commonColors.neutral['200'],
        active: commonColors.neutral['200'],
        'disable-fg': commonColors.neutral['400'],
      },
      plain: {
        fg: commonColors.neutral['700'],
        hover: commonColors.neutral['100'],
        active: commonColors.neutral['100'],
        'disable-fg': commonColors.neutral['400'],
      },
    },
    text: {
      primary: commonColors.gray['800'],
      secondary: commonColors.gray['500'],
      tertiary: commonColors.gray['300'],
      icon: commonColors.gray['800'],
    },
    background: {
      body: commonColors.white,
      surface: commonColors.white, // card, sheet, drawer
      popup: commonColors.white, // dropdown, menu
      tooltip: commonColors.white, // slider tooltip
      backdrop: '#00000066',
    },
    divider: commonColors.gray['400'],
  },
  dark: {
    primary: {
      solid: {
        DEFAULT: commonColors.primary['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.primary['800'],
        active: commonColors.primary['800'],
        disable: commonColors.primary['400'],
        focus: commonColors.primary['400'],
      },
      outline: {
        DEFAULT: commonColors.primary['100'],
        fg: commonColors.primary['700'],
        border: commonColors.primary['300'],
        hover: commonColors.primary['200'],
        active: commonColors.primary['200'],
        'disable-fg': commonColors.primary['400'],
      },
      plain: {
        DEFAULT: commonColors.white,
        fg: commonColors.primary['700'],
        hover: commonColors.primary['100'],
        active: commonColors.primary['800'],
        'disable-fg': gray['400'],
      },
    },
    secondary: {
      solid: {
        DEFAULT: commonColors.secondary['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.secondary['800'],
        active: commonColors.secondary['800'],
        disable: commonColors.secondary['400'],
        focus: commonColors.secondary['400'],
      },
      outline: {
        DEFAULT: commonColors.secondary['100'],
        fg: commonColors.secondary['700'],
        border: commonColors.secondary['300'],
        hover: commonColors.secondary['200'],
        active: commonColors.secondary['200'],
        'disable-fg': commonColors.secondary['400'],
      },
      plain: {
        DEFAULT: commonColors.white,
        fg: commonColors.secondary['700'],
        hover: commonColors.secondary['100'],
        active: commonColors.secondary['800'],
        'disable-fg': gray['400'],
      },
    },
    success: {
      solid: {
        DEFAULT: commonColors.success['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.success['800'],
        active: commonColors.success['800'],
        disable: commonColors.success['400'],
        focus: commonColors.success['400'],
      },
      outline: {
        DEFAULT: commonColors.success['100'],
        fg: commonColors.success['700'],
        border: commonColors.success['300'],
        hover: commonColors.success['200'],
        active: commonColors.success['200'],
        'disable-fg': commonColors.success['400'],
      },
      plain: {
        DEFAULT: commonColors.white,
        fg: commonColors.success['700'],
        hover: commonColors.success['100'],
        active: commonColors.success['800'],
        'disable-fg': gray['400'],
      },
    },
    warning: {
      solid: {
        DEFAULT: commonColors.warning['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.warning['800'],
        active: commonColors.warning['800'],
        disable: commonColors.warning['400'],
        focus: commonColors.warning['400'],
      },
      outline: {
        DEFAULT: commonColors.warning['100'],
        fg: commonColors.warning['700'],
        border: commonColors.warning['300'],
        hover: commonColors.warning['200'],
        active: commonColors.warning['200'],
        'disable-fg': commonColors.warning['400'],
      },
      plain: {
        DEFAULT: commonColors.white,
        fg: commonColors.warning['700'],
        hover: commonColors.warning['100'],
        active: commonColors.warning['800'],
        'disable-fg': gray['400'],
      },
    },
    danger: {
      solid: {
        DEFAULT: commonColors.danger['700'], // for background
        fg: commonColors.white, // for foreground
        hover: commonColors.danger['800'],
        active: commonColors.danger['800'],
        disable: commonColors.danger['400'],
        focus: commonColors.danger['400'],
      },
      outline: {
        DEFAULT: commonColors.danger['100'],
        fg: commonColors.danger['700'],
        border: commonColors.danger['300'],
        hover: commonColors.danger['200'],
        active: commonColors.danger['200'],
        'disable-fg': commonColors.danger['400'],
      },
      plain: {
        DEFAULT: commonColors.white,
        fg: commonColors.danger['700'],
        hover: commonColors.danger['100'],
        active: commonColors.danger['800'],
        'disable-fg': gray['400'],
      },
    },
    text: {
      primary: commonColors.gray['800'],
      secondary: commonColors.gray['500'],
      tertiary: commonColors.gray['300'],
      icon: commonColors.gray['800'],
    },
    background: {
      body: commonColors.white,
      surface: commonColors.white, // card, sheet, drawer
      popup: commonColors.white, // dropdown, menu
      tooltip: commonColors.white, // slider tooltip
      backdrop: '#00000066',
    },
    divider: commonColors.gray['400'],
  },
}
