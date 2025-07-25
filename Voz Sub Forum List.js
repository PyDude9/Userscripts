// ==UserScript==
// @name         Voz Sub Forum List
// @version      0.1
// @description  Thêm một liên kết "Forums" vào danh sách điều hướng.
// @author       43vn
// @match        *://voz.vn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const links = [
      {title: "Phần Mềm", link: "/f/phan-mem.13/"},
      {title: "Lập Trình", link: "/f/lap-trinh-cntt.91/"},
      {title: "F17", link: "/f/chuyen-tro-linh-tinh.17/"},
      {title: "F33 (Điểm Báo)", link: "/f/diem-bao.33/"},
      {title: "Phim / Nhạc / Sách", link: "/f/phim-nhac-sach.65/"}
    ];
    function insertLink(navbar, el){
      if(!navbar || !el || !el.title || !el.link) return;
      const link = document.createElement('li');
      link.innerHTML = `
          <div class="p-navEl">
              <a href="${el.link}" class="p-navEl-link">${el.title}</a>
          </div>
      `;
      navbar.appendChild(link);
    }
    const navList = document.querySelector('.p-nav-list.js-offCanvasNavSource');
    if (navList)
        for(let i=0;i<links.length;i++) insertLink(navList, links[i]);
})();
