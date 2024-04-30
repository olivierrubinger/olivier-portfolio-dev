import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Junior Developer TJPA',
        p: 'Qintess | Apr 2024 - Present',
      },
      text: '<p>As a Junior Developer at the Tribunal de Justiça do Estado do Pará (TJPA), I am actively engaged in crafting dynamic web applications and solutions using Angular and Java. Within our development team, I collaborate closely with experienced developers and project managers to deliver robust software applications that enhance the efficiency and functionality of judiciary processes.</p>',
    },
    {
      summary: {
        strong: 'Junior Developer Full-Stack',
        p: 'Cert One | Apr 2023 - May 2023',
      },
      text: '<p>API creation and Web Application development using MERN stack (MongoDB, Express.js, React.js, Node.js)</p>',
    },
    {
      summary: {
        strong: 'Front-end Developer',
        p: 'i9 Tecnologia BH | Feb 2023 - May 2023',
      },
      text: "<p>My job was to develop web applications for the company. I've also fixed computers and electronics when possible.</p>",
    },
    {
      summary: {
        strong: 'Full-stack Freelancer',
        p: 'Self-employed | Aug 2022 - Present',
      },
      text: '<p>As a Full-stack Freelancer, I`ve created web applications for companies exploring their needs. I helped programming teams with development and learned a lot by myself.</p>',
    },
    {
      summary: {
        strong: 'Music Teacher',
        p: 'Self-employed | May 2018 - Aug 2022',
      },
      text: '<p>Electric and acoustic guitar teacher for youths and adults.</p>',
    },
  ]);
}
