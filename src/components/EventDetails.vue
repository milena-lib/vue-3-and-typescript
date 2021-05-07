<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { Grid } from '@progress/kendo-vue-grid';
// import { filterBy } from '@progress/kendo-data-query';
// import { sampleProducts } from '../services/EventService';

export default defineComponent({
  name: "EventDetails",
  // components: {
  //     'Grid': Grid
  // },
  data() {
    return {
      event: null,
      // filter: {
      //     logic: "and",
      //     filters: [
      //         { field: "UnitPrice", operator: "neq", value: 18 },
      //         { field: "FirstOrderedOn", operator: "gte", value:new Date("1996-10-10") }
      //     ]
      // }
    }
  },
  computed: {
    // products: function() {
    //     return filterBy(sampleProducts, this.filter);
    // },
    // columns: function () {
    //     return [
    //         { field: 'ProductID', filterable:false, title: 'Product ID', width:'50px'},
    //         { field: 'ProductName', title: 'Product Name' },
    //         { field: 'FirstOrderedOn', filter:'date', title: 'First Ordered On'},
    //         { field: 'UnitPrice', filter:'numeric', title: 'Unit Price'},
    //         { field: 'Discontinued', filter:'boolean', title: 'Discontinued'}
    //     ]
    // }
  },
  methods: {
      // filterChange: function(ev) {
      //     this.filter = ev.filter;
      // }
  },
  setup() {
    
  }
});
</script>
