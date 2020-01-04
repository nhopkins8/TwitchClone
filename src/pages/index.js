import React from "react"

export default () => (
  <>
    <div className="min-h-screen bg-black flex flex-col">
      <nav className="flex items-center bg-gray-900 text-white text-xl h-12 font-thin font-normal w-full">
        <div className="flex items-center w-full justify-start">
          <img src="./images/twitchtvlogo.png" className="h-8 w-8 ml-2 mr-4 mt-2" />
          <div className="mr-6 text-purple-600 border-purple-600 border-b-2 p-2"><a href="/">Discover</a></div>
          <div className="mr-6 p-2 hover:text-purple-600"><a href="/">Following</a></div>
          <div className="mr-6 p-2 hover:text-purple-600 hover:"><a href="/">Browse</a></div>
          <div className="mr-6 p-2 -mt-2 font-semibold"><button>...</button></div>
        </div>

        <div className="w-64 flex w-full justify-center">
          <input className="rounded-l text-gray-600 w-1/2 bg-gray-800 h-8 pl-4 pr-8 border-2 border-gray-800 outline-none text-sm focus:border-purple-600 focus:outline-none focus:bg-black focus:border-purple-500 mr-px focus:text-white" placeholder="Search" />
          <button className="w-8 h-8 bg-gray-800 rounded-r border-gray-900 p-1">
            <svg className="w-6 h-6 fill-current" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clip-rule="evenodd"></path></g></svg>
          </button>
        </div>

        <div className="flex items-center w-full justify-end">
          <button className="hover:bg-gray-800 rounded-sm text-sm flex items-center mr-3 p-1">
            <svg className="w-5 h-5 fill-current" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"></path></g></svg>
          </button>

          <button className="hover:bg-gray-800 rounded-sm text-sm flex items-center mr-3 p-1">
            <svg className="w-5 h-5 fill-current" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M17 14v-2c-1-.5-1.75-1-2-2-.095-.38-.154-.905-.221-1.506C14.49 5.936 14.049 2 10 2 5.95 2 5.509 5.936 5.221 8.494 5.154 9.095 5.095 9.62 5 10c-.25 1-1 1.5-2 2v2h14zm-9.002 2h4-4zm4 0v.012V16zm-5.766-4h7.536a4.262 4.262 0 01-.708-1.515c-.129-.513-.2-1.154-.26-1.684a32.48 32.48 0 00-.009-.083c-.152-1.355-.314-2.606-.78-3.535-.21-.423-.447-.692-.703-.862C11.063 4.158 10.673 4 10 4s-1.063.158-1.308.32c-.256.171-.492.44-.704.863-.465.929-.627 2.18-.78 3.535L7.2 8.8c-.06.53-.131 1.171-.26 1.684-.15.603-.402 1.1-.708 1.515zm1.766 4a2.001 2.001 0 004 .012" clip-rule="evenodd"></path></g></svg>
          </button>

          <button className="bg-gray-800 text-sm w-1/8 flex px-2 py-1 rounded mr-3">
            <svg className="w-5 h-5 fill-current mr-1" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"></path></svg>
            <span className="font-medium text-s">Get Bits</span>
          </button>
          <img src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-70x70.png" alt="" className="rounded-full w-8 h-8 mr-2" />
        </div>
      </nav>
      <div className="mt-1 bg-gray-900 w-64 flex flex-col flex-1 justify-between">

        <div className="flex flex-col">
          {/* FOLLOWED CHANNELS */}
          <div className="">
            <div className="flex justify-between mt-2 ml-2 w-auto items-center">
              <span className="text-white uppercase font-semibold text-sm tracking-tighter flex">Followed Channels</span>
              <svg className="text-white fill-current w-6 h-6 flex mr-3" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></g></svg>
            </div>
            <div>
            </div>
            <div className="mt-3 ml-2 flex justify-between">
              <div className="flex">
                <img src="./images/scarra.jpeg" alt="Scarra" className="rounded-full h-10 h-10 mr-2" />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold">Scarra</span>
                  <span className="-mt-1 text-gray-400 text-sm tracking-tighter font-hairline">Monster Hunter World</span>
                </div>
              </div>
              <div className="flex items-center">
                <i className="bg-red-600 w-2 h-2 rounded-full mt-1 mr-1"></i>
                <span className="text-white mr-3 text-sm">4,120</span>
              </div>
            </div>

            <div className="mt-3 ml-2 flex justify-between">
              <div className="flex">
                <img src="./images/scarra.jpeg" alt="Scarra" className="rounded-full h-10 h-10 mr-2" />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold">Scarra</span>
                  <span className="-mt-1 text-gray-400 text-sm tracking-tighter font-hairline">Monster Hunter World</span>
                </div>
              </div>
              <div className="flex items-center">
                <i className="bg-red-600 w-2 h-2 rounded-full mt-1 mr-1"></i>
                <span className="text-white mr-3 text-sm">4,120</span>
              </div>
            </div>

            <div className="mt-3 ml-2 flex justify-between">
              <div className="flex">
                <img src="./images/scarra.jpeg" alt="Scarra" className="rounded-full h-10 h-10 mr-2" />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold">Scarra</span>
                  <span className="-mt-1 text-gray-400 text-sm tracking-tighter font-hairline">Monster Hunter World</span>
                </div>
              </div>
              <div className="flex items-center">
                <i className="bg-red-600 w-2 h-2 rounded-full mt-1 mr-1"></i>
                <span className="text-white mr-3 text-sm">4,120</span>
              </div>
            </div>

            <div className="mt-3 ml-2 flex justify-between">
              <div className="flex">
                <img src="./images/scarra.jpeg" alt="Scarra" className="rounded-full h-10 h-10 mr-2" />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold">Scarra</span>
                  <span className="-mt-1 text-gray-400 text-sm tracking-tighter font-hairline">Monster Hunter World</span>
                </div>
              </div>
              <div className="flex items-center">
                <i className="bg-red-600 w-2 h-2 rounded-full mt-1 mr-1"></i>
                <span className="text-white mr-3 text-sm">4,120</span>
              </div>
            </div>

            <div className="mt-3 ml-2 flex justify-between">
              <div className="flex">
                <img src="./images/scarra.jpeg" alt="Scarra" className="rounded-full h-10 h-10 mr-2" />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold">Scarra</span>
                  <span className="-mt-1 text-gray-400 text-sm tracking-tighter font-hairline">Monster Hunter World</span>
                </div>
              </div>
              <div className="flex items-center">
                <i className="bg-red-600 w-2 h-2 rounded-full mt-1 mr-1"></i>
                <span className="text-white mr-3 text-sm">4,120</span>
              </div>
            </div>

            <div className="mt-3 ml-2 flex justify-between">
              <div className="flex">
                <img src="./images/scarra.jpeg" alt="Scarra" className="rounded-full h-10 h-10 mr-2" />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold">Scarra</span>
                  <span className="-mt-1 text-gray-400 text-sm tracking-tighter font-hairline">Monster Hunter World</span>
                </div>
              </div>
              <div className="flex items-center">
                <i className="bg-red-600 w-2 h-2 rounded-full mt-1 mr-1"></i>
                <span className="text-white mr-3 text-sm">4,120</span>
              </div>
            </div>
          </div>



          {/* ONLINE FRIENDS */}
          <div>
            <div className="mt-2 ml-2 w-auto">
              <span className="text-white uppercase font-semibold text-sm tracking-tight">ONLINE FRIENDS</span>
            </div>
            <div className="mt-3 ml-2 flex justify-between">
              <div className="flex">
                <img src="./images/yops.jpeg" alt="Scarra" className="rounded-full h-10 h-10 mr-2" />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold">Yops</span>
                  <span className="-mt-1 text-gray-400 text-sm tracking-tighter font-hairline">Away</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH TO ADD FRIENDS */}
        <div>
          <div className="flex pt-3 pb-2 px-3 border border-gray-800 mt-4">
            <input className="border-2 border-gray-800 w-full rounded bg-gray-800 pl-8 text-gray-600 focus:border-purple-600 focus:outline-none focus:bg-black focus:border-purple-500 focus:text-white" placeholder="Search to Add Friends" />
            <svg className="w-6 h-6 text-gray-600 fill-current absolute ml-1" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clip-rule="evenodd"></path></g></svg>
          </div>
        </div>

      </div>
    </div>
  </>
)
