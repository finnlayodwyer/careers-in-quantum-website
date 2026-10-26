// src/data/archive/2026/panels.ts
import type { Panel } from "../../../types/panels";

import jackRussellBruce from "../../../assets/speaker_headshots/jackRussellBruce.jpg";
import euanAllen from "../../../assets/speaker_headshots/euanAllen.png";
import joeLongden from "../../../assets/speaker_headshots/joeLongden.jpeg";
import stewartNoakes from "../../../assets/speaker_headshots/stewartNoakes.jpg";
import daisyShearer from "../../../assets/speaker_headshots/daisy-shearer.webp";
import tushnaCommissariat from "../../../assets/speaker_headshots/tushnaCommissariat.jpg";
import oliverDowinton from "../../../assets/speaker_headshots/oliverDowinton.png";
import yannAmouroux from "../../../assets/speaker_headshots/yannAmouroux.jpg";
import carrieWeidner from "../../../assets/speaker_headshots/carrie-weidner.jpg";

const speakers1: Panel["speakers"] = [
  {
    name: "Jack Russell Bruce",
    company: "Universal Quantum",
    role: "Digital Development Engineer",
    bio: "Jack has 6 years of experience in ASIC chip design and FPGA development focusing on digital design and verification with 2 years at Universal Quantum. BEng in Electronic Engineering with a lifetime of passion in science, physics, and science fiction.",
    photo: jackRussellBruce,
  },
  {
    name: "Euan Allen",
    company: "Siloton",
    role: "CTO and Co-Founder",
    bio: "Euan is CTO and Co-Founder at Siloton, a company dedicated to providing better access to sight-saving eye image technology using integrated photonics. He completed his PhD at the QECDT in Bristol and has spent over a decade working and leading R&D projects in academia and industry.",
    photo: euanAllen,
  },
  {
    name: "Dr Joe Longden",
    company: "Duality Quantum Photonics",
    role: "Cryogenics Engineer",
    bio: "Joe Longden is the Cryogenics Engineer at Duality Quantum Photonics in Bristol, where he leads the company’s cryogenic activities, including the development of superconducting nanowire single-photon detectors (SNSPDs).  He completed an integrated masters (MSci) in physics at the University of Bristol, followed by his PhD at the University of Oxford, where he worked on the design and experimental characterisation of superconducting quantum-limited amplifier devices for applications in radio astronomy and quantum computing.  In addition to his cryogenics role, other work interests include contributing to the design of high-speed radio-frequency (RF) transmission lines, and the programming of field-programmable gate arrays (FPGAs).",
    photo: joeLongden,
  },
  {
    name: "Stewart Noakes",
    company: "SETsquared",
    role: "Entrepreneur in Residence",
    bio: "Stewart has a long history of supporting companies to scale as business mentor and coach and has first-hand experience as an advisory board member for a variety of companies in the technology space. For the past 4 years, Stewart has worked part-time with SETsquared, supporting the development of tech startups. Aside from this, he maintains an active portfolio of advisory roles across education, consulting and tech. Stewart is a co-founder of Canopy Community, a community for founder and entrepreneurs and hosts their podcast series, Investor Circle, in which he interviews investors to inform founders trying to raise their first funding. Previously, Stewart has lectured at Falmouth University on Entrepreneurship. He holds an MBA with a specialism in Entrepreneurship from the University of Exeter and, before his career in business, earned an MSc in Physics with a focus on Optics.",
    photo: stewartNoakes,
  },
];

const speakers2: Panel["speakers"] = [
  {
    name: "Daisy Shearer",
    company: "National Quantum Computing Centre",
    role: "Quantum Computing Outreach and Education Lead",
    bio: "Daisy Shearer is the Quantum Computing Outreach and Education Lead at the National Quantum Computing Centre. They are a passionate science communicator and educator with a drive to make STEM more accessible and inclusive, particularly for disabled and neurodivergent people. Daisy previously worked as a researcher at the University of Surrey's Advanced Technology Institute working on experimental condensed matter physics. Daisy combines a technical knowledge of quantum technology with a passion for teaching and public engagement to translate quantum computing concepts for a variety of audiences.",
    photo: daisyShearer,
  },
  {
    name: "Tushna Commissariat",
    company: "Physics World",
    role: "Features, Reviews and Careers Editor",
    bio: "Tushna Commissariat is features, reviews and careers editor of Physics World. She picks out the most compelling and topical research across the physical sciences, working with academics and journalists to perfect Physics World's long-form articles. She is also editor of the annual Physics World Careers guide as well as helping put together the American Physical Society's annual Careers guide. Tushna graduated with a BSc in physics from St Xavier’s College, Mumbai, India; before completing a Master’s in science journalism at City University, London. She joined the Physics World team as a news reporter in 2011, then moved on to reviews and careers editor in 2016 before taking on the features role in spring 2021. While she has written about all facets of physics — from the oriental hornet to antimatter, and everything in between — she specializes in quantum mechanics and cosmology.",
    photo: tushnaCommissariat,
  },
  {
    name: "Carrie Weidner",
    company: "University of Bristol",
    role: "Senior Lecturer",
    bio: "Dr Carrie Weidner is a Senior Lecturer in Quantum Engineering Technologies at the University of Bristol. Weidner did her PhD in JILA at the University of Colorado Boulder on inertial sensors using atoms trapped in optical lattice potentials. Weidner then moved to Aarhus University, DK to work on quantum simulation using quantum gas microscopy. Since moving to Bristol in 2022, her work focuses on (mostly) experimental quantum sensing, simulation, and information with atoms in optical lattice potentials. Dr Weidner also works in robust quantum control, quantum physics education, and is increasingly interested in the interplay between atomic physics and integrated optics.",
    photo: carrieWeidner,
  },
  {
    name: "Yann Amouroux",
    company: "Optica",
    role: "Regional Director for Europe",
    bio: "Yann has been an employee of Optica since July 2018, with headquarters in Washington, DC (USA). However, he usually works from home in Bristol (UK) if he is not on the road. For the last 20+ years, he has worked for other Societies, such as the Institute of Engineering and Technology (IET), and before that, for many years at the Institute of Physics (IOP). His responsibilities include representing Optica within the Optics and photonics community in Europe and meeting with students, academics, government agencies, and industry professionals in the UK and numerous European countries.",
    photo: yannAmouroux,
  },
  {
    name: "Oliver Dowinton",
    company: "Phasecraft",
    role: "Quantum Algorithms Scientist",
    bio: "Oliver obtained his PhD in theoretical physics from the University of Manchester in 2024, with initial training in cutting edge nanotechnology through the Graphene NOWNANO CDT. His research focused on modelling the role of the orbital degree of freedom in topological and magnetic systems with a view to quantum information applications. This involved working closely with experimental scientists to develop models for their results, including collaborations with Tohoku University IMR and Seoul National University among others.",
    photo: oliverDowinton,
  },
];

export const panels2026: Panel[] = [
  {
    title: "From Concept to Commercialisation",
    description:
      "This panel focuses on how quantum ideas move from the lab to the market. The panel explores different routes to commercial success and shares practical lessons on turning research into real-world impact.",
    speakers: speakers1,
  },
  {
    title: "Pathways to a Career in Quantum",
    description:
      "From academic pathways to roles in industry and startups, the panel will offer practical insights, personal experiences, and advice for anyone curious about building a career in quantum technologies.",
    speakers: speakers2,
  },
];
