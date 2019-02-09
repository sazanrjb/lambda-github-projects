<template>
    <div>
        <input type="text" v-model="username" @keydown.enter="searchUser"><br><br>
        <p v-if="errorBag.username">{{ errors.username }}</p>

        <div v-if="data.id">
            <div>
                <img :src="data.avatar_url" :alt="data.name" width="150px" height="150px">
                <h3>{{data.name}}</h3>

                <a :href="data.html_url" target="_blank" rel="noopener noreferrer">@{{username}}</a>
                <p>Joined At: {{ data.created_at }}</p>
            </div>

            <div>
                <div>
                    <p>Public Repos</p>
                    <p>{{ data.public_repos }}</p>
                </div>
                <div>
                    <p>Public Gists</p>
                    <p>{{ data.public_gists }}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{{ data.followers }}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{{ data.following }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    name: 'Dashboard',
    computed: {
        errorBag() {
            return this.errors;
        },
    },
    data() {
        return {
            username: '',
            errors: {},
            data: {},
        };
    },
    methods: {
        searchUser() {
            if (!this.username) return;

            axios.post('.netlify/functions/manager', { username: this.username })
            .then(({ data }) => {
                this.errors = {};
                this.data = Object.assign({}, data);
            })
            .catch(({ response }) => {
                this.data = {};
                this.$set(this.errors, 'username', response.data.message);
            });
        },
    },
}
</script>
