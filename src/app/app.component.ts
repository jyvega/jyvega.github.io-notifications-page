import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'notifications-page';
  notifications: number = 0;

  ngOnInit(): void {
    let elementNodeListOf: NodeListOf<Element> = this.getCardsActives();
    this.notifications = 0;
    elementNodeListOf.forEach(value => (value.classList.contains("card-active") && (this.notifications++)));
  }

  markAllRead() {
    let elementNodeListOf: NodeListOf<Element> = this.getCardsActives();
    let elementsActiveStatus: NodeListOf<Element> = document.querySelectorAll('.status-active');
    this.notifications = 0;
    elementNodeListOf.forEach(value => {
      if (value.classList.contains("card-active")) {
        value.classList.remove("card-active");
      }
    });
    elementsActiveStatus.forEach(value => {
      value.classList.remove("status-active");
    });
  }

  getCardsActives(): NodeListOf<Element> {
    return document.querySelectorAll('.card');
  }

  changeStatus(id: string) {
    let querySelector: Element | null = document.querySelector(`#${id}`);
    let querySelectorImg: Element | null = document.querySelector(`#${id}Img`);
    if (!!querySelector) {
      if (querySelector.classList.contains("card-active")) {
        querySelector.classList.remove("card-active");
        this.notifications--;
      } else {
        this.notifications++;
        querySelector.classList.add("card-active");
      }
    }
    if (!!querySelectorImg) {
      if (querySelectorImg.classList.contains("status-active")) {
        querySelectorImg.classList.remove("status-active");
      } else {
        querySelectorImg.classList.add("status-active");
      }
    }
  }
}
