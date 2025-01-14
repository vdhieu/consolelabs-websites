import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { PopoverContent } from '@consolelabs/core'
import { AuthPanel } from '~cpn/AuthWidget'
import { api } from '~constants/mochi'
import { API } from '~constants/api'
import { Profile } from '@consolelabs/mochi-rest'
import { Balance, Wallet, useProfileStore } from '~store'
import { Theme } from '../ThemePicker/ThemePicker'
import { Moniker } from '../TokenPicker/type'
import { isToken } from '../TokenPicker/utils'

export const MAX_RECIPIENTS = 20

interface Request {
  recipients: Profile[] | null
  amount: number | null
  asset: Balance | Moniker | null
  message: string | null
  theme: Theme | null
}

interface TipWidgetState {
  unauthorizedContent: React.ReactNode
  step: number
  setStep: (s: number) => void

  wallet: Wallet | null
  amountUsd: string
  setAmountUsd: (usd: string) => void
  request: Request
  updateRequestMessage: (message: string) => void
  updateRequestTheme: (theme: Theme) => void
  updateSourceWallet: (s: Wallet) => void
  addRecipient: (recipient: Profile) => void
  removeRecipient: (recipient: Profile) => void
  setAsset: (asset: Balance | Moniker) => void
  setAmount: (amount: number) => void

  execute: () => Promise<void>
  isTransferring: boolean

  tx: any
  reset: () => void
}

export const useTipWidget = create(
  immer<TipWidgetState>((set, get) => ({
    unauthorizedContent: (
      <PopoverContent className="bg-white-pure w-[412px] !p-0">
        <AuthPanel variant="dropdown" />
      </PopoverContent>
    ),

    wallet: null,

    request: {
      recipients: [],
      message: null,
      amount: null,
      asset: null,
      theme: null,
    },
    amountUsd: '',
    setAmountUsd: (amountUsd) => set({ amountUsd }),
    step: 1,
    setStep: (step) => set({ step }),
    updateRequestMessage: (message) =>
      set((s) => (s.request.message = message)),
    updateRequestTheme: (theme) =>
      set((s) => {
        s.request.theme = theme
      }),
    tx: null,
    reset: () =>
      set((s) => {
        s.request = {
          recipients: [],
          message: null,
          amount: null,
          asset: null,
          theme: null,
        }
        s.wallet = null
        s.tx = null
        s.isTransferring = false
      }),
    isTransferring: false,
    execute: async () => {
      const { request } = get()
      const { me } = useProfileStore.getState()

      try {
        set({ isTransferring: true })
        await new Promise<void>((r) => {
          setTimeout(r, 1000)
        })
        const amount = request.amount ?? 0
        if (!amount) return
        const tx = await API.MOCHI.post(
          {
            sender: me?.id,
            recipients: request.recipients?.map((r) => r.id),
            platform: 'web',
            transfer_type: 'transfer',
            amount: isToken(request.asset)
              ? amount
              : amount * (request.asset?.asset_balance ?? 0),
            token: request.asset?.token?.symbol,
            chain_id: request.asset?.token?.chain_id,
            // optional
            ...(request?.theme?.id ? { theme_id: request.theme.id } : {}),
            ...(request?.message ? { message: request.message } : {}),
          },
          '/tip/transfer-v2',
        ).json((r) => r.data)
        set({ tx })
      } catch (e) {
        console.error(e)
      } finally {
        set({ isTransferring: false })
      }
    },
    updateSourceWallet: (wallet) => {
      const missingIconBalances = new Set(
        wallet.balances
          ?.filter((b) => !b.token?.icon)
          .map((b) => b.token?.symbol ?? '') ?? [],
      )
      api.base.metadata
        .getEmojis({
          codes: Array.from(missingIconBalances),
        })
        .then(({ data, ok }) => {
          if (ok) {
            const icons = Object.fromEntries(
              data.map((d) => [d.code, d.emoji_url]),
            )
            const withIcon = wallet.balances.map((b) => {
              if (
                b.token &&
                !b.token.icon &&
                b.token.symbol &&
                icons[b.token.symbol]
              ) {
                return {
                  ...b,
                  token: {
                    ...b.token,
                    icon: icons[b.token.symbol],
                  },
                }
              }
              return b
            })
            set({ wallet: { ...wallet, balances: withIcon } })
          }
        })
    },
    addRecipient: (recipient) => {
      const { recipients } = get().request
      const isMax = (recipients?.length ?? 0) >= MAX_RECIPIENTS
      const isExist = recipients?.find(
        (r) =>
          r.associated_accounts?.[0].id ===
          recipient.associated_accounts?.[0].id,
      )
      if (isMax || isExist) {
        return
      }
      set((s) => {
        s.request.recipients = [...(s.request.recipients || []), recipient]
      })
    },
    removeRecipient: (recipient) =>
      set((s) => {
        s.request.recipients =
          s.request.recipients?.filter(
            (r: any) =>
              r.associated_accounts?.[0].id !==
              recipient.associated_accounts?.[0].id,
          ) ?? []
      }),
    setAsset: (asset) =>
      set((s) => {
        s.request.asset = asset
      }),
    setAmount: (amount) =>
      set((s) => {
        s.request.amount = amount
      }),
  })),
)
