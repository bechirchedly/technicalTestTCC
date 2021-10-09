<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update goes here -->
            <h1>Edit Data</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" class="form-control" v-model="person.firstname" required>
                </div>
                <div class="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" class="form-control" v-model="person.lastname" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" v-model="person.email" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            person: {}
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-person/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.person = res.data
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-person/${this.$route.params.id}`;

            axios.put(apiURL, this.person).then((res) => {
                console.log(res);
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>