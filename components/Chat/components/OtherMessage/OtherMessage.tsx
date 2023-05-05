/* eslint-disable @next/next/no-img-element */
const OtherMessage = ({ message }) => (
  <div className="flex items-center mb-4">
    <div className="flex flex-col items-center flex-none mr-4 space-y-1">
      <img
        alt=""
        className="w-6 h-8 p-0.5 border-2 border-black rounded-md "
        src="/CRE8ORSLOGO_ICON.png"
      />
      <div className="text-sm text-black">{message.connectionId}</div>
    </div>
    <div className="relative flex-1 p-2 mb-2 text-gray-800 bg-gray-300 rounded-lg">
      <div>{message.data}</div>

      {/* <!-- arrow --> */}
      <div className="absolute left-0 w-2 h-2 transform rotate-45 -translate-x-1/2 bg-gray-300 top-1/2" />
      {/* <!-- end arrow --> */}
    </div>
  </div>
)

export default OtherMessage
