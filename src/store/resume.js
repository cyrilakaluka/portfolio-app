const ResumeStore = (() => {
  const downloadLink = "https://drive.google.com/uc?export=download&id=1FLjR3w0w3b6MEMIBlek3Eao9gkmW8Teo";
  const viewLink = "https://drive.google.com/file/d/1FLjR3w0w3b6MEMIBlek3Eao9gkmW8Teo/view?usp=sharing";

  return {
    getDownloadLink: () => downloadLink,
    getViewLink: () => viewLink
  };
})();

export default ResumeStore;
