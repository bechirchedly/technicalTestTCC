<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Content goes here -->
            <h1>Create Person</h1>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label for="firtname">First Name</label>
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
                    <button class="btn btn-success btn-block">Create</button>
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
            person: {
                firstname: '',
                lastname: '',
                email: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-person';

            axios.post(apiURL, this.person).then(() => {
                this.$router.push('/view');
                this.person = {
                    firstname: '',
                    lastname: '',
                    email: ''
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>