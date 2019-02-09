<template>
    <div class="container">
        <section class="hero is-light">
            <div class="hero-body">
                <p>Enter GitHub Username</p>
                <h2 class="subtitle">
                    <div class="field has-addons">
                        <div class="control is-expanded" :class="{ 'is-loading': usernameLoading }">
                            <input type="text" class="input" placeholder="Username" v-model="username" @keydown.enter="searchUser"><br><br>
                        </div>
                        <div class="control">
                            <button class="button is-info" @click="searchUser">
                            Search
                            </button>
                        </div>
                    </div>
                    <p v-if="errorBag.username">{{ errors.username }}</p>
                </h2>
            </div>
        </section>

        <div v-if="user.id">
            <div class="content-header has-text-centered">
                <div class="is-flex is-horizontal-center">
                    <figure class="image is-128x128">
                        <img class="is-rounded" :src="user.avatar_url" :alt="user.name" width="150px" height="150px">
                    </figure>
                </div>
                <h2>{{user.name}}</h2>

                <p><a :href="user.html_url" target="_blank" rel="noopener noreferrer">@{{ user.login }}</a></p>
                <p><a :href="user.blog">{{ user.blog }}</a></p>
                <p>Joined At: {{ joinedAt }}</p>
            </div>

            <nav class="box level is-mobile">
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Public Repos</p>
                    <p class="title">{{ user.public_repos }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Public Gists</p>
                    <p class="title">{{ user.public_gists }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Followers</p>
                    <p class="title">{{ user.followers }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Following</p>
                    <p class="title">{{ user.following }}</p>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { format } from 'date-fns';

export default {

    name: 'Dashboard',
    computed: {
        errorBag() {
            return this.errors;
        },
        joinedAt() {
            return format(this.user.created_at, 'MMMM Do, YYYY');
        },
    },
    data() {
        return {
            username: '',
            usernameLoading: false,
            errors: {},
            user: {},
            repos: [],
        };
    },
    methods: {
        searchUser() {
            if (!this.username) return;
            this.usernameLoading = true;

            axios.post('.netlify/functions/user', { username: this.username })
            .then(({ data }) => {
                this.errors = {};
                this.usernameLoading = false;
                this.user = Object.assign({}, data);

                this.fetchRepos(this.username);
            })
            .catch(({ response }) => {
                this.user = {};
                this.usernameLoading = false;
                this.$set(this.errors, 'username', response.data.message);
            });
        },
        fetchRepos(username) {
            axios.post('.netlify/functions/repos', { username: this.username })
            .then(({ data }) => {
                this.repos = Object.assign({}, data);
            })
            .catch(({ response }) => {
            });
        },
    },
}
</script>

<style scoped>
    .is-horizontal-center {
      justify-content: center;
    }
    .content-header {
        margin: 20px;
    }
</style>
