$(document).ready(function () {
    if (!window.location.hostname.startsWith("mandoo")) return window.location.href = "http://warning.or.kr/";
    const wrapping = document.getElementById('wrapping');
    const existingContent = wrapping.innerHTML;
    const newContent = `<div class="ncgbt-container" style="position: relative; overflow: hidden; width: calc(100% + 290px); height: 270px; margin-left: -290px;"><video autoplay="autoplay" loop="loop" muted="muted" style="object-position: center -320px; position: absolute; top: 0px; left: 290px; width: 100%; height: 100%; opacity: 0.9; object-fit: cover;"><source src="https://vod.plaync.com/LineageW/20241104/bg_01.mp4" type="video/mp4"/></video><div class="ncgbt-text"><h1 class="info-title" style="margin: 0;"></h1><p style="margin-top: 20px; font-size: 1.1em; font-family: 'HeirofLightBold';">그때, 그 시절. 나의 전성기로 초대</p><p style="margin-top: 10px; font-size: 0.9em; background: linear-gradient(360deg, #fec57e 33%, #f8f4f1 47%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block; font-family: 'HeirofLightBold';">Lineage 2.0: 만두서버</p></div></div>`;
    wrapping.innerHTML = newContent + existingContent;
});
