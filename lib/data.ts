import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

export const links = [
    {
        name: 'Home',
        hash: '#home'
    },
    {
        name: 'Projects',
        hash: '#projects'
    },
    {
        name: 'About',
        hash: '#about'
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

export const projects = [
    {
        name: 'Vibration Analyzer v2',
        description: 'Human body vibration analyzer used for work safety measurements. Developed for a client.',
        technologies: ['STM32', 'FreeRTOS', 'TouchGFX', 'C', 'C++'],
        image: 'https://instrutherm.com.br/media/catalog/product/cache/1fff4d188f64e200d7e2f24d317b822f/m/e/medidor-de-vibracao_4__1.jpg'
    },
    {
        name: 'Air Sampling Pump',
        description: 'Air sampling pump to measure exposure to harmful dust, particulates and gases, used for work safety.',
        technologies: ['STM32', 'FreeRTOS', 'TouchGFX', 'C', 'C++', 'PID Control'],
        image: 'https://instrutherm.com.br/media/catalog/product/cache/1fff4d188f64e200d7e2f24d317b822f/b/o/bomba-de-amostragrem_2_.jpg'
    },
    {
        name: 'Vibration Analyzer v1',
        description: 'Human body vibration analyzer used for work safety measurements. Developed for a client.',
        technologies: ['Embedded Linux', 'Qt', 'STM32', 'C', 'C++'],
        image: 'https://instrutherm.com.br/media/catalog/product/cache/1fff4d188f64e200d7e2f24d317b822f/m/e/medidor-de-vibracao_4_.jpg'
    },
];