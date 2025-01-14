import { renderToString } from 'react-dom/server'
import { Layout } from '~app/layout'
import { SEO } from '~app/layout/seo'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import Stats from '~components/stats'
import MochiWidget from '~cpn/MochiWidget'
import { TabbedFeatures } from '~cpn/landing/TabbedFeatures'
import { SupportedPlatforms } from '~cpn/landing/SupportedPlatforms'
import { LivePlatforms } from '~cpn/landing/LivePlatforms'
import { Divider } from '~cpn/landing/Divider'
import { Button } from '@consolelabs/core'
import {
  IconArrowRight,
  IconBlocksColored,
  IconHandKeyColored,
  IconLayersColored,
  IconPasswordLockColored,
  IconWalletPasswordColored,
} from '@consolelabs/icons'
import { GridFeatures } from '~cpn/landing/GridFeatures'
import Feed from '~cpn/Feed'
import Link from 'next/link'
import { useAuthStore } from '~store'
import { useShallow } from 'zustand/react/shallow'

const currencies = [
  `<span class="banner-token ethereum-color">&#8203;${renderToString(
    <img
      src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png"
      className="object-contain w-10 h-12"
      alt=""
    />,
  )}Ethereum</span>`,
  `<span class="banner-token bitcoin-color">&#8203;${renderToString(
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/128px-Bitcoin.svg.png"
      alt=""
      className="w-10 h-10"
    />,
  )}Bitcoin</span>`,
  `<span class="banner-token solana-color">&#8203;${renderToString(
    <img
      src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
      alt=""
      className="w-10 h-10"
    />,
  )}Solana</span>`,
  `<span class="banner-token dogecoin-color">&#8203;${renderToString(
    <img
      className="w-10 h-10"
      src="https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png"
      alt=""
    />,
  )}Dogecoin</span>`,
]
const platforms = [
  '<span class="discord-color">Discord</span>',
  '<span class="telegram-color">Telegram</span>',
  '<span class="email-color">Email</span>',
  '<span class="any-text-interface-color">any text interface</span>',
]

export default function Index() {
  const isLoggedIn = useAuthStore(useShallow((s) => s.isLoggedIn))
  const currency = useRef<HTMLSpanElement>(null)
  const platform = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typedCur = new Typed(currency.current, {
      showCursor: false,
      strings: currencies,
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    })

    const typedPlat = new Typed(platform.current, {
      showCursor: false,
      strings: platforms,
      typeSpeed: 90,
      backDelay: 1000,
      backSpeed: 50,
      loop: true,
    })

    return () => {
      typedCur.destroy()
      typedPlat.destroy()
    }
  }, [])

  return (
    <Layout>
      <SEO />
      <div className="grid grid-cols-1 auto-rows-min gap-y-7 gap-x-20 py-8 px-4 m-auto w-full max-w-5xl lg:grid-rows-2 lg:p-8 lg:grid-cols-min">
        <div className="flex flex-col lg:justify-end">
          <p className="text-[32px] leading-[38.4px] title-tracking md:text-[40px] md:leading-[48px]">
            Send{' '}
            <span
              ref={currency}
              className="inline-flex items-baseline font-medium"
            >
              <span>&#8203;</span>
            </span>
            <br />
            to anyone on
            <br />
            <span>
              &#8203;
              <span ref={platform} className="font-medium" />
            </span>
          </p>
          <span className="mt-5 font-normal">
            Use Mochi to send and receive any amount of crypto, directly on your
            favorite Discord servers or Telegram groups, without having a wallet
            or having to pay a single cent in fees.
          </span>
        </div>

        <div className="flex justify-center lg:col-start-2 lg:row-span-2">
          <MochiWidget />
        </div>

        <div className="flex flex-col mt-5 lg:mt-2">
          <LivePlatforms useGridOnMobile />
          {/* <SoonAvailablePlatforms className="mt-5" /> */}
          {/* <Alert className="mt-5" appearance="info" size="sm"> */}
          {/*   <span> */}
          {/*     To integrate and run the Mochi bot, embedded devices, or leverage */}
          {/*     the userbase,{' '} */}
          {/*     <a href="#" className="inline-block underline"> */}
          {/*       check our Docs */}
          {/*     </a> */}
          {/*   </span> */}
          {/* </Alert> */}
        </div>
      </div>
      <Stats className="hidden md:flex" />
      <Feed />
      <TabbedFeatures
        className="mt-20"
        title="Faster, more fun payments"
        data={[
          {
            id: 'tip-anyone',
            title: 'Tip anyone',
            body: (
              <>
                Send money to anyone, anywhere, and Mochi will automatically
                calculate the split. You can send to a recipient by{' '}
                <span className="text-sm leading-7 rounded border px-[3px] py-[2px] border-neutral-400">
                  @role
                </span>
                ,{' '}
                <span className="text-sm leading-7 rounded border px-[3px] py-[2px] border-neutral-400">
                  #channel
                </span>{' '}
                or even on other socials.
              </>
            ),
            image: '/developer/build-with-mochi-apis-1.png',
          },
          {
            id: 'send-a-gift',
            title: 'Send a gift',
            body: 'Spread the joy to your frens and show them your heartwarming affection: buy them a Starbucks, celebrate a birthday, or just be generous – because you can!',
            image: '/developer/build-with-mochi-apis-1.png',
          },
          {
            id: 'create-a-paylink',
            title: 'Create a pay link',
            body: "We aggregate and build platform with latest advancements in blockchain and security, so you don't have to rebuild it.",
            image: '/developer/build-with-mochi-apis-1.png',
          },
          {
            id: 'transfer-nft',
            title: 'Transfer NFT',
            body: 'Our dedicated support team is always at your service, ensuring you have all you need to turn your ideas into reality.',
            image: '/developer/build-with-mochi-apis-1.png',
          },
        ]}
      />
      <Divider />
      <GridFeatures
        title="Mochi goes Web3"
        data={[
          {
            id: 'support-on-chain-and-hybrid',
            title: 'On-chain & Hybrid Support',
            body: 'Make gasless transactions easily using social handles, ensuring strong security. Connect with different blockchains for both on-chain and hybrid transactions.',
            icon: <IconBlocksColored className="w-8 h-8 md:w-12 md:h-12" />,
          },
          {
            id: 'self-custodial-solutions',
            title: 'Self-custodial Solutions',
            body: "Take command of your assets with Mochi's self-custodial solutions, ensuring true ownership. Enjoy secure storage without compromising usability.",
            icon: <IconHandKeyColored className="w-8 h-8 md:w-12 md:h-12" />,
          },
          {
            id: 'invisible-wallets',
            title: 'Invisible Wallets',
            body: "Login with Telegram, Discord, SSO or Facebook account make onboarding seamless. Nevermind where's the seedphrase.",
            icon: (
              <IconWalletPasswordColored className="w-8 h-8 md:w-12 md:h-12" />
            ),
          },
          {
            id: 'keyless-wallet',
            title: 'Keyless Wallet',
            body: 'Elevate security by multiple protection layer while keep the friendly experience for all both crypto wizard and newbie.',
            icon: <IconLayersColored className="w-8 h-8 md:w-12 md:h-12" />,
          },
          {
            id: 'account-abstraction',
            title: 'Account Abstraction',
            body: 'Enables smart accounts, that can initiate and execute transactions without the need for an external account.',
            icon: (
              <IconPasswordLockColored className="w-8 h-8 md:w-12 md:h-12" />
            ),
          },
          {
            id: 'advanded-security-measures',
            title: 'Advanced Security Measures',
            body: 'Protect your assets by a high-tech lock - strong encryption, providing a worry-free Web3 experience.',
            icon: (
              <IconPasswordLockColored className="w-8 h-8 md:w-12 md:h-12" />
            ),
          },
        ]}
      />
      <Divider />
      <SupportedPlatforms />
      <div className="flex justify-center mb-8 md:justify-between md:my-36 landing-block">
        <div className="flex flex-col gap-y-1">
          <p className="text-3xl md:text-4xl title-tracking text-neutral-900">
            Simple, intuitive commands
          </p>
          <span className="mt-2 text-base font-normal md:text-lg text-neutral-700">
            Mochi has a single, extensible command for tipping, airdropping on
            users.
          </span>
          <LivePlatforms className="mt-3" />
          <Link href="/features" className="mt-1 md:hidden">
            <Button
              className="justify-center w-full"
              size="lg"
              color="neutral"
              variant="outline"
            >
              View features
              <IconArrowRight />
            </Button>
          </Link>
        </div>
        <div className="hidden gap-2 justify-center items-center md:flex">
          <Link href="/profile">
            <Button size="lg" className="!px-10">
              {isLoggedIn ? 'Profile' : 'Login'}
            </Button>
          </Link>
          <Link href="/features">
            <Button size="lg" color="neutral" variant="outline">
              View features
              <IconArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
