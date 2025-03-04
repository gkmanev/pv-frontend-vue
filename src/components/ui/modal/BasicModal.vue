<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Modal -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Modal"
    subtitle="Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS."
    modalid="modal-1"
    modaltitle="Basic Modal"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
  &lt;b-button
    variant=&quot;outline-primary&quot;
    id=&quot;show-btn&quot;
    @click=&quot;$bvModal.show('modal-basic')&quot;
    &gt;Open Modal&lt;/b-button
  &gt;
  &lt;b-button variant=&quot;outline-info&quot; v-b-modal.modal-center
    &gt;Vertical Center&lt;/b-button
  &gt;
  &lt;b-button variant=&quot;outline-danger&quot; v-b-modal.modal-no-backdrop
    &gt;Hide Backdrop&lt;/b-button
  &gt;
  &lt;b-button variant=&quot;outline-warning&quot; v-b-modal.modal-no-animation
    &gt;No Animation&lt;/b-button
  &gt;
&lt;/div&gt;
&lt;!-- ----------------------------------------- --&gt;
&lt;!-- basic modal --&gt;
&lt;!-- ----------------------------------------- --&gt;

&lt;b-modal id=&quot;modal-basic&quot; hide-footer&gt;
  &lt;template #modal-title&gt; Basic Modal &lt;/template&gt;
  &lt;div class=&quot;d-block&quot;&gt;
    &lt;h6&gt;Paragraph&lt;/h6&gt;
    &lt;p&gt;
      Oat cake ice cream candy chocolate cake chocolate cake cotton candy
      drag&eacute;e apple pie. Brownie carrot cake candy canes bonbon fruitcake
      topping halvah. Cake sweet roll cake cheesecake cookie chocolate
      cake liquorice.
    &lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pt-3 border-top text-right&quot;&gt;
    &lt;b-button variant=&quot;primary&quot; @click=&quot;$bvModal.hide('modal-basic')&quot;
      &gt;Accept&lt;/b-button
    &gt;
  &lt;/div&gt;
&lt;/b-modal&gt;
&lt;!-- ----------------------------------------- --&gt;
&lt;!-- vertically center --&gt;
&lt;!-- ----------------------------------------- --&gt;

&lt;b-modal
  id=&quot;modal-center&quot;
  hide-footer
  centered
  title=&quot;Vertically Center Modal&quot;
&gt;
  &lt;div class=&quot;d-block&quot;&gt;
    &lt;h6&gt;Paragraph&lt;/h6&gt;
    &lt;p&gt;
      Oat cake ice cream candy chocolate cake chocolate cake cotton candy
      drag&eacute;e apple pie. Brownie carrot cake candy canes bonbon fruitcake
      topping halvah. Cake sweet roll cake cheesecake cookie chocolate
      cake liquorice.
    &lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pt-3 border-top text-right&quot;&gt;
    &lt;b-button variant=&quot;info&quot; @click=&quot;$bvModal.hide('modal-center')&quot;
      &gt;Accept&lt;/b-button
    &gt;
  &lt;/div&gt;
&lt;/b-modal&gt;

&lt;!-- ----------------------------------------- --&gt;
&lt;!-- hide backdrop --&gt;
&lt;!-- ----------------------------------------- --&gt;
&lt;b-modal
  id=&quot;modal-no-backdrop&quot;
  hide-backdrop
  hide-footer
  content-class=&quot;shadow&quot;
  title=&quot;Hide Backdrop&quot;
&gt;
  &lt;div class=&quot;d-block&quot;&gt;
    &lt;h6&gt;Paragraph&lt;/h6&gt;
    &lt;p&gt;
      Oat cake ice cream candy chocolate cake chocolate cake cotton candy
      drag&eacute;e apple pie. Brownie carrot cake candy canes bonbon fruitcake
      topping halvah. Cake sweet roll cake cheesecake cookie chocolate
      cake liquorice.
    &lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pt-3 border-top text-right&quot;&gt;
    &lt;b-button variant=&quot;danger&quot; @click=&quot;$bvModal.hide('modal-no-backdrop')&quot;
      &gt;Accept&lt;/b-button
    &gt;
  &lt;/div&gt;
&lt;/b-modal&gt;

&lt;!-- ----------------------------------------- --&gt;
&lt;!-- no animation --&gt;
&lt;!-- ----------------------------------------- --&gt;
&lt;b-modal
  id=&quot;modal-no-animation&quot;
  hide-backdrop
  hide-footer
  no-fade
  content-class=&quot;shadow&quot;
  title=&quot;No Animation&quot;
&gt;
  &lt;div class=&quot;d-block&quot;&gt;
    &lt;h6&gt;Paragraph&lt;/h6&gt;
    &lt;p&gt;
      Oat cake ice cream candy chocolate cake chocolate cake cotton candy
      drag&eacute;e apple pie. Brownie carrot cake candy canes bonbon fruitcake
      topping halvah. Cake sweet roll cake cheesecake cookie chocolate
      cake liquorice.
    &lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;pt-3 border-top text-right&quot;&gt;
    &lt;b-button
      variant=&quot;warning&quot;
      @click=&quot;$bvModal.hide('modal-no-animation')&quot;
      &gt;Accept&lt;/b-button
    &gt;
  &lt;/div&gt;
&lt;/b-modal&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button
          variant="outline-primary"
          id="show-btn"
          @click="$bvModal.show('modal-basic')"
          >Open Modal</b-button
        >
        <b-button variant="outline-info" v-b-modal.modal-center
          >Vertical Center</b-button
        >
        <b-button variant="outline-danger" v-b-modal.modal-no-backdrop
          >Hide Backdrop</b-button
        >
        <b-button variant="outline-warning" v-b-modal.modal-no-animation
          >No Animation</b-button
        >
      </div>
      <!-- ----------------------------------------- -->
      <!-- basic modal -->
      <!-- ----------------------------------------- -->

      <b-modal id="modal-basic" hide-footer>
        <template #modal-title> Basic Modal </template>
        <div class="d-block">
          <h6>Paragraph</h6>
          <p>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy
            dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
            topping halvah. Cake sweet roll cake cheesecake cookie chocolate
            cake liquorice.
          </p>
        </div>
        <div class="pt-3 border-top text-right">
          <b-button variant="primary" @click="$bvModal.hide('modal-basic')"
            >Accept</b-button
          >
        </div>
      </b-modal>
      <!-- ----------------------------------------- -->
      <!-- vertically center -->
      <!-- ----------------------------------------- -->

      <b-modal
        id="modal-center"
        hide-footer
        centered
        title="Vertically Center Modal"
      >
        <div class="d-block">
          <h6>Paragraph</h6>
          <p>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy
            dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
            topping halvah. Cake sweet roll cake cheesecake cookie chocolate
            cake liquorice.
          </p>
        </div>
        <div class="pt-3 border-top text-right">
          <b-button variant="info" @click="$bvModal.hide('modal-center')"
            >Accept</b-button
          >
        </div>
      </b-modal>

      <!-- ----------------------------------------- -->
      <!-- hide backdrop -->
      <!-- ----------------------------------------- -->
      <b-modal
        id="modal-no-backdrop"
        hide-backdrop
        hide-footer
        content-class="shadow"
        title="Hide Backdrop"
      >
        <div class="d-block">
          <h6>Paragraph</h6>
          <p>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy
            dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
            topping halvah. Cake sweet roll cake cheesecake cookie chocolate
            cake liquorice.
          </p>
        </div>
        <div class="pt-3 border-top text-right">
          <b-button variant="danger" @click="$bvModal.hide('modal-no-backdrop')"
            >Accept</b-button
          >
        </div>
      </b-modal>

      <!-- ----------------------------------------- -->
      <!-- no animation -->
      <!-- ----------------------------------------- -->
      <b-modal
        id="modal-no-animation"
        hide-backdrop
        hide-footer
        no-fade
        content-class="shadow"
        title="No Animation"
      >
        <div class="d-block">
          <h6>Paragraph</h6>
          <p>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy
            dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
            topping halvah. Cake sweet roll cake cheesecake cookie chocolate
            cake liquorice.
          </p>
        </div>
        <div class="pt-3 border-top text-right">
          <b-button
            variant="warning"
            @click="$bvModal.hide('modal-no-animation')"
            >Accept</b-button
          >
        </div>
      </b-modal>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicModal",

  data: () => ({}),
  components: { BaseCard },
};
</script>