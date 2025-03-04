<template>
  <div>
    <b-table
      responsive
      class="mb-0 mt-3"
      :items="items"
      thead-tr-class="text-muted"
      table-class="bg-transparent text-nowrap hover-table"
    >
      <!-- <template #cell(id)="data"> #{{ data.item.id }} </template> -->
      <template #cell(products)="data">
        <b-button
          :class="'b-avatar rounded-circle btn btn-' + data.value.bgcolor"
        >
          <feather :type="data.value.icon" class="feather-sm"></feather>
        </b-button>
      </template>
      <template #cell(description)="data">
        <h6 class="mb-0">
          <a href="javascript:void(0)" class="link fw-medium">{{
            data.value.title
          }}</a>
        </h6>
        <small class="text-muted font-weight-light">{{
          data.value.subtext
        }}</small>
      </template>
      <template #cell(quantity)="data">
        <h5 class="mb-0">{{ data.item.quantity }}</h5>
      </template>
      <template #cell(price)="data">
        <h5 class="mb-0">{{ data.item.price }}</h5>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  name: "ProductTable",
  data: () => ({
    title: "ProductTable",
    // Data for Product Table
    fields: [
      {
        key: "products",
        label: "Product",
      },
      {
        key: "description",
        label: "Description",
      },
      {
        key: "quantity",
        label: "Quantity",
      },
      {
        key: "price",
        label: "Price",
      },
    ],
    items: [
      {
        products: {
          bgcolor: "info",
          icon: "shopping-cart",
        },
        description: {
          title: "Apple iPhone 6  Space Grey, 16 GB",
          subtext: "Product id : MI5457 ",
        },
        quantity: "357",
        price: "$435",
      },
      {
        products: {
          bgcolor: "success",
          icon: "shopping-cart",
        },
        description: {
          title: "Fossil Marshall For Men Black Smartwatch",
          subtext: "Product id : MI5457 ",
        },
        quantity: "357",
        price: "$435",
      },
      {
        products: {
          bgcolor: "danger",
          icon: "shopping-cart",
        },
        description: {
          title: "Sony Bravia 80cm - 32 HD Ready LED TV",
          subtext: "Product id : MI5457 ",
        },
        quantity: "357",
        price: "$435",
      },
      {
        products: {
          bgcolor: "primary",
          icon: "shopping-cart",
        },
        description: {
          title: "Panasonic P75 Champagne Gold, 8 GB",
          subtext: "Product id : MI5457 ",
        },
        quantity: "357",
        price: "$435",
      },
    ],
  }),
};
</script>