<template>
    <div class="page-container" id="app">
        <md-app>

            <md-app-toolbar
                class="md-transparent md-dense"
                md-elevation="0">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-end">
                        <md-button to="/">Random Hash</md-button>
                        <md-button to="/hash-value">Hash a value</md-button>
                    </div>
                </div>
            </md-app-toolbar>

            <md-app-content class="app-content">
                <router-view/>
            </md-app-content>

        </md-app>
    </div>
</template>

<style lang="scss" scoped>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
    }

    .md-app {
        height: 100vh;
    }

    .router-link-exact-active {
        border-bottom: 1px solid black;
    }

</style>
