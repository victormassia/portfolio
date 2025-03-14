// Animação de saudações
const greetings = ["Olá", "Hello", "Hola", "Bonjour", "Ciao", "Hallo", "こんにちは", "안녕하세요", "Привет", "مرحبا"];
let index = 0;
const greetingElement = document.getElementById("greeting");
const mainContent = document.getElementById("main-content");

function showGreeting() {
    greetingElement.style.opacity = 0;
    setTimeout(() => {
        greetingElement.innerText = greetings[index];
        greetingElement.style.opacity = 1;
        index = (index + 1) % greetings.length;
    }, 200);
}

function startAnimation() {
    showGreeting();
    const interval = setInterval(showGreeting, 300);
    setTimeout(() => {
        clearInterval(interval);
        greetingElement.style.display = "none";
        mainContent.style.display = "block";
        initializePage(); // Inicializa o restante da página
    }, greetings.length * 300);
}

function initializePage() {
    // Inicializa a timeline
    const timeline_json = {
        "title": {
            "media": {
                "url": "",
                "caption": "",
                "credit": ""
            },
            "text": {
                "headline": "Linha do Tempo da Carreira de Victor Massia",
                "text": "<p>Minha jornada no mundo da TI.</p>"
            }
        },
        "events": [
            {
                "media": {
                    "url": "",
                    "caption": "",
                    "credit": ""
                },
                "start_date": {
                    "year": "2024",
                    "month": "8"
                },
                "text": {
                    "headline": "Início da Faculdade",
                    "text": "<p>Comecei a faculdade de Sistemas de Informação.</p>"
                }
            },
            {
                "media": {
                    "url": "",
                    "caption": "",
                    "credit": ""
                },
                "start_date": {
                    "year": "2025",
                    "month": "1"
                },
                "text": {
                    "headline": "Início do Segundo Período da Faculdade",
                    "text": "<p>Comecei o segundo período da faculdade de Sistemas de Informação.</p>"
                }
            },
            {
                "media": {
                    "url": "",
                    "caption": "",
                    "credit": ""
                },
                "start_date": {
                    "year": "2025",
                    "month": "2"
                },
                "text": {
                    "headline": "Analista de Suporte de TI",
                    "text": "<p>Comecei a trabalhar como Analista de Suporte de TI no grupo Sabemi.</p>"
                }
            }
        ]
    };

    window.timeline = new TL.Timeline('timeline-embed', timeline_json);

    // Inicializa o terminal
    const terminalInput = document.getElementById('terminal-input');
    const terminalContent = document.getElementById('terminal-content');

    terminalInput.addEventListener('keydown', handleInput);

    function handleInput(event) {
        if (event.key === "Enter") {
            const input = event.target.value;
            let response = "";

            switch (input.toLowerCase()) {
                case 'help':
                    response = "Comandos disponíveis: help, about, skills, clear, projects";
                    break;
                case 'about':
                    response = "Victor Massia é um estudante de Sistemas de Informação e Analista de Suporte de TI.";
                    break;
                case 'skills':
                    response = "Habilidades: Python, React.js, HTML, JavaScript, CSS, Banco de dados, MySQL, SQL, Suporte técnico, Tecnologia da informação, Rede de computadores.";
                    break;
                case 'projects':
                    response = "Projetos: <a href='#'>Projeto 1</a>, <a href='#'>Projeto 2</a>";
                    break;
                case 'clear':
                    terminalContent.innerHTML = "";
                    response = "Terminal limpo.";
                    break;
                default:
                    response = `Comando não reconhecido: ${input}`;
            }

            terminalContent.innerHTML += `<div>> ${input}</div><div>${response}</div>`;
            event.target.value = "";
            terminalContent.scrollTop = terminalContent.scrollHeight;
        }
    }

    // Inicializa a digitação do código
    const code = `
    // Exemplo de código em JavaScript
    function helloWorld() {
        console.log("Olá, mundo!");
    }
    
    helloWorld();

    // Exemplo de código em Python
    def hello_world():
        print("Olá, mundo!")
    
    hello_world()
    `;

    let codeIndex = 0;
    function typeCode() {
        if (codeIndex < code.length) {
            document.getElementById('code-section').innerHTML += code.charAt(codeIndex);
            codeIndex++;
            requestAnimationFrame(typeCode);
        }
    }

    typeCode();

    // Alternar tema
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Verificar visibilidade dos elementos
    function checkVisibility() {
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            const rect = skill.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                skill.classList.add('visible');
            }
        });
    }

    // Jogo Simples
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    const ballRadius = 10;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#0f0';
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
        requestAnimationFrame(draw);
    }

    draw();

    // Evento de rolagem da página
    window.addEventListener('scroll', checkVisibility);
}

// Inicia a animação de saudações ao carregar a página
window.onload = startAnimation;