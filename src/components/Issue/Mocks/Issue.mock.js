export const issue = {
  createdAt: "2017-07-20T23:43:40Z",
  title: "Some images won't load when loading a lot of images",
  body: "I was having some issue with some images not loading and I couldn't figure it out because it seem pretty random which ones would not load.\r\n\r\nI found the problem is that you check \"this.networkAvailable\" to see if you have network, but there appears to be a race condition there \"this.networkAvailable\" is not set to true in time since it is dependent on an asychronous call.\r\n\r\nBy setting the prop networkAvaliable={true} I was able to completely get rid of this issue. \r\n\r\nI think you should either default that to true, as an extra call when you don't have internet won't cause much harm, or you need to fix the race condition.\r\n\r\nYou should also probably note these parameters in the Readme.\r\n\r\nThanks for the otherwise great package!\r\n",
  url: "https://github.com/jayesbe/react-native-cacheable-image/issues/58",
  repository: {
    url: "https://github.com/jayesbe/react-native-cacheable-image",
    name: "react-native-cacheable-image",
    owner: { 
      avatarUrl: "http://",
      login: "jayesbe",
    },
  },
  author: {
    avatarUrl: "https://avatars0.githubusercontent.com/u/8098360?v=4",
    url: "https://github.com/schlaegerz",
    login: "schlaegerz",
  },
}