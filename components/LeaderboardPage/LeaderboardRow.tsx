import { toast } from "react-toastify"
import { useEnsName } from "wagmi"
import truncateEthAddress from "../../lib/truncateEthAddress"

const LeaderboardRow = ({ address, numberOwned, rank, twitterHandle }) => {
  const { data: ensName } = useEnsName({
    address,
    chainId: 1,
  })

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(address)
    toast.success("copied to clipboard!")
  }

  return (
    <tr key={address} className="bg-gray-100  hover:bg-blue-300">
      <td className="px-4 py-2 border-b">#{rank}</td>
      <td className="px-4 py-2 border-b">{numberOwned}</td>
      <td className="px-4 py-2 border-b">
        <button onClick={handleCopyClick} type="button">
          {ensName || truncateEthAddress(address)}
        </button>
      </td>
      <td className="px-4 py-2 border-b">{twitterHandle}</td>
    </tr>
  )
}

export default LeaderboardRow