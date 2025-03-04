<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Variants -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Variants"
    subtitle="Control the header, footer, and body background and text variants by setting the header-bg-variant, header-text-variant, body-bg-variant, body-text-variant, footer-bg-variant, and footer-text-variant props."
    modalid="modal-14"
    modaltitle="Variants"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
  &lt;b-button variant=&quot;outline-primary&quot; v-b-modal.modal-primary
    &gt;Primary&lt;/b-button
  &gt;
  &lt;b-button variant=&quot;outline-secondary&quot; v-b-modal.modal-secondary
    &gt;Secondary&lt;/b-button
  &gt;
  &lt;b-button variant=&quot;outline-success&quot; v-b-modal.modal-success
    &gt;Success&lt;/b-button
  &gt;
  &lt;b-button variant=&quot;outline-danger&quot; v-b-modal.modal-danger
    &gt;Danger&lt;/b-button
  &gt;
  &lt;b-button variant=&quot;outline-warning&quot; v-b-modal.modal-warning
    &gt;Warning&lt;/b-button
  &gt;
  &lt;b-button variant=&quot;outline-info&quot; v-b-modal.modal-info&gt;Info&lt;/b-button&gt;
  &lt;b-button variant=&quot;outline-dark&quot; v-b-modal.modal-dark&gt;Dark&lt;/b-button&gt;
&lt;/div&gt;

&lt;!-- modal primary --&gt;
&lt;b-modal
  id=&quot;modal-primary&quot;
  ok-only
  ok-title=&quot;Accept&quot;
  modal-class=&quot;modal-primary&quot;
  centered
  title=&quot;Primary Modal&quot;
  header-class=&quot;text-primary&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;

&lt;!-- modal secondary --&gt;
&lt;b-modal
  id=&quot;modal-secondary&quot;
  ok-only
  ok-variant=&quot;secondary&quot;
  ok-title=&quot;Accept&quot;
  modal-class=&quot;modal-secondary&quot;
  centered
  title=&quot;Secondary Modal&quot;
  header-class=&quot;text-secondary&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;

&lt;!-- modal success --&gt;
&lt;b-modal
  id=&quot;modal-success&quot;
  ok-only
  ok-variant=&quot;success&quot;
  ok-title=&quot;Accept&quot;
  modal-class=&quot;modal-success&quot;
  centered
  title=&quot;Success Modal&quot;
  header-class=&quot;text-success&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;

&lt;!-- modal danger --&gt;
&lt;b-modal
  id=&quot;modal-danger&quot;
  ok-only
  ok-variant=&quot;danger&quot;
  ok-title=&quot;Accept&quot;
  modal-class=&quot;modal-danger&quot;
  centered
  title=&quot;Danger Modal&quot;
  header-class=&quot;text-danger&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;

&lt;!-- modal warning --&gt;
&lt;b-modal
  id=&quot;modal-warning&quot;
  ok-only
  ok-variant=&quot;warning&quot;
  ok-title=&quot;Accept&quot;
  modal-class=&quot;modal-warning&quot;
  centered
  title=&quot;Warning Modal&quot;
  header-class=&quot;text-warning&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;

&lt;!-- modal info --&gt;
&lt;b-modal
  id=&quot;modal-info&quot;
  ok-only
  ok-variant=&quot;info&quot;
  ok-title=&quot;Accept&quot;
  modal-class=&quot;modal-info&quot;
  centered
  title=&quot;Info Modal&quot;
  header-class=&quot;text-info&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;

&lt;!-- modal dark --&gt;
&lt;b-modal
  id=&quot;modal-dark&quot;
  ok-only
  ok-variant=&quot;dark&quot;
  ok-title=&quot;Accept&quot;
  modal-class=&quot;modal-dark&quot;
  centered
  title=&quot;Dark Modal&quot;
  header-class=&quot;text-dark&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button variant="outline-primary" v-b-modal.modal-primary
          >Primary</b-button
        >
        <b-button variant="outline-secondary" v-b-modal.modal-secondary
          >Secondary</b-button
        >
        <b-button variant="outline-success" v-b-modal.modal-success
          >Success</b-button
        >
        <b-button variant="outline-danger" v-b-modal.modal-danger
          >Danger</b-button
        >
        <b-button variant="outline-warning" v-b-modal.modal-warning
          >Warning</b-button
        >
        <b-button variant="outline-info" v-b-modal.modal-info>Info</b-button>
        <b-button variant="outline-dark" v-b-modal.modal-dark>Dark</b-button>
      </div>

      <!-- modal primary -->
      <b-modal
        id="modal-primary"
        ok-only
        ok-title="Accept"
        modal-class="modal-primary"
        centered
        title="Primary Modal"
        header-class="text-primary"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>

      <!-- modal secondary -->
      <b-modal
        id="modal-secondary"
        ok-only
        ok-variant="secondary"
        ok-title="Accept"
        modal-class="modal-secondary"
        centered
        title="Secondary Modal"
        header-class="text-secondary"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>

      <!-- modal success -->
      <b-modal
        id="modal-success"
        ok-only
        ok-variant="success"
        ok-title="Accept"
        modal-class="modal-success"
        centered
        title="Success Modal"
        header-class="text-success"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>

      <!-- modal danger -->
      <b-modal
        id="modal-danger"
        ok-only
        ok-variant="danger"
        ok-title="Accept"
        modal-class="modal-danger"
        centered
        title="Danger Modal"
        header-class="text-danger"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>

      <!-- modal warning -->
      <b-modal
        id="modal-warning"
        ok-only
        ok-variant="warning"
        ok-title="Accept"
        modal-class="modal-warning"
        centered
        title="Warning Modal"
        header-class="text-warning"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>

      <!-- modal info -->
      <b-modal
        id="modal-info"
        ok-only
        ok-variant="info"
        ok-title="Accept"
        modal-class="modal-info"
        centered
        title="Info Modal"
        header-class="text-info"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>

      <!-- modal dark -->
      <b-modal
        id="modal-dark"
        ok-only
        ok-variant="dark"
        ok-title="Accept"
        modal-class="modal-dark"
        centered
        title="Dark Modal"
        header-class="text-dark"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "VarientModal",

  data: () => ({}),
  components: { BaseCard },
};
</script>