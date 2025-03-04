<template>
  <div>
    <div
      class="d-flex align-items-center py-2"
      v-for="(todo, index) in todos"
      :key="index"
    >
      <div>
        <b-form-checkbox :id="todo.id" :value="todo.id">
          <span class="text-dark font-weight-normal">{{ todo.title }}</span>
          <span
            :class="
              'badge bg-light-' +
              todo.tagcolor +
              ' text-' +
              todo.tagcolor +
              ' ml-2'
            "
            >{{ todo.tag }}</span
          >
        </b-form-checkbox>
        <div class="font-12 pl-4 text-muted d-inline-block">
          {{ todo.time }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  data: () => ({
    title: "TodoList",
    todos: [
      {
        id: "1",
        title: "Give Purchase report to",
        tag: "Today",
        tagcolor: "danger",
        time: "26 Jun 2021",
      },
      {
        id: "2",
        title: "Book flight for holiday",
        tag: "Monday",
        tagcolor: "success",
        time: "15 Feb 2021",
      },
      {
        id: "3",
        title: "Forward all tasks",
        tag: "Tommorow",
        tagcolor: "primary",
        time: "05 Mar 2021",
      },
      {
        id: "4",
        title: "Recieve shipment",
        tag: "Today",
        tagcolor: "warning",
        time: "26 Jan 2021",
      },
      {
        id: "5",
        title: "Send payment today",
        tag: "Today",
        tagcolor: "info",
        time: "29 Oct 2021",
      },
      {
        id: "7",
        title: "Check Ample admin with responsive",
        tag: "Wednesday",
        tagcolor: "danger",
        time: "23 Mar 2021",
      },
      {
        id: "8",
        title: "Make Flexy admin with react",
        tag: "Today",
        tagcolor: "warning",
        time: "26 July 2021",
      },
    ],
  }),
};
</script>

<style scoped>
/* .custom-control-input:checked + .custom-control-label {
  text-decoration: line-through;
} */
</style>