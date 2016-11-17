var app = new Vue({
  el: '#app',
  data: {
    datas: [],
    datadates: [],

    letter: '',
    date: '',
    frequency: '',
    searchletter: '',
    searchdate: '',
    searchfrequency: ''
  },
  methods: {
    getAllData: function() {
      axios.get('http://localhost:3000/api/data', {})
      .then(function (response){
        app.datas = response.data;
      })
      .catch(function (error){
        console.log(error);
      })
    },
    getAllDataDate: function() {
      axios.get('http://localhost:3000/api/datadate', {})
      .then(function (response){
        app.datadates = response.data;
      })
      .catch(function (error){
        console.log(error);
      })
    },
    postNewData: function(){
      axios.post('http://localhost:3000/api/data', {
        letter: app.letter,
        frequency: app.frequency
      })
      .then(function (response) {
        app.datas.push(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    postNewDataDate: function(){
      axios.post('http://localhost:3000/api/datadate', {
        date: app.date,
        frequency: app.frequency
      })
      .then(function (response) {
        app.datadates.push(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    searchLetter: function() {
      axios.post('http://localhost:3000/api/data/search_letter', {
        letter: app.searchletter
      })
      .then(function(response) {
        app.datas = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    searchDate: function() {
      axios.post('http://localhost:3000/api/datadate/search_date', {
        date: app.searchdate
      })
      .then(function(response) {
        app.datadates = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    searchFrequency: function() {
      axios.post('http://localhost:3000/api/data/search_frequency', {
        frequency: app.searchfrequency
      })
      .then(function(response) {
        app.datas = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    searchFrequencyDate: function() {
      axios.post('http://localhost:3000/api/datadate/search_frequency', {
        frequency: app.searchfrequency
      })
      .then(function(response) {
        app.datadates = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    editData: function(id) {
      axios.put('http://localhost:3000/api/data/'+id, {
        letter: app.letter,
        frequency: app.frequency
      })
      .then(function(response) {
        app.getAllData();
      })
      .catch(function() {
        console.log(error);
      })
    },
    editDataDate: function(id) {
      axios.put('http://localhost:3000/api/data/'+id, {
        date: app.date,
        frequency: app.frequency
      })
      .then(function(response) {
        app.getAllDataDate()
      })
      .catch(function() {
        console.log(error);
      })
    },
    deleteData: function(id) {
      axios.delete('http://localhost:3000/api/data/'+id, {})
      .then(function(response) {
        app.getAllData();
      })
      .catch(function() {
        console.log(error);
      })
    },
    deleteDataDate: function(id) {
      axios.delete('http://localhost:3000/api/datadate/'+id, {})
      .then(function(response) {
        app.getAllDataDate()
      })
      .catch(function() {
        console.log(error);
      })
    }
  }
})

app.getAllDataDate();
app.getAllData();
