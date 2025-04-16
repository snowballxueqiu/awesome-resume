import { ResumeData } from './resume';

export const resumeConfig: ResumeData = {
    personal_info: {
        name: "雪球 Snowball_233",
        title: "前端开发者 & 系统运维工程师",
        bio: "一名热爱计算机技术的高中生，擅长使用AI辅助开发，专注于前端开发和系统运维(Docker 等)。拥有丰富的开源项目经验，曾在多个 Minecraft 服务器担任管理员兼技术职务。目前正在深入学习Rust语言，对 WebAssembly 和人工智能领域有浓厚兴趣。",
        skills: [
            "比较熟练掌握 JavaScript/TypeScript 和 React 框架",
            "熟悉 Docker 容器化技术及CI/CD  流程",
            "有 React、Rust 项目开发经验",
            "较了解 Linux 系统管理和服务器运维"
        ],
        interests: [
            "开源软件开发",
            "自动化运维",
            "人工智能",
            "WebAssembly",
        ]
    },
    social_links: {
        github: "https://github.com/SnowballXueQiu",
        email: "mailto:i@qwq.my",
    },
    projects: {
        items: [
            {
                title: "苦力怕论坛问卷系统",
                description: "一款现代的包含前后台的网页版问卷系统",
                links: ["https://github.com/TeamVastsea/klpbbs_survey_frontend"],
                images: [
                    "https://ip.klpbbs.com/attach.php?id=/forum/202408/26/193356zh6ccgr41a562dfu.png",
                    "https://ip.klpbbs.com/attach.php?id=/forum/202408/26/194841dij1hizd51hxjh1r.png",
                    "https://ip.klpbbs.com/attach.php?id=/forum/202408/26/193348ir1kuis35emveq2q.png",
                    "https://ip.klpbbs.com/attach.php?id=/forum/202408/26/193352e0qonnptz2m6ttt6.png",
                    "https://ip.klpbbs.com/attach.php?id=/forum/202408/26/193354hsmiic01mz0rrlim.png",
                    "https://ip.klpbbs.com/attach.php?id=/forum/202408/26/193350m065i59lnxpzi0iz.png",
                    "https://ip.klpbbs.com/attach.php?id=/forum/202408/26/193345o904s53ebzhfesvj.png",
                    "https://ip.klpbbs.com/attach.php?id=/forum/202408/26/195425lnf6ltxt2z4n2ege.png",
                    "https://ip.klpbbs.com/attach.php?id=/forum/202408/26/195616r179qxxxqy9tndd4.png"
                ],
                language: ["TypeScript", "Rust"]
            },
            {
                title: "HealthBar",
                description: "1:1 复刻了 CMI 插件血条显示功能",
                links: ["https://github.com/TeamVastsea/HealthBar"],
                images: [],
                language: ["Java"]
            }
        ]
    },
    teams: {
        items: [
            {
                name: "Vastsea",
                role: "联合创始人、技术负责人、运维",
                contributions: "Minecraft 轨交城建服务器，旨在打造不仅仅是一个服务器，更是一个多人合作、虚拟城市建造的世界。",
                link: "https://github.com/TeamVastsea"
            },
            {
                name: "Flora Core",
                role: "前端开发者",
                contributions: "一个开源的 Minecraft/Bukkit 插件核心，提供了一个模块化的框架，使 Minecraft 插件的开发更加高效和便捷。",
                link: "https://github.com/FloraCore"
            },
            {
                name: "LingmoOS",
                role: "前端开发者",
                contributions: "一个基于 Debian GNU/Linux 的操作系统，专注于系统美化，提供更加现代化的桌面环境和工具。",
                link: "https://github.com/LingmoOS"
            }
        ]
    },
    skills: {
        items: [
            { name: "Docker", level: 1 },
            { name: "Javascript", level: 1 },
            { name: "Typescript", level: 1 },
            { name: "React", level: 1 },
            { name: "Rust", level: 1 },
            { name: "C/C++", level: 0 },
            { name: "Python", level: 0 },
            { name: "Vue", level: 0 },
            { name: "Go", level: 0 }
        ]
    }
};