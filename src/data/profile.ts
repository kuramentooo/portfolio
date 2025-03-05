export const profile = {
  name: "Clément Delaunoy",
  email: "delaunoyclement@gmail.com",
  birthDate: "05/02/2003",
  experiences: [
    {
      company: "Luminess",
      period: "01/09/2024 - 31/09/2026",
      role: "Alternance Master DevOps",
      location: {
        address: "12 Rue des Landelles",
        city: "Cesson-Sévigné",
        postalCode: "35510"
      },
      website: "https://www.luminess.eu",
      details: `
        • Automatisation des processus de build et du déploiement (cloud Outscale & on-premise Nutanix)
        • Configuration et maintenance pipelines CICD (Jenkins / GitLab / Nexus)
        • Création de contenu Terraform (code et modules)
        • Création de code d'infrastructure avec Puppet (code et modules)
        • Création de scripts d'exploitation pour le déploiement et le MCO/MCS
        • Mise en place de pratiques de déploiement basées sur la conteneurisation
        • Documentation des procédures d'exploitation
        • MCO et MCS de la fondation sur le Cloud Outscale
      `,
      technologies: ["Jenkins", "GitLab", "Nexus", "Terraform", "Puppet", "Cloud Outscale", "Nutanix", "Docker"]
    },
    {
      company: "Paritel Opérateur",
      period: "01/09/2022 - 31/08/2024",
      role: "Alternance Bachelor Systèmes et Réseaux",
      location: {
        address: "Espace Performance – Bâtiment J RDC Centre d'Affaires, Ctre Performance Alphasis",
        city: "Saint-Grégoire",
        postalCode: "35760"
      },
      website: "https://www.paritel.fr",
      details: `
        Téléphonie et VoIP :
        • Mise en place des systèmes de téléphonie fixe et mobile
        • Installation de solutions VoIP et cloud
        • Configuration des équipements réseau (routeurs, switchs, téléphones IP)
        • Maintenance et dépannage des infrastructures télécom
        • Support technique et assistance aux clients

        Support et Assistance :
        • Diagnostic et résolution des pannes à distance ou sur site
        • Assistance aux clients pour la prise en main des équipements
        • Gestion des incidents et suivi des tickets d'intervention

        Administration Réseau :
        • Surveillance des performances des infrastructures
        • Intervention en cas d'anomalies techniques
        • Optimisation des connexions et de la qualité de service

        Gestion Client et Documentation :
        • Conseils techniques et accompagnement des clients professionnels
        • Rédaction de rapports d'intervention et documentation technique
        • Application des mises à jour et correctifs de sécurité
        • Veille technologique sur les évolutions du secteur télécom
      `,
      technologies: [
        "VoIP",
        "Cloud",
        "Réseaux",
        "Cisco",
        "IPBX",
        "Téléphonie IP",
        "Support N2/N3",
        "Ticketing"
      ]
    },
    {
      company: "Acim Jouinin",
      period: "Juillet 2022",
      role: "Stage BTS SIO",
      location: {
        address: "650 Rue Vulcain",
        city: "Évreux",
        postalCode: "27000"
      },
      website: "https://www.acim-jouanin.fr",
      details: `
        Administration Système :
        • Création et gestion de machines virtuelles
        • Configuration des outils et services
        • Maintenance des systèmes informatiques
      `,
      technologies: ["VMware", "Windows Server", "Active Directory"]
    },
    {
      company: "Chronodrive",
      period: "Novembre 2021 - Août 2022",
      role: "Job étudiant",
      location: {
        address: "1 Rue des Mesliers",
        city: "Cesson-Sévigné",
        postalCode: "35510"
      },
      website: "https://www.chronodrive.com",
      details: `
        Préparation des Commandes :
        • Réception et traitement des commandes via le système interne
        • Récupération des produits selon les listes de commande
        • Vérification de la conformité et qualité des produits

        Service Client :
        • Accueil des clients sur le parking
        • Livraison des commandes aux véhicules
        • Assistance et support client

        Gestion des Stocks :
        • Réassort des rayons
        • Contrôle des livraisons
        • Inventaire et suivi des produits

        Opérations de Caisse :
        • Encaissement des commandes
        • Gestion des bons de commande
        • Traitement des remboursements

        Sécurité et Hygiène :
        • Maintien de la propreté des zones de travail
        • Application des procédures de sécurité
      `,
      technologies: ["Système de commande", "Gestion de stock", "Service client"]
    },
    {
      company: "Bricomarché",
      period: "Été 2021",
      role: "Conseiller de vente",
      location: {
        address: "N12",
        city: "Verneuil d'Avre et d'Iton",
        postalCode: "27130"
      },
      website: "https://www.bricomarche.com",
      details: `
        Service Client :
        • Accueil et orientation des clients en magasin
        • Conseil sur les produits (bricolage, jardinage, outillage)
        • Réponse aux demandes spécifiques

        Gestion des Stocks :
        • Réception et vérification des livraisons
        • Réapprovisionnement des rayons
        • Inventaire et gestion des ruptures

        Maintenance du Magasin :
        • Entretien et organisation des rayons
        • Respect des normes de sécurité
        • Installation des promotions
      `,
      technologies: ["Merchandising", "Gestion commerciale", "Service client"]
    }
  ],
  education: [
    {
      degree: "Master DevOps",
      period: "2024-2026",
      school: "Sup de Vinci",
      details: "Formation en alternance aux pratiques DevOps modernes",
      location: {
        address: "21 Rue du Bignon",
        city: "Chantepie",
        postalCode: "35135"
      },
      website: "https://www.supdevinci.fr"
    },
    {
      degree: "Bachelor Systèmes et Réseaux",
      period: "2023-2024",
      school: "Sup de Vinci",
      details: "Spécialisation en administration système et réseau",
      location: {
        address: "21 Rue du Bignon",
        city: "Chantepie",
        postalCode: "35135"
      },
      website: "https://www.supdevinci.fr"
    },
    {
      degree: "BTS SIO SISR",
      period: "2021-2023",
      school: "AFTEC",
      details: "Formation en alternance aux services informatiques aux organisations",
      location: {
        address: "23 Rue Louis Kerautret Botmel",
        city: "Rennes",
        postalCode: "35000"
      },
      website: "https://www.aftec.fr/ecole-commerce-rennes"
    },
    {
      degree: "BAC Général Scientifique",
      period: "2018-2021",
      school: "Lycée Porte de Normandie, Edouard de Chambray",
      details: "Formation générale avec spécialisation scientifique",
      location: {
        address: "Rue de Chambray",
        city: "Mesnils-sur-Iton",
        postalCode: "27240"
      },
      website: "https://educagri27.fr/index.php/lycee-edouard-de-chambray"
    }
  ],
  skills: [
    "Esprit d'équipe",
    "Sérieux",
    "Rigoureux",
    "Autonome",
    "Polyvalent",
    "Ponctuel"
  ],
  technicalSkills: {
    languages: [
      { name: "Python", logo: "python.svg", level: "Avancé" },
      { name: "JavaScript", logo: "javascript.svg", level: "Avancé" },
      { name: "HTML/CSS", logo: "html5.svg", level: "Avancé" },
      { name: "Java", logo: "java.svg", level: "Intermédiaire" },
      { name: "TypeScript", logo: "typescript.svg", level: "Intermédiaire" }
    ],
    devops: [
      { name: "Terraform", logo: "terraform.svg", level: "Avancé" },
      { name: "Ansible", logo: "ansible.svg", level: "Intermédiaire" },
      { name: "Puppet", logo: "puppet.svg", level: "Intermédiaire" },
      { name: "Jenkins", logo: "jenkins.svg", level: "Avancé" },
      { name: "Docker", logo: "docker.svg", level: "Avancé" },
      { name: "Git", logo: "git.svg", level: "Avancé" },
      { name: "Rundeck", logo: "rundeck.svg", level: "Intermédiaire" }
    ],
    cloud: [
      { name: "AWS", logo: "aws.svg", level: "Intermédiaire" },
      { name: "Azure", logo: "azure.svg", level: "Intermédiaire" },
      { name: "GCP", logo: "gcp.svg", level: "Débutant" }
    ]
  },
  languages: [
    { name: "Anglais", level: "B1 (Intermédiaire)" },
    { name: "Espagnol", level: "B1 (Intermédiaire)" }
  ],
  interests: [
    "Auto-entrepreneur",
    "Jeux vidéo",
    "Manga",
    "Sport auto",
    "Football",
    "Gym"
  ],
  links: {
    github: "https://github.com/kuramentooo",
    linkedin: "https://www.linkedin.com/in/delaunoy-clément-10a433220/",
    gitlab: "https://gitlab.com/ClemD05",
    linkhub: "https://kuramentooo.github.io/LinkHub/"
  },
  projects: [
    {
      name: "Script Route Table",
      description: "Script d'automatisation pour tables de routage",
      url: "https://github.com/kuramentooo/script-routetable",
      tech: ["Scripting", "Networking"]
    },
    {
      name: "LinkHub",
      description: "Hub centralisé de liens personnels",
      url: "https://github.com/kuramentooo/LinkHub",
      demoUrl: "https://kuramentooo.github.io/LinkHub/",
      tech: ["Web", "GitHub Pages"]
    },
    {
      name: "Portfolio",
      description: "Portfolio personnel",
      url: "https://github.com/kuramentooo/kuramentooo",
      demoUrl: "https://kuramentooo.github.io/portfolio/",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "GitHub Profile",
      description: "Page de profil GitHub personnalisée",
      url: "https://github.com/kuramentooo/kuramentooo",
      tech: ["Markdown", "GitHub Special Repository"]
    }
  ]
}

export default profile
