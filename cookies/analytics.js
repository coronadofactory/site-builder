export function analytics(TAG) {

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id='+TAG;

    script.onload = e => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', TAG);
    }

    document.body.appendChild(script);

};