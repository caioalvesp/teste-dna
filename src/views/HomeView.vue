<template>
  <input
    type="text"
    id="search-box"
    class="search-box"
    v-model="search"
    placeholder="Buscar produto"
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

<style>
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 2rem;
  justify-items: center;
}

.search-box {
  width: 100%;
  font-size: 2rem;
  border-radius: 2rem;
  padding: 0.25rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
</style>

<script>
import ProductCard from '@/components/ProductCard.vue';
import { useGtm } from '@gtm-support/vue-gtm';
import debounce from 'lodash.debounce';

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
  },
  watch: {
    search: debounce(val => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'search',
          path: val
        });
      } else {
        console.error('GTM dataLayer não está disponível');
      }
    }, 500)
  }
};
</script>
