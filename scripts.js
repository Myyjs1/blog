// 专业技能数据
const skillsData = [
    {
        title: 'Java基础技能',
        items: [
            '熟悉Java基础、集合类、IO、多线程及JVM，具备全面的Java开发技能。',
            '熟悉Java Web开发技术栈，包括Spring Boot、Spring、Spring MVC以及MyBatis等框架的使用与实践。',
            '熟悉数据库相关知识，包括SQL查询、索引优化、事务管理、锁机制及数据库优化技术。',
            '熟悉Redis缓存机制，掌握消息队列和搜索引擎的使用与优化。',
            '熟悉微信小程序开发，了解前端开发语言及框架。'
        ]
    },
    {
        title: '系统与网络',
        items: [
            '了解分布式系统理论基础，熟悉分布式架构设计与实现。',
            '了解计算机网络和操作系统知识，熟悉网络协议、数据传输、进程管理、内存管理和文件系统等核心概念。',
            '了解基本数据结构与算法，包括哈希、树、链表、数组、排序、遍历、堆栈等。'
        ]
    },
    {
        title: '开发工具与设计模式',
        items: [
            '了解版本控制工具，如Git的基本使用。',
            '了解设计模式的六大原则，了解单例模式、工厂模式、策略模式、观察者模式、责任链模式、装饰器模式和适配器模式等，熟悉Spring框架中对这些设计模式的应用。'
        ]
    },
    {
        title: '其他技能',
        items: [
            '熟悉Python基本语法，能够运用Flask框架进行简单的Web应用开发。',
            '了解深度学习基础，熟悉了解PyTorch框架，并掌握自然语言处理的基本知识。',
            '了解区块链技术原理，熟悉Solidity语言的智能合约开发。'
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // 主题切换功能
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');

    // 渲染专业技能部分
    function renderSkills() {
        const container = document.querySelector('.container');
        const skillsSection = document.createElement('section');
        skillsSection.className = 'section';
        skillsSection.innerHTML = '<h2 class="section-title">专业技能</h2>';

        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'skills-container';

        skillsData.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'education-item skill-card';

            const title = document.createElement('div');
            title.className = 'school-name';
            title.textContent = category.title;

            const skillsList = document.createElement('ul');
            skillsList.className = 'skills-list';

            category.items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                skillsList.appendChild(listItem);
            });

            categoryCard.appendChild(title);
            categoryCard.appendChild(skillsList);
            skillsContainer.appendChild(categoryCard);
        });

        skillsSection.appendChild(skillsContainer);
        container.appendChild(skillsSection);
    }

    renderSkills();
    
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }

    // 创建主题切换按钮
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `
        <span>🌞</span>
        <span>🌙</span>
    `;
    document.body.appendChild(themeToggle);

    // 主题切换事件处理
    themeToggle.addEventListener('click', function() {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // 手机号码隐藏功能
    const phoneElement = document.querySelector('.contact-info span:first-child');
    if (phoneElement) {
        const phoneNumber = phoneElement.textContent.replace('📱 ', '');
        const maskedNumber = phoneNumber.replace(/(?<=\d{3})\d{4}(?=\d{4})/, '****');
        phoneElement.textContent = `📱 ${maskedNumber}`;

        // 点击显示完整号码
        phoneElement.style.cursor = 'pointer';
        phoneElement.title = '点击显示/隐藏完整号码';
        
        let isHidden = true;
        phoneElement.addEventListener('click', function() {
            if (isHidden) {
                phoneElement.textContent = `📱 ${phoneNumber}`;
            } else {
                phoneElement.textContent = `📱 ${maskedNumber}`;
            }
            isHidden = !isHidden;
        });
    }
});