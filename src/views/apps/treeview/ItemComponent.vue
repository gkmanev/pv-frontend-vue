<template>
  <li>
    <div
        :class="{bold: isFolder}"
        @click="toggle"
        @dblclick="makeFolder">
        <span v-if="isFolder" class="mt-1 mx-1">
          <i class="fas fa-angle-right" v-if="!isOpen"></i> 
          <i class="fas fa-angle-down" v-else></i>
          </span>
          <i class="fas fa-folder text-warning" v-if="!isOpen"></i>
          <i class="fas fa-folder-open text-warning" v-else></i>
        {{ item.name }}
        <span v-if="isFolder" class="mt-1 mx-1">
            <i class="fas fa-plus-circle" v-if="!isOpen"></i>
            <i class="fas fa-minus-circle" v-else></i>
        </span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
        <tree-item
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
        ></tree-item>
        <li class="add" @click="$emit('add-item', item)">+</li>
    </ul>
    </li>
</template>

<script>
export default {
    name:'treeItem',
    props: {
        item: Object
    },
    data: function () {
        return {
        isOpen: true
        };
    },
    computed: {
        isFolder: function () {
        return this.item.children && this.item.children.length;
        }
    },
    methods: {
        toggle: function () {
        if (this.isFolder) {
            this.isOpen = !this.isOpen;
        }
        },
        makeFolder: function () {
        if (!this.isFolder) {
            this.$emit("make-folder", this.item);
            this.isOpen = true;
        }
        }
    }
}
</script>

<style>

</style>