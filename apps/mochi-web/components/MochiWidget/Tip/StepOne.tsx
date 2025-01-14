import { useShallow } from 'zustand/react/shallow'
import { useDisclosure } from '@dwarvesf/react-hooks'
import { useAuthStore, useWalletStore } from '~store'
import { useMemo } from 'react'
import { Button, Popover, PopoverTrigger } from '@consolelabs/core'
import { IconArrowRight, IconChevronDown } from '@consolelabs/icons'
import { MAX_AMOUNT_PRECISION, formatTokenAmount } from '~utils/number'
import { WalletPicker } from '../WalletPicker'
import { Recipient } from '../Recipient'
import { AmountInput } from '../AmountInput'
import { useTipWidget } from './store'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { isToken } from '../TokenPicker/utils'

const notEnoughtBalMsg =
  'Insufficient balance. Please add more tokens and try again.'

export default function StepOne() {
  const {
    unauthorizedContent,
    wallet,
    request,
    setStep,
    updateSourceWallet,
    addRecipient,
    removeRecipient,
    setAsset,
    setAmount,
  } = useTipWidget()
  const {
    isOpen: isOpenLoginPopup,
    onOpen: showLoginPopup,
    onClose: hideLoginPopup,
  } = useDisclosure()
  const isLoggedIn = useAuthStore(useShallow((s) => s.isLoggedIn))
  const amountErrorMgs = useMemo(() => {
    if (!request.amount) return ''
    if (isToken(request.asset)) {
      if (request.amount > (request.asset.asset_balance ?? 0))
        return notEnoughtBalMsg
    } else {
      const assetAmount =
        wallet?.balances?.find(
          (b: any) =>
            !isToken(request.asset) &&
            b.token?.symbol === request.asset?.token.symbol,
        )?.asset_balance ?? 0

      const monikerAmount = request.asset?.asset_balance ?? 0
      const currentMonikerAmount = monikerAmount
        ? formatTokenAmount(
            (assetAmount / monikerAmount).toFixed(MAX_AMOUNT_PRECISION),
          ).value
        : 0
      if (request.amount > currentMonikerAmount) return notEnoughtBalMsg
    }
    return ''
  }, [request.amount, request.asset, wallet?.balances])

  const { isFetching: isFetchingWallets, wallets } = useWalletStore()

  return (
    <div className="flex flex-col flex-1 gap-y-3 min-h-0">
      <div className="flex overflow-y-auto flex-col gap-y-2 h-full">
        <div className="flex flex-col gap-y-2.5 items-center pb-3">
          <p className="text-xl text-[#343433] font-medium">Send a tip</p>
          <span className="text-[#848281] text-xs text-center">
            Celebrate someone&apos;s birthday or achievement
            <br />
            by sending them money
          </span>
        </div>
        <WalletPicker
          authorized={isLoggedIn}
          data={wallets}
          loading={isFetchingWallets}
          onSelect={updateSourceWallet}
        />
        <Recipient
          selectedRecipients={request.recipients ?? []}
          onSelectRecipient={addRecipient}
          onRemoveRecipient={removeRecipient}
        />
        <AmountInput
          authorized={isLoggedIn}
          wallet={wallet}
          onSelectAsset={setAsset}
          onAmountChanged={setAmount}
        />
        <ErrorMessage>{amountErrorMgs}</ErrorMessage>
      </div>
      {isLoggedIn ? (
        <Button
          size="lg"
          onClick={() => setStep(2)}
          className="flex justify-center"
          disabled={
            !!amountErrorMgs ||
            (request.recipients?.length ?? 0) <= 0 ||
            !request.amount
          }
        >
          Continue
          <IconArrowRight className="w-4 h-4" />
        </Button>
      ) : (
        <Popover
          open={isOpenLoginPopup}
          onOpenChange={(o) => (o ? showLoginPopup() : hideLoginPopup())}
        >
          <PopoverTrigger asChild>
            <Button className="justify-center" size="lg" type="button">
              Connect options
              <IconChevronDown
                className={`w-5 h-5 text-white-pure transition ${
                  isOpenLoginPopup ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </PopoverTrigger>
          {unauthorizedContent}
        </Popover>
      )}
    </div>
  )
}
