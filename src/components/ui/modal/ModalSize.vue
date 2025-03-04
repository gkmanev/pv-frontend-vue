<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Modal Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Modal Size"
    subtitle="Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS."
    modalid="modal-7"
    modaltitle="Modal Size"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
  &lt;b-button v-b-modal.modal-xl variant=&quot;outline-primary&quot;
    &gt;Extra Large modal&lt;/b-button
  &gt;
  &lt;b-button v-b-modal.modal-lg variant=&quot;outline-info&quot;
    &gt;Large modal&lt;/b-button
  &gt;
  &lt;b-button v-b-modal.modal-df variant=&quot;outline-danger&quot;
    &gt;Default modal&lt;/b-button
  &gt;
  &lt;b-button v-b-modal.modal-sm variant=&quot;outline-success&quot;
    &gt;Small modal&lt;/b-button
  &gt;
&lt;/div&gt;
&lt;b-modal
  id=&quot;modal-xl&quot;
  size=&quot;xl&quot;
  title=&quot;Extra Large Modal&quot;
  header-bg-variant=&quot;light&quot;
  header-class=&quot;text-primary&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;
&lt;b-modal
  id=&quot;modal-lg&quot;
  size=&quot;lg&quot;
  ok-variant=&quot;info&quot;
  title=&quot;Large Modal&quot;
  header-bg-variant=&quot;light&quot;
  header-class=&quot;text-info&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;
&lt;b-modal
  id=&quot;modal-df&quot;
  title=&quot;Default Modal&quot;
  ok-variant=&quot;danger&quot;
  header-bg-variant=&quot;light&quot;
  header-class=&quot;text-danger&quot;
&gt;
  &lt;b-card-text&gt;
    Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
    caramels. I love marshmallow tiramisu I love fruitcake I love gummi
    bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
    I love. Donut powder cupcake ice cream tootsie roll jelly.
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;
&lt;b-modal
  id=&quot;modal-sm&quot;
  size=&quot;sm&quot;
  title=&quot;Small Modal&quot;
  ok-variant=&quot;success&quot;
  header-bg-variant=&quot;light&quot;
  header-class=&quot;text-success&quot;
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
        <b-button v-b-modal.modal-xl variant="outline-primary"
          >Extra Large modal</b-button
        >
        <b-button v-b-modal.modal-lg variant="outline-info"
          >Large modal</b-button
        >
        <b-button v-b-modal.modal-df variant="outline-danger"
          >Default modal</b-button
        >
        <b-button v-b-modal.modal-sm variant="outline-success"
          >Small modal</b-button
        >
      </div>
      <b-modal
        id="modal-xl"
        size="xl"
        title="Extra Large Modal"
        header-bg-variant="light"
        header-class="text-primary"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>
      <b-modal
        id="modal-lg"
        size="lg"
        ok-variant="info"
        title="Large Modal"
        header-bg-variant="light"
        header-class="text-info"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>
      <b-modal
        id="modal-df"
        title="Default Modal"
        ok-variant="danger"
        header-bg-variant="light"
        header-class="text-danger"
      >
        <b-card-text>
          Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw
          caramels. I love marshmallow tiramisu I love fruitcake I love gummi
          bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet
          I love. Donut powder cupcake ice cream tootsie roll jelly.
        </b-card-text>
      </b-modal>
      <b-modal
        id="modal-sm"
        size="sm"
        title="Small Modal"
        ok-variant="success"
        header-bg-variant="light"
        header-class="text-success"
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
  name: "ModalSize",

  data: () => ({}),
  components: { BaseCard },
};
</script>