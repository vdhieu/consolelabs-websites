import {
  IconDiscordColored,
  IconMonitor,
  IconTelegramColored,
} from '@consolelabs/icons'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { DISCORD_LINK, TELEGRAM_LINK } from '~envs'

export function LivePlatforms({
  className = '',
  useGridOnMobile = false,
}: {
  useGridOnMobile?: boolean
  className?: string
}) {
  return (
    <div className={clsx('flex flex-col', className)}>
      <span className="text-sm font-medium">Mochi is live on</span>
      <ul
        className={clsx('gap-2 mt-2', {
          'grid grid-cols-2 auto-rows-auto md:flex': useGridOnMobile,
          'flex flex-col md:flex-row': !useGridOnMobile,
        })}
      >
        {[
          {
            text: (
              <span className="text-sm font-medium transition group-hover:text-blue-700 text-neutral-900">
                Web
              </span>
            ),
            icon: <IconMonitor className="flex-shrink-0 w-4 h-4" />,
            href: '/',
          },
          {
            text: (
              <div className="flex flex-col gap-y-px -mr-1.5 text-neutral-900">
                <span className="text-[9px] leading-[9px]">Run on the</span>
                <span className="text-[15px] leading-[15px]">Discord</span>
              </div>
            ),
            icon: (
              <IconDiscordColored className="flex-shrink-0 -ml-1.5 w-6 h-6" />
            ),
            href: DISCORD_LINK,
          },
          {
            text: (
              <div className="flex flex-col gap-y-px -mr-1.5 text-neutral-900">
                <span className="text-[9px] leading-[9px]">Run on the</span>
                <span className="text-[15px] leading-[15px]">Telegram</span>
              </div>
            ),
            icon: (
              <IconTelegramColored className="flex-shrink-0 -ml-1.5 w-6 h-6" />
            ),
            href: TELEGRAM_LINK,
          },
        ].map(({ text, href, icon }, i) => (
          <li
            key={`mochi-is-live-on-${i}`}
            className={clsx('flex', {
              'row-start-2 col-span-2': i === 0 && useGridOnMobile,
            })}
          >
            <Link
              className="flex flex-1 gap-x-1.5 justify-center items-center py-2 px-4 rounded-lg border transition md:flex-initial md:min-h-0 hover:text-blue-700 hover:bg-blue-100 hover:border-blue-300 min-h-[48px] group border-neutral-300 bg-white-pure"
              href={href}
            >
              {icon}
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
