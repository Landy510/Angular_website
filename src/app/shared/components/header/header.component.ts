import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';


interface HeaderItem {
  text: string;
  routerLink: string;
  children?: HeaderItem[];
  isRoot?: boolean;
}

const sourceData = [
  {
    text: 'Products',
    routerLink: '/',
    children: [
      {
        text: 'Sub Products',
        routerLink: '/',
      },
      {
        text: 'Sub Products',
        routerLink: '/',
        children: [
          {
            text: 'Tripple Products',
            routerLink: '/',
            children: [
              {
                text: 'Products',
                routerLink: '/',
              },{
                text: 'Products',
                routerLink: '/',
              },{
                text: 'Products',
                routerLink: '/',
              },
            ]
          }
        ]
      },
    ]
  },
  {
    text: 'Contact Us',
    routerLink: '/',
    children: [
      {
        text: 'Sub Products',
        routerLink: '/',
      },
      {
        text: 'Sub Products',
        routerLink: '/',
        children: [
          {
            text: 'Tripple Products',
            routerLink: '/',
            children: [
              {
                text: 'Products',
                routerLink: '/',
              },{
                text: 'Products',
                routerLink: '/',
              },{
                text: 'Products',
                routerLink: '/',
              },
            ]
          }
        ]
      },
    ]
  },
]

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    ::ng-deep header {
      background-color: var(--primary-color);

      .root-list {
        display: flex;
        align-items: stretch;

        .option {
          display: flex;
          padding: 15px;
          white-space: nowrap;
        }

        & > .option {
          position: relative;

          & > app-header-sub-item  > .sub-list {
            display: none;
            left: 0;
            top: 100%;
            background-color: var(--secondary-color);
          }
        }

        .option:hover {
          cursor: pointer;
        }

        .option:hover > app-header-sub-item > .sub-list {
          position: absolute;
          display: block;
        }
      }
    }
  `]
})
export class HeaderComponent implements OnInit{
  items: HeaderItem[] = [];

  ngOnInit() {
    this.items = sourceData.map(item => {
      return {...item, isRoot: true}
    })
  }
}

@Component({
  selector: 'app-header-sub-item',
  template: `
    <ul [class]="isRoot ? 'root-list': 'sub-list'">
      <li
        class="option"
        *ngFor="let item of itemMetaData"
      >
        <span class="option-text">{{ item.text }}</span>
        <span class="option-icon"></span>

        <ng-container *ngIf="item.children && item.children.length !== 0">
          <app-header-sub-item
            [itemMetaData]="item.children"
            [isRoot]="false"
          ></app-header-sub-item>
        </ng-container>
      </li>
    </ul>
  `,
  styles: [`
    ::ng-deep .sub-list {
      display: none;
      left: 0;
      top: 100%;
      background-color: var(--secondary-color);

      .option {
        position: relative;

        app-header-sub-item > .sub-list {
          display: none;
          top: 0;
          left: 100%;
          background-color: var(--secondary-color);
        }
      }

      .option:hover {
        cursor: pointer;
      }

      .option:hover > app-header-sub-item > .sub-list {
        position: absolute;
        display: block;
      }
    }
  `]
})
export class HeaderSubItem {
  @Input() itemMetaData!: HeaderItem[];
  @Input() isRoot!: boolean;
}


@NgModule({
  imports: [
    CommonModule,
    MenubarModule
  ],
  declarations: [HeaderComponent, HeaderSubItem],
  exports: [HeaderComponent]
})
export class HeaderModule{}
