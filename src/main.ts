import './style.css'

document.querySelector('#app')!.innerHTML = `
<div class="app">

    <h1>🚀 MATRIX MINI APP</h1>

    <input
        id="url"
        type="text"
        placeholder="ألصق رابط الفيديو هنا..."
    />

    <button id="download">
        📥 تحميل الفيديو
    </button>

</div>
`;

document.getElementById("download")?.addEventListener("click", () => {

    const url = (document.getElementById("url") as HTMLInputElement).value;

    if (!url) {
        alert("❌ ألصق الرابط أولاً");
        return;
    }

    alert("الرابط هو:\n\n" + url);

});
