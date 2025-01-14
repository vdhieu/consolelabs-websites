import wretch from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'
import AbortAddon from 'wretch/addons/abort'

import { MOCHI_PAY_API, MOCHI_PROFILE_API, MOCHI_API } from '../envs'

const MOCHI_PROFILE = wretch(MOCHI_PROFILE_API)
  .addon(QueryStringAddon)
  .addon(AbortAddon())
  .errorType('json')

const MOCHI_PAY = wretch(MOCHI_PAY_API)
  .addon(QueryStringAddon)
  .addon(AbortAddon())
  .errorType('json')

const MOCHI = wretch(MOCHI_API)
  .addon(QueryStringAddon)
  .addon(AbortAddon())
  .errorType('json')

export const API = {
  MOCHI_PROFILE,
  MOCHI_PAY,
  MOCHI,
}

export const apiLogin = (token: string) => {
  API.MOCHI_PROFILE = MOCHI_PROFILE.auth(`Bearer ${token}`)
  API.MOCHI_PAY = MOCHI_PAY.auth(`Bearer ${token}`)
  API.MOCHI = MOCHI.auth(`Bearer ${token}`)
}

export const apiLogout = () => {
  API.MOCHI_PROFILE = MOCHI_PROFILE
  API.MOCHI_PAY = MOCHI_PAY
  API.MOCHI = MOCHI
}

export const GET_PATHS = {
  GUILDS: '/discord/users/me/guilds',
  GUILD: (id: string) => `/guilds/${id}`,
  GUILD_ROLES: (id: string) => `/guilds/${id}/roles`,
  USERS_TOP: '/users/top',
  PROFILE_ID: (id: string) => `/profiles/${id}`,
  PROFILE_ACTIVITES: (id: string) => `/profiles/${id}/activities`,
  FIND_ONE_WALLET: (id: string, wallet_address: string, chain: string) =>
    `/users/${id}/wallets/${wallet_address}/${chain}/assets`,
  MOCHI_BALANCES: (id: string) => `/mochi-wallet/${id}/balances`,
  PROFILE_SEARCH: (username: string, platform?: string) =>
    `/profiles/search?username=${username}&platform=${platform || ''}`,
}
