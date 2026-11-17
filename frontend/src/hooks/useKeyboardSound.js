function useKeyboardSound() {
  const playRandomKeyStrokeSound = () => {
    try {
      const soundPaths = [
        "/sounds/keystroke1.mp3",
        "/sounds/keystroke2.mp3",
        "/sounds/keystroke3.mp3",
        "/sounds/keystroke4.mp3",
      ];
      const randomPath = soundPaths[Math.floor(Math.random() * soundPaths.length)];
      const randomSound = new Audio(randomPath);
      randomSound.currentTime = 0;
      const playPromise = randomSound.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => console.log("Keystroke audio play blocked:", error));
      }
    } catch (err) {
      console.log("Error playing keystroke sound:", err);
    }
  };

  return { playRandomKeyStrokeSound };
}

export default useKeyboardSound;