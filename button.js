let userAgent = navigator.userAgent || navigator.vendor || window.opera;
document.getElementById("dlbutton").textContent="Download For Windows!";
if (/Win/.test(userAgent)) document.getElementById("dlbutton").textContent="Download For Windows!";
if (/Mac OS X/.test(userAgent)) document.getElementById("dlbutton").textContent="Download For MacOS!";
if (/Linux/.test(userAgent)) document.getElementById("dlbutton").textContent="Download For (Debian) Linux!";
if (/android/i.test(userAgent)) document.getElementById("dlbutton").textContent="Download For Android!";
if (/like Mac/.test(userAgent)) document.getElementById("dlbutton").textContent="Download For iOS!";