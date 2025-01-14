import {
  IconApt,
  IconArb,
  IconAtom,
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
  IconFarcasterColored,
  IconTelegramColored,
} from '@consolelabs/icons'
import clsx from 'clsx'

const socials: [
  (props: React.SVGProps<SVGSVGElement>) => JSX.Element,
  string,
  boolean,
][] = [
  [IconFacebookColored, 'Facebook', false],
  [IconDiscordColored, 'Discord', false],
  [IconTelegramColored, 'Telegram', false],
  [IconRedditColored, 'Reddit', true],
  [IconGoogleColored, 'Google', false],
  [IconX, 'X', false],
  [IconGithub, 'Github', true],
  [IconSlackColored, 'Slack', true],
  [IconFarcasterColored, 'Farcaster', true],
]
const networks: [
  (props: React.SVGProps<SVGSVGElement>) => JSX.Element,
  string,
  boolean,
][] = [
  [IconBtc, 'BTC', true],
  [IconEth, 'Ethereum', false],
  [IconBnb, 'Binance', false],
  [IconFtm, 'Fantom', false],
  [IconMatic, 'Polygon', false],
  [IconRon, 'Ronin', true],
  [IconArb, 'Arbitrum', false],
  [IconMnt, 'Mantle', false],
  [IconOp, 'Optimism', false],
  [IconZkSync, 'zkSync', false],
  [IconSol, 'Solana', false],
  [IconTon, 'Ton', false],
  [IconApt, 'Aptos', true],
  [IconSui, 'Sui', true],
  [IconAtom, 'Cosmos', true],
]

function Platform({
  Icon,
  name,
  comingSoon,
}: {
  comingSoon: boolean
  name: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}) {
  return (
    <div className="flex flex-col gap-y-3 justify-center items-center p-6 border-r border-b border-neutral-300">
      <div className="relative">
        <Icon
          className={clsx('w-10 h-10', {
            'opacity-50': comingSoon,
          })}
        />
        {comingSoon && (
          <span className="absolute bottom-0 left-1/2 px-1 leading-3 rounded-full border -translate-x-1/2 translate-y-1/2 text-xxs bg-white-pure border-neutral-200">
            soon
          </span>
        )}
      </div>
      <span className={clsx('text-base', { 'opacity-50': comingSoon })}>
        {name}
      </span>
    </div>
  )
}

export function SupportedPlatforms() {
  return (
    <div className="hidden flex-col mt-16 md:flex landing-block">
      <p className="text-4xl font-medium text-center font-text">
        Supported platforms
      </p>
      <div className="flex flex-col gap-y-8 mt-8">
        <div className="flex flex-col gap-y-4">
          <span className="text-lg font-medium">Socials</span>
          <div className="grid grid-cols-5 auto-rows-auto border-t border-l border-neutral-300">
            {socials.map(([Icon, name, comingSoon]) => (
              <Platform
                key={name}
                Icon={Icon}
                name={name}
                comingSoon={comingSoon}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-lg font-medium">Networks</span>
          <div className="grid grid-cols-5 auto-rows-auto border-t border-l border-neutral-300">
            {networks.map(([Icon, name, comingSoon]) => {
              return (
                <Platform
                  key={name}
                  Icon={Icon}
                  name={name}
                  comingSoon={comingSoon}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
