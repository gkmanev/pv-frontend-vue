<template>
  <ais-instant-search index-name="demo_ecommerce" :search-client="searchClient">
    <b-card class="d-flex flex-row contact-app" no-body>
      <!-- ====================================== -->
      <!-- Left Part -->
      <!-- ====================================== -->
      <div
        class="left-part border-right"
        :class="showleftpart ? '' : 'show-left-part'"
      >
        <div class="p-3 text-right border-bottom d-block d-lg-none">
          <i class="mdi mdi-close" @click="toggleSide"></i>
        </div>
        <ais-clear-refinements
          :class-names="{
            'ais-ClearRefinements': 'p-3',
            'ais-ClearRefinements-button': 'btn btn-primary btn-block',
          }"
        />
        <ais-refinement-list
          :class-names="{
            'ais-RefinementList-list': 'list-group list-group-flush',
            'ais-RefinementList-item': 'list-group-item',
            'ais-RefinementList-label': 'mb-0',
            'ais-SearchBox-form': 'input-group p-3 border-top',
            'ais-SearchBox-input': 'form-control',
            'ais-SearchBox-submit': 'btn btn-primary',
            'ais-SearchBox-submitIcon': 'text-white',
            'ais-SearchBox-reset': 'btn btn-danger d-none',
          }"
          attribute="brand"
          class="mt-3"
          searchable
        />
        <h4 class="p-3 mb-0 mt-3">Price sort</h4>
        <ais-numeric-menu
          :class-names="{
            'ais-NumericMenu-list': 'list-group list-group-flush',
            'ais-NumericMenu-item': 'list-group-item',
            'ais-NumericMenu-label': 'mb-0',
          }"
          attribute="price"
          :items="[
            { label: 'All' },
            { label: '<= 10$', end: 10 },
            { label: '10$ - 100$', start: 10, end: 100 },
            { label: '100$ - 500$', start: 100, end: 500 },
            { label: '>= 500$', start: 500 },
          ]"
        >
        </ais-numeric-menu>

        <ais-configure :hitsPerPage="12" />
      </div>
      <!-- ====================================== -->
      <!-- Right Part -->
      <!-- ====================================== -->
      <div class="right-part min-h">
        <b-button variant="danger" class="d-block d-lg-none m-3">
          <i class="mdi mdi-menu" @click="toggleSide"></i>
        </b-button>
        <ais-search-box
          :class-names="{
            'ais-SearchBox-form': 'input-group p-3',
            'ais-SearchBox-input': 'form-control',
            'ais-SearchBox-submit': 'btn btn-primary',
            'ais-SearchBox-submitIcon': 'text-white',
            'ais-SearchBox-reset': 'btn btn-danger d-none',
          }"
        />
        <ais-hits
          :class-names="{
            'ais-Hits': '',
            'ais-Hits-list': 'row p-0 no-gutters',
            'ais-Hits-item': 'col-xl-4 col-lg-6 col-md-6',
            // ...
          }"
        >
          <div
            slot="item"
            slot-scope="{ item }"
            class="border-right border-top"
          >
            <div class="d-flex py-4 px-2">
              <div class="text-center">
                <img
                  :src="item.image"
                  class="mx-4"
                  align="left"
                  :alt="item.name"
                />
                <b-badge variant="info">$ {{ item.price }}</b-badge>
              </div>
              <div class="">
                <h4 class="title">{{ item.name }}</h4>
                <div class="py-1 subtitle-2">
                  <ais-highlight attribute="name" :hit="item"></ais-highlight>
                </div>

                <div class="d-flex mt-4">
                  <b-button variant="outline-info"> Add to cart </b-button>
                  <b-button variant="outline-danger" class="mx-2">
                    <i class="mdi mdi-heart"></i>
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </ais-hits>
        <ais-pagination
          :class-names="{
            'ais-Pagination':
              'justify-content-center d-flex border-top pt-4 pb-2',
            'ais-Pagination-list': 'pagination b-pagination',
            'ais-Pagination-item': 'page-item',
            'ais-Pagination-item--selected': 'active',
            'ais-Pagination-link': 'page-link',
            // ...
          }"
        />
      </div>
    </b-card>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch/lite";

export default {
  name: "Ecommerce",
  data: () => ({
    showleftpart: true,
    searchClient: algoliasearch(
      "B1G2GM9NG0",
      "aadef574be1f9252bb48d4ea09b5cfe5"
    ),
  }),
  methods: {
    toggleSide() {
      this.showleftpart = !this.showleftpart;
    },
  },
};
</script>

<style>
ol li {
  list-style: none;
}
.ais-SearchBox-submitIcon,
.ais-SearchBox-reset {
  fill: #fff;
}
</style>