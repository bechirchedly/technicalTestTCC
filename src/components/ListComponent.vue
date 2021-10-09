<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <!-- Display goes here -->
      <h1>Show Persons</h1>
      <div class="input-group">
        <input
          v-model="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="per in filtered" :key="per._id">
                <td>{{ per.firstname }}</td>
                <td>{{ per.lastname }}</td>
                <td>{{ per.email }}</td>
                <td>
                  <router-link
                    :to="{ name: 'edit', params: { id: per._id } }"
                    class="btn btn-success"
                  >
                    Edit
                  </router-link>
                  <button
                    @click.prevent="deleteperson(per._id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Persons: [],
      search : '',
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Persons = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteperson(id) {
      let apiURL = `http://localhost:4000/api/delete-person/${id}`;
      let indexOfArrayItem = this.Persons.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Persons.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  computed:{
      filtered:function(){
          return this.Persons.filter((pers)=>{
              return pers.firstname.match(this.search) || pers.lastname.match(this.search) || pers.email.match(this.search)
          })
      }
  }
};
</script>