import { Component, OnInit } from '@angular/core';
import { AlertController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface'
import { QuotesService } from '../../services/quotes'

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController  ,
    private quotesService: QuotesService
  ) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  //  ionViewDidLoad() {
  //    this.quoteGroup = this.navParams.data;
  //    // Add elvis operator (?) in template to use this approach // eg {{quoteGroup?.category}}
  //  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add a quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () => {
            console.log("No, don't add quote")
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorites(selectedQuote: Quote) {
    this.quotesService.removeQuoteFromFavorites(selectedQuote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isFavorite(quote);
  }

}
