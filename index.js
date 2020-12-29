new Vue({
  el: '#app',
  data: {
    videoScr: "./videos/1.mp4",
    videoTitle: "第一集",
    isActive: false,
    videos: [{
      title: "第一集",
      src: "./videos/1.mp4",
      time: "00:07",
    }, {
      title: "第二集",
      src: "./videos/test2.mp4",
      time: "00:07",
    }, {
      title: "第三集",
      src: "./videos/test3.mp4",
      time: "00:07",
    }]
  },
  methods: {
    changeVideo(index) {
      this.isActive = index;
      this.videoScr = this.videos[index].src;
      this.videoTitle = this.videos[index].title;
      console.log(this.videoScr);
    }
  }
})