<template>
    <div id="signup">
      <div class="container">
        <div class="logo-container">
          <img src="../assets/images/Beige_And_Red_Handwritten_Typographic_Clothing_Brand_Logo__1_-removebg-preview (1).png" alt="Logo" width="200px">
        </div>
        <div class="switch-buttons">
          <button @click="showLogin">Login</button>
          <button @click="showSignUp">Sign Up</button>
        </div>
        <div v-if="isLogin">
          <h2>Login</h2>
          <input v-model="loginEmail" placeholder="Email" />
          <input type="password" v-model="loginPassword" placeholder="Password" />
          <button @click="login">Login</button>
          <div class="forgot-password">
            <a href="#" @click="forgotPassword">Forgot Password?</a>
          </div>
          <p class="switch-links">New here? <a href="#" @click="showSignUp">Join us now</a></p>
        </div>
        <div class="separator"></div>
        <div v-if="!isLogin">
          <h2>Sign Up</h2>
          <input type="email" v-model="signupEmail" placeholder="Email" />
          <input type="password" v-model="signupPassword" placeholder="Password" />
          <button @click="signUp">Sign Up</button>
          <p class="switch-links">Already a member? <a href="#" @click="showLogin">Log in</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLogin: true,
        loginEmail: '',
        loginPassword: '',
        signupEmail: '',
        signupPassword: ''
      };
    },
    methods: {
      showSignUp() {
        this.isLogin = false;
      },
      showLogin() {
        this.isLogin = true;
      },
      // Sign-Up Method
      signUp() {
        if (!this.signupEmail || !this.signupPassword) {
          alert('Please fill in all fields!');
          return;
        }
        
        fetch('http://localhost:3500/users', {  // Update to your backend port (3500)
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.signupEmail,
            password: this.signupPassword
          })
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);

          if (data.message) {
            alert('Sign-Up successful!');
            this.showLogin();  // Show login screen after successful sign-up
          } else {
            alert('Sign-Up Unsucessful: ');
          }
        })
        .catch((error) => {
          console.error('Error during sign-up:', error);
          alert('An error occurred during sign-up.');
        });
      },
      // Login Method
      login() {
  fetch('http://localhost:3500/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: this.loginEmail, password: this.loginPassword })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    if (data.token) {
      localStorage.setItem('user', JSON.stringify({ email: this.loginEmail }));
      localStorage.setItem('token', data.token);
      alert('Login successful!');
      if (this.loginEmail === "admin@gmail.com") {
        this.$router.push('/users'); // Redirect admin
      } else {
        this.$router.push('/'); // Redirect normal users
      }
    } else {
      alert('Invalid credentials');
    }
  })
  .catch(error => console.error('Error:', error));
},
      forgotPassword() {
        const email = prompt("Please enter your email to reset the password:");
        if (email) {
          alert("A password reset link has been sent to " + email);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Full-page container for SignIn/SignUp */
  #signup {
    width: 100%; /* Full width */
    min-height: 100vh; /* Full height */
    display: flex;
    flex-direction: column; /* Flex column for alignment */
    justify-content: flex-start; /* Align to the top */
    background-color: rgb(242, 238, 194); /* Background color */
  }
  
  /* Form container */
  .container {
    width: 90%; /* Width of container will be 90% of the screen */
    max-width: 900px; /* Maximum width */
    padding: 30px; /* Padding around the form */
    background-color: rgb(242, 238, 194); /* Same background */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for better visibility */
    margin: 0 auto; /* Center the container */
    flex-grow: 1; /* Allow container to grow and take remaining space */
    max-height: 800px; /* Max height to prevent it from stretching too long */
    overflow: auto; /* Allow scrolling if content exceeds max height */
  }
  
  /* Inputs */
  input {
    width: 100%; /* Full width */
    padding: 12px; /* Larger padding */
    margin: 12px 0; /* Spacing between inputs */
    border-radius: 4px;
    border: 1px solid #f0d8b2;
    font-size: 16px; /* Larger text */
  }
  
  /* Buttons */
  button {
    width: 100%; /* Full width */
    padding: 12px;
    background-color: #ff2200;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px; /* Larger font */
  }
  
  button:hover {
    background-color: #c21a00;
  }
  
  /* Switch Buttons */
  .switch-buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .switch-buttons button {
    width: 48%; /* Button width */
    background-color: #ff2200;
    font-size: 16px;
  }
  
  /* Links */
  .forgot-password, .switch-links {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
  
  .switch-links a, .forgot-password a {
    text-decoration: none;
    color: #ff2200;
    font-weight: bold;
  }
  
  .switch-links a:hover, .forgot-password a:hover {
    color: #c21a00;
  }
  
  /* Separator */
  .separator {
    border-top: 1px solid #ccc;
    margin: 20px 0;
  }
  
  /* Footer styles (if needed) */
  footer {
    margin-top: auto; /* Push footer to the bottom of the page */
  }
  </style>
  