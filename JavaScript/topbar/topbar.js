/*
 * @Description: 处理相应状态
 * @version: 
 * @Author: LinkMoe
 * @Date: 2024-11-26 17:51:08
 * @LastEditors: LinkMoe
 * @LastEditTime: 2024-11-27 21:42:12
 */

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('dynamicHeader');
    const sidebarBtn = document.querySelector('.sidebar-btn');
    const drawerMenu = document.querySelector('.drawer-menu');

    // 监听滚动事件
    window.addEventListener('scroll', function() {
        const scrollHeight = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;

        // 动态调整 header 背景和模糊效果
        if (scrollHeight > 0) {
            header.style.background = 'rgba(255, 255, 255, 0.9)'; // 增加背景不透明度
            header.style.backdropFilter = 'blur(10px)'; // 增加模糊效果
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.5)'; // 减少背景不透明度
            header.style.backdropFilter = 'blur(5px)'; // 减少模糊效果
        }
    });

    // 点击抽屉按钮
    sidebarBtn.addEventListener('click', function() {
        drawerMenu.style.display = drawerMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});