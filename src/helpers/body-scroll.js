class BodyScroll {
  constructor() {
    this.scrollTop = 0;
  }

  get isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  _getScrollBarWidth() {
    return window.innerWidth - document.body.clientWidth;
  }

  disable() {
    this.scrollTop = window.pageYOffset;

    const scrollbarWidth = this._getScrollBarWidth();

    document.documentElement.style.height = '100vh';

    document.body.style.position = 'fixed';
    document.body.style.marginTop = -this.scrollTop + 'px';
    document.body.style.width = '100%';
    document.body.style.overflowY =
      scrollbarWidth && !this.isMobile ? 'scroll' : '';
  }

  enable() {
    document.documentElement.style.height = '';
    document.body.style.position = '';
    document.body.style.marginTop = '';
    document.body.style.width = '';
    document.body.style.overflowY = '';

    window.scrollTo(0, this.scrollTop);
  }
}

export default BodyScroll
