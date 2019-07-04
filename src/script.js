new Vue({
  el: '#app',
  data() {
    return {
      findArtist: '',
      names: [
       'Kanye West',
       'Albert Khalid',
       '50 Cent',
       'DMX',
       'Lil Pump',
       'Nipsey Hussle',
        'NF',
        'Beyonce',
        'Lil Wayne',
        'Kane Brown',
        'Jason Aldean',
        'Luke Combs',
      ],
      titleName: "Find An Artist"
    }
  },
  watch: {
      findArtist: function (value) {
        let filter = new RegExp(this.findArtist, 'i');
        let searchCount = this.names.filter(el => el.match(filter)).length;
        let mountEl = document.querySelector('#mount');
        if (searchCount > 0) {
          mountEl.innerHTML = "Yay we found " +''+searchCount+''+ " artists!" ;
        } else {
          mountEl.innerHTML = "We cant seem to find"+' '+value;
        }
        if (this.findArtist == '') {
          mountEl.innerHTML = "Try again!" ;
        }
      }
  },
  computed: {
   filteredArtists() {
     let filter = new RegExp(this.findArtist, 'i')
     return this.names.filter(el => el.match(filter))
   }
  }
})