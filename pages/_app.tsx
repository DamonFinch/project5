import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import type { AppProps } from "next/app"
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { allChains, configureChains, createClient, WagmiConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import "react-toastify/dist/ReactToastify.css"
import { UserProvider } from "../providers/UserProvider"
import { ChatProvider } from "../providers/ChatProvider"
import Chat from "../components/Chat"

const { chains, provider, webSocketProvider } = configureChains(allChains, [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: "CRE8ORS",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <SessionProvider>
          <UserProvider>
            <ChatProvider>
              <Component {...pageProps} />
              <Chat />
              <ToastContainer />
            </ChatProvider>
          </UserProvider>
        </SessionProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
