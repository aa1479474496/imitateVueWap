<template>
    <div class="error" id="error">
        <div class="error_btn">
            <a class="fl" href="/">返回首页</a>
            <a class="fr error_per" href="javascript:history.go(-1);">上一页</a>
        </div>
    </div>
</template>

<script>
    export default {
        ready: function () {
            document.getElementById('error').style.height = document.documentElement.clientHeight + 'px';
            document.getElementById('error').style.width = document.documentElement.clientWidth + 'px';
        }
    }
</script>

<style>
    a {
        text-decoration: none
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .error {
        overflow: hidden;
        width: 100%;
        height: 100%;
        background: url(../assets/images/bj_404.png) no-repeat center center;
        position: relative;
    }

    .error_btn {
        position: absolute;
        top: 550px;
        width: 260px;
        left: 50%;
        margin-left: -130px;
    }

    .error a {
        text-decoration: none;
        border: 1px solid #e0e0e0;
        display: block;
        background: white;
        text-align: center;
        color: #555;
        border-radius: 8px;
        letter-spacing: 1px;
        font-size: 18px;
        width: 118px;
        line-height: 37px;
        height: 37px;
    }

    .error a:hover {
        background: #ffa900;
        color: white;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
    }
</style>