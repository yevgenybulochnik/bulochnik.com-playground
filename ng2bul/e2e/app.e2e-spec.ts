import { Ng2bulPage } from './app.po';

describe('ng2bul App', function() {
  let page: Ng2bulPage;

  beforeEach(() => {
    page = new Ng2bulPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
