var demoButterBar = function() {
    cookieChoices.showCookieConsentBar('Your message for visitors here.',
        'close message', 'learn more', 'http://example.com');
};

var demoSplashScreen = function() {
cookieChoices.showCookieConsentDialog('Your message for visitors here.',
    'close message', 'learn more', 'http://example.com');
};

document.addEventListener('DOMContentLoaded', function(event) {
window.cookieChoices && cookieChoices.showCookieConsentBar && cookieChoices.showCookieConsentBar(
    (window.cookieOptions && cookieOptions.msg) || 'Este sitio emplea cookies de Google para prestar sus servicios, para personalizar anuncios y para analizar el tráfico. Google recibe información sobre tu uso de este sitio web. Si utilizas este sitio web, se sobreentiende que aceptas el uso de cookies.',
    (window.cookieOptions && cookieOptions.close) || 'Entendido',
    (window.cookieOptions && cookieOptions.learn) || 'Más información',
    (window.cookieOptions && cookieOptions.link) || 'https://www.blogger.com/go/blogspot-cookies');
});

