import React from "react";
import xbucDetachable from "../assets/hooks/xbuc_detachable.png";
import xbucWhiteDetachable from "../assets/hooks/xbuc_white_detachable.png";
import ybdSwivelPinhole from "../assets/hooks/ybd_swivel_pinhole.png";
import ybdSwivel from "../assets/hooks/ybd_swivel.png";
import ybdBlkSwivel from "../assets/hooks/ybdblk_swivel.png";
import ybdBlkNonSwivel from "../assets/hooks/ybdblk_non_swivel.png";
import ybdnsCirNonSwivel from "../assets/hooks/ybdns_cir_non_swivel.png";
import ybdnsCirBlkNonSwivel from "../assets/hooks/ybdns_cir_blk_non_swivel.png";
import pvcscPvcSnapclip from "../assets/hooks/pvcsc_pvc_snapclip.png";
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

export const hooksList = [
  { name: "XBUC Detachable", src: xbucDetachable, hookHeight: 59, displayWidth: 260,
    displayTop: { "1": 550, "7/8": 570, "3/4": 560, "5/8": 540, "1/2": 550 },

    svgDisplayTop: { "1": 600, "7/8":625, "3/4":600,"5/8":595,"1/2":585},
    svgDisplayWidth: { "1": 250, "7/8": 245, "3/4": 240, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "XBUC White Detachable", src: xbucWhiteDetachable, hookHeight: 60, displayWidth: 260,
    displayTop: { "1": 550, "7/8": 570, "3/4": 560, "5/8": 540, "1/2": 550 },

    svgDisplayTop: { "1": 600, "7/8":625,"3/4":600,"5/8":595,"1/2":585},
    svgDisplayWidth: { "1": 250, "7/8": 245, "3/4": 240, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },
  },

  { name: "YBD Swivel Pinhole", src: ybdSwivelPinhole, hookHeight: 64, displayWidth: 230,
    displayTop: { "1": 548, "7/8": 570, "3/4": 555, "5/8": 555, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 230, "7/8": 225, "3/4": 230, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },
  },

  { name: "YBD Swivel", src: ybdSwivel, hookHeight: 65, displayWidth: 230,
    displayTop: { "1": 550, "7/8": 570, "3/4": 555, "5/8": 555, "1/2": 553 },

    svgDisplayTop: { "1": 600, "7/8":620, "3/4":600, "5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 220, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "YBD Black Swivel", src: ybdBlkSwivel, hookHeight: 64, displayWidth: 230,
    displayTop: { "1": 550, "7/8": 570, "3/4": 555, "5/8": 555, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":618,"3/4":600,"5/8":600,"1/2":583},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 230, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "YBD Black Non Swivel", src: ybdBlkNonSwivel, hookHeight: 59, displayWidth: 230,
    displayTop: { "1": 540, "7/8": 555, "3/4": 555, "5/8": 555, "1/2": 540 },

    svgDisplayTop: { "1": 588, "7/8":610,"3/4":590,"5/8":590,"1/2":580},
    svgDisplayWidth: { "1": 240, "7/8": 230, "3/4": 220, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 2, "7/8":2,"3/4": 0, "5/8": 0, "1/2": 1 },

  },

  { name: "YBD Non Swivel Cir", src: ybdnsCirNonSwivel, hookHeight: 57, displayWidth: 280,
    displayTop: { "1": 540, "7/8": 555, "3/4": 540, "5/8": 545, "1/2": 545 },

    svgDisplayTop: { "1": 582, "7/8":610,"3/4":590,"5/8":588,"1/2":578},
    svgDisplayWidth: { "1": 240, "7/8": 240, "3/4": 240, "5/8": 230, "1/2": 220 },
    svgDisplayLeft: { "1": 0, "7/8":-1,"3/4":-1, "5/8":-1, "1/2":-1 },

  },

  { name: "YBD Non Swivel Cir Black", src: ybdnsCirBlkNonSwivel, hookHeight: 57, displayWidth: 280,
    displayTop: { "1": 540, "7/8": 555, "3/4": 540, "5/8": 545, "1/2": 545 },

    svgDisplayTop: { "1": 582, "7/8":610,"3/4":590,"5/8":588,"1/2":578},
    svgDisplayWidth: { "1": 240, "7/8": 240, "3/4": 240, "5/8": 230, "1/2": 220 },
    svgDisplayLeft: { "1": 0, "7/8":1, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "PVC Snap Clip", src: pvcscPvcSnapclip, hookHeight: 64, displayWidth: 280,
    displayTop: { "1": 540, "7/8": 555, "3/4": 547, "5/8": 550, "1/2": 546 },

    svgDisplayTop: { "1": 582, "7/8":610,"3/4":590,"5/8":588,"1/2":578},
    svgDisplayWidth: { "1": 240, "7/8": 240, "3/4": 240, "5/8": 230, "1/2": 230 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "YBDBKL Non Swivel", src: ybdbklNonSwivel, hookHeight: 53, displayWidth: 230,
    displayTop: { "1": 550, "7/8": 555, "3/4": 555, "5/8": 550, "1/2": 540 },

    svgDisplayTop: { "1": 588, "7/8":610,"3/4":590,"5/8":590,"1/2":580},
    svgDisplayWidth: { "1": 240, "7/8": 230, "3/4": 220, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 2, "7/8":2,"3/4": 0, "5/8": 0, "1/2": 1 },


  },

  { name: "YBDBKL Swivel", src: ybdbklSwivel, hookHeight: 64, displayWidth: 230,
    displayTop: { "1": 550, "7/8": 563, "3/4": 555, "5/8": 555, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":615,"3/4":600,"5/8":595,"1/2":583},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 230, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "YBDNSA D/R Black", src: ybdnsaDRBlack, hookHeight: 47, displayWidth: 230,
    displayTop: { "1": 550, "7/8": 571, "3/4": 560, "5/8": 558, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":623,"3/4":600,"5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 220, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "YBDNSA D/R Silver", src: ybdnsaDRSilver, hookHeight: 48, displayWidth: 230,
    displayTop: { "1": 550, "7/8": 571, "3/4": 560, "5/8": 558, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":623,"3/4":600,"5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 220, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },
  },

  { name: "Bulldog Black Non Swivel", src: ybdnsnaNonSwivelBulldog, hookHeight: 50, displayWidth: 230,
    displayTop: { "1": 540, "7/8": 555, "3/4": 550, "5/8": 550, "1/2": 545 },

    svgDisplayTop: { "1": 588, "7/8":610,"3/4":590,"5/8":590,"1/2":575},
    svgDisplayWidth: { "1": 260, "7/8": 250, "3/4": 230, "5/8": 230, "1/2": 220 },
    svgDisplayLeft: { "1": 1, "7/8": 1, "3/4": 1, "5/8": 1, "1/2": 1 },
  },

  { name: "Bulldog Nic Non Swivel", src: ybdnsnaNicNonSwivelBulldog, hookHeight: 53, displayWidth: 230,
    displayTop: { "1": 550, "7/8": 555, "3/4": 550, "5/8": 550, "1/2": 545 },

    svgDisplayTop: { "1": 588, "7/8":610,"3/4":590,"5/8":590,"1/2":575},
    svgDisplayWidth: { "1": 260, "7/8": 250, "3/4": 230, "5/8": 220, "1/2": 210 },
    svgDisplayLeft: { "1": 1, "7/8": 1, "3/4": 1, "5/8": 1, "1/2": 1 },

  },

  { name: "Bulldog Keyring", src: ybdscWithKeyringBulldog, hookHeight: 65, displayWidth: 230,
    displayTop: { "1": 540, "7/8": 555, "3/4": 548, "5/8": 550, "1/2": 550 },

    svgDisplayTop: { "1": 588, "7/8":610,"3/4":590,"5/8":590,"1/2":578},
    svgDisplayWidth: { "1": 260, "7/8": 250, "3/4": 230, "5/8": 220, "1/2": 200 },
    svgDisplayLeft: { "1": 1, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Bulldog Keyring Snapclip", src: ybdscWithKeyringBulldogSnapclip, hookHeight: 64, displayWidth: 230,
    displayTop: { "1": 540, "7/8": 555, "3/4": 548, "5/8": 550, "1/2": 550 },

    svgDisplayTop: { "1": 588, "7/8":610,"3/4":590,"5/8":590,"1/2":578},
    svgDisplayWidth: { "1": 260, "7/8": 250, "3/4": 230, "5/8": 220, "1/2": 210 },
    svgDisplayLeft: { "1": 1, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "YCELL Large", src: ycellLarge, hookHeight: 79, displayWidth: 230,
    displayTop: { "1": 560, "7/8": 571, "3/4": 559, "5/8": 558, "1/2": 555 },

    svgDisplayTop: { "1": 588, "7/8":622,"3/4":600,"5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 260, "7/8": 255, "3/4": 240, "5/8": 230, "1/2": 220 },
    svgDisplayLeft: { "1": 1, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "YCELL Small", src: ycellSmall, hookHeight: 79, displayWidth: 230,
    displayTop: { "1": 550, "7/8": 571, "3/4": 559, "5/8": 560, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":610,"3/4":590,"5/8":590,"1/2":585},
    svgDisplayWidth: { "1": 230, "7/8": 260, "3/4": 250, "5/8": 240, "1/2": 230 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Deluxe Lobster", src: ydsDeluxeLobster, hookHeight: 51, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 570, "3/4": 559, "5/8": 555, "1/2": 554 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600, "5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 220, "5/8": 210, "1/2": 190 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Deluxe Lobster Black", src: ydsblkDeluxeLobsterBlack, hookHeight: 50, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 565, "3/4": 557, "5/8": 555, "1/2": 554 },

    svgDisplayTop: { "1": 600, "7/8":619,"3/4":600, "5/8":598,"1/2":583},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 220, "5/8": 220, "1/2": 190 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "J Hook", src: yjhJHook, hookHeight: 68, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 570, "3/4": 559, "5/8": 555, "1/2": 554 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600, "5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 210, "5/8": 210, "1/2": 190 },
    svgDisplayLeft: { "1": 0, "7/8":-1, "3/4":-1, "5/8":-1, "1/2":-1 },

  },

  { name: "J Hook Pinhole", src: yjhPinholesJHookPinhole, hookHeight: 66, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 570, "3/4": 559, "5/8": 555, "1/2": 554 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600, "5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 210, "5/8": 210, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "J Hook Black", src: yjhblkJHookBlack, hookHeight: 70, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 570, "3/4": 559, "5/8": 555, "1/2": 554 },

    svgDisplayTop: { "1": 590, "7/8":620,"3/4":600,"5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 260, "7/8": 230, "3/4": 230, "5/8": 220, "1/2": 210 },
    svgDisplayLeft: { "1":-1, "7/8":-1, "3/4":-1, "5/8":-1, "1/2":-1 },
  },

  { name: "J Hook Eagle Claw", src: yjhecJHookEagleClaw, hookHeight: 54, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 570, "3/4": 558, "5/8": 555, "1/2": 554 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":600,"1/2":585},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 210, "5/8": 205, "1/2": 190 },
    svgDisplayLeft: { "1":-1, "7/8":-1, "3/4":-1, "5/8":-1, "1/2":-1 },

  },

  { name: "J Hook Euro", src: yjheuJHookEuro, hookHeight: 48, displayWidth: 240,
    displayTop: { "1": 545, "7/8": 571, "3/4": 555, "5/8": 550, "1/2": 550 },

    svgDisplayTop: { "1": 600, "7/8":610,"3/4":590,"5/8":590,"1/2":580},
    svgDisplayWidth: { "1": 250, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 200 },
    svgDisplayLeft: { "1":-1, "7/8":-1, "3/4":-1, "5/8":-1, "1/2":-1 },

  },

  { name: "J Hook Non Swivel", src: yjhnsJHookNonSwivel, hookHeight: 65, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 560, "3/4": 545, "5/8": 550, "1/2": 550 },

    svgDisplayTop: { "1": 588, "7/8":610,"3/4":590,"5/8":590,"1/2":580},
    svgDisplayWidth: { "1": 260, "7/8": 250, "3/4": 210, "5/8": 205, "1/2": 190 },
    svgDisplayLeft: { "1": 1, "7/8":-1, "3/4":-1, "5/8":-1, "1/2":-1 },
  },

  { name: "J Hook Non Swivel Gun Metal", src: yjhnsGunJHookNonSwivelGunMetal, hookHeight: 53, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 560, "3/4": 545, "5/8": 550, "1/2": 550 },

    svgDisplayTop: { "1": 588, "7/8":610,"3/4":590,"5/8":590,"1/2":580},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 210, "5/8": 205, "1/2": 190 },
    svgDisplayLeft: { "1":-1, "7/8":-1, "3/4":-1, "5/8":-1, "1/2":-1 },

  },

  { name: "J Hook Non Swivel Black", src: yjhnsblkJHookNonSwivelBlack, hookHeight: 57, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 560, "3/4": 545, "5/8": 550, "1/2": 550 },

    svgDisplayTop: { "1": 588, "7/8":610,"3/4":590,"5/8":590,"1/2":580},
    svgDisplayWidth: { "1": 230, "7/8": 230, "3/4": 210, "5/8": 205, "1/2": 190 },
    svgDisplayLeft: { "1":-1, "7/8":-1, "3/4":-1, "5/8":-1, "1/2":-1 },

  },

  { name: "Snaphook Plastic", src: yjhplaSnaphookPlastic, hookHeight: 51, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 565, "3/4": 552, "5/8": 552, "1/2": 550 },

    svgDisplayTop: { "1": 593, "7/8":618,"3/4":600,"5/8":598,"1/2":584},
    svgDisplayWidth: { "1": 220, "7/8": 218, "3/4": 205, "5/8": 190, "1/2": 170 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "J Hook Detachable Buckle", src: ymdaJHookDetachableBuckle, hookHeight: 77, displayWidth: 240,
    displayTop: { "1": 545, "7/8": 570, "3/4": 552, "5/8": 555, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":600,"1/2":590},
    svgDisplayWidth: { "1": 240, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Detachable Buckle", src: ymdbDetachableBuckle, hookHeight: 77, displayWidth: 240,
    displayTop: { "1": 545, "7/8": 570, "3/4": 552, "5/8": 557, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":600,"1/2":590},
    svgDisplayWidth: { "1": 240, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 190 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Split Ring Detachable Buckle", src: ymdbblkSplitRingDetachableBuckle, hookHeight: 77, displayWidth: 270,
    displayTop: { "1": 545, "7/8": 570, "3/4": 552, "5/8": 557, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":600,"1/2":590},
    svgDisplayWidth: { "1": 270, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 200 },
    svgDisplayLeft: { "1": 0, "7/8":-1, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Bulldog Detachable Buckle", src: ymddcBulldogDetachableBuckle, hookHeight: 77, displayWidth: 270,
    displayTop: { "1": 545, "7/8": 570, "3/4": 552, "5/8": 557, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":598,"1/2":580},
    svgDisplayWidth: { "1": 270, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 190 },
    svgDisplayLeft: { "1": 0, "7/8":-1, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "ID Holder Detachable Buckle", src: ymddIdHolderDetachableBuckle, hookHeight: 75, displayWidth: 270,
    displayTop: { "1": 545, "7/8": 570, "3/4": 559, "5/8": 557, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":622,"3/4":600,"5/8":598,"1/2":580},
    svgDisplayWidth: { "1": 270, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 190 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Holder X Detachable Buckle", src: ymdeHolderXDetachableBuckle, hookHeight: 74, displayWidth: 230,
    displayTop: { "1": 545, "7/8": 570, "3/4": 555, "5/8": 557, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":598,"1/2":580},
    svgDisplayWidth: { "1": 230, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 180 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Black Metal Hook Detachable", src: ymdjBlckBlackMetalHookDetachable, hookHeight: 80, displayWidth: 270,
    displayTop: { "1": 545, "7/8": 571, "3/4": 555, "5/8": 557, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":598,"1/2":580},
    svgDisplayWidth: { "1": 270, "7/8": 270, "3/4": 230, "5/8": 220, "1/2": 210 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Gun Metal Hook Detachable", src: ymdjGunm1GunMetalHookDetachable, hookHeight: 80, displayWidth: 270,
    displayTop: { "1": 545, "7/8": 571, "3/4": 555, "5/8": 557, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":598,"1/2":580},
    svgDisplayWidth: { "1": 270, "7/8": 270, "3/4": 230, "5/8": 220, "1/2": 210 },
    svgDisplayLeft: { "1": 2, "7/8": 2, "3/4": 2, "5/8": 2, "1/2": 2 },

  },

  { name: "Metal Hook Detachable", src: ymdjNcklMetalHookDetachable, hookHeight: 78, displayWidth: 270,
    displayTop: { "1": 545, "7/8": 571, "3/4": 555, "5/8": 557, "1/2": 555 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600,"5/8":598,"1/2":580},
    svgDisplayWidth: { "1": 270, "7/8": 280, "3/4": 230, "5/8": 220, "1/2": 212 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "O Ring", src: yoring, hookHeight: 57, displayWidth: 270,
    displayTop: { "1": 545, "7/8": 571, "3/4": 555, "5/8": 557, "1/2": 550 },

    svgDisplayTop: { "1": 600, "7/8":620,"3/4":600, "5/8":598,"1/2":583},
    svgDisplayWidth: { "1": 270, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 190 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Key Ring", src: ysrKeyRing, hookHeight: 39, displayWidth: 270,
    displayTop: { "1": 545, "7/8": 560, "3/4": 555, "5/8": 550, "1/2": 550 },

    svgDisplayTop: { "1": 590, "7/8":615,"3/4":595, "5/8":595,"1/2":580},
    svgDisplayWidth: { "1": 270, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 190 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },

  { name: "Key Ring Black", src: ysrblkKeyRingBlack, hookHeight: 39, displayWidth: 270,
    displayTop: { "1": 545, "7/8": 560, "3/4": 555, "5/8": 550, "1/2": 550 },

    svgDisplayTop: { "1": 588, "7/8":615,"3/4":595, "5/8":595,"1/2":580},
    svgDisplayWidth: { "1": 270, "7/8": 240, "3/4": 230, "5/8": 220, "1/2": 210 },
    svgDisplayLeft: { "1": 0, "7/8": 0, "3/4": 0, "5/8": 0, "1/2": 0 },

  },
];

function LanyardHooks({ selectedHook, setSelectedHook }) {
  return (
    <div className="space-y-2 mt-4">
      <h2 className="text-3xl font-bold">HOOK</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {hooksList.map((hook, index) => (
          <div
            key={index}
            onClick={() => setSelectedHook(hook)}
            className={`cursor-pointer border rounded p-2 transition text-center ${
              selectedHook?.name === hook.name
                ? "border-blue-500 ring-2 ring-blue-400"
                : "border-gray-300 hover:border-blue-300"
            }`}
          >
            <img src={hook.src} alt={hook.name} className="w-full rounded mb-1" />
            <p className="text-xs sm:text-sm font-medium break-words leading-tight">{hook.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanyardHooks;