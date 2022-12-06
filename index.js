const apps = {
    Android: "https://transsocial.software/compiled/1.0/android/",
    iOS: "https://transsocial.software/compiled/1.0/ios/",
    Windows: "https://transsocial.software/compiled/1.0/windows/",
    Mac: "https://transsocial.software/compiled/1.0/macos/",
    Linux: "https://transsocial.software/compiled/1.0/linux/"
  };
  
  const platform = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) return "Windows Phone";
    if (/android/i.test(userAgent)) return "Android";
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
    if (navigator.appVersion.indexOf("Win")!=-1) return "Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) return "Mac";;
    if (navigator.appVersion.indexOf("Linux")!=-1) return "Linux";
    return null;
  };
  
  const redirect = () => {
    let os = platform();
    if (os in apps) {
      location.replace(apps[os]);
    } else {
      const message = document.querySelector(".message");
      message.innerText = "Your OS is not supported currently, or you may need to update your browser.";
    }
  };
  
  redirect();