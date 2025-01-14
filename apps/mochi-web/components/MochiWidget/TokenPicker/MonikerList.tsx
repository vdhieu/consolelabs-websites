import { useWalletStore } from '~store'
import { api } from '~constants/mochi'
import { useMemo } from 'react'
import useSWR from 'swr'
import { SectionList } from '@consolelabs/core'
import { sectionFormatter } from './utils'
import { MonikerItem } from './MonikerItem'
import { EmptyList } from './EmptyList'
import Skeleton from './Skeleton'
import { Moniker } from './type'

interface Props {
  searchTerm: string
  onSelect?: (item: Moniker) => void
}

function getFilterMonikerNameFunc(searchTerm: string) {
  return function filterMonikerName(monikerAsset: Moniker) {
    return monikerAsset.name.toLowerCase().includes(searchTerm.toLowerCase())
  }
}

export const MonikerList = (props: Props) => {
  const { wallets } = useWalletStore()
  const { searchTerm, onSelect } = props

  const { data = [], isLoading } = useSWR<
    Moniker[],
    any,
    [string, typeof wallets]
  >(['moniker-list', wallets], async ([_, _wallets]) => {
    const { ok, data } = await api.base.configDefi.getDefaultMonikers()
    if (!ok) return []

    const tokenIdsSet = new Set(
      wallets.flatMap((w) => w.balances.flatMap((b) => b.token.id)),
    )

    return data.map((d) => ({
      type: 'moniker',
      group: 'Default',
      id: d.moniker.id,
      name: d.moniker.moniker,
      asset_balance: d.moniker.amount,
      token_amount: d.value,
      disabled: !tokenIdsSet.has(d.moniker.token_id),
      token: {
        price: d.moniker.token.token_price,
        symbol: d.moniker.token.token_symbol,
        chain_id: d.moniker.token.chain_id,
      },
    }))
  })

  const isUserHasUnusableMoniker = data.some((d) => d.disabled)

  const filteredMonikers = useMemo(() => {
    const filteredData = data.filter(getFilterMonikerNameFunc(searchTerm))
    return sectionFormatter(filteredData, 'group')
  }, [searchTerm, data])

  return (
    <>
      <SectionList
        sections={filteredMonikers}
        loading={isLoading}
        renderItem={(item) => (
          <MonikerItem
            key={`moniker-list-${item.id}`}
            item={item}
            onSelect={onSelect}
          />
        )}
        renderLoader={Skeleton}
        renderSectionHeader={(section) => (
          <label className="font-bold text-[0.625rem] uppercase text-[#ADACAA]">
            {section.title}
          </label>
        )}
        SectionEmpty={isLoading ? <Skeleton /> : <EmptyList />}
        rootClassName="w-full h-full"
      />
      {isUserHasUnusableMoniker ? (
        <span className="text-xs text-[#ADACAA]">
          Unusable monikers (equivalent token has 0 amount) are disabled
        </span>
      ) : null}
    </>
  )
}
