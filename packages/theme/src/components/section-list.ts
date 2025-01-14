import clsx from 'clsx'

const sectionListClsx = ({ className = '' }: { className?: string } = {}) =>
  clsx('overflow-hidden', className)

const sectionListViewportClsx = ({
  className = '',
}: { className?: string } = {}) =>
  clsx('w-full h-full border-inherit', className)

const sectionListContentWrapperClsx = ({
  className = '',
}: {
  className?: string
} = {}) => clsx('space-y-1', className)

const sectionListContentListClsx = ({
  className = '',
}: {
  className?: string
} = {}) => clsx('space-y-1', className)

const sectionListScrollbarClsx = ({
  className = '',
}: { className?: string } = {}) =>
  clsx(
    'flex select-none touch-none p-0.5 bg-gray-200 transition-colors w-2 hover:bg-gray-300',
    className,
  )

const sectionListThumbClsx = ({
  className = '',
}: { className?: string } = {}) =>
  clsx(
    "flex-1 bg-gray-600 rounded-lg relative before:content-[''] before:absolute before:w-full before:h-full before:min-w-[44px] before:min-h-[44px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
    className,
  )

const sectionListCornerClsx = ({
  className = '',
}: { className?: string } = {}) => clsx('bg-gray-300', className)

const sectionList = {
  sectionListClsx,
  sectionListViewportClsx,
  sectionListContentWrapperClsx,
  sectionListContentListClsx,
  sectionListScrollbarClsx,
  sectionListThumbClsx,
  sectionListCornerClsx,
}

export { sectionList }
