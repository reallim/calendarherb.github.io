document.addEventListener('DOMContentLoaded', function() {
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.addEventListener('click', function(e) {
        e.preventDefault();
        redirectToAppStore();
    });
});

function redirectToAppStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS 기기 감지
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = 'https://apps.apple.com/app/your-ios-app-id';
    } 
    // Android 기기 감지
    else if (/android/i.test(userAgent)) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.hermitbrain.RealLinkCalendar&hl=en-US&ah=6_v7SSBZJ7YexxF8Zx2ionNAxVU';
    } 
    // 기타 기기인 경우
    else {
        window.location.href = 'https://hermitbrain.com/asda';
    }
}
