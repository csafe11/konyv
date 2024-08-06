<script setup>


const menu = [
{
title: 'Home',
path: '/'
},
{
title: 'About',
path: '/about'
},
{
title: 'Shop',
path: '/shop'
},
{
title: 'Blog',
path: '/blog'
},
{
title: 'Bolg',
path: '/bolg'
},
]
onErrorCaptured(err => {
showError({
statusCode: err.statusCode || 500,
statusMessage: `${err.name} - ${err.message}`,
stack: err.stack
})
return false
})


</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  
  
  <div class="container">

  <NuxtLayout>
<h1>
Layouts and Pages
</h1>
<ul v-if="menu">
<li v-for="(item, index) in menu" :key="item.title" >
<NuxtLink :to="item.path">
{{ item.title }}
</NuxtLink>
</li>
</ul>

<NuxtPage />
  </NuxtLayout>
  </div>
  
</template>

