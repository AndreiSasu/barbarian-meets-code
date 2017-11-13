import { BarbarianMeetsCodePage } from './app.po';

describe('barbarian-meets-code App', function() {
  let page: BarbarianMeetsCodePage;

  beforeEach(() => {
    page = new BarbarianMeetsCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
