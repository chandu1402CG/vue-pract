<template>
  <UserFormData @addContact="addContact"></UserFormData>
  <ListData :friendsData="friendsData" @toggle-Favorite="toggleFavorite" />
</template>

<script>
import ListData from "./ListData.vue";
import UserFormData from "./FormData.vue";

export default {
  name: "ListIndex",
  data() {
    return {
      friendsData: [
        {
          name: "John Doe",
          age: 30,
          hobbies: ["reading", "painting"],
          isFavorited: true,
          id: 1,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(id) {
      const friend = this.friendsData.find((friend) => friend.id === id);
      friend.isFavorited = !friend.isFavorited;
    },
    addContact(payload) {
      const { phone, email, name } = payload;
      const newId = this.friendsData.length + 1;
if(phone && email && name){

    this.friendsData.push({
      name,
      age:phone,
      id: newId,
      isFavorited: false,
      hobbies: email,
    });
}
    },
  },
  components: {
    ListData,
    UserFormData,
  },
};
</script>
