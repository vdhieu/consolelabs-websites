import { useState, useEffect } from 'react'
import { Modal, ModalContent } from '@consolelabs/core'
import { useAuthStore } from '~store'
import clsx from 'clsx'
import { AuthPanel } from './AuthPanel'

export const LoginRequiredModal = () => {
  const { isLoggedIn, isLoadingSession } = useAuthStore()
  const [hideOpenAuthModal, setHideOpenAuthModal] = useState(false)
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)

  useEffect(() => {
    setIsOpenAuthModal(!isLoadingSession && !isLoggedIn)
  }, [isLoadingSession, isLoggedIn])

  return (
    <Modal open={isOpenAuthModal} onOpenChange={setIsOpenAuthModal}>
      <ModalContent
        showCloseBtn
        className={clsx('!p-0', {
          hidden: hideOpenAuthModal,
        })}
      >
        <AuthPanel
          onOpenConnectWalletChange={(open) => {
            setHideOpenAuthModal(open)
          }}
        />
      </ModalContent>
    </Modal>
  )
}
