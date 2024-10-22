<template>
  <div class="card">
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
  border: 1px solid black;
  max-width: 250px;
  padding: 1rem;
}

.card > img {
  width: 100%;
}
</style>

<script>
export default {
  props: ['product', 'index']
};
</script>
