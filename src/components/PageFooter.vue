<template>
    <div class="page-footer">
        <div class="page-footer__wrapper">
            <div class="page-footer__top">
                <ul>
                    <li><a href="">广告服务</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">合作伙伴</a></li>
                    <li><a href="">法律声明</a></li>
                    <li><a href="">帮助中心</a></li>
                    <li><a href="">关于我们</a></li>
                </ul>
            </div>
            <div class="page-footer__bottom">
                <span>Copyright © 2018 成都零起点科技. All Rights Reserved.</span>               
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PageFooter"
}
</script>
<style lang="less" scoped>
    .page-footer {
        &__wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
        }
        &__top {
            ul {
                li {
                    position: relative;
                    display: inline-block;
                    margin-left: 30px;
                    &::after {
                        content: "";
                        position: absolute;
                        width: 2px;
                        height: 100%;
                        right: -15px;
                        background-color: #ccc;
                    }
                    &:last-child {
                        &::after {
                            display: none;
                        }
                    }
                    a {
                        color: #333;
                    }
                }
            }
        }
        &__bottom {
            
        }
    }
</style>

