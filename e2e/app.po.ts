export class AngularServicesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('services-di-root h1')).getText();
  }
}
