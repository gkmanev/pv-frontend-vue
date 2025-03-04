<template>
  <div class="pa-5">
    <b-list-group>
      <draggable class="cursor-move">
        <b-list-group-item
          v-for="(list, index) in list"
          :key="index"
          @click.prevent
        >
          <b-avatar>
            <feather type="folder" class="feather-sm"></feather>
          </b-avatar>

          <span class="ml-2">
            {{ list.text }}
          </span>
        </b-list-group-item>
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
      {
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        text:
          "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        text:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ],
  }),
  components: {
    draggable,
  },
};
</script>