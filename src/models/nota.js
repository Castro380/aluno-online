class Nota {
    constructor(disciplina, a1, a2, a3) {
      this.disciplina = disciplina;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
    }
  
    mediaFinal() {
      return Math.max(
          0.4 * this.a1 + 0.6 * this.a2, 
          0.4 * this.a1 + 0.6 * this.a3, 
          0.4 * this.a3 + 0.6 * this.a2
      );
  }
  
    mediaCA(media = this.mediaFinal()) {
      if (media >= 9.0) {
        return "SS - Superior"; // superior
      } else if (media >= 7.0 && media <= 8.99) {
        return "MS - Médio Superior"; // médio superior
      } else if (media >= 5.0 && media <= 6.99) {
        return "MM - Médio"; // médio
      } else if (media >= 3.0 && media <= 4.99) {
        return "MI - Médio Inferior"; // médio inferior
      } else if (media >= 0.1 && media <= 2.99) {
        return "II - Inferior"; // inferior
      } else {
        return "SR - Sem Rendimento"; // sem rendimento
      }
    }
  }
  
  module.exports = Nota;