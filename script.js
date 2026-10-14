const button = document.getElementById("startButton");
const video = document.getElementById("myVideo");
const errorMessage = document.getElementById("errorMessage");

button.addEventListener("click", async function () {
    button.classList.add("hidden");
    video.classList.add("visible");
    errorMessage.textContent = "";

    try {
        // البحث عن ملف الفيديو داخل مستودع GitHub
        const response = await fetch(
            "https://api.github.com/repos/yassa4029-hue/appass/contents/"
        );

        if (!response.ok) {
            throw new Error("تعذر الوصول إلى ملفات الموقع.");
        }

        const files = await response.json();

        const videoFile = files.find(file =>
            file.type === "file" &&
            /\.(mp4|webm|ogg|mov|m4v)$/i.test(file.name)
        );

        if (!videoFile) {
            throw new Error("مش لاقي ملف فيديو مدعوم داخل المستودع.");
        }

        video.src = videoFile.name;
        video.load();

        await video.play();

    } catch (error) {
        errorMessage.textContent =
            error.message +
            " لو الفيديو ما اشتغلش، ابعتلي صورة اسم ملف الفيديو كامل من GitHub.";
    }
});
