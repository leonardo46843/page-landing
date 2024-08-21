<script>
  import wpuLogo from "./assets/image/logo/49673232.png";
</script>

<main>
  <!-- Header Begin -->
  <!-- <header>
    <a href="#hero">WPU</a>
    <nav>
      <ul>
        <li><a href="#hero">Beranda</a></li>
        <li><a href="#about">Tentang Kami</a></li>
        <li><a href="#profile">Pengelola</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  </header> -->
  <!-- Header End -->

  <!-- Hero End -->
  <section id="hero" class="pt-36">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-2/3">
          <!-- svelte-ignore a11y-missing-content -->
          <h3
            class="mb-1 md:mb-3 lg:mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-amber-50"
          >
            <span class="text-main">Selamat datang</span> di
          </h3>
          <h1
            class="mb-1 md:mb-3 lg:mb-5 text-5xl md:text-6xl lg:text-7xl font-bold text-amber-50"
          >
            Web Programming <span class="text-main">UNPAS</span>
          </h1>
          <h2
            class="text-xl md:text-2xl lg:text-3xl font-bold text-amber-50 uppercase"
          >
            jangan lupa <span class="text-main">titik koma</span> ;
          </h2>
        </div>
        <div class="w-full self-end px-4 lg:w-1/3">
          <div class="mt-3 md:mt-5 lg:mt-10">
            <img
              src={wpuLogo}
              alt="WPU Logo"
              class="max-w-full mx-auto invert"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero End -->
</main>
