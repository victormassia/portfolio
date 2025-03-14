document.addEventListener('DOMContentLoaded', () => {
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

    let index = 0;
    function typeCode() {
        if (index < code.length) {
            document.getElementById('code-section').innerHTML += code.charAt(index);
            index++;
            requestAnimationFrame(typeCode);
        }
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
    }

    function checkVisibility() {
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            const rect = skill.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                skill.classList.add('visible');
            }
        });
    }

    window.addEventListener('load', () => {
        typeCode();
        checkVisibility();
    });

    window.addEventListener('scroll', checkVisibility);
});