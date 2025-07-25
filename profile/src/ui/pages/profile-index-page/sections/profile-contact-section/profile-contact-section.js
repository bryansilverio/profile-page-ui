import listContactDetailsService from '@/services/contactDetails/listContactDetailsService';
export default {
  name: "profile-contact-section",

  mixins: [listContactDetailsService],
  computed: {
    contactDetails() {
      return this.executeListContactDetails();
    },
    contactDetailsEmail() {
      return this.executeGetContactDetailsEmail();
    },
    contactDetailsPhone() {
      return this.executeGetContactDetailsPhone();
    }
  }
};