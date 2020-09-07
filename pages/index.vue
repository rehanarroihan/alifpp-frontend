<template>
  <div>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="container" data-aos="zoom-out" data-aos-delay="100">
        <h1>Welcome to <span>CV. Alif Putra Perdana</span>
        </h1>
        <h2>
          Kami adalah perusahaan Penyedia Alat Monitoring Lingkungan, Lingkungan Kerja, Kesehatan Kerja Dan Uji Keamanan Pangan Yang Terbaik Di Indonesia Timur Dan Bisa Bermanfaat Bagi Kehidupan</h2>
        <div class="d-flex">
          <a href="#about" class="btn-get-started scrollto">Lihat Produk Kami</a>
        </div>
      </div>
    </section><!-- End Hero -->

    <main id="main">

      <!-- ======= Featured Services Section ======= -->
      <section id="featured-services" class="featured-services">
        <div class="container" data-aos="fade-up">
          <div class="section-title d-flex align-items-left">
            <h2>Product Division</h2>
          </div>

          <Slick
            ref="productDivision"
            :options="productDivisionSlick"
          >
            <div
              v-for="(item, index) in productDivision"
              :key="'we'+index"
              data-aos="zoom-in"
              data-aos-delay="100"
              class="product-division"
            >
              <img src="https://has-environmental.com/wp-content/uploads/2015/12/asdfasg.jpg" alt="" srcset="">
              <div class="content">
                <h4>{{ item.name }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </Slick>
        </div>
      </section><!-- End Featured Services Section -->

      <!-- ======= About Section ======= -->
      <section id="about" class="about section-bg">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Tentang</h2>
            <h3>Cari Tahu Lebih Lanjut <span>Tentang Kami</span></h3>
            <p>CV. Alif Putra Perdana</p>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
              <img src="assets/img/about.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <h3>Visi</h3>
              <p class="font-italic">
                Kami adalah perusahaan Penyedia Alat Monitoring Lingkungan, Lingkungan Kerja, Kesehatan Kerja Dan Uji Keamanan Pangan Yang Terbaik Di Indonesia Timur Dan Bisa Bermanfaat Bagi Kehidupan
              </p>
              <h3>Misi</h3>
              <ul>
                <li>
                  <i class='bx bxs-chevron-right-circle' ></i>
                  <div>
                    <p>Menjual Alat Monitoring Lingkungan, Lingkungan Kerja, Kesehatan Kerja Dan Uji Keamanan Pangan Yang Berkualitas Dan Memenuhi Standar Yang Ada</p>
                  </div>
                </li>
                <li>
                  <i class='bx bxs-chevron-right-circle' ></i>
                  <div class="mt-3">
                    <p>Memberikan Pelayanan Terbaik Kepada Pelanggan</p>
                  </div>
                </li>
                <li>
                  <i class='bx bxs-chevron-right-circle' ></i>
                  <div>
                    <p>Memberikan Kesejahteraan Dan Kenyamanan Dalam Bekerja Bagi Seluruh Pemangku Kepentingan</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section><!-- End About Section -->

      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Budaya</h2>
            <h3><span>Budaya</span> Kami</h3>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon-box">
                <div class="icon"><i class='bx bx-moon' ></i></div>
                <h4><a href="">Spiritualitas</a></h4>
                <p>Sikap diri yang meniatkan bahwa apapun yang dikerjakan semata-mata karena Alloh SWT dan bisa bermanfaat kepada sesama</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon-box">
                <div class="icon"><i class='bx bx-check-shield' ></i></div>
                <h4><a href="">Jujur</a></h4>
                <p>Bekerja dan berbicara sesuai dengan kenyataan, tidak berbohong</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><i class='bx bx-smile' ></i></div>
                <h4><a href="">Ramah</a></h4>
                <p>Menebarkan senyum kepada sesama sebagai  cerminan diri yng berpikiran positip</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon-box">
                <div class="icon"><i class='bx bxs-bullseye' ></i></div>
                <h4><a href="">Disiplin</a></h4>
                <p>Sikap diri yg mendasarkan tindakan berdasar aturan yg ada</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon-box">
                <div class="icon"><i class='bx bx-voicemail' ></i></div>
                <h4><a href="">Loyalitas</a></h4>
                <p>Mendedikasikan diri pada perusahaan dan selalu menjaga rahasia perusahaan</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><i class='bx bx-network-chart' ></i></div>
                <h4><a href="">Bekerja Sama</a></h4>
                <p>Bekerja tidak individualistik demi tercapainya tujuan perusahaan</p>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><i class='bx bx-brain'></i></div>
                <h4><a href="">Bekerja Cerdas</a></h4>
                <p>Bekerja dengan hati dan dengan segenap potensi yang ada, dilakukan secara maksimal demi tercapainya tujuan perusahaan</p>
              </div>
            </div>

          </div>

        </div>
      </section><!-- End Services Section -->

      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Kontak</h2>
            <h3><span>Hubungi</span> Kami</h3>
            <p>Hubungi kami melalui email dan telepon, atau kunjungi kantor kami</p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6">
              <div class="info-box mb-4">
                <i class="bx bx-map"></i>
                <h3>Alamat Kami</h3>
                <p>Ruko Pepiland Blok A-06, Jl. Jatisari Besar Pepelegi, Waru Sidoarjo, 61256</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-envelope"></i>
                <h3>Email Kami</h3>
                <p>support@alifpp.com</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-phone-call"></i>
                <h3>Telepon Kami</h3>
                <p>+6281 656 2807</p>
              </div>
            </div>

          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">

            <div class="col-lg-12">
              <iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.239159767438!2d112.718889329169!3d-7.358757569608994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e5a187877ff1%3A0x36285c5ea2d95c37!2sCV%20Alif%20Putra%20Perdana%20%26%20PT%20Qualita%20Group!5e0!3m2!1sen!2sid!4v1599491785243!5m2!1sen!2sid" frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe>
            </div>

          </div>

        </div>
      </section><!-- End Contact Section -->

    </main><!-- End #main -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Slick from 'vue-slick';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

export default {
  name: 'Landing',
  head() {
    return {
      title: `Home - ${this.headTitle}`,
    };
  },
  data() {
    return {
      productDivisionSlick: {
        slidesToShow: 3,
        autoplay: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 1950,
        edgeFriction: 0.30,
        outline: false,
      },
      productDivision: [
        {
          name: 'Water Monitoring',
          desc: 'Water Monitoring',
          pict: 'ex',
          icon: '',
          link: '',
        },
        {
          name: 'Gas Detection',
          desc: 'Gas Detection',
          pict: 'ex',
          icon: '',
          link: '',
        },
        {
          name: 'Environmental Product',
          desc: 'Environmental Product',
          pict: 'ex',
          icon: '',
          link: '',
        },
        {
          name: 'Environmental Product',
          desc: 'Environmental Product',
          pict: 'ex',
          icon: '',
          link: '',
        },
        {
          name: 'Food Test',
          desc: 'Food Test',
          pict: 'ex',
          icon: '',
          link: '',
        },
      ]
    }
  },
  components: {
    Slick,
  },
  computed: {
    ...mapState({
      headTitle: (state) => state.global.headTitle
    }),
  },
  methods: {
    nextProductDivision() {
      this.$refs.productDivision.next();
    },
    prevProductDivision() {
      this.$refs.productDivision.prev();
    },
  }
}
</script>

<style lang="scss">
/* the slides */
.slick-slide {
    margin: 0 10px;
}
/* the parent */
.slick-list {
    margin: 0 -10px;
}

.product-division {
  margin-right: 24px;
  border: 1px solid #deebfd;
  border-radius: 8px;
  transition: 0.3s all;
  cursor: pointer;
  position: relative;

  &:hover {
    border: 1px solid #106eea;
  }

  img {
    height: 180px;
    width: 100%;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }

  .content {
    padding: 18px 20px;

    h4 {
      margin: 0;
      padding: 0;
      font-weight: 700;
      margin-bottom: 4px;
      margin-top: 4px;
      font-size: 24px;
      color: #106eea;
    }

    p {
      font-size: 14px;
      margin:0;
      padding: 0;
    }
  }
}
</style>
