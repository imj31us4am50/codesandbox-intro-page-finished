import VideoCSS from "/components/Video.css";

export default function Video() {
  return (
    <div class="row pt-5 mx-auto" style={VideoCSS}>
      <video
        src="https://imj31us4am50.github.io/NSEDITEDVIDS/animal-video-2.mp4"
        muted
        autoPlay
        loop
        class="abba mx-auto"
      ></video>
    </div>
  );
}
