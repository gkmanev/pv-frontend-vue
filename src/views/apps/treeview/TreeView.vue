<template>
    <b-card class="treeCard">
        <b-alert show>You can double click on an item to turn it into a folder.</b-alert>
        <ul id="demo">
            <treeItem
                class="item"
                :item="treeData"
                @make-folder="makeFolder"
                @add-item="addItem"
            ></treeItem>
        </ul>
    </b-card>    
</template>

<script>
import treeItem from './ItemComponent'
import Vue from 'vue';
var treeData = {
    name: "My Tree",
    children: [
        { name: "hello" },
        { name: "wat" },
        {
        name: "child folder",
        children: [
            {
            name: "child folder",
            children: [{ name: "hello" }, { name: "wat" }]
            },
            { name: "hello" },
            { name: "wat" },
            {
            name: "child folder",
            children: [{ name: "hello" }, { name: "wat" }]
            }
        ]
        }
    ]
};
export default {
    name:"TreeView",
    components:{
        treeItem
    },
    data:() =>( {
          treeData: treeData
    }),
     methods: {
        makeFolder: function (item) {
        Vue.set(item, "children", []);
        this.addItem(item);
        },
        addItem: function (item) {
        item.children.push({
            name: "new stuff"
        });
        }
    }
}
</script>

<style lang="scss">
.treeCard{
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
    margin:0px;
    padding:0 15px;
    list-style: none;
    li{
        padding: 7px;
    }
}
}
</style>