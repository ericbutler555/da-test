// basic email validation formula
const emailRegex = /^[a-z0-9\.\+\-\_]+@[a-z0-9\.\+\-\_]+\.[a-z]{2,}$/i;

// initialize vue
const app = new Vue({
  el: '#app',
  data: {
    user: {},
    activeInfoTab: 'bio',
    passwordVisible: false,
    formSubmitted: false,
    contactName: '',
    contactEmail: '',
    contactMessage: '',
    formErrors: {},
    apiErrorMessage: ''
  },
  methods: {
    displayInfoBlock: function(label) {
      this.activeInfoTab = label;
    },
    togglePassword: function() {
      this.passwordVisible = !this.passwordVisible;
    },
    validateForm: function(event) {
      event.preventDefault();
      // reset validations
      this.formErrors = {};
      // name field
      if (this.contactName === '') {
        this.formErrors.name = true;
      }
      // email field
      if (this.contactEmail === '' || !this.contactEmail.match(emailRegex)) {
        this.formErrors.email = true;
      }
      // message field
      if (this.contactMessage === '') {
        this.formErrors.message = true;
      }
      // conclusion
      if ( Object.keys( this.formErrors ).length > 0 ) {
        return false;
      } else {
        // TODO: process the form
        this.formSubmitted = true;
      }
    }
  }
});

// fetch user data from api
axios({
    url: 'https://randomuser.me/api',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
  .then(response => {
    if (response.status === 200) {
      initUser(response.data.results[0]);
    } else {
      this.apiErrorMessage = response.statusText;
    }
  })
  .catch(error => {
    this.apiErrorMessage = error.message;
  });

// set up user (clean up incoming API data)
function initUser(userObject) {

  app.user = {
    "picture": userObject.picture.large,
    "name": userObject.name.first + ' ' + userObject.name.last,
    "streetAddress": userObject.location.street.number + ' ' + userObject.location.street.name,
    "city": userObject.location.city,
    "state": userObject.location.state,
    "postcode": userObject.location.postcode,
    "country": userObject.location.country,
    "email": userObject.email,
    "phone": userObject.phone,
    "cellPhone": userObject.cell,
    "birthday": new Date(userObject.dob.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    "age": userObject.dob.age,
    "username": userObject.login.username,
    "password": userObject.login.password,
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  };
}
