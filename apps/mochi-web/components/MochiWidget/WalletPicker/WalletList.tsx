import { List } from '@consolelabs/core'
import { Wallet } from '~store'
import { WalletItem } from './WalletItem'
import Skeleton from './Skeleton'

interface Props {
  loading: boolean
  data: Wallet[]
  onSelect?: (item: Wallet) => void
}

export const WalletList = (props: Props) => {
  const { data, onSelect } = props

  return (
    <List
      listClassName="h-[400px]"
      rootClassName="w-full"
      loading={props.loading}
      data={data}
      renderLoader={Skeleton}
      renderItem={(item, i) => (
        <WalletItem key={`wallet-item-${i}`} item={item} onSelect={onSelect} />
      )}
    />
  )
}
