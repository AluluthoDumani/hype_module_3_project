<template>
  <br><br>
    <div class="users-container">
      <h1>Hype Users</h1>
      <!-- Add User Modal -->
      <div v-if="addModal" class="modal">
        <div class="modal-content">
          <h2>Add New User</h2>
          <div>
            <label for="userid">User ID:</label>
            <input id="userid" v-model="newUser.userId" type="text" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input id="email" v-model="newUser.email" type="text" required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input id="password" v-model="newUser.password" type="text" required />
          </div>
          <button @click="addUser">Save</button>
          <button @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
    <button @click="openModal">+Add User</button>
    
    <!-- Edit User Modal -->
    <div v-if="editModal" class="modal">
      <div class="modal-content">
        <h2>Edit User</h2>
        <div>
          <label for="editUserid">User ID:</label>
          <input id="editUserid" v-model="editingUser.userId" type="text" />
        </div>
        <div>
          <label for="editEmail">Email:</label>
          <input id="editEmail" v-model="editingUser.email" type="text" />
        </div>
        <div>
          <label for="editPassword">Password:</label>
          <input id="editPassword" v-model="editingUser.password" type="text" />
        </div>
        <button @click="saveEdit">Save</button>
        <button @click="closeEditModal">Cancel</button>
      </div>
    </div>
    
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Email</th>
          <th>Password</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userInformations" :key="index">
          <td data-label="User ID">{{ user.userId }}</td>
          <td data-label="Email">{{ user.email }}</td>
          <td data-label="Password">{{ user.password }}</td>
          <td><button @click="deleteUser(index)" class="deletebutton">Delete</button></td>
          <td><button @click="openEditModal(index)" class="editbutton">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        addModal: false,
        editModal: false,
        newUser: {
          userId: "",
          email: "",
          password: ""
        },
        editingUser: null,
        editingIndex: null,
        userInformations: [
          {
            userId: "1",
            email: "Sibongile Nkosi",
            password: "number1"
          }
        ]
      };
    },
    methods: {
      openModal() {
        this.addModal = true;
      },
      closeModal() {
        this.addModal = false;
        this.resetNewUser();
      },
      resetNewUser() {
        this.newUser = { userId: "", email: "", password: "" };
      },
      addUser() {
        if (!this.newUser.userId || !this.newUser.email || !this.newUser.password) {
          alert("All fields are required!");
          return;
        }
        this.userInformations.push({ ...this.newUser });
        this.closeModal();
      },
      openEditModal(index) {
        this.editModal = true;
        this.editingIndex = index;
        this.editingUser = { ...this.userInformations[index] };
      },
      closeEditModal() {
        this.editModal = false;
        this.editingUser = null;
        this.editingIndex = null;
      },
      saveEdit() {
        if (!this.editingUser.userId || !this.editingUser.email || !this.editingUser.password) {
          alert("All fields are required!");
          return;
        }
        if (this.editingIndex !== null) {
          this.userInformations.splice(this.editingIndex, 1, { ...this.editingUser });
          alert("User details updated successfully!");
        }
        this.closeEditModal();
      },
      deleteUser(index) {
        this.userInformations.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
   /* Modal Container */
   
   .modal{
      display: flex;
      justify-content: center;
      align-items: center
      
    }
  
    form{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
    }
  
    
    .modal-content {
    background-color: #ffffff;
    border: none;
    border-radius: 8px; /* Rounded corners */
    padding: 20px;
    width: 90%; /* Responsive width */
    max-width: 500px; /* Limit form width */
    max-height: 70vh; /* Limit form height (70% of viewport height) */
    overflow-y: auto; /* Enable vertical scrolling */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-in-out;
  }
  
  /* Optional: Add custom scrollbar styling */
  .modal-content::-webkit-scrollbar {
    width: 8px;
  }
  
  .modal-content::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 4px;
  }
  
  .modal-content::-webkit-scrollbar-thumb:hover {
    background-color: #0056b3;
  }
  
  
  /* Modal Close Button */
  .close {
    color: #333;
    float: right;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s ease;
  }
  
  .close:hover {
    color: #ff0000;
  }
  
  /* Buttons */
  button {
    background-color: orangered;
    color: black;
    border: none;
    height: 50px;
    padding: 10px 15px;
    margin: 5px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease; 
  }
  .deletebutton{
    background-color: lightgray;
  }
  .editbutton{
    background-color: orangered;
  }
  button:hover {
    background-color: lightgray;
  }
  
  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  
  /* Table Styling */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 40px;
  }
  
  table th,
  table td {
    border: 1px solid black;
    padding: 10px;
    text-align: left;
  }
  
  table th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  
  table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  table tr:hover {
    background-color: #f1f1f1;
  }
  
  /* Input Fields */
  input[type="text"],
  input[type="number"],
  textarea,
  input[type="email"] {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  label {
    font-weight: bold;
  }
  
  /* Modal Animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .payroll-container {
    width: 90%;
    margin: 20px auto;
  }
  
  .modal-content {
    width: 60%;
    margin: 30px auto;
  }
  .modal-content {
    background-color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 20px;
    width: 90%; /* Default width */
    max-width: 500px; /* Upper limit */
    max-height: 70vh;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-in-out;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 100%; /* Make form width responsive */
  }
  
  input[type="text"],
  input[type="number"],
  textarea,
  input[type="email"]
  
  button {
    width: 100%; /* Stretch input and button fields */
    box-sizing: border-box; /* Include padding and border in width */
  }
  
  @media (max-width: 414px) {
    /* Adjust modal and inputs for iPhone XR */
    .modal-content {
      width: 95%; /* Occupy most of the screen */
      padding: 15px; /* Reduce padding for smaller screens */
    }
  
    input[type="text"],
    input[type="number"],
    textarea,
    input[type="email"],
    button {
      font-size: 14px; /* Adjust font size */
      padding: 10px; /* Smaller padding */
    }
  }
  
  
  
  @media only screen and (min-width: 1025px) {
    .modal-content {
      width: 60%;
      margin: 30px auto;
    }
  }
  
  /* Use media queries to adjust styles for different screen sizes */
  @media (max-width: 768px) {
    /* Add horizontal scrolling to the table */
    table {
      width: 100%;
      white-space: nowrap;
    }
    tr{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      justify-content: space-around;
    }
    /* Make the table layout more flexible on smaller screens */
    th, td {
      display: inline-block;
      padding: 8px;
    }
    /* Adjust the layout to show headings next to data */
    th {
      display: none; /* Hide original table headers */
    }
    td {
      display: flex;
      flex-basis: 50%;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      text-align: left;
      width: 100%;
    }
    /* Add labels before data for better clarity */
    td::before {
      content: attr(data-label);
      font-weight: bold;
      margin-right: 8px;
      flex-basis: 40%; /* Adjust the width of the label */
    }
    /* Optional: Hide buttons and reduce size on very small screens */
    td button {
      font-size: 12px;
      padding: 6px;
    }
  }
  /* Media query for extra small screens */
  @media (max-width: 480px) {
    tr{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 355px;
      justify-content: space-around;
    }
    td {
      padding: 6px;
      font-size: 10px;
    }
    th, td {
      font-size: 10px;
    }
    td::before {
      width: 100px; /* Adjust the label width further for very small screens */
    }
  }
  </style>
  