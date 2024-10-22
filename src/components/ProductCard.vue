<template>
  <div class="card">
    <button class="btn" @click="toggleFavorite">
      <font-awesome-icon
        :icon="isFavorited ? ['fas', 'heart'] : ['far', 'heart']"
      />
    </button>

    <img :src="product.image" alt="Gabinete" />

    <h4>{{ product.name.toUpperCase() }}</h4>

    <h2>
      {{
        product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      }}
    </h2>
  </div>
</template>

<style>
.card {
  max-width: 250px;
  padding: 1rem;
  border-radius: 1rem;
}

.card:hover {
  box-shadow: 5px 7px 22px 8px rgba(0, 0, 0, 0.24);
}

.card > img {
  width: 100%;
}

.btn {
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  border-radius: 50%;
  background: none;
}

.btn:hover {
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.75);
}

.btn > svg {
  width: 1.25rem;
  height: 1.25rem;
}
</style>

<script>
export default {
  props: ['product', 'index'],
  data() {
    return {
      isFavorited: false
    };
  },
  methods: {
    toggleFavorite() {
      const productId = `favorite-${this.product.id}`;

      if (this.isFavorited) {
        // Se já está favoritado, remove do local storage
        localStorage.removeItem(productId);
      } else {
        // Salva o produto no local storage
        localStorage.setItem(productId, JSON.stringify(this.product));
      }

      // Alterna o estado de favoritado
      this.isFavorited = !this.isFavorited;
    }
  },
  mounted() {
    const productId = `favorite-${this.product.id}`;
    this.isFavorited = localStorage.getItem(productId) !== null;
  }
};
</script>
