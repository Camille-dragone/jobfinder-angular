import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.html',
  styleUrl: './jobs.scss'
})
export class Jobs {

  constructor(private router: Router) {}

  bestJobs = [
  {
    "job": {
      "uuid": "b6670e3a-b9da-4908-baab-baa3374e1081",
      "title": "DEVELOPPEUR CONFIRME",
      "company": "INETUM",
      "description": "Description du poste\nDans le cadre de l'accompagnement de nos clients du secteur public et télécom, nous recherchons pour intégrer nos équipes Inetum, des talents sur le développement Java.\n\nLes équipes sont constituées de 10 à 15 collaborateurs, travaillant en méthodologie agile Scrum.\n\nVos missions :\n• Intervenir de la conception à la livraison, en passant par la spécification, le développement, le test et la documentation des composants sur lesquels vous serez intervenu.\n• Assurer la qualité du code et promouvoir les bonnes pratiques de développement (craftmanship).\n• Participer activement aux revues de code et aux tests unitaires pour garantir un code robuste et maintenable.\n• Collaborer avec les équipes pour améliorer continuellement les processus de développement et les pratiques agiles.\n\nPoste à pourvoir en CDI uniquement, à Toulouse.\n\nProfil\nDe formation supérieure (Bac+5), vous justifiez d'une expérience d'au moins 3 ans sur un poste similaire.\n\nPRE-REQUIS\n• Développement sur un environnement applicatif back-end JAVA allant de la version 6 à 11.\n• Mise en place et maintenance de web services (SOAP et REST).\n• Connaissances des méthodologies agiles Scrum.\n• Compétences en qualité de code et craftmanship, avec une attention particulière aux détails et à la maintenabilité du code.\n• Permis B et véhiculé.\n\nNous recherchons des personnes autonomes, forces de proposition, ayant un bon relationnel et aimant le travail en équipe.\n\nSi vous vous reconnaissez dans cette description, n'attendez plus pour postuler à cette offre et transmettez votre CV !\n\nÀ propos d'Inetum\nInetum est un leader européen des services numériques. Pour les entreprises, les acteurs publics et la société dans son ensemble, les 28 000 consultants et spécialistes du groupe visent chaque jour l'impact digital : des solutions qui contribuent à la performance, à l'innovation et au bien commun.\n\nPrésent dans 19 pays au plus près des territoires, et avec ses grands partenaires éditeurs de logiciels, Inetum répond aux enjeux de la transformation digitale avec proximité et flexibilité.\n\nPorté par son ambition de croissance et d'industrialisation, Inetum a généré en 2023 un chiffre d'affaires de 2,5 milliards d'€.\n\nPour répondre à un marché en croissance continue depuis plus de 30ans, Inetum a fait le choix délibéré de se recentrer sur 4 métiers afin de gagner en puissance et proposer des solutions sur mesure, adaptées aux besoins spécifiques de ses clients : le conseil (Inetum Consulting), la gestion des infrastructures et applications à façon (Inetum Technologies), l'implémentation de progiciels (Inetum Solutions) et sa propre activité d'éditeur de logiciels (Inetum Software). Inetum a conclu des partenariats stratégiques avec 4 grands éditeurs mondiaux - Salesforce, ServiceNow, Microsoft et SAP et poursuit une stratégie d'acquisitions dédiée afin d'entrer dans le top 5 européen sur ces technologies et proposer la meilleure expertise à ses clients.\n\nTous nos postes sont ouverts aux personnes en situation de handicap.\n\nInformations supplémentaires\nPourquoi nous rejoindre\n\nChez Inetum, nous sommes attentifs à ...\n• Votre évolution de carrière, nous vous proposons un parcours de formations et de certifications en lien avec vos aspirations professionnelles et les tendances technologiques.\n• Vous apporter un accompagnement et un suivi managérial personnalisé.\n\nVous aurez aussi accès à :\n\n• 10 RTT en plus des 27 jours de congés payés\n\n• Des avantages groupes : 9€/jour sur votre carte Swile, une bonne mutuelle, prise en charge de 70% de votre abonnement de transports, des indemnités kilométriques vélo...\n\n• Un CSE : subvention sport et loisir, chèques vacances, chèques cadeaux...",
      "url": "https://www.google.com/search?ibp=htl;jobs&q=developpeur+web+toulouse&htidocid=RCHYTM8jVshpTDV9AAAAAA%3D%3D&hl=fr-FR&shndl=37&shmd=H4sIAAAAAAAA_-PqYOQydXENc_XxDwhwDQ1ScPb3c_MM8nU9tEBXISg1OSO1CIgVUtRTcwty8jMVikuLFNzz89NzUqWsM0pKCoqt9PWLi3P00otLEksyk_WS83P18_NSk_Ir9LPyk4pBRHxxRmJRakFOYklqvJGpQYVeQV66lpCnn2tIqK_C4QUKIfmlOfmlxakASS6CfIsAAAA&shmds=v1_ATWGeeOMJZixdjEp47BAbbq5oaTEDgIcBfcNFjC9-4zDyjLV4g&source=sh/x/job/li/m1/1#fpstate=tldetail&htivrt=jobs&htiq=developpeur+web+toulouse&htidocid=RCHYTM8jVshpTDV9AAAAAA%3D%3D",
      "source": "LesJeudis",
      "location": "Toulouse",
      "company_logo": "https://serpapi.com/searches/69aaf6837dcfbe95f8b4765d/images/EW9g3pBBAmEZ8w5_KQgueiU1I3sji5I71EPUW4i7lAc.jpeg",
      "extensions": [
        "il y a 2 jours",
        "À plein temps"
      ]
    },
    "reason": "Expérience requise et compétences en développement Java, Angular et Scrum. Profil adapté au poste de développeur confirmé.",
    "save" : false
  }

]

  messageVisible = false;
  toastMessage = "";

  toggleSauvegarde(job: any) {
    job.save = !job.save;

    if (job.save) {
      this.toastMessage = "Offre sauvegardée";
    } else {
      this.toastMessage = "Offre retirée des sauvegardes";
    }

    this.messageVisible = true;

    setTimeout(() => {
      this.messageVisible = false;
    }, 2000);
  }

  showDetails(job: any) {
    this.router.navigate(['/jobs', job.job.uuid]);
  }

}