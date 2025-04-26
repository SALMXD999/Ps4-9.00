// cache.js - إدارة الكاش للموقع

window.onload = function() {
    if (window.applicationCache) {
        applicationCache.addEventListener('cached', function() {
            console.log('✅ الموقع تم تخزينه مؤقتًا.');
        }, false);

        applicationCache.addEventListener('updateready', function() {
            if (applicationCache.status == window.applicationCache.UPDATEREADY) {
                applicationCache.swapCache();
                console.log('⚡ تم تحديث الكاش، الرجاء إعادة تحميل الصفحة.');
            }
        }, false);
    } else {
        console.log('❌ متصفحك لا يدعم الكاش عبر Manifest.');
    }
};
