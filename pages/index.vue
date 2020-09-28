<template>
  <div>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="container" data-aos="zoom-out" data-aos-delay="100">
        <h1 id="welcoming-text">Welcome to <span>CV. Alif Putra Perdana</span>
        </h1>
        <h2 id="vision-text">{{ vision }}</h2>
        <div class="d-flex">
          <nuxt-link
            to="/product-category"
            class="btn-get-started scrollto"
          >
            Lihat Produk Kami
          </nuxt-link>
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
              @click="slickClick(item.link)"
              class="product-division"
            >
              <img :src="item.pict" :alt="item.name + '-image'" srcset="">
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
              <p>{{ vision }}</p>
              <h3>Misi</h3>
              <ul>
                <li>
                  <i class='bx bxs-chevron-right-circle' ></i>
                  <div>
                    <p>Menjual alat monitoring lingkungan, lingkungan kerja, kesehatan kerja dan uji keamanan pangan yang berkualitas dan memenuhi standar yang ada</p>
                  </div>
                </li>
                <li>
                  <i class='bx bxs-chevron-right-circle' ></i>
                  <div class="mt-3">
                    <p>Memberikan pelayanan terbaik kepada pelanggan</p>
                  </div>
                </li>
                <li>
                  <i class='bx bxs-chevron-right-circle' ></i>
                  <div>
                    <p>Memberikan kesejahteraan dan kenyamanan dalam bekerja bagi seluruh pemangku kepentingan</p>
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
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      productDivision: [
        {
          name: 'Environmental product',
          desc: 'Environmental product',
          pict: 'https://www.demak.com.au/wp-content/uploads/2018/06/person-holds-plant-growing-in-their-hand-896x504.jpg',
          icon: '',
          link: '/product-category?cat=32&slug=environment-monitoring',
        },
        {
          name: 'Industrial Hygiene Products',
          desc: 'Industrial Hygiene Products',
          pict: 'https://www.bchydro.com/content/dam/BCHydro/customer-portal/photographs/people/public/engineer-in-industrial-facility-full-width-people.jpg',
          icon: '',
          link: '/product-category?cat=33&slug=work-environment',
        },
        {
          name: 'Food Test Kit Products',
          desc: 'Food Test Kit Products',
          pict: 'https://static8.depositphotos.com/1504385/973/i/950/depositphotos_9736807-stock-photo-researcher-holding-up-a-gmo.jpg',
          icon: '',
          link: '/product-category?cat=35&slug=alat-uji-keamanan-pangan',
        },
        {
          name: 'Calibration',
          desc: 'Calibration',
          pict: 'https://img.mbtmag.com/files/base/indm/all/image/2019/05/mnet_211487_manufacturing_technology.png?auto=format&fit=crop&h=394&w=700',
          icon: '',
          link: '',
        },
        {
          name: 'Others',
          desc: 'Others',
          pict: 'https://www.wileymetal.com/wp-content/uploads/2018/09/digital-manufacturing-1080x675.jpg',
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
      headTitle: (state) => state.global.headTitle,
      vision: (state) => state.global.vision,
    }),
  },
  methods: {
    nextProductDivision() {
      this.$refs.productDivision.next();
    },
    prevProductDivision() {
      this.$refs.productDivision.prev();
    },
    slickClick(link) {
      this.$router.push({path: link})
    }
  }
}
</script>

<style lang="scss">
#hero {
  margin-top: 60px;
}

#welcoming-text {
  font-family: "Tahoma", sans-serif;
  font-size: 42px!important;
}

#vision-text {
  font-family: "Tahoma", sans-serif;
  font-size: 20px!important;
}

/* the slides */
.slick-slide {
  margin: 0 10px;
  outline: none;
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
  transition: 0.3s;

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

.section-title {
  h3 {
    font-size: 28px!important;
  }
}
</style>
