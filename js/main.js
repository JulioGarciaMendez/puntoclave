const { createApp, onMounted } = Vue;

createApp({
  data() {
    return {
      
      noticias: [
        {
          id: 1,
          titulo: 'Gran victoria en la liga nacional',
          descripcion: 'El equipo local ganó por 3-0 en un emocionante partido.',
          fecha: '16 de abril 2025',
          imagen: 'images/deportes1.png',
          categoria: 'deportes'
        },
        {
          id: 2,
          titulo: 'Nueva inversión en el sector financiero',
          descripcion: 'Una empresa extranjera apuesta por el crecimiento en México.',
          fecha: '15 de abril 2025',
          imagen: 'images/empresariales1.png',
          categoria: 'empresariales'
        },
        {
          id: 3,
          titulo: 'Festival cultural reúne a cientos',
          descripcion: 'Música, danza y arte llenaron las calles del centro.',
          fecha: '14 de abril 2025',
          imagen: 'images/culturales1.png',
          categoria: 'culturales'
        },
        {
          id: 4,
          titulo: 'Debate entre candidatos presidenciales',
          descripcion: 'Discuten propuestas clave rumbo a las elecciones.',
          fecha: '13 de abril 2025',
          imagen: 'images/politicas1.png',
          categoria: 'politicas'
        },
        {
          id: 5,
          titulo: 'Gran victoria en la liga nacional',
          descripcion: 'El equipo local ganó por 3-0 en un emocionante partido.',
          fecha: '16 de abril 2025',
          imagen: 'images/deportes1.png',
          categoria: 'deportes'
        },
        {
          id: 6,
          titulo: 'Nueva inversión en el sector financiero',
          descripcion: 'Una empresa extranjera apuesta por el crecimiento en México.',
          fecha: '15 de abril 2025',
          imagen: 'images/empresariales1.png',
          categoria: 'empresariales'
        },
        {
          id: 7,
          titulo: 'Festival cultural reúne a cientos',
          descripcion: 'Música, danza y arte llenaron las calles del centro.',
          fecha: '14 de abril 2025',
          imagen: 'images/culturales1.png',
          categoria: 'culturales'
        },
        {
          id: 8,
          titulo: 'Debate entre candidatos presidenciales',
          descripcion: 'Discuten propuestas clave rumbo a las elecciones.',
          fecha: '13 de abril 2025',
          imagen: 'images/politicas1.png',
          categoria: 'politicas'
        }
      ],
      noticiaDestacada: {
        id: 0,
        titulo: '📣 México lidera el foro mundial de innovación',
        descripcion: 'Autoridades y empresarios mexicanos encabezan iniciativas globales en tecnología e innovación.',
        fecha: '20 de abril 2025',
        imagen: 'images/politicas1.png',
        categoria: 'empresariales'
      },
      categoriaSeleccionada: '',
      temperatura: 27, // Puedes cambiar esto con una API más adelante
      fechaActual: '',
    };
  },

  created() {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.fechaActual = new Date().toLocaleDateString('es-MX', opciones);
  },

  computed: {
    noticiasFiltradas() {
      if (!this.categoriaSeleccionada) return this.noticias;
      return this.noticias.filter(n => n.categoria === this.categoriaSeleccionada);
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  }
}).mount('#app');
