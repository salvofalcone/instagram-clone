/* https://api.npoint.io/d92d246c972bb8b31ce7 */

export const userData = {
  id: 1,
  userId: 2,
  username: "pippogram",
  userImage: "https://randomuser.me/api/portraits/lego/1.jpg",
  isUser: true,
  isLive: false,
  story: [
    {
      id: 1,
      type: "image",
      duration: 15,
      src: "https://loremflickr.com/375/800/landscape/1",
    },
    {
      id: 2,
      type: "image",
      duration: 15,
      src: "https://loremflickr.com/375/800/landscape/2",
    },
    {
      id: 3,
      type: "image",
      duration: 15,
      src: "https://loremflickr.com/375/800/landscape/3",
    },
  ],
  posts: [
    {
      id: 1,
      type: "image",
      src: "https://loremflickr.com/375/800/landscape/1",
      likes: { userName: "cat__tully", numberOfLikes: 662 },
      comments: [
        {
          userName: "cat__tully",
          text: "That was amazing! See you next time ",
          date: "now",
        },
        {
          userName: "john__dow",
          text: "Great! ",
          date: "3m ago",
        },
        {
          userName: "coca__cola",
          text: "Buu pepsi! ",
          date: "1h",
        },
      ],
    },

    {
      id: 2,
      type: "image",
      src: "https://loremflickr.com/375/800/landscape/2",
      likes: { userName: "hodor", numberOfLikes: 915 },
      comments: [
        {
          userName: "cat__tully",
          text: "That was amazing! See you next time ",
          date: "now",
        },
        {
          userName: "john__dow",
          text: "Great! ",
          date: "3m ago",
        },
        {
          userName: "coca__cola",
          text: "Buu pepsi! ",
          date: "1h",
        },
      ],
    },

    {
      id: 3,
      type: "image",
      src: "https://loremflickr.com/375/800/landscape/3",
      likes: { userName: "mark__34", numberOfLikes: 87455 },
      comments: [
        {
          userName: "cat__tully",
          text: "That was amazing! See you next time ",
          date: "now",
        },
        {
          userName: "john__dow",
          text: "Great! ",
          date: "3m ago",
        },
        {
          userName: "coca__cola",
          text: "Buu pepsi! ",
          date: "1h",
        },
      ],
    },
  ],
};
