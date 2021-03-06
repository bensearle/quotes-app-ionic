import { Quote } from '../data/quote.interface'

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log('addQuoteToFavorites', quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const positon = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        })
        this.favoriteQuotes.splice(positon, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }

}