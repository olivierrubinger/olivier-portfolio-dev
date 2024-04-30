import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { inject } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/portfolio.jpg',
      alt: 'Projeto',
      title: "Olivier Rubinger's Portfolio",
      width: '120px',
      height: '120px',
      description: "This website's Github respository!",
      links: [
        {
          name: 'Go to Github',
          href: 'https://github.com/olivierrubinger/olivier-portfolio-dev',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
