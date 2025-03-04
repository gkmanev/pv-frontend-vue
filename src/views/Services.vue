<template>
<div>
  <h4>Services</h4>
  <b-breadcrumb :items="items" class="p-0"></b-breadcrumb>
  <b-card>
    Services,
  </b-card>
</div>  
</template>

<script>
export default {
  name: "services",
  data: () => ({
    items: [
          {
            text: 'Dashboard',
            to: '/'
          },
          {
            text: 'Services',
            active: true
          }
          
        ]
  })
};
</script>
