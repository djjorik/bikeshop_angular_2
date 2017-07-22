import { BikeshopPage } from './app.po';

describe('bikeshop App', () => {
  let page: BikeshopPage;

  beforeEach(() => {
    page = new BikeshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
