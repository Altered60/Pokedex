import { CaissePage } from './app.po';

describe('caisse App', function() {
  let page: CaissePage;

  beforeEach(() => {
    page = new CaissePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
