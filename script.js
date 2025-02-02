// MÚSICA ---------------------------------------------------

const playButton = document.getElementById('playButton');
const music = document.getElementById('music');

playButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playButton.textContent = 'Pausar Música';
    } else {
        music.pause();
        playButton.textContent = 'Tocar Música';
    }
});

// /MÚSICA ----------------------------------------------------

// CARROSSEL DE FOTOS --------------------------------------

let currentIndex = 0;
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;
const container = document.querySelector('.carrossel-container');

function moveToNextSlide() {
    // Obtém a largura atual de um item do carrossel
    const itemWidth = items[0].offsetWidth;  // Usando o primeiro item, pois todos têm a mesma largura
    const offset = -currentIndex * itemWidth; // Calcula o deslocamento com base na largura do item

    // Move o carrossel para a esquerda
    container.style.transform = `translateX(${offset}px)`;

    // Avança para a próxima imagem
    currentIndex = (currentIndex + 1) % totalItems; // Garante que o carrossel seja infinito (volta à primeira imagem)
}

// Configura o carrossel para mudar de imagem a cada 3 segundos
setInterval(moveToNextSlide, 3000);

// /CARROSSEL DE FOTOS -------------------------------------

// CONTAGEM DE NAMORO ------------------------------------

// Data de início do namoro (10 de Junho de 2024)
const startDate = new Date(2024, 5, 10);  // Mês é 0-indexado (Junho é 5)

// Função para calcular e formatar a diferença de tempo em tempo real
function calculateTime() {
    const currentDate = new Date();  // Data atual
    const timeDifference = currentDate - startDate;  // Diferença de tempo entre as datas

    // Calculando anos, meses, dias, horas, minutos e segundos
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));  // Anos
    const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));  // Meses
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));  // Dias
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // Horas
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));  // Minutos
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);  // Segundos

    // Atualizando os elementos HTML com a contagem de tempo
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Chama a função para calcular e exibir o tempo
calculateTime();

// Atualiza a contagem de tempo a cada segundo para manter a contagem precisa
setInterval(calculateTime, 1000);  // A cada 1000 milissegundos (1 segundo)

// /CONTAGEM DE NAMORO -------------------------------------
