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
    searchfrequency: '',
    name: '',
    username:'',
    email: '',
    password: '',
    regstat: false,

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
        app.clearModel()
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
        app.clearModel();
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
        app.clearModel();
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
        app.clearModel();
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
        app.clearModel();
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
        app.clearModel();
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    setmodeldata: function(id) {
      axios.get('http://localhost:3000/api/data/'+id, {})
      .then(function(response){
        console.log(response);
        app.letter = response.data.letter,
        app.frequency = response.data.frequency
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    setmodeldatadate: function(id) {
      axios.get('http://localhost:3000/api/datadate/'+id, {})
      .then(function(response){
        console.log(response);
        app.date = response.data.date,
        app.frequency = response.data.frequency
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
        app.clearModel();
      })
      .catch(function() {
        console.log(error);
      })
    },
    editDataDate: function(id) {
      axios.put('http://localhost:3000/api/datadate/'+id, {
        date: app.date,
        frequency: app.frequency
      })
      .then(function(response) {
        app.getAllDataDate()
        app.clearModel();
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
    },
    register: function() {
      axios.post('http://localhost:3000/auth/register', {
        name: app.name,
        username: app.username,
        email: app.email,
        password: app.password
      })
      .then(function(response) {
        alert('Your registration was successful!')
        // app.regstat = true
        app.clearModel()
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    // login: function() {
    //   axios.post('http://localhost:3000/auth/login', {
    //     username: app.username,
    //     password: app.password
    //   })
    //   .then(function(response) {
    //     if (response.data.username != undefined) {
    //       console.log(JSON.stringify(response));
    //       localStorage.setItem('authenticated', true)
    //       localStorage.setItem('token', response.data.token)
    //       localStorage.setItem('ses_username', response.data.username)
    //       localStorage.setItem('ses_name', response.data.name)
    //       localStorage.setItem('ses_ava', response.data.avatar_url)
    //       app.checkAuth()
    //       app.clearModel()
    //     } else {
    //       app.auth_failed=true;
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   })
    // },
    // logout: function() {
    //   localStorage.removeItem('token')
    //   localStorage.removeItem('ses_username')
    //   localStorage.removeItem('ses_name')
    //   localStorage.removeItem('ses_ava')
    //   localStorage.removeItem('authenticated')
    //
    //   app.authenticated = false;
    //   app.ses_name = '';
    //   app.ses_username = '';
    //   app.ses_ava = '';
    //   app.token = '';
    // },
    // checkAuth: function() {
    //   app.authenticated = localStorage.getItem('authenticated')
    //   app.token = localStorage.getItem('token')
    //   app.ses_username = localStorage.getItem('ses_username')
    //   app.ses_name = localStorage.getItem('ses_name')
    //   app.ses_ava = localStorage.getItem('ses_ava')
    // },
    // falseregstat: function() {
    //   app.regstat = false;
    // },
    // falseauthfailed: function() {
    //   app.auth_failed = false;
    // },
    clearModel: function(){
      app.letter= ''
      app.date= ''
      app.frequency= ''
      app.searchletter= ''
      app.searchdate= ''
      app.searchfrequency= ''
    }
  }
})

app.getAllDataDate();
app.getAllData();
