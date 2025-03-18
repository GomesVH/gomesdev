/* ======= Icones Tecnologias =======*/
import { DiJava } from 'react-icons/di';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiBootstrap, SiPostgresql, SiGit, SiMysql, SiMongodb, SiSpring } from 'react-icons/si';

export const links = [
    {
        name: 'Home',
        path: 'home',
    },
    {
        name: 'Services',
        path: 'services',
    },
    {
        name: 'Skills',
        path: 'skills',
    },
    {
        name: 'Resume',
        path: 'resume',
    },
    {
        name: 'Contact',
        path: 'contact',
    },
]

export const services = [
    {
        id: 1,
        name: 'Desenvolvedor Front-End',
        title: 'Desenvolvimento de Interfaces',
        description: 'Criação de interfaces de usuário modernas e responsivas utilizando tecnologias como HTML, CSS, JavaScript e frameworks como Angular. Desenvolvo sites e aplicações web a partir de templates ou personalizados, garantindo uma experiência visual atrativa e funcionalidade eficiente.'
    },
    {
        id: 2,
        name: 'Desenvolvedor Back-End',
        title: 'Desenvolvimento de Sistemas e APIs',
        description: 'Desenvolvimento de sistemas e APIs robustas e escaláveis utilizando C# com ASP.NET e Java com Spring Boot. Com expertise em arquitetura de software, integração de APIs e bancos de dados como PostgreSQL, MySQL e SQL, crio soluções completas para o backend, garantindo alta performance, segurança e eficiência na gestão de dados.'

    }
];

export const skills = [
    
    {
        id: 3,
        name: 'JavaScript',
        image: <SiJavascript id='js' />
    },
    {
        id: 4,
        name: 'TypeScript',
        image: <SiTypescript id='ts' />
    },
    {
        id: 5,
        name: 'React',
        image: <SiReact id='react' />
    },
    {
        id: 6,
        name: 'Bootstrap',
        image: <SiBootstrap id='bootstrap' />
    },
    {
        id: 9,
        name: 'PostgreSQL',
        image: <SiPostgresql id='postgresql' />
    },
    {
        id: 10,
        name: 'Git',
        image: <SiGit id='git' />
    },
    {
        id: 11,
        name: 'SQL',
        image: <SiMysql id='sql' />
    },
    {
        id: 13,
        name: 'MongoDB',
        image: <SiMongodb id='mongodb' />
    },
    {
        id: 14,
        name: 'Java',
        image: <DiJava id='java' />
    },
    {
        id: 15,
        name: 'Spring Boot',
        image: <SiSpring id='springboot' />
    }
];




export const education = [
    {
        category: 'educacao',
        title: 'Graduando em Análise e Desenvolvimento de Sistemas',
        subtitle: 'Universidade Impacta Tecnologia',
        date: '2025 - 2027',
        description: 'Formação em andamento em Análise e Desenvolvimento de Sistemas, com foco em tecnologias modernas e demandas do mercado. Durante o curso, estou desenvolvendo uma base sólida em programação, gerenciamento de bancos de dados e metodologias de desenvolvimento de software. Essa formação está me preparando para enfrentar desafios práticos no ambiente de trabalho, aplicando as melhores práticas e criando soluções eficientes e inovadoras.'
    },
    {
        category: 'educacao',
        title: 'Curso Profissionalizante Full-Stack C#',
        subtitle: 'Impacta',
        date: '2022-2023',
        description: 'Programa intensivo de capacitação em desenvolvimento web com foco no framework ASP.NET, utilizando C# para programação orientada a objetos e construção de soluções robustas. Conhecimentos aplicados em SQL para criação e gerenciamento eficiente de bancos de dados, proporcionando a base para o desenvolvimento de aplicações dinâmicas e escaláveis. A formação inclui conceitos fundamentais e práticas avançadas, com espaço para futuras atualizações em novas tecnologias e metodologias.'
    },    
    {
        category: 'educacao',
        title: 'Curso Profissionalizante Full-Stack Java ',
        subtitle: 'EBAC',
        date: '2023-2025',
        description: ' Programa intensivo de capacitação em desenvolvimento Full Stack com Java, abrangendo a criação de interfaces modernas e responsivas utilizando HTML, CSS e JavaScript. O curso inclui a integração de APIs com AJAX e fundamentos sólidos em back-end com Java, explorando conceitos como modelagem de dados, bancos de dados relacionais e não-relacionais, uso de ORMs e desenvolvimento de microsserviços. A formação combina práticas fundamentais e avançadas, preparando para o desenvolvimento de aplicações escaláveis e alinhadas às demandas do mercado. '
    }
    
]

export const experience = [
    {
        category: 'experiencia',
        title: 'Analista e Desenvolvedor de Sistemas',
        subtitle: 'empresa',
        date: 'inic - Presente',
        description: 'Ao.'
    },    
    {
        category: 'experiencia',
        title: 'Desenvolvedor FullStack..',
        subtitle: 'Freelancer..',
        date: ' - Presente',
        description: 'Des.'
    }  
]