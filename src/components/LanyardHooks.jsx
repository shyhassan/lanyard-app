import React from "react";

// Existing hooks 
import xbucDetachable from "../assets/hooks/xbuc_detachable.png";
import xbucWhiteDetachable from "../assets/hooks/xbuc_white_detachable.png";
import ybdSwivelPinhole from "../assets/hooks/ybd_swivel_pinhole.png";
import ybdSwivel from "../assets/hooks/ybd_swivel.png";
import ybdBlkSwivel from "../assets/hooks/ybdblk_swivel.png";
import ybdBlkNonSwivel from "../assets/hooks/ybdblk_non_swivel.png";
import ybdnsCirNonSwivel from "../assets/hooks/ybdns_cir_non_swivel.png";
import ybdnsCirBlkNonSwivel from "../assets/hooks/ybdns_cir_blk_non_swivel.png";

// New hooks 
// import cylindricalBreakaway from "../assets/hooks/cylindrical_breakaway.png";
import pvcscPvcSnapclip from "../assets/hooks/pvcsc_pvc_snapclip.png";
// import xbaBreakaway2 from "../assets/hooks/xba_breakaway_2.png";
// import xba2pBreakaway2p from "../assets/hooks/xba2p_breakaway_2p.png";
// import xbasewBreakawayClip from "../assets/hooks/xbasew_breakaway_clip.png";
// import xbasewWhiteBreakawayClip from "../assets/hooks/xbasew_white_breakaway_clip.png";
import ybdbklNonSwivel from "../assets/hooks/ybdblk_non_swivel.png";
import ybdbklSwivel from "../assets/hooks/ybdblk_swivel.png";
import ybdnsaDRBlack from "../assets/hooks/ybdnsa_d_r_black.png";
import ybdnsaDRSilver from "../assets/hooks/ybdnsa_d_r_silver.png";
import ybdnsnaNonSwivelBulldog from "../assets/hooks/ybdnsna_black_non_swivel_bulldog.png";
import ybdnsnaNicNonSwivelBulldog from "../assets/hooks/ybdnsna_nic_non_swivel_bulldog.png";
import ybdscWithKeyringBulldog from "../assets/hooks/ybdsc_with_keyring_bulldog.png";
import ybdscWithKeyringBulldogSnapclip from "../assets/hooks/ybdsc_with_keyring_bulldog_snapclip_1.png";
import ycellLarge from "../assets/hooks/ycell_large.png";
import ycellSmall from "../assets/hooks/ycell_small.png";
import ydsDeluxeLobster from "../assets/hooks/yds_deluxe_lobster.png";
import ydsblkDeluxeLobsterBlack from "../assets/hooks/ydsblk_deluxe_lobster_black.png";
import yjhJHook from "../assets/hooks/yjh_j_hook.png";
import yjhPinholesJHookPinhole from "../assets/hooks/yjh_pinholes_j_hook_pinhole.png";
import yjhblkJHookBlack from "../assets/hooks/yjhblk_j_hook_black.png";
import yjhecJHookEagleClaw from "../assets/hooks/yjhec_j_hook_eagle_claw.png";
import yjheuJHookEuro from "../assets/hooks/yjheu_j_hook_euro.png";
import yjhnsJHookNonSwivel from "../assets/hooks/yjhns_j_hook_non_swivel.png";
import yjhnsGunJHookNonSwivelGunMetal from "../assets/hooks/yjhns_gun_j_hook_non_swivel_gun_metal.png";
import yjhnsblkJHookNonSwivelBlack from "../assets/hooks/yjhnsblk_j_hook_non_swivel_black.png";
import yjhplaSnaphookPlastic from "../assets/hooks/yjhpla_snaphook_plastic.png";
import ymdaJHookDetachableBuckle from "../assets/hooks/ymda_j_hook_detachable_buckle.png";
import ymdbDetachableBuckle from "../assets/hooks/ymdb_detachable_buckle.png";
import ymdbblkSplitRingDetachableBuckle from "../assets/hooks/ymdbblk_split_ring_detachable_buckle.png";
import ymddcBulldogDetachableBuckle from "../assets/hooks/ymdc_bulldog_detachable_buckle.png";
import ymddIdHolderDetachableBuckle from "../assets/hooks/ymdd_id_holder_detachable_buckle.png";
import ymdeHolderXDetachableBuckle from "../assets/hooks/ymde_holder_x_detachable_buckle.png";
import ymdjBlckBlackMetalHookDetachable from "../assets/hooks/ymdj_blck_black_metal_hook_detachable.png";
import ymdjGunm1GunMetalHookDetachable from "../assets/hooks/ymdj_gunm_1_gun_metal_hook_detachable.png";
import ymdjNcklMetalHookDetachable from "../assets/hooks/ymdj_nckl_metal_hook_detachable.png";
import yoring from "../assets/hooks/yoring.png";
import ysrKeyRing from "../assets/hooks/ysr_key_ring.png";
import ysrblkKeyRingBlack from "../assets/hooks/ysrblk_key_ring_black.png";

// ➕ Add future hook imports here following the same pattern

export const hooksList = [
  // ── Existing ───────────────────────────────────────────────────
  { name: "XBUC Detachable", src: xbucDetachable, hookHeight: 120 },
  { name: "XBUC White Detachable", src: xbucWhiteDetachable, hookHeight: 120 },
  { name: "YBD Swivel Pinhole", src: ybdSwivelPinhole, hookHeight: 120 },
  { name: "YBD Swivel", src: ybdSwivel, hookHeight: 120 },
  { name: "YBD Black Swivel", src: ybdBlkSwivel, hookHeight: 120 },
  { name: "YBD Black Non Swivel", src: ybdBlkNonSwivel, hookHeight: 120 },
  { name: "YBD Non Swivel Cir", src: ybdnsCirNonSwivel, hookHeight: 120 },
  { name: "YBD Non Swivel Cir Black", src: ybdnsCirBlkNonSwivel, hookHeight: 120 },

  // ── New ────────────────────────────────────────────────────────
  // { name: "Cylindrical Breakaway", src: cylindricalBreakaway },
  { name: "PVC Snap Clip", src: pvcscPvcSnapclip, hookHeight: 120 },
  // { name: "XBA Breakaway 2", src: xbaBreakaway2 },
  // { name: "XBA2P Breakaway 2P", src: xba2pBreakaway2p },
  // { name: "XBASEW Breakaway Clip", src: xbasewBreakawayClip },
  // { name: "XBASEW White Breakaway Clip", src: xbasewWhiteBreakawayClip },
  { name: "YBDBKL Non Swivel", src: ybdbklNonSwivel, hookHeight: 120 },
  { name: "YBDBKL Swivel", src: ybdbklSwivel, hookHeight: 120 },
  { name: "YBDNSA D/R Black", src: ybdnsaDRBlack, hookHeight: 120 },
  { name: "YBDNSA D/R Silver", src: ybdnsaDRSilver, hookHeight: 120 },
  { name: "Bulldog Black Non Swivel", src: ybdnsnaNonSwivelBulldog, hookHeight: 120 },
  { name: "Bulldog Nic Non Swivel", src: ybdnsnaNicNonSwivelBulldog, hookHeight: 120 },
  { name: "Bulldog Keyring", src: ybdscWithKeyringBulldog, hookHeight: 120 },
  { name: "Bulldog Keyring Snapclip", src: ybdscWithKeyringBulldogSnapclip, hookHeight: 120 },
  { name: "YCELL Large", src: ycellLarge, hookHeight: 120 },
  { name: "YCELL Small", src: ycellSmall, hookHeight: 120 },
  { name: "Deluxe Lobster", src: ydsDeluxeLobster, hookHeight: 120 },
  { name: "Deluxe Lobster Black", src: ydsblkDeluxeLobsterBlack, hookHeight: 120 },
  { name: "J Hook", src: yjhJHook, hookHeight: 120 },
  { name: "J Hook Pinhole", src: yjhPinholesJHookPinhole, hookHeight: 120 },
  { name: "J Hook Black", src: yjhblkJHookBlack, hookHeight: 120 },
  { name: "J Hook Eagle Claw", src: yjhecJHookEagleClaw, hookHeight: 120 },
  { name: "J Hook Euro", src: yjheuJHookEuro, hookHeight: 120 },
  { name: "J Hook Non Swivel", src: yjhnsJHookNonSwivel, hookHeight: 120 },
  { name: "J Hook Non Swivel Gun Metal", src: yjhnsGunJHookNonSwivelGunMetal, hookHeight: 120 },
  { name: "J Hook Non Swivel Black", src: yjhnsblkJHookNonSwivelBlack, hookHeight: 120 },
  { name: "Snaphook Plastic", src: yjhplaSnaphookPlastic, hookHeight: 120 },
  { name: "J Hook Detachable Buckle", src: ymdaJHookDetachableBuckle, hookHeight: 120 },
  { name: "Detachable Buckle", src: ymdbDetachableBuckle, hookHeight: 120 },
  { name: "Split Ring Detachable Buckle", src: ymdbblkSplitRingDetachableBuckle, hookHeight: 120 },
  { name: "Bulldog Detachable Buckle", src: ymddcBulldogDetachableBuckle, hookHeight: 120 },
  { name: "ID Holder Detachable Buckle", src: ymddIdHolderDetachableBuckle, hookHeight: 120 },
  { name: "Holder X Detachable Buckle", src: ymdeHolderXDetachableBuckle, hookHeight: 120 },
  { name: "Black Metal Hook Detachable", src: ymdjBlckBlackMetalHookDetachable, hookHeight: 120 },
  { name: "Gun Metal Hook Detachable", src: ymdjGunm1GunMetalHookDetachable, hookHeight: 120 },
  { name: "Metal Hook Detachable", src: ymdjNcklMetalHookDetachable, hookHeight: 120 },
  { name: "O Ring", src: yoring },
  { name: "Key Ring", src: ysrKeyRing },
  { name: "Key Ring Black", src: ysrblkKeyRingBlack },

  // ➕ Add future hook entries here
];

function LanyardHooks({ selectedHook, setSelectedHook }) {
  return (
    <div className="space-y-2 mt-4">                                                                                                                              
    
      <h2 className="text-lg font-bold">HOOKS</h2>
      <div className="grid grid-cols-5 gap-3">
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