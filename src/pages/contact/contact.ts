import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { FavoritDetailPage } from '../favorit-detail/favorit-detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  favorit=[
    {
      gambar : "https://cms.groupeditors.com/img/3057b75c-eb10-4e4e-a973-cde552d10a42.jpg",
      judul : "Pizza Hut",
      lokasi : "Ground Floor"
    },
    {
      gambar : "http://2.bp.blogspot.com/_qMk9MYkX1y0/SOjS__fwGII/AAAAAAAAABA/EJGVo99ASL8/s320/DSC00154+(1).jpg",
      judul : "XXI",
      lokasi : "Lantai 2"
    },
    {
      gambar : "https://u01.appmifile.com/images/2018/01/29/a0fc41f2-8cd2-4a9a-b399-db33f1ecd926.jpg",
      judul : "Mi Store",
      lokasi : "Lantai 1"
    },
    {
      gambar : "http://3.bp.blogspot.com/-MpIR1x8QL9s/Vb7s8T8CfUI/AAAAAAAAAVE/qIyTLWH90yQ/s1600/gramedia.jpg",
      judul : "Gramedia",
      lokasi : "Lower Ground"
    },
    {
      gambar : "https://cms.groupeditors.com/img/3057b75c-eb10-4e4e-a973-cde552d10a42.jpg",
      judul : "Pizza Hut",
      lokasi : "Ground Floor"
    },
    {
      gambar : "http://2.bp.blogspot.com/_qMk9MYkX1y0/SOjS__fwGII/AAAAAAAAABA/EJGVo99ASL8/s320/DSC00154+(1).jpg",
      judul : "XXI",
      lokasi : "Lantai 2"
    },
    {
      gambar : "https://u01.appmifile.com/images/2018/01/29/a0fc41f2-8cd2-4a9a-b399-db33f1ecd926.jpg",
      judul : "Mi Store",
      lokasi : "Lantai 1"
    },
    {
      gambar : "http://3.bp.blogspot.com/-MpIR1x8QL9s/Vb7s8T8CfUI/AAAAAAAAAVE/qIyTLWH90yQ/s1600/gramedia.jpg",
      judul : "Gramedia",
      lokasi : "Lower Ground"
    },
    {
      gambar : "https://cms.groupeditors.com/img/3057b75c-eb10-4e4e-a973-cde552d10a42.jpg",
      judul : "Pizza Hut",
      lokasi : "Ground Floor"
    },
    {
      gambar : "http://2.bp.blogspot.com/_qMk9MYkX1y0/SOjS__fwGII/AAAAAAAAABA/EJGVo99ASL8/s320/DSC00154+(1).jpg",
      judul : "XXI",
      lokasi : "Lantai 2"
    },
    {
      gambar : "https://u01.appmifile.com/images/2018/01/29/a0fc41f2-8cd2-4a9a-b399-db33f1ecd926.jpg",
      judul : "Mi Store",
      lokasi : "Lantai 1"
    },
    {
      gambar : "http://3.bp.blogspot.com/-MpIR1x8QL9s/Vb7s8T8CfUI/AAAAAAAAAVE/qIyTLWH90yQ/s1600/gramedia.jpg",
      judul : "Gramedia",
      lokasi : "Lower Ground"
    },
  ]

  constructor(
    public navCtrl: NavController,
    public app : App) {

  }

  bukaRincian(data){
    this.app.getRootNav().push(FavoritDetailPage, data)
  }

}
