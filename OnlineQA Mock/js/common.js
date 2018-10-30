(function () {

  var bv = new Bideo();
  bv.init({
    videoEl: document.querySelector('#background_video'),
    container: document.querySelector('body'),
    resize: true,
    autoplay: true,
    isMobile: window.matchMedia('(max-width: 768px)').matches,
    src: [{
        src: '../img/night.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      },
      {
        src: '../img/night.mp4',
        type: 'video/mp4'
      }],
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());
