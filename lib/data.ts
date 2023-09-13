import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

export const links = [
    {
        name: 'Home',
        hash: '#home'
    },
    {
        name: 'About',
        hash: '#about'
    },
    {
        name: 'Projects',
        hash: '#projects'
    },
    {
        name: 'Experience',
        hash: '#experience'
    }
] as const;

export const socials = [
    {
        name: 'Github',
        url: 'https://github.com/freitas-renato/',
        icon: React.createElement(AiFillGithub)
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/renatooliveirafreitas/',
        icon: React.createElement(AiFillLinkedin)
    },
    {
        name: 'Email',
        url: 'mailto:freitas-renato@outlook.com',
        icon: React.createElement(HiMail)
    }
] as const;

export const experiences = [
    {
        title: "Embedded Software Engineer",
        company: "PullUp",
        url: "https://pullup.com.br/",
        city: "São Paulo, Brazil",
        date: "2019 — 2023",
        description: "Developed robust embedded software for a variety of projects for clients in the medical, human safety, mining, and infrastructure industries. Worked alongside Hardware Engineers to develop and test new products from concept to production."
    },
    {
        title: "ThundeRatz Robotics Team",
        company: "USP",
        url: "https://github.com/thunderatz/",
        city: "São Paulo, Brazil",
        date: "2017 — 2020",
        description: "Developed embedded software for autonomous robots to compete in various competitions, including Robogames (CA, USA) and Robocore Experience (Brazil). Software and Firmware Team Leader during 2019, responsible for new member recruiting and maintainer of the team's internal servers."
    },
    {
        title: "BSc Electrical and Computer Engineering",
        company: "University of São Paulo",
        url: "https://en.wikipedia.org/wiki/University_of_S%C3%A3o_Paulo",
        city: "São Paulo, Brazil",
        date: "2016 — 2021",
        description: "Bachelor of Science in Electrical and Computer Engineering, with a focus on Embedded Systems, IoT, and Robotics."
    }
];