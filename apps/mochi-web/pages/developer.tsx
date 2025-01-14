import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Layout } from '~app/layout'
import { SEO } from '~app/layout/seo'
import { Button, IconButton, Tooltip } from '@consolelabs/core'
import {
  IconApt,
  IconArb,
  IconAtom,
  IconArrowRight,
  IconArrowDown,
  IconBnb,
  IconBtc,
  IconDiscordColored,
  IconEth,
  IconFtm,
  IconFacebookColored,
  IconGithub,
  IconGoogleColored,
  IconMatic,
  IconMnt,
  IconOp,
  IconRon,
  IconRedditColored,
  IconSol,
  IconSui,
  IconSlackColored,
  IconTon,
  IconX,
  IconZkSync,
  IconCopy,
  IconFarcasterColored,
} from '@consolelabs/icons'
import { HOME_URL } from '~envs'
import { TabbedFeatures } from '~cpn/landing/TabbedFeatures'
import { Divider } from '~cpn/landing/Divider'

const gray1 = '#F7F6F4'

function BrowseAPIs() {
  return (
    <div className="flex flex-col landing-block">
      <p className="text-2xl font-medium md:text-4xl">Browse APIs</p>
      <div className="flex flex-col gap-5 mt-5 md:grid md:grid-cols-2 md:grid-rows-3">
        {[
          {
            title: 'Profile',
            body: 'Provides end-users data on balance, transaction, and payment requests.',
            icon: '/developer/profile-circle.png',
          },
          {
            title: 'Balance',
            body: 'Query user balance on multichains',
            icon: '/developer/balance.png',
          },
          {
            title: 'Tip',
            body: 'Provides end-users data on balance, transaction, and payment requests.',
            icon: '/developer/tip.png',
          },
          {
            title: 'Pay Link',
            body: 'Query user balance on multichains',
            icon: '/developer/link.png',
          },
          {
            title: 'Server',
            body: 'Provides end-users data on balance, transaction, and payment requests.',
            icon: '/developer/server.png',
          },
          {
            title: 'Vault',
            body: 'Query user balance on multichains',
            icon: '/developer/vault.png',
          },
        ].map((d) => {
          return (
            <a
              target="_blank"
              href={HOME_URL}
              key={d.body}
              style={{ backgroundColor: gray1 }}
              className="flex items-start overflow-hidden rounded-lg"
            >
              <div className="relative flex-shrink-0 w-3 h-full">
                <Image
                  fill
                  alt=""
                  src="/developer/browse-api-left-border.jpg"
                />
              </div>
              <div className="flex items-start h-full p-6 gap-x-4">
                <Image
                  width={48}
                  height={48}
                  src={d.icon}
                  className="hidden object-contain md:inline-block"
                  alt=""
                />
                <div className="flex flex-col h-full gap-y-3 md:gap-0">
                  <div className="flex gap-x-3">
                    <Image
                      width={32}
                      height={32}
                      src={d.icon}
                      className="object-contain md:hidden"
                      alt=""
                    />
                    <div className="font-medium text-gray-500">
                      <span className="text-lg md:text-base text-foreground">
                        {d.title}
                      </span>{' '}
                      API
                    </div>
                  </div>
                  <span className="text-sm">{d.body}</span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

const socials: [
  (props: React.SVGProps<SVGSVGElement>) => JSX.Element,
  string,
][] = [
  [IconFacebookColored, 'Facebook'],
  [IconDiscordColored, 'Discord'],
  [IconRedditColored, 'Reddit'],
  [IconGoogleColored, 'Google'],
  [IconX, 'X'],
  [IconGithub, 'Github'],
  [IconSlackColored, 'Slack'],
  [IconFarcasterColored, 'Farcaster'],
]
const networks: [
  (props: React.SVGProps<SVGSVGElement>) => JSX.Element,
  string,
  boolean,
][] = [
  [IconBtc, 'BTC', false],
  [IconEth, 'Ethereum', false],
  [IconBnb, 'Binance', false],
  [IconFtm, 'Fantom', false],
  [IconMatic, 'Polygon', false],
  [IconRon, 'Ronin', false],
  [IconArb, 'Arbitrum', true],
  [IconMnt, 'Mantle', true],
  [IconOp, 'Optimism', true],
  [IconZkSync, 'zkSync', true],
  [IconSol, 'Solana', false],
  [IconTon, 'Ton', true],
  [IconApt, 'Aptos', true],
  [IconSui, 'Sui', true],
  [IconAtom, 'Cosmos', true],
]
function SupportedPlatforms() {
  return (
    <div className="flex-col hidden mt-16 md:flex landing-block">
      <p className="text-4xl font-medium text-center">Supported platforms</p>
      <div className="flex flex-col mt-8 gap-y-8">
        <div className="flex flex-col gap-y-4">
          <span className="text-lg font-medium">Socials</span>
          <div className="grid grid-cols-5 border-t border-l auto-rows-auto border-neutral-300">
            {socials.map(([Icon, name]) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center p-6 border-b border-r gap-y-3 border-neutral-300"
              >
                <Icon key={name} className="w-10 h-10" />
                <span className="text-base">{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-lg font-medium">Networks</span>
          <div className="grid grid-cols-5 border-t border-l auto-rows-auto border-neutral-300">
            {networks.map(([Icon, name, comingSoon]) => {
              return (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center p-6 border-b border-r gap-y-3 border-neutral-300"
                >
                  <div className="relative">
                    <Icon
                      className={clsx('w-10 h-10', {
                        'opacity-50': comingSoon,
                      })}
                    />
                    {comingSoon && (
                      <span className="absolute bottom-0 px-1 leading-3 -translate-x-1/2 border rounded-full left-1/2 text-xxs bg-white-pure border-neutral-200">
                        soon
                      </span>
                    )}
                  </div>
                  <span
                    className={clsx('text-base', { 'opacity-50': comingSoon })}
                  >
                    {name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function TryItOut() {
  const [idx, setIdx] = useState(0)
  return (
    <div className="flex-col hidden md:flex landing-block">
      <p className="text-4xl font-medium">Try it out</p>
      <div className="flex mt-8 gap-x-5">
        <ul className="flex flex-col flex-shrink-0 w-1/3 gap-y-2">
          {[
            'Start a payment',
            'Sell a product',
            'Issue coupons',
            'Get your balance',
            'Manage taxes',
          ].map((item, i) => {
            return (
              <li key={item}>
                <button
                  className={clsx(
                    'text-left w-full text-lg p-6 font-medium rounded-md transition border',
                    {
                      'border-blue-700 bg-blue-100': i === idx,
                      'border-neutral-300 hover:bg-neutral-150': i !== idx,
                    },
                  )}
                  onClick={() => setIdx(i)}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>
        <div className="flex flex-col p-8 w-2/3 bg-[#3B3B3B] rounded-2xl max-h-[500px]">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-white-pure">
              curl request
            </span>
            <IconButton variant="ghost" size="sm">
              <IconCopy className="w-5 h-5" />
            </IconButton>
          </div>
          <div className="h-full overflow-auto">
            <code className="text-sm text-white-pure">
              <pre
                dangerouslySetInnerHTML={{
                  __html: `curl --location 'http://localhost:8200/api/v1/tip/transfer-v2' \
--header 'Content-Type: application/json'
--data '{
    "sender": "50453",
    "recipients": [
        "34123"
    ],
    "platform": "discord",
    "amount": 0.1,
    "token": "ftm",
    "transfer_type": "transfer",
    "chain_id": "250"
}'`,
                }}
                className="whitespace-pre-wrap"
              />
            </code>
            <div className="sticky bottom-0 flex items-center justify-between w-full p-4 text-sm font-medium rounded-lg bg-white-pure">
              <span>
                <span className="text-blue-500">Sign in</span> to edit real
                requests.
              </span>
              <Tooltip content="Download" theme="light" arrow="top-center">
                <div className="text-white-pure rounded-lg bg-[#3B3B3B] p-1">
                  <IconArrowDown className="w-4 h-4" />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Developer() {
  return (
    <Layout>
      <SEO />
      <div className="flex flex-col items-center mt-24 landing-block">
        <p className="text-3xl font-medium text-center md:text-6xl">
          Bring Mochi power into
          <br />
          your app
        </p>
        <span className="mt-8 text-base font-normal text-center md:max-w-2xl md:text-lg">
          Mochi allows developers to create a payment between users on any
          platforms, crossing web2 social platforms to web3 layers via a single
          API call.
        </span>
        <Button className="mt-5">
          Get API key
          <IconArrowRight />
        </Button>
      </div>
      <Divider />
      <TabbedFeatures
        title="Build with Mochi APIs"
        data={[
          {
            id: 'monetize-your-innovation',
            title: 'Monetize your innovation',
            body: 'Our Open APIs serve as your canvas.With extensive & developer - friendly docs, you can craft secure and efficient payment app for everyone.',
            image: '/developer/build-with-mochi-apis-1.png',
          },
          {
            id: 'leverage-mochi-user-base',
            title: 'Leverage Mochi user base',
            body: 'Thousands of server are using Mochi. Building upon Mochi will ease your growth process and connect you to diverse demographic and geography.',
            image: '/developer/build-with-mochi-apis-1.png',
          },
          {
            id: 'we-made-things-ready-and-open',
            title: 'We made things ready and open',
            body: "We aggregate and build platform with latest advancements in blockchain and security, so you don't have to rebuild it.",
            image: '/developer/build-with-mochi-apis-1.png',
          },
          {
            id: 'we-re-here-to-support',
            title: "We're here to support",
            body: 'Our dedicated support team is always at your service, ensuring you have all you need to turn your ideas into reality.',
            image: '/developer/build-with-mochi-apis-1.png',
          },
        ]}
      />
      <Divider />
      <BrowseAPIs />
      <Divider />
      <TryItOut />
      <Divider className="hidden md:block" />
      <SupportedPlatforms />
      <div className="flex flex-col gap-x-10 gap-y-10 md:flex-row md:gap-y-0 md:items-center md:py-14 md:pt-4 md:mt-36 landing-block">
        <div className="flex flex-col flex-1">
          <p className="text-2xl font-medium md:text-4xl md:whitespace-nowrap">
            Ready to start building?
          </p>
          <span className="mt-2">
            Come up with your idea, tooling are ready, LFG.
          </span>
        </div>
        <div className="flex flex-1 gap-2 md:justify-end">
          <Button size="sm">
            Get API key <IconArrowRight />
          </Button>
          <Button size="sm" variant="outline" color="neutral">
            View docs
          </Button>
        </div>
      </div>
      <Divider className="mt-12 md:mt-32" noSpace fullWidth />
    </Layout>
  )
}
