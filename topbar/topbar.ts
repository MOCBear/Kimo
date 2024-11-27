/*
 * @Description: 实现顶栏的动态模糊效果
 * @version: 
 * @Author: LinkMoe
 * @Date: 2024-11-26 17:51:08
 * @LastEditors: LinkMoe
 * @LastEditTime: 2024-11-26 18:13:44
 */
// app.ts
window.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('dynamicHeader') as HTMLElement;
    const drawerBtn = document.querySelector('.drawer-btn') as HTMLElement;
    const drawerMenu = document.querySelector('.drawer-menu') as HTMLElement;

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        const scrollHeight = window.pageYOffset;
        const headerHeight = header.offsetHeight;
        const maxHeaderHeight = 120; // 最大高度
        const expandFactor = scrollHeight / (document.body.scrollHeight / 2); // 展开比例

        // 动态调整 header 高度
        header.style.height = `${Math.min(headerHeight + expandFactor * (maxHeaderHeight - headerHeight), maxHeaderHeight)}px`;

        // 显示或隐藏抽屉按钮
        if (expandFactor < 0.5) {
            drawerBtn.style.display = 'block';
        } else {
            drawerBtn.style.display = 'none';
        }
    });

    // 点击抽屉按钮
    drawerBtn.addEventListener('click', () => {
        drawerMenu.style.left = drawerMenu.style.left === '0px' ? '-100%' : '0px';
    });
});
