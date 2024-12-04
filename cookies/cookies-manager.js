
class Cookies {

    constructor() {
      this.els = [];
    }

    add(el) {
        this.els.push(el);
    }

    addPopup(popup) {
        this.openPopup=popup.open;
        const THIS = this;
        popup.on('accept', function() {THIS.accept();})
    }

    start() {
        if (this._shouldDisplayConsent()) {
            this.openPopup();
        } else {
            this.accepted();
        } 
    }

    accept() {
        this._saveUserPreference();
        this.accepted();
    }

    accepted() {
        for (const el of this.els) {
            el();
        }
    }

    _shouldDisplayConsent() {
        const cookieName = 'cookie-accepted';
        return !document.cookie.match(new RegExp(cookieName + '=([^;]+)'));
    }

    _saveUserPreference() {
        const cookieName = 'cookie-accepted';
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        document.cookie = cookieName + '=true; expires=' + expiryDate.toGMTString();
    }
    
}


export function cookiesFactory() {

    return new Cookies();

}

