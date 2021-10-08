import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { spongebobclothesmodel } from '../models/spongebobclothesmodel';
import { BackendConnectorService } from '../services/backend-connector.service';
import { spongebobbasket } from '../models/spongebobbasket';
import { Observable } from 'rxjs';
let basketViewBoolean = false;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public spongebobclothes: Array<spongebobclothesmodel> = [];
  public spongebobclothing: spongebobclothesmodel;
  public spongebobbasket: Array<spongebobbasket> = [];
  public spongebobbasketitem: spongebobbasket;

  constructor(
    private router: Router,
    private spongebobservice: BackendConnectorService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadBasket();
  }
  loadProducts() {
    this.spongebobservice
      .getAllProducts()
      .subscribe((b: Array<spongebobclothesmodel>) => {
        this.spongebobclothes = b;
      });
  }
  loadBasket() {
    this.spongebobservice
      .getAllBasket()
      .subscribe((b: Array<spongebobbasket>) => {
        this.spongebobbasket = b;
      });
  }
  addItemToBasket(b) {
    let sizeselected = document.querySelector('.active' + b.id).textContent;
    const item: spongebobbasket = {
      id: 0,
      model: b.model,
      prize: b.prize,
      size: sizeselected,
      img: b.img,
      units: 1,
    };
    this.spongebobservice.addItemToBasket(item).subscribe(() => {
      this.loadBasket();
    });
  }
  addUnit(b) {
    const item: spongebobbasket = {
      id: b.id,
      model: b.model,
      prize: b.prize,
      size: b.size,
      img: b.img,
      units: b.units + 1,
    };
    this.spongebobservice.updateItem(item).subscribe(() => {
      this.loadBasket();
    });
  }
  removeUnit(b) {
    if (b.units - 1 < 1) {
      this.deleteItemFromBasket(b);
    } else {
      const item: spongebobbasket = {
        id: b.id,
        model: b.model,
        prize: b.prize,
        size: b.size,
        img: b.img,
        units: b.units - 1,
      };
      this.spongebobservice.updateItem(item).subscribe(() => {
        this.loadBasket();
      });
    }
  }
  changeSize(b, newsize) {
    const item: spongebobbasket = {
      id: b.id,
      model: b.model,
      prize: b.prize,
      size: newsize,
      img: b.img,
      units: b.units,
    };
    this.spongebobservice.updateItem(item).subscribe(() => {
      this.loadBasket();
    });
  }

  openBasket() {
    const basket = document.querySelector('.basket-products');
    if (!basketViewBoolean) {
      basket.classList.remove('hidden');
      setTimeout(() => {
        basket.classList.remove('basket-closed');
        basket.classList.add('basket-open');
      }, 1);
    } else {
      basket.classList.remove('basket-open');
      basket.classList.add('basket-closed');
      setTimeout(() => {
        basket.classList.add('hidden');
      }, 300);
    }
    basketViewBoolean = !basketViewBoolean;
  }

  sizeselector(id: number, ssid: number): void {
    let identifier = id + ssid;
    switch (id) {
      case 1:
        document.getElementById('1' + ssid).classList.add('sizeselectoractive');
        document
          .getElementById('2' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('3' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('4' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('5' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('6' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('1' + ssid).classList.add('active' + ssid);
        document.getElementById('2' + ssid).classList.remove('active' + ssid);
        document.getElementById('3' + ssid).classList.remove('active' + ssid);
        document.getElementById('4' + ssid).classList.remove('active' + ssid);
        document.getElementById('5' + ssid).classList.remove('active' + ssid);
        document.getElementById('6' + ssid).classList.remove('active' + ssid);
        break;
      case 2:
        document
          .getElementById('1' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('2' + ssid).classList.add('sizeselectoractive');
        document
          .getElementById('3' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('4' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('5' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('6' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('1' + ssid).classList.remove('active' + ssid);
        document.getElementById('2' + ssid).classList.add('active' + ssid);
        document.getElementById('3' + ssid).classList.remove('active' + ssid);
        document.getElementById('4' + ssid).classList.remove('active' + ssid);
        document.getElementById('5' + ssid).classList.remove('active' + ssid);
        document.getElementById('6' + ssid).classList.remove('active' + ssid);
        break;
      case 3:
        document
          .getElementById('1' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('2' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('3' + ssid).classList.add('sizeselectoractive');
        document
          .getElementById('4' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('5' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('6' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('1' + ssid).classList.remove('active' + ssid);
        document.getElementById('2' + ssid).classList.remove('active' + ssid);
        document.getElementById('3' + ssid).classList.add('active' + ssid);
        document.getElementById('4' + ssid).classList.remove('active' + ssid);
        document.getElementById('5' + ssid).classList.remove('active' + ssid);
        document.getElementById('6' + ssid).classList.remove('active' + ssid);
        break;
      case 4:
        document
          .getElementById('1' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('2' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('3' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('4' + ssid).classList.add('sizeselectoractive');
        document
          .getElementById('5' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('6' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('1' + ssid).classList.remove('active' + ssid);
        document.getElementById('2' + ssid).classList.remove('active' + ssid);
        document.getElementById('3' + ssid).classList.remove('active' + ssid);
        document.getElementById('4' + ssid).classList.add('active' + ssid);
        document.getElementById('5' + ssid).classList.remove('active' + ssid);
        document.getElementById('6' + ssid).classList.remove('active' + ssid);
        break;
      case 5:
        document
          .getElementById('1' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('2' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('3' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('4' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('5' + ssid).classList.add('sizeselectoractive');
        document
          .getElementById('6' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('1' + ssid).classList.remove('active' + ssid);
        document.getElementById('2' + ssid).classList.remove('active' + ssid);
        document.getElementById('3' + ssid).classList.remove('active' + ssid);
        document.getElementById('4' + ssid).classList.remove('active' + ssid);
        document.getElementById('5' + ssid).classList.add('active' + ssid);
        document.getElementById('6' + ssid).classList.remove('active' + ssid);
        break;
      case 6:
        document
          .getElementById('1' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('2' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('3' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('4' + ssid)
          .classList.remove('sizeselectoractive');
        document
          .getElementById('5' + ssid)
          .classList.remove('sizeselectoractive');
        document.getElementById('6' + ssid).classList.add('sizeselectoractive');
        document.getElementById('1' + ssid).classList.remove('active' + ssid);
        document.getElementById('2' + ssid).classList.remove('active' + ssid);
        document.getElementById('3' + ssid).classList.remove('active' + ssid);
        document.getElementById('4' + ssid).classList.remove('active' + ssid);
        document.getElementById('5' + ssid).classList.remove('active' + ssid);
        document.getElementById('6' + ssid).classList.add('active' + ssid);
        break;
    }
    document
      .querySelector('#size-selector' + ssid)
      .classList.remove('nonclickable');
  }
  deleteItemFromBasket(b) {
    this.spongebobservice.deleteItemFromBasket(b.id).subscribe(() => {
      this.loadBasket();
    });
  }

  startPage() {
    const startproducts = [
      {
        id: 0,
        model: 'SpongeBob Kid Pijama',
        prize: 20,
        img: '../../assets/images/spongebobpijama.png',
      },
      {
        id: 0,
        model: 'SpongeBob Timberland boots',
        prize: 160,
        img: '../../assets/images/spongebobtimberland.jpg',
      },
      {
        id: 0,
        model: 'SpongeBob Pack shirt and pants',
        prize: 24,
        img: '../../assets/images/spongebobshirtpants.jpg',
      },
      {
        id: 0,
        model: 'SpongeBob dog hoodie',
        prize: 20,
        img: '../../assets/images/spongebobdog.jpg',
      },
      {
        id: 0,
        model: 'Patrick costume',
        prize: 21,
        img: '../../assets/images/patrick.jpg',
      },
      {
        id: 0,
        model: 'SpongeBob cap',
        prize: 15,
        img: '../../assets/images/spongebobcap.jfif',
      },
      {
        id: 0,
        model: 'SpongeBob and Patrick shirt',
        prize: 18,
        img: '../../assets/images/shirtpatrickspbob.png',
      },
      {
        id: 0,
        model: 'SpongeBob face shirt',
        prize: 10,
        img: '../../assets/images/spongebobfaceshirt.jfif',
      },
    ];
    startproducts.forEach((p) => {
      this.spongebobservice.addItemToProducts(p).subscribe(() => {
        this.loadProducts();
      });
    });
  }
}
