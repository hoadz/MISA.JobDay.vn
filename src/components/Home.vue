<template>
<div class="containerbody">
    <div class="containerHome">
        <header-home></header-home>
        <div class="content">
            <router-view></router-view>
        </div>
        <footerHome></footerHome>
    </div>
</div>
</template>

<script>
import headerHome from './Layout/header.vue'
import footerHome from './Layout/footer.vue'
export default {
    components: {
        headerHome,
        footerHome

    }
}
</script>

<style>
@font-face {
    font-family: Google-san;
    src: url(/GoogleSans-Bold.ttf) format('woff');
    font-weight: 700;
    font-style: italic;
}

@font-face {
    font-family: Google-san;
    src: url(../FontGoogleSan/GoogleSans-BoldItalic.ttf) format('woff');
    font-weight: 700;
    font-style: italic;
}

@font-face {
    font-family: Google-san;
    src: url(../FontGoogleSan/GoogleSans-Italic.ttf) format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: Google-san;
    src: url(../FontGoogleSan/GoogleSans-Medium.ttf) format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: Google-san;
    src: url(../FontGoogleSan/GoogleSans-MediumItalic.ttf) format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: Google-san;
    src: url(../FontGoogleSan/GoogleSans-Regular.ttf) format('woff');
    font-weight: 200;
    font-style: normal;
}

* {
    font-family: Google-san, sans-serif !important;
}

* {
    font-family: 'Open Sans', sans-serif;
}

.ck-editor .ck-editor__main .ck-content {
    min-height: calc(179px - 38px);
}

.btn:focus,
.btn.focus {
    box-shadow: none;
}

input:focus,
input.focus {
    /* border: 1px solid #ff5969 !important; */
}

.containerHome {
    margin: 0 auto;
    background-color: #f0f0f0;
}

.content {
    width: calc(100% - 280px);
    margin: 0 auto;
}

.iconBackground {
    background-image: url('../assets/icon.svg');
}
</style>
