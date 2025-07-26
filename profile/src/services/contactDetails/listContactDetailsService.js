import listContactDetailsData from "./listContactDetails.json";
export default {
  methods: {
    executeListContactDetails() {
      return listContactDetailsData.filter((x) => x.contactDetailType == "SOCIAL_NETWORK") ?? [];
    },
    executeGetContactDetailsEmail() {
      return listContactDetailsData.find((x) => x.contactDetailType == "EMAIL") ?? {};
    },
    executeGetContactDetailsPhone() {
      return listContactDetailsData.find((x) => x.contactDetailType == "PHONE") ?? {};
    },
  },
};
