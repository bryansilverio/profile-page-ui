export default {
    data() {
        return {
            endpoint: "api/v0/users-profile/bsilverio",
        }
    },
    methods: {
        async executeFindUserProfile() {
            const response = await fetch(process.env.VUE_APP_ROOT_API + this.endpoint);
            const result = await response.json();
            alert("request",result)

           let data = {
                id: result.id,
                userName: result.userName,
                name: result.name,
                lastName: result.lastName,
                secondLastName: result.secondLastName,
                profile: {
                    profileType: result.profile.profileType,
                    name: result.profile.name
                },
                image: {
                    type: result.image.type,
                    value: result.image.value
                }
            }
            return data
        }
    }
};