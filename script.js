const videoElement = document.getElementById("video");
const buttonElement = document.getElementById("button");

const selectMediaStream = async () => {
  try {
    // Prompt to select media stream, pass to videoElement, then play
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.alert(error);
  }
};

buttonElement.addEventListener("click", async () => {
  buttonElement.disabled = true;
  // start Picture in Picture
  await videoElement.requestPictureInPicture();
  buttonElement.disabled = false;
});

// On Load
selectMediaStream();
