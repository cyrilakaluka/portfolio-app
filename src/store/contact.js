const ContactStore = (() => {
  const contact = {
    email: "akalukacyril@gmail.com",
    phone: "+1 (343) 882 9369",
    address: {
      city: "Ottawa",
      province: "Ontario",
      country: "Canada"
    }
  };

  return {
    getContactInfo: () => { return { ...contact }; }
  };
})();

export default ContactStore;