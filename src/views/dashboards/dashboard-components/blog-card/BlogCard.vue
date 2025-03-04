
<template>
  <b-row>
    <b-col cols="12" lg="4" v-for="(blog, index) in blogs" :key="index">
      <b-card
        :title="blog.title"
        :img-src="require('@/assets/images/big/' + blog.imgsrc)"
        img-top
        tag="article"
        class="mb-4"
      >
        <div class="d-flex align-items-center font-14 text-muted">
          <span>{{ blog.date }}</span>
          <div class="ml-auto">
            <a
              href="javascript:void(0)"
              class="link d-flex align-items-center font-weight-normal"
            >
              <feather type="message-circle" class="feather-sm mr-2"></feather>
              {{ blog.comment }} Comments
            </a>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "BlogCard",
  data: () => ({
    title: "BlogCard",
    blogs: [
      {
        title: "Featured Hydroflora Pots Garden & Outdoors",
        imgsrc: "img1.jpg",
        date: "20 May 2021",
        commentno: "2",
      },
      {
        title: "Featured Hydroflora Pots Garden & Outdoors",
        imgsrc: "img2.jpg",
        date: "1 August 2021",
        commentno: "3",
      },
      {
        title: "Featured Hydroflora Pots Garden & Outdoors",
        imgsrc: "img3.jpg",
        date: "31 July 2015",
        commentno: "6",
      },
    ],
  }),
  components: {},
};
</script>