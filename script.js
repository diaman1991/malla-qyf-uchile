const malla = {
  1: { nombre: "Química General I", sct: 5, requisitos: [] },
  2: { nombre: "Técnicas de Laboratorio Químico", sct: 4, requisitos: [] },
  3: { nombre: "Mecánica", sct: 4, requisitos: [] },
  4: { nombre: "Introducción al Cálculo", sct: 5, requisitos: [] },
  5: { nombre: "El Químico Farmacéutico y su Acción", sct: 5, requisitos: [] },
  6: { nombre: "Cursos de Formación General", sct: 4, requisitos: [] },
  7: { nombre: "Inglés I", sct: 3, requisitos: [] },
  8: { nombre: "Química General II", sct: 5, requisitos: [1] },
  9: { nombre: "Laboratorio de Química General", sct: 4, requisitos: [1, 2] },
  10: { nombre: "Electromagnetismo", sct: 4, requisitos: [3, 4] },
  11: { nombre: "Cálculo Diferencial e Integral", sct: 5, requisitos: [4] },
  12: { nombre: "Biología General", sct: 5, requisitos: [] },
  13: { nombre: "El Medicamento y su Evolución", sct: 4, requisitos: [5] },
  14: { nombre: "Inglés II", sct: 3, requisitos: [7] },
  15: { nombre: "Química Orgánica I", sct: 5, requisitos: [8] },
  16: { nombre: "Química Analítica I", sct: 5, requisitos: [8, 9] },
  17: { nombre: "Laboratorio I de Química Orgánica", sct: 4, requisitos: [8, 9] },
  18: { nombre: "Estadística y Análisis de Datos", sct: 3, requisitos: [11] },
  19: { nombre: "Fisiología Celular", sct: 4, requisitos: [1, 10, 12] },
  20: { nombre: "Investigación para las Ciencias Farmacéuticas", sct: 4, requisitos: [13, 14] },
  21: { nombre: "Inglés III", sct: 3, requisitos: [14] },
  22: { nombre: "Cursos de Formación General", sct: 2, requisitos: [] },
  23: { nombre: "Química Orgánica II", sct: 5, requisitos: [15] },
  24: { nombre: "Laboratorio de Análisis Químico", sct: 4, requisitos: [9, 16, 18] },
  25: { nombre: "Química Analítica II", sct: 5, requisitos: [16] },
  26: { nombre: "Fisicoquímica I", sct: 5, requisitos: [3, 11, 15] },
  27: { nombre: "Fisiología de Sistemas", sct: 4, requisitos: [19] },
  28: { nombre: "Práctica Intermedia", sct: 4, requisitos: [20] },
  29: { nombre: "Inglés IV", sct: 3, requisitos: [21] },
  30: { nombre: "Laboratorio de Análisis Instrumental", sct: 4, requisitos: [24, 25] },
  31: { nombre: "Botánica y Farmacognosia", sct: 7, requisitos: [23, 25] },
  32: { nombre: "Química de Heterocíclicos y Análisis Espectroscópico", sct: 5, requisitos: [23] },
  33: { nombre: "Bioquímica", sct: 5, requisitos: [23, 26] },
  34: { nombre: "Farmacología General", sct: 6, requisitos: [24, 27] },
  35: { nombre: "Gestión de Calidad", sct: 3, requisitos: [20] },
  36: { nombre: "Microbiología", sct: 5, requisitos: [33] },
  37: { nombre: "Farmacoquímica I", sct: 5, requisitos: [32, 34] },
  38: { nombre: "Farmacología de Sistemas I", sct: 5, requisitos: [34] },
  39: { nombre: "Fisiopatología Molecular", sct: 5, requisitos: [27, 33] },
  40: { nombre: "Legislación Farmacéutica", sct: 4, requisitos: [28, 35] },
  41: { nombre: "Fisicoquímica Farmacéutica", sct: 6, requisitos: [26] },
  42: { nombre: "Fisiopatología y Semiología", sct: 5, requisitos: [39] },
  43: { nombre: "Farmacoquímica II", sct: 5, requisitos: [37] },
  44: { nombre: "Farmacología de Sistemas II", sct: 6, requisitos: [36, 38] },
  45: { nombre: "Salud Pública", sct: 3, requisitos: [40] },
  46: { nombre: "Tecnología Farmacéutica I", sct: 6, requisitos: [40, 41] },
  47: { nombre: "Operaciones Unitarias para Q&F", sct: 5, requisitos: [41] },
  48: { nombre: "Análisis de Medicamentos, Doping y Drogas de Abuso", sct: 5, requisitos: [30, 43] },
  49: { nombre: "Nutrición Clínica", sct: 3, requisitos: [42] },
  50: { nombre: "Bioquímica Clínica", sct: 4, requisitos: [42] },
  51: { nombre: "Biofarmacia y Farmacocinética", sct: 6, requisitos: [34, 46] },
  52: { nombre: "Tecnología Farmacéutica II", sct: 6, requisitos: [46, 47] },
  53: { nombre: "Administración y Gestión Farmacéutica", sct: 3, requisitos: [46] },
  54: { nombre: "Estadística Farmacéutica", sct: 3, requisitos: [18, 45] },
  55: { nombre: "Farmacología Clínica", sct: 6, requisitos: [44, 50, 51] },
  56: { nombre: "Bromatología", sct: 4, requisitos: [30, 49] },
  57: { nombre: "Toxicología", sct: 5, requisitos: [44, 50] },
  58: { nombre: "Farmacia Asistencial", sct: 4, requisitos: [45, 53] },
  59: { nombre: "Tecnología Cosmética", sct: 4, requisitos: [52] },
  60: { nombre: "Electivos Especializados", sct: 7, requisitos: [] },
  61: { nombre: "Farmacia Clínica", sct: 5, requisitos: [55] },
  62: { nombre: "Práctica Profesional en Farmacia Comunitaria", sct: 7, requisitos: [53, 55, 57] },
  63: { nombre: "Biotecnología Farmacéutica", sct: 4, requisitos: [39, 52] },
  64: { nombre: "Economía en Salud y Marketing Farmacéutico", sct: 3, requisitos: [45, 53, 55] },
  65: { nombre: "Innovación y Proyectos", sct: 3, requisitos: [54] },
  66: { nombre: "Electivos Especializados", sct: 8, requisitos: [] },
  67: { nombre: "Actividad Final de Titulación", sct: 30, requisitos: [] }
};

const semestres = {
  "I Semestre": [1, 2, 3, 4, 5, 6, 7],
  "II Semestre": [8, 9, 10, 11, 12, 13, 14],
  "III Semestre": [15, 16, 17, 18, 19, 20, 21, 22],
  "IV Semestre": [23, 24, 25, 26, 27, 28, 29],
  "V Semestre": [30, 31, 32, 33, 34, 35],
  "VI Semestre": [36, 37, 38, 39, 40, 41],
  "VII Semestre": [42, 43, 44, 45, 46, 47],
  "VIII Semestre": [48, 49, 50, 51, 52, 53, 54],
  "IX Semestre": [55, 56, 57, 58, 59, 60],
  "X Semestre": [61, 62, 63, 64, 65, 66],
  "XI Semestre": [67]
};

let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function lanzarConfetti() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
}

function renderMalla() {
  const contenedor = document.getElementById("contenedor-malla");
  const mensajeFinal = document.getElementById("mensaje-final");
  const tadaSound = document.getElementById("tada-sound");
  contenedor.innerHTML = "";

  for (const semestre in semestres) {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const header = document.createElement("h2");
    header.textContent = semestre;
    columna.appendChild(header);

    const ids = semestres[semestre];
    const creditosTotales = ids.reduce((sum, id) => sum + malla[id].sct, 0);
    const creditosTexto = document.createElement("div");
    creditosTexto.className = "creditos";
    creditosTexto.textContent = `Total: ${creditosTotales} SCT`;
    columna.appendChild(creditosTexto);

    ids.forEach(id => {
      const ramo = malla[id];

      let desbloqueado;

      if (id === 67) {
        const otrosRamos = Object.keys(malla).filter(i => parseInt(i) !== 67);
        desbloqueado = otrosRamos.every(r => aprobados.includes(parseInt(r)));
      } else {
        desbloqueado = ramo.requisitos.every(r => aprobados.includes(r));
      }

      const aprobado = aprobados.includes(id);
      const div = document.createElement("div");
      div.textContent = `${ramo.nombre} (${ramo.sct} SCT)`;
      div.className = aprobado
        ? "aprobado"
        : desbloqueado
        ? "desbloqueado"
        : "bloqueado";

      if (desbloqueado || aprobado) {
        div.onclick = () => {
          const index = aprobados.indexOf(id);
          const antesEstabaAprobado = index !== -1;

          if (antesEstabaAprobado) {
            aprobados.splice(index, 1);
          } else {
            aprobados.push(id);

            if (id === 67) {
              mensajeFinal.classList.add("mostrar");
              tadaSound.play();
              lanzarConfetti();
            }
          }

          localStorage.setItem("aprobados", JSON.stringify(aprobados));
          renderMalla();
        };
      }

      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }

  // Ocultar mensaje si se desmarca el ramo 67
  if (!aprobados.includes(67)) {
    mensajeFinal.classList.remove("mostrar");
  }
}

renderMalla();
