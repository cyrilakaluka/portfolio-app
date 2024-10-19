const ResumeStore = (() => {
  const downloadLink = "https://drive.google.com/uc?export=download&id=1FLjR3w0w3b6MEMIBlek3Eao9gkmW8Teo";

  return {
    getDownloadLink() {
      return downloadLink;
    }
  };
})();

export default ResumeStore;
