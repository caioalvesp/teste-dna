<template>
  <div class="card">
    <button class="btn" @click="toggleFavorite">
      <font-awesome-icon
        :icon="isFavorited ? ['fas', 'heart'] : ['far', 'heart']"
      />
    </button>

    <div class="image-container">
      <div v-if="!isImageLoaded" class="placeholder"></div>

      <img
        class="product-image"
        v-if="product.image"
        :src="product.image"
        alt="{{ product.name }}"
        @load="onImageLoad"
        v-show="isImageLoaded"
      />
    </div>

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

.image-container {
  position: relative;
  width: 100%;
  height: 200px;
}

/* Placeholder */
.placeholder {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder::before {
  content: 'Loading...';
  color: #ccc;
  font-size: 1rem;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
      isFavorited: false,
      isImageLoaded: false
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
    },
    onImageLoad() {
      // Quando a imagem carregar, alterar o estado para exibi-la
      this.isImageLoaded = true;
    }
  },
  mounted() {
    const productId = `favorite-${this.product.id}`;
    this.isFavorited = localStorage.getItem(productId) !== null;
  }
};
</script>
