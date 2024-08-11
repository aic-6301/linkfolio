import { UserConfigType } from "@/types";
import {
  blueSkyIcon,
  discordIcon,
  githubIcon,
  misskeyIcon,
  xIcon,
  youtubeIcon,
  VRChatIcon,
} from "@/assets";

const userConfig: UserConfigType = {
  avatarSrc: "/assets/avatar.webp",
  avatarAlt: "Avatar",
  fullName: "あいしぃー",
  alias: "@aicy",
  metaTitle: "あいしぃー",
  metaDescription: "A Hub for all your online links 🔗",
  enableTypingAlias: false,
  socialNetworks: [
    {
      url: "https://twitter.com/aic_6301",
      iconSrc: xIcon,
      title: "Twitter / X",
      description: "あんまり使われてない",
    },
    {
      url: "https://github.com/aic-6301",
      iconSrc: githubIcon,
      title: "GitHub",
      description: "開発の起点",
    },
    {
      url: "https://discord.com/users/964887498436276305",
      iconSrc: discordIcon,
      title: "Discord",
      description: "一番使ってる",
    },
    {
      url: "https://youtube.com/@aic_6301",
      iconSrc: youtubeIcon,
      title: "YouTube",
      description: "配信アーカイブ投げるだけ",
    },
    {
      url: "https://bsky.app/profile/aic6301.bsky.social",
      iconSrc: blueSkyIcon,
      title: "BlueSky",
      description: "たまに見る",
    },
    {
      url: "https://幼女.art/@aicy",
      iconSrc: misskeyIcon,
      title: "Misskey / 🚀AcitivityPub",
      description: "地味に使う",
    },
    {
      url: "https://vrchat.com/home/user/usr_66be067b-6613-4ee4-aa6f-b38351ba6f4b",
      iconSrc: VRChatIcon,
      title: "VRChat",
      description: "VRChat",
    }
  ],
};

export default userConfig;
