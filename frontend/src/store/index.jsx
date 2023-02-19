import { createGlobalState } from 'react-hooks-global-state'

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  boxModal: 'scale-0',
  connectedAccount: '',
  mints: [],
})

export { getGlobalState, useGlobalState, setGlobalState }
