const { createApp } = Vue;

createApp({
  data() {
    return {
      noticias: [
        {
          id: 1,
          titulo: 'Lanzan nueva ley en el Congreso',
          descripcion: 'La nueva ley busca mejorar la transparencia en el gasto público.',
          fecha: '16 de abril 2025',
          imagen: 'https://source.unsplash.com/400x250/?congress,news'
        },
        {
          id: 2,
          titulo: 'Nuevo avance en tecnología mexicana',
          descripcion: 'Investigadores mexicanos desarrollan chip que revoluciona IA.',
          fecha: '15 de abril 2025',
          imagen: 'https://source.unsplash.com/400x250/?technology,ai'
        },
        {
          id: 3,
          titulo: 'Elecciones 2025: Todo lo que necesitas saber',
          descripcion: 'Un resumen completo de los candidatos y sus propuestas.',
          fecha: '14 de abril 2025',
          imagen: 'https://source.unsplash.com/400x250/?election,politics'
        }
      ]
    };
  }
}).mount('#app');
