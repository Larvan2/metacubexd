import { Show, createMemo } from 'solid-js'
import { useProxies } from '~/signals'

export const IPv6Support = (props: { name?: string }) => {
  const { proxyIPv6SupportMap } = useProxies()
  const support = createMemo(() => proxyIPv6SupportMap()[props.name!] === true)

  return (
    <Show when={support()}>
      <span class="badge badge-sm p-px">
        <span class="scale-70">v6</span>
      </span>
    </Show>
  )
}
