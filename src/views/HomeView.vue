<template>
  <input
    type="text"
    id="search-box"
    v-model="search"
    placeholder="Procurar produto"
  />

  <div class="products-grid">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
      @click="handleClick(product)"
    />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import { useGtm } from '@gtm-support/vue-gtm';

const gtm = useGtm();

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
      search: ''
    };
  },
  mounted() {
    fetch('https://dna-server-api.vercel.app/products')
      .then(res => res.json())
      .then(data => (this.products = data));
  },
  computed: {
    filteredProducts: function () {
      return this.products.filter(product => {
        return product.name.match(this.search);
      });
    }
  },
  methods: {
    handleClick(product) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'product_click',
          product_name: product.name,
          product_id: product.id
        });
      } else {
        console.error('GTM dataLayer não está disponível');
      }
    }
  }
};
</script>

<style>
.products-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 2rem;
}
</style>
