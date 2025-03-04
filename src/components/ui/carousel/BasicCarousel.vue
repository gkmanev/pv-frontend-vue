<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Carousel -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Basic Carousel" 
     
    modalid="modal-1"
    modaltitle="Basic Carousel"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-carousel
      id=&quot;carousel-1&quot;
      v-model=&quot;slide&quot;
      :interval=&quot;4000&quot;
      controls
      indicators
      background=&quot;#ababab&quot;
      img-width=&quot;1024&quot;
      img-height=&quot;480&quot;
      style=&quot;text-shadow: 1px 1px 2px #333;&quot;
      @sliding-start=&quot;onSlideStart&quot;
      @sliding-end=&quot;onSlideEnd&quot;
    &gt;
      &lt;!-- Text slides with image --&gt;
      &lt;b-carousel-slide
        caption=&quot;First slide&quot;
        text=&quot;Nulla vitae elit libero, a pharetra augue mollis interdum.&quot;
        img-src=&quot;https://picsum.photos/1024/480/?image=52&quot;
      &gt;&lt;/b-carousel-slide&gt;

      &lt;!-- Slides with custom text --&gt;
      &lt;b-carousel-slide img-src=&quot;https://picsum.photos/1024/480/?image=54&quot;&gt;
        &lt;h1&gt;Hello world!&lt;/h1&gt;
      &lt;/b-carousel-slide&gt;

      &lt;!-- Slides with image only --&gt;
      &lt;b-carousel-slide img-src=&quot;https://picsum.photos/1024/480/?image=58&quot;&gt;&lt;/b-carousel-slide&gt;

      &lt;!-- Slides with img slot --&gt;
      &lt;!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment --&gt;
      &lt;b-carousel-slide&gt;
        &lt;template #img&gt;
          &lt;img
            class=&quot;d-block img-fluid w-100&quot;
            width=&quot;1024&quot;
            height=&quot;480&quot;
            src=&quot;https://picsum.photos/1024/480/?image=55&quot;
            alt=&quot;image slot&quot;
          &gt;
        &lt;/template&gt;
      &lt;/b-carousel-slide&gt;

      &lt;!-- Slide with blank fluid image to maintain slide aspect ratio --&gt;
      &lt;b-carousel-slide caption=&quot;Blank Image&quot; img-blank img-alt=&quot;Blank image&quot;&gt;
        &lt;p&gt;
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        &lt;/p&gt;
      &lt;/b-carousel-slide&gt;
    &lt;/b-carousel&gt;

    &lt;p class=&quot;mt-4&quot;&gt;
      Slide #: {{ slide }}&lt;br&gt;
      Sliding: {{ sliding }}
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
&lt;/script&gt;
</code>
</pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="@/assets/images/big/img5.jpg"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="@/assets/images/big/img6.jpg">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="@/assets/images/big/img7.jpg"
        ></b-carousel-slide>

        <!-- Slides with img slot -->
      </b-carousel>

      <p class="mt-4">
        Slide #: {{ slide }}<br />
        Sliding: {{ sliding }}
      </p>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BasicCarousel",

  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  components: { BaseCard },
};
</script>