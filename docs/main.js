// load js script all.js
function loadScript(path) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement("script");
        script.src = path;
        script.onload = () => {
            resolve(script);
        }
        script.onerror = () => {
            reject(new Error("The script has failed to load"));
        }
        document.body.append(script);
    });
}
let promise = loadScript("../all.js");
promise.then(
    script => alert(`${script.src} загружен`),
    error => alert(`Ошибка ${error.messsage}`)
);
// PROJECT-SECTION
