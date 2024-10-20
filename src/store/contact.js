const ContactStore = (() => {
  const contact = {
    email: "akalukacyril@gmail.com",
    phone: "+1 (343) 882 9369",
    address: {
      street: "90 Woodridge Crescent",
      city: "Ottawa",
      province: "Ontario",
      postalCode: "K2B7T1",
      country: "Canada"
    }
  };

  return {
    getContactInfo: () => { return { ...contact }; }
  };
})();

export default ContactStore;