<template>
  <div>
    <UserFormData></UserFormData>
    <ul>
      <li v-for="friend in friendsData" :key="friend.id">
        <div class="card">
          <p>Name- {{ friend.name }}</p>
          <p>Age- {{ friend.age }}</p>
          <p>Hobbies- {{ friend.hobbies }}</p>
          <p>Is Favorite = {{ friend.isFavorited }}</p>
          <button @click="toggleFavorite(friend.id)">Change Favorite</button>
        </div>
      </li>
    </ul>
    <WrapperSlot>
      <template #namedSlot>
        <h2>Name slot data rendring</h2>
      </template>
      <h2>SLot data rendring</h2>
     
        <template #scopedslots="scopedslots">
          <p>{{ scopedslots.item }}</p>

        </template>
      
    </WrapperSlot>
  </div>
</template>

<script>
import WrapperSlot from './Wrapper.vue'
export default {
  name: "ListData",
  
  components: {WrapperSlot},
  props: {
    friendsData: {
      type: Array,
      required: true,
    },
  },
  
  methods: {
    toggleFavorite(id) {
      this.$emit("toggle-Favorite", id);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  background-color: aquamarine;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}
</style>
