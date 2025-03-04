<template>
  <div>
    <b-list-group>
      <draggable :list="list" class="cursor-move">
        <transition-group>
          <b-list-group-item
            class="animation d-flex align-items-center border-0 pl-0"
            v-for="list in list"
            :key="list"
            @click.prevent
          >
            <b-avatar variant="success">
              <feather type="star" class="feather-sm"></feather>
            </b-avatar>
            <div class="ml-2">
              <h5 class="card-title mb-0">{{ list }}</h5>
            </div>
          </b-list-group-item>
        </transition-group>
      </draggable>
    </b-list-group>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "DragnDropAnimation",
  data: () => ({
    title: "DragnDropAnimation",

    list: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    ],
  }),
  components: {
    draggable,
  },
};
</script>
<style>
.animation {
  transition: all 0.5s;
}
</style>