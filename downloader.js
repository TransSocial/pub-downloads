const apps = {
    Android: "https://transsocial.software/compiled/1.0/android/",
    iOS: "https://transsocial.software/compiled/1.0/ios/",
    Windows: "https://transsocial.software/compiled/1.0/windows/",
    Mac: "https://transsocial.software/compiled/1.0/macos/",
    Linux: "https://transsocial.software/compiled/1.0/linux/"
  };
  
  const platform = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/Win/.test(userAgent)) return "Windows";
    if (/Mac/.test(userAgent)) return "Mac";
    if (/Linux/.test(userAgent)) return "Linux";
    if (/windows phone/i.test(userAgent)) return "Windows Phone";
    if (/android/i.test(userAgent)) return "Android";
    if (/iPad|iPhone|iPod/.test(userAgent)) return "iOS";
    return null;
  };
  
  const redirect = () => {
    let os = platform();
    if (os in apps) {
      location.replace(apps[os]);
    } else {
      location.replace("https://transsocial.software/compiled/1.0/windows/");
    }
  };
  
  redirect();