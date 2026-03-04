import React from "react";
import xbucDetachable from "../assets/hooks/xbuc_detachable.png";
import xbucWhiteDetachable from "../assets/hooks/xbuc_white_detachable.png";
import ybdSwivelPinhole from "../assets/hooks/ybd_swivel_pinhole.png";
import ybdSwivel from "../assets/hooks/ybd_swivel.png";
import ybdBlkSwivel from "../assets/hooks/ybdblk_swivel.png";
import ybdBlkNonSwivel from "../assets/hooks/ybdblk_non_swivel.png";
import ybdnsCirNonSwivel from "../assets/hooks/ybdns_cir_non_swivel.png";
import ybdnsCirBlkNonSwivel from "../assets/hooks/ybdns_cir_blk_non_swivel.png";

export const hooksList = [
  { name: "XBUC Detachable", src: xbucDetachable },
  { name: "XBUC White Detachable", src: xbucWhiteDetachable },
  { name: "YBD Swivel Pinhole", src: ybdSwivelPinhole },
  { name: "YBD Swivel", src: ybdSwivel },
  { name: "YBD Black Swivel", src: ybdBlkSwivel },
  { name: "YBD Black Non Swivel", src: ybdBlkNonSwivel },
  { name: "YBD Non Swivel Cir", src: ybdnsCirNonSwivel },
  { name: "YBD Non Swivel Cir Black", src: ybdnsCirBlkNonSwivel },
];

function LanyardHooks({ selectedHook, setSelectedHook }) {
  return (
    <div className="space-y-2 mt-4">
      <h2 className="text-lg font-bold">Choose a hook</h2>
      {/* <div className="grid grid-cols-4 gap-3"> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {hooksList.map((hook, index) => (
          <div
            key={index}
            onClick={() => setSelectedHook(hook)}
            className={`cursor-pointer border rounded p-1 transition text-center ${
              selectedHook?.name === hook.name
                ? "border-blue-500 ring-2 ring-blue-400"
                : "border-gray-300 hover:border-blue-300"
            }`}
          >
            <img src={hook.src} alt={hook.name} className="w-full rounded mb-1" />
            <p className="text-xs">{hook.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanyardHooks;